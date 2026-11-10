"""Download the real photo assets used by the template collection, once."""
import concurrent.futures
import json
import sys
from pathlib import Path
import urllib.request

PHOTOS = {
    'living': '1600210492486-724fe5c67fb0', 'bedroom': '1611892440504-42a792e24d32',
    'dining': '1617806118233-18e1de247200', 'sofa': '1555041469-a586c61ea9bc',
    'chair': '1592078615290-033ee584e267', 'office': '1497366811353-6870744d04b2',
    'villa': '1600596542815-ffad4c1539a9', 'home': '1600607687939-ce8a6c25118c',
    'estate': '1600047509807-ba8f99d2cdde', 'architecture': '1600585154340-be6161a56a0c',
    'car': '1492144534655-ae79c964c9d7', 'car-road': '1494976388531-d1058494cdd8',
    'sports-car': '1503376780353-7e6692767b70', 'car-city': '1549317661-bd32c8ce0db2',
    'bread': '1509440159596-0249088772ff', 'cake': '1464349095431-e9a21285b5f3',
    'croissant': '1555507036-ab1f4038808a', 'cookies': '1499636136210-6f4ee915583e',
    'breakfast': '1484723091739-30a097e8f929', 'chef': '1556911220-bff31c812dba',
    'restaurant': '1517248135467-4c7edcad34c4', 'salad': '1546069901-ba9599a7e63c',
    'pasta': '1473093295043-cdd812d0e601', 'steak': '1603072996757-90fef9cf9e50',
    'pizza': '1513104890138-7c749659a591', 'doctor': '1559839734-2b71ea197ec2',
    'hospital': '1519494026892-80bbd2d6fd0d', 'medical': '1576091160399-112ba8d25d1d',
    'care': '1584515933487-779824d29309', 'construction': '1504307651254-35680f356dfd',
    'roof': '1635424824849-1b09bdcc55b1', 'tools': '1621905252507-b35492cc74b4',
    'cleaning': '1581578731548-c64695cc6952', 'campus': '1541339907198-e08756dedf3f',
    'classroom': '1503676260728-1c00da094a0b', 'salon': '1562322140-8baeececf3df',
    'beauty': '1522337360788-8b13dee7a37e', 'barber': '1503951914875-452162b0f3f1',
    'shop': '1441986300917-64674bd600d8', 'backpack': '1553062407-98eeb64c6a62',
    'farm': '1500382017468-9049fed747ef', 'poultry': '1774361373612-ad86786bfa80',
    'mountain': '1464822759023-fed622ff2c3b', 'travel': '1469854523086-cc02fe5d8800',
    'kyoto': '1493976040374-85c8e12f0c0e', 'lisbon': '1555881400-74d7acaacd8b',
    'concert': '1492684223066-81342ee5ff30', 'music': '1516280440614-37939bbacd81',
    'art': '1579783902614-a3fb3927b6a5', 'gallery': '1577083552431-6e5fd01aa342',
    'studio': '1497366754035-f200968a6e72', 'code': '1498050108023-c5249f4df085',
    'finance': '1460925895917-afdab827c52f', 'running': '1552674605-db6ffd4facb5',
    'space': '1446776811953-b23d57bd21aa', 'forest': '1441974231531-c6227db76b6e',
    'ocean': '1518837695005-2083093ee35b', 'spa': '1540555700478-4be289fbecef',
    'garage': '1486262715619-67b85e0b08d3',
}
root = Path(__file__).resolve().parents[1] / 'public' / 'photos'
root.mkdir(parents=True, exist_ok=True)
def fetch(pair):
    name, photo_id = pair
    target = root / f'{name}.jpg'
    url = f'https://images.unsplash.com/photo-{photo_id}?auto=format&fit=crop&w=1400&q=82&fm=jpg'
    if name not in sys.argv[1:] and target.exists() and target.stat().st_size > 2000:
        return {'name': name, 'url': url, 'ok': True}
    try:
        request = urllib.request.Request(url, headers={'User-Agent': 'UIFoundry image preparation'})
        with urllib.request.urlopen(request, timeout=20) as response:
            content = response.read()
        if len(content) < 2000 or not content.startswith(b'\xff\xd8'):
            raise ValueError('Expected a JPEG photograph')
        target.write_bytes(content)
        return {'name': name, 'url': url, 'ok': True}
    except Exception as error:
        return {'name': name, 'url': url, 'ok': False, 'error': str(error)}
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
    results = list(executor.map(fetch, PHOTOS.items()))
(root / 'sources.json').write_text(json.dumps(results, indent=2), encoding='utf-8')
failed = [item for item in results if not item['ok']]
print(f"Downloaded {len(results) - len(failed)}/{len(results)} real photographs.")
for item in failed:
    print(item['name'] + ': ' + item['error'])
raise SystemExit(1 if failed else 0)
