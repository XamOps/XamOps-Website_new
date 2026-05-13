import { useRef, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Nav from './components/Nav';
import Footer from './components/Footer';

const HomePage         = lazy(() => import('./pages/HomePage'));
const PlatformPage     = lazy(() => import('./pages/platform/PlatformPage'));
const SpotPage         = lazy(() => import('./pages/platform/SpotPage'));
const DiskPage         = lazy(() => import('./pages/platform/DiskPage'));
const DBOpsPage        = lazy(() => import('./pages/platform/DBOpsPage'));
const SecOpsPage       = lazy(() => import('./pages/platform/SecOpsPage'));
const CostPage         = lazy(() => import('./pages/platform/CostPage'));
const SREPage          = lazy(() => import('./pages/platform/SREPage'));
const DevOpsPage       = lazy(() => import('./pages/solutions/DevOpsPage'));
const FinOpsPage       = lazy(() => import('./pages/solutions/FinOpsPage'));
const SRESolutionPage  = lazy(() => import('./pages/solutions/SRESolutionPage'));
const PricingPage      = lazy(() => import('./pages/PricingPage'));
const AboutPage        = lazy(() => import('./pages/AboutPage'));
const DemoPage         = lazy(() => import('./pages/DemoPage'));
const BlogPage         = lazy(() => import('./pages/BlogPage'));
const ContactPage      = lazy(() => import('./pages/ContactPage'));
const NotFoundPage     = lazy(() => import('./pages/NotFoundPage'));

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const location = useLocation();
  const firstRun = useRef(true);

  useEffect(() => {
    if (!firstRun.current) {
      ScrollTrigger.getAll().forEach(t => t.kill());
    }
    firstRun.current = false;
    window.scrollTo(0, 0);
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 250);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [location.pathname]);

  return (
    <>
      <Nav />
      <main key={location.pathname}>
        <Suspense fallback={null}>
        <Routes>
          <Route path="/"                          element={<HomePage />} />
          <Route path="/platform"                  element={<PlatformPage />} />
          <Route path="/platform/spot-automation"  element={<SpotPage />} />
          <Route path="/platform/disk-rightsizing" element={<DiskPage />} />
          <Route path="/platform/dbops"            element={<DBOpsPage />} />
          <Route path="/platform/secops"           element={<SecOpsPage />} />
          <Route path="/platform/cost-analytics"   element={<CostPage />} />
          <Route path="/platform/sre"              element={<SREPage />} />
          <Route path="/solutions"                 element={<PlatformPage />} />
          <Route path="/solutions/devops"          element={<DevOpsPage />} />
          <Route path="/solutions/finops"          element={<FinOpsPage />} />
          <Route path="/solutions/sre"             element={<SRESolutionPage />} />
          <Route path="/pricing"                   element={<PricingPage />} />
          <Route path="/about"                     element={<AboutPage />} />
          <Route path="/demo"                      element={<DemoPage />} />
          <Route path="/blog"                      element={<BlogPage />} />
          <Route path="/contact"                   element={<ContactPage />} />
          <Route path="*"                          element={<NotFoundPage />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
