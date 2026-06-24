import { useRef, useEffect, useLayoutEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Nav from './components/Nav';
import Footer from './components/Footer';
import MetaManager from './components/MetaManager';
import DemoModal from './components/DemoModal';
import { DemoModalCtx } from './lib/demoModal';

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
const BlogPage              = lazy(() => import('./pages/BlogPage'));
const AWSCostSpikePage      = lazy(() => import('./pages/blog/AWSCostSpikePage'));
const SpotInstancesPage     = lazy(() => import('./pages/blog/SpotInstancesPage'));
const DiskRightsizingPage   = lazy(() => import('./pages/blog/DiskRightsizingPage'));
const WhatIsXamOpsPage              = lazy(() => import('./pages/blog/WhatIsXamOpsPage'));
const CloudSecurityAutomationPage   = lazy(() => import('./pages/blog/CloudSecurityAutomationPage'));
const FinOpsPracticesPage                   = lazy(() => import('./pages/blog/FinOpsPracticesPage'));
const CloudCostOptimizationStrategiesPage   = lazy(() => import('./pages/blog/CloudCostOptimizationStrategiesPage'));
const CustomersPage         = lazy(() => import('./pages/CustomersPage'));
const CareersPage           = lazy(() => import('./pages/CareersPage'));
const SecurityPage          = lazy(() => import('./pages/SecurityPage'));
const ContactPage           = lazy(() => import('./pages/ContactPage'));
const NotFoundPage          = lazy(() => import('./pages/NotFoundPage'));

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const location = useLocation();
  const [demoOpen, setDemoOpen] = useState(false);

  useLayoutEffect(() => {
    // Kill stale triggers before scroll reset so GSAP can't jump position
    ScrollTrigger.getAll().forEach(t => t.kill());
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setDemoOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  return (
    <DemoModalCtx.Provider value={{ open: demoOpen, setOpen: setDemoOpen }}>
      <DemoModal />
      <MetaManager />
      <Nav />
      <main key={location.pathname}>
        <Suspense fallback={<div style={{minHeight:'200vh'}}/>}>
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
          <Route path="/blog"                                  element={<BlogPage />} />
          <Route path="/blog/aws-cost-spike-investigation"     element={<AWSCostSpikePage />} />
          <Route path="/blog/ec2-spot-instances-production"   element={<SpotInstancesPage />} />
          <Route path="/blog/disk-rightsizing-ebs"           element={<DiskRightsizingPage />} />
          <Route path="/blog/what-is-xamops"                  element={<WhatIsXamOpsPage />} />
          <Route path="/blog/cloud-security-automation"      element={<CloudSecurityAutomationPage />} />
          <Route path="/blog/finops-practices-multi-cloud"          element={<FinOpsPracticesPage />} />
          <Route path="/blog/cloud-cost-optimization-strategies"   element={<CloudCostOptimizationStrategiesPage />} />
          <Route path="/customers"                 element={<CustomersPage />} />
          <Route path="/careers"                   element={<CareersPage />} />
          <Route path="/security"                  element={<SecurityPage />} />
          <Route path="/contact"                   element={<ContactPage />} />
          <Route path="*"                          element={<NotFoundPage />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
    </DemoModalCtx.Provider>
  );
}
