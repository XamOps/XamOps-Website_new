import { useRef, useEffect, useLayoutEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Nav from './components/Nav';
import Footer from './components/Footer';
import MetaManager from './components/MetaManager';
import DemoModal from './components/DemoModal';
import { DemoModalCtx } from './lib/demoModal';
import { GROUPS } from './lib/platform';

const HomePage         = lazy(() => import('./pages/HomePage'));
const PlatformPage     = lazy(() => import('./pages/platform/PlatformPage'));
const GroupPage        = lazy(() => import('./pages/platform/GroupPage'));
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
const DevOpsVsTraditionalITPage             = lazy(() => import('./pages/blog/DevOpsVsTraditionalITPage'));
const SREAutomationNoidaPage                = lazy(() => import('./pages/blog/SREAutomationNoidaPage'));
const FinOpsCloudCostOptimizationBenefitsPage = lazy(() => import('./pages/blog/FinOpsCloudCostOptimizationBenefitsPage'));
const SREServicesIndiaPage                  = lazy(() => import('./pages/blog/SREServicesIndiaPage'));
const CustomersPage         = lazy(() => import('./pages/CustomersPage'));
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
    if (!location.hash) window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0);
    setDemoOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname, location.hash]);

  // Anchor links into long pages (e.g. /platform#finops) — the target may be
  // inside a lazy chunk, so retry briefly until it mounts.
  useEffect(() => {
    if (!location.hash) return;
    const id = decodeURIComponent(location.hash.slice(1));
    let tries = 0;
    const tick = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (++tries < 40) requestAnimationFrame(tick);
    };
    tick();
  }, [location.pathname, location.hash]);

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
          {/* Capability group pages, generated from the catalogue */}
          {GROUPS.map(g => (
            <Route key={g.id} path={`/platform/${g.slug}`} element={<GroupPage id={g.id} />} />
          ))}
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
          <Route path="/blog/devops-automation-platform-vs-traditional-it-operations" element={<DevOpsVsTraditionalITPage />} />
          <Route path="/blog/sre-automation-platform-noida" element={<SREAutomationNoidaPage />} />
          <Route path="/blog/benefits-of-finops-services-cloud-cost-optimization" element={<FinOpsCloudCostOptimizationBenefitsPage />} />
          <Route path="/blog/sre-services-india" element={<SREServicesIndiaPage />} />
          <Route path="/customers"                 element={<CustomersPage />} />
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
