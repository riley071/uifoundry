import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import DesignDetail from './pages/DesignDetail';
import Components from './pages/Components';
import MotionLab from './pages/MotionLab';
import Pricing from './pages/Pricing';
import Preview from './pages/Preview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Live design previews – no chrome */}
        <Route path="/preview/:slug" element={<Preview />} />

        {/* Main platform */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/design/:slug" element={<DesignDetail />} />
          <Route path="/components" element={<Components />} />
          <Route path="/motion" element={<MotionLab />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
