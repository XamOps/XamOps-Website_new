import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from './Icon.jsx';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { tag: '01 · Spot Automation',     title: 'Compute, 70% off.',      body: 'Replace on-demand with spot across AWS ASGs, GCP MIGs and Azure VMSS. Per-instance SKU rules, eviction handling, and a guaranteed minimum of regular VMs.', stat: ['$1.2M', 'saved last month'],          accent: 'terracotta' },
  { tag: '02 · Disk Rightsizing',    title: 'Pay for what you use.',  body: 'Continuous volume monitoring, recommendation engine, and automated resize with safe filesystem expansion. EBS, Persistent Disk, Managed Disk.',           stat: ['38%',   'avg storage reduction'],     accent: 'ochre' },
  { tag: '03 · DBOps',               title: 'Databases on autopilot.',body: 'Automated scaling, backup verification, performance tuning and patch windows for RDS, Cloud SQL, Cosmos DB and beyond.',                                  stat: ['0',     'manual pages last 30 days'], accent: 'moss' },
  { tag: '04 · SecOps',              title: 'Security at deploy speed.', body: 'Continuous CIS posture checks, drift detection and automated remediation that runs alongside your CI/CD, not after the fact.',                       stat: ['4m 12s','mean time to remediation'],  accent: 'terracotta' },
  { tag: '05 · Cost Analytics',      title: 'Spreadsheets, retired.', body: 'Real-time savings dashboards, daily aggregations, and reservation/commitment coverage for RIs, CUDs and Savings Plans.',                                stat: ['80%',   'reservation coverage'],      accent: 'ochre' },
  { tag: '06 · SRE Investigation',   title: 'Alert to root cause.',   body: 'AI-assisted log triage, anomaly detection and an investigation timeline that connects metrics, logs and traces across your stack.',                     stat: ['11×',   'faster RCAs'],               accent: 'moss' },
  { tag: '+ Coming soon',            title: 'Agentic SRE.',           body: 'A fully autonomous SRE agent that investigates, diagnoses and resolves incidents without paging anyone. Joining XamOps in Q3.',                          stat: ['Q3',    'private alpha'],             accent: 'ink' },
];

const accentColor = {
  terracotta: 'var(--terracotta)',
  ochre: 'var(--ochre)',
  moss: 'var(--moss)',
  ink: 'var(--ink)',
};

export default function HorizontalScroll() {
  const sectionRef = useRef();
  const trackRef = useRef();
  const headRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;
      const getDistance = () => track.scrollWidth - window.innerWidth + 80;

      gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => '+=' + getDistance(),
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      const bar = section.querySelector('.hs-progress > i');
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => '+=' + getDistance(),
        scrub: true,
        onUpdate: (self) => { if (bar) bar.style.transform = `scaleX(${self.progress})`; },
      });

      gsap.from(headRef.current.querySelectorAll('[data-fade]'), {
        y: 24, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: section, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="sec-light relative h-screen overflow-hidden">
      <div className="h-full flex flex-col">
        <div ref={headRef} className="max-w-[1240px] mx-auto px-6 md:px-10 pt-24 pb-8 w-full">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div data-fade className="sec-label mb-4">[ 02 ] Capabilities</div>
              <h2 data-fade className="serif text-[clamp(34px,5vw,64px)] leading-[1.02] max-w-[20ch]">
                Six automations. <span style={{ color: 'var(--terracotta)' }}>One control plane.</span>
              </h2>
            </div>
            <div data-fade className="text-[14px]" style={{ color: 'var(--olive)' }}>
              <div className="mono text-[11px] uppercase tracking-widest" style={{ color: 'var(--olive-2)' }}>Scroll →</div>
              Translate vertical scroll into horizontal motion.
            </div>
          </div>
          <div className="hs-progress mt-6 h-px w-full overflow-hidden" style={{ background: 'var(--rule)' }}>
            <i className="block h-px w-full origin-left" style={{ transform: 'scaleX(0)', background: 'var(--terracotta)' }} />
          </div>
        </div>

        <div className="flex-1 flex items-center overflow-hidden">
          <div ref={trackRef} className="flex gap-6 px-6 md:px-10 will-change-transform" style={{ paddingRight: '40vw' }}>
            {cards.map((c, i) => (
              <div key={i} className="hs-card relative ring-soft rounded-3xl overflow-hidden hcard" style={{ background: 'var(--ivory)' }}>
                <div className="absolute inset-x-0 top-0 h-1" style={{ background: accentColor[c.accent] }} />
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <div className="eyebrow">{c.tag}</div>
                    <span className="mono text-[11px]" style={{ color: 'var(--olive)' }}>0{i + 1}/{cards.length}</span>
                  </div>
                  <h3 className="serif text-[44px] leading-[1.05] mt-8 max-w-[14ch]">{c.title}</h3>
                  <p className="mt-4 text-[15px] leading-[1.6]" style={{ color: 'var(--olive)' }}>{c.body}</p>
                  <div className="mt-auto pt-6">
                    <div className="rounded-2xl p-5 mb-4" style={{ background: 'var(--parchment)', boxShadow: '0 0 0 1px var(--rule)' }}>
                      <div className="big-num text-[44px] leading-none" style={{ color: accentColor[c.accent] }}>{c.stat[0]}</div>
                      <div className="text-[13px] mt-1" style={{ color: 'var(--olive)' }}>{c.stat[1]}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <a href="#" className="text-[14px] inline-flex items-center gap-2 ulink">Read deep-dive <Icon.Arrow width="14" height="14" /></a>
                      <span className="mono text-[11px]" style={{ color: 'var(--olive)' }}>aws · gcp · azure</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
