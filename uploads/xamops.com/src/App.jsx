import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { RouterProvider, useRouter } from './router.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './components/HomePage.jsx';
import {
  PlatformPage, SpotPage, DiskPage, DBOpsPage, SecOpsPage, CostPage, SREPage,
  DevOpsPage, FinOpsPage, SRESolutionPage,
  PricingPage, AboutPage, DemoPage, BlogPage, ContactPage, NotFoundPage,
} from './components/Pages.jsx';

gsap.registerPlugin(ScrollTrigger);

const ROUTES = {
  '/':                          HomePage,
  '/platform':                  PlatformPage,
  '/platform/spot-automation':  SpotPage,
  '/platform/disk-rightsizing': DiskPage,
  '/platform/dbops':            DBOpsPage,
  '/platform/secops':           SecOpsPage,
  '/platform/cost-analytics':   CostPage,
  '/platform/sre':              SREPage,
  '/solutions':                 PlatformPage,    // overview reuse — ok
  '/solutions/devops':          DevOpsPage,
  '/solutions/finops':          FinOpsPage,
  '/solutions/sre':             SRESolutionPage,
  '/pricing':                   PricingPage,
  '/about':                     AboutPage,
  '/demo':                      DemoPage,
  '/blog':                      BlogPage,
  '/contact':                   ContactPage,
};

function RoutedApp() {
  const { path } = useRouter();
  const Page = ROUTES[path] || NotFoundPage;

  useEffect(() => {
    // Recalculate ScrollTrigger after each route change
    ScrollTrigger.getAll().forEach((t) => t.kill());
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 200);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [path]);

  return (
    <>
      <Nav />
      <main key={path}><Page /></main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <RoutedApp />
    </RouterProvider>
  );
}
