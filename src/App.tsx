import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import DesignDetail from './pages/DesignDetail';
import MotionLab from './pages/MotionLab';
import Pricing from './pages/Pricing';
import Preview from './pages/Preview';

const Components = lazy(() => import('./pages/Components'));
const ComponentPreview = lazy(() => import('./pages/ComponentPreview'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Live design previews – no chrome */}
        <Route path="/preview/:slug" element={<Preview />} />
        <Route path="/components/preview/:id" element={<Suspense fallback={<p role="status" className="p-6">Loading component preview…</p>}><ComponentPreview /></Suspense>} />

        {/* Main platform */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/design/:slug" element={<DesignDetail />} />
          <Route path="/components" element={<Suspense fallback={<p role="status" className="mx-auto max-w-7xl px-6 py-16 text-slate-600">Loading the component catalog…</p>}><Components /></Suspense>} />
          <Route path="/motion" element={<MotionLab />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
