import { useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import PlatformPage from './pages/platform/PlatformPage';
import SpotPage from './pages/platform/SpotPage';
import DiskPage from './pages/platform/DiskPage';
import DBOpsPage from './pages/platform/DBOpsPage';
import SecOpsPage from './pages/platform/SecOpsPage';
import CostPage from './pages/platform/CostPage';
import SREPage from './pages/platform/SREPage';
import DevOpsPage from './pages/solutions/DevOpsPage';
import FinOpsPage from './pages/solutions/FinOpsPage';
import SRESolutionPage from './pages/solutions/SRESolutionPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import DemoPage from './pages/DemoPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

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
      </main>
      <Footer />
    </>
  );
}
