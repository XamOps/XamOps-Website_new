import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Icon } from '../components/Icons';
import useReveal from '../hooks/useReveal';
import FeatureSection from '../components/shared/FeatureSection';
import { GridScan } from '../components/GridScan/GridScan';
import SpotVisual from '../components/visuals/SpotVisual';
import DiskVisual from '../components/visuals/DiskVisual';
import DBVisual from '../components/visuals/DBVisual';
import SecOpsVisual from '../components/visuals/SecOpsVisual';
import CostVisual from '../components/visuals/CostVisual';
import SREVisual from '../components/visuals/SREVisual';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const ref = useRef();
  const bgRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-eyebrow', { y: 14, opacity: 0, duration: 0.7 })
        .to('.hero-line', { y: '0%', duration: 1.1, stagger: 0.09 }, '-=0.4')
        .from('.hero-sub', { y: 16, opacity: 0, duration: 0.8 }, '-=0.6')
        .from('.hero-ctas > *', { y: 14, opacity: 0, duration: 0.7, stagger: 0.08 }, '-=0.5')
        .from('.hero-strip', { y: 20, opacity: 0, duration: 0.8 }, '-=0.4')
        .from('.hero-floats > *', { y: 14, opacity: 0, duration: 0.7, stagger: 0.08 }, '-=0.6');

      gsap.to(bgRef.current, {
        yPercent: 18, ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="sec-light relative grain pt-[120px] pb-10 overflow-hidden">
      <div ref={bgRef} aria-hidden className="absolute inset-0 pointer-events-none">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#1f2430"
          gridScale={0.1}
          scanColor="#7c5cff"
          scanOpacity={0.18}
          enablePost
          bloomIntensity={0.18}
          chromaticAberration={0.001}
          noiseIntensity={0.005}
          scanDuration={2.5}
          scanDelay={1.5}
          scanGlow={0.3}
          scanSoftness={2}
        />
        <div className="absolute -top-20 -left-20 w-[480px] h-[480px] rounded-full pointer-events-none"
             style={{background:'radial-gradient(closest-side, rgba(124,92,255,0.12), transparent 70%)'}}/>
        <div className="absolute top-40 right-0 w-[520px] h-[520px] rounded-full pointer-events-none"
             style={{background:'radial-gradient(closest-side, rgba(43,212,168,0.06), transparent 70%)'}}/>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative">
        <div className="hero-eyebrow eyebrow flex items-center gap-2 mb-8">
          <span className="live-dot"/> Now in private beta · v1.0
        </div>

        <h1 className="serif text-[clamp(48px,8vw,116px)] leading-[0.95] tracking-tight max-w-[14ch]">
          <div className="reveal-line"><span className="hero-line">The Cognitive</span></div>
          <div className="reveal-line"><span className="hero-line" style={{color:'var(--terracotta)'}}>Cloud Operating</span></div>
          <div className="reveal-line"><span className="hero-line">System.</span></div>
        </h1>

        <p className="hero-sub mt-8 text-[18px] md:text-[20px] leading-[1.55] max-w-[640px]" style={{color:'var(--olive)'}}>
          Automate cloud operations across <span style={{color:'var(--ink)'}}>AWS</span>, <span style={{color:'var(--ink)'}}>GCP</span>, and <span style={{color:'var(--ink)'}}>Azure</span>. Cut costs by up to 70%. Eliminate toil. Move faster than your infrastructure can drift.
        </p>

        <div className="hero-ctas mt-10 flex flex-wrap items-center gap-3">
          <Link to="/demo" className="btn-primary">Book a demo <Icon.Arrow width="14" height="14"/></Link>
          <Link to="/demo" className="btn-dark">Sign up free</Link>
        </div>

        <div className="hero-strip mt-16 ring-soft rounded-[28px] overflow-hidden" style={{background:'var(--ivory)'}}>
          <div className="flex items-center justify-between px-5 py-3 border-b" style={{borderColor:'var(--rule)'}}>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{background:'#ff6b6b'}}/>
              <span className="w-2.5 h-2.5 rounded-full" style={{background:'#f0b341'}}/>
              <span className="w-2.5 h-2.5 rounded-full" style={{background:'#2bd4a8'}}/>
              <span className="ml-3 mono text-[12px]" style={{color:'var(--olive)'}}>console.xamops.com / overview</span>
            </div>
            <div className="mono text-[11px]" style={{color:'var(--olive)'}}>aws · gcp · azure</div>
          </div>
          <div className="grid grid-cols-12 gap-px" style={{background:'var(--rule)'}}>
            <div className="col-span-12 md:col-span-3 p-6" style={{background:'var(--ivory)'}}>
              <div className="eyebrow">Monthly savings</div>
              <div className="serif text-[56px] leading-none mt-3">$1.84M</div>
              <div className="mt-2 text-[13px]" style={{color:'var(--olive)'}}>+18.2% vs last month</div>
              <div className="mt-6 space-y-2.5">
                {[
                  ['Spot Automation', 68],
                  ['Disk Rightsizing', 22],
                  ['Reservation Coverage', 7],
                  ['DBOps', 3],
                ].map(([n, v]) => (
                  <div key={n}>
                    <div className="flex items-center justify-between text-[12px]">
                      <span>{n}</span><span className="mono" style={{color:'var(--olive)'}}>{v}%</span>
                    </div>
                    <div className="h-1 rounded-full mt-1" style={{background:'var(--rule)'}}>
                      <div className="h-1 rounded-full" style={{width:`${v}%`, background:'var(--terracotta)'}}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 p-6 relative" style={{background:'var(--ivory)'}}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="eyebrow">Hourly compute spend · 7 days</div>
                  <div className="serif text-[20px] mt-1">Spot conversion in progress</div>
                </div>
                <div className="flex items-center gap-2 text-[12px]">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{background:'#ecedf2'}}/>On-demand</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{background:'var(--terracotta)'}}/>Spot</span>
                </div>
              </div>
              <svg viewBox="0 0 600 220" className="w-full mt-4 faux-grid rounded-md" style={{background:'var(--parchment)'}}>
                <path d="M0,120 C 60,100 100,140 160,110 C 220,80 260,150 320,120 C 380,90 420,140 480,100 C 540,70 580,110 600,90 L600,220 L0,220 Z" fill="rgba(124,92,255,0.1)"/>
                <path d="M0,120 C 60,100 100,140 160,110 C 220,80 260,150 320,120 C 380,90 420,140 480,100 C 540,70 580,110 600,90" fill="none" stroke="#ecedf2" strokeWidth="1.6"/>
                <path d="M0,180 C 80,170 120,170 200,160 C 280,150 320,140 400,120 C 480,100 520,80 600,60" fill="none" stroke="#7c5cff" strokeWidth="2"/>
                {[80,200,320,440,560].map((x,i) => (
                  <circle key={i} cx={x} cy={[170,160,140,110,75][i]} r="3" fill="#7c5cff"/>
                ))}
              </svg>
              <div className="grid grid-cols-3 gap-3 mt-5">
                {[['Instances replaced', '2,418'],['Eviction rate', '0.34%'],['Coverage', '92.1%']].map(([k,v])=>(
                  <div key={k} className="ring-soft rounded-lg p-3" style={{background:'var(--parchment)'}}>
                    <div className="eyebrow">{k}</div>
                    <div className="serif text-[22px] mt-0.5">{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 p-6" style={{background:'var(--ivory)'}}>
              <div className="eyebrow flex items-center gap-2"><span className="live-dot"/> Live activity</div>
              <ul className="mt-4 space-y-3 mono text-[12px]" style={{color:'var(--ink)'}}>
                {[
                  ['08:21:04', 'asg-prod-api ↗ converted 14 → spot'],
                  ['08:20:51', 'ebs-vol-09a3 resized 500→160 GB'],
                  ['08:20:32', 'rds-orders ↺ minor-version patch'],
                  ['08:19:58', 'gke-batch ↗ scaled 18 → 26'],
                  ['08:19:14', 'iam policy drift remediated'],
                  ['08:18:02', 'reservation cov. → 84% (+2.1)'],
                ].map(([t, m]) => (
                  <li key={t} className="flex gap-3">
                    <span style={{color:'var(--olive)'}}>{t}</span>
                    <span className="truncate">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hero-floats mt-6 flex flex-wrap gap-2">
          <span className="chip">aws.ec2 · spot</span>
          <span className="chip">gcp.mig · preemptible</span>
          <span className="chip">azure.vmss</span>
          <span className="chip">k8s · soon</span>
          <span className="chip">finops · ri/cud</span>
        </div>
      </div>
    </section>
  );
}


function PlatformStrip() {
  const ref = useRef();
  useReveal(ref);
  const items = [
    { I: Icon.Spot,  name: 'Spot Automation',   sub: 'Up to 70% off compute', to: '/platform/spot-automation' },
    { I: Icon.Disk,  name: 'Disk Rightsizing',  sub: 'Industry-only automation', to: '/platform/disk-rightsizing' },
    { I: Icon.DB,    name: 'DBOps',             sub: 'Database autopilot', to: '/platform/dbops' },
    { I: Icon.Sec,   name: 'SecOps',            sub: 'Continuous posture', to: '/platform/secops' },
    { I: Icon.Cost,  name: 'Cost Analytics',    sub: 'No more spreadsheets', to: '/platform/cost-analytics' },
    { I: Icon.SRE,   name: 'SRE Investigation', sub: 'From alert to RCA', to: '/platform/sre' },
  ];
  return (
    <section ref={ref} className="sec-light pt-16 pb-20 border-t" style={{borderColor:'var(--rule)'}}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="sec-label mb-4">[ 01 ] Platform</div>
            <h2 className="serif text-[clamp(34px,5vw,64px)] leading-[1.02] max-w-[18ch]">
              One platform.<br/>Every layer of<br/><span style={{color:'var(--terracotta)'}}>your cloud. Automated.</span>
            </h2>
          </div>
          <Link to="/platform" data-fade className="btn-ghost">Explore the platform <Icon.Arrow width="14" height="14"/></Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px ring-soft rounded-2xl overflow-hidden" style={{background:'var(--rule)'}}>
          {items.map(({ I, name, sub, to }, i) => (
            <Link to={to} key={name} data-fade className="hcard p-7 group block" style={{background:'var(--ivory)'}}>
              <div className="flex items-start justify-between">
                <I width="22" height="22" style={{color:'var(--ink)'}}/>
                <span className="mono text-[11px]" style={{color:'var(--olive)'}}>0{i+1}</span>
              </div>
              <div className="serif text-[24px] mt-10">{name}</div>
              <div className="text-[14px] mt-2" style={{color:'var(--olive)'}}>{sub}</div>
              <div className="mt-8 inline-flex items-center gap-1.5 text-[13px]">
                Learn more <Icon.Arrow width="14" height="14"/>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HorizontalScroll() {
  const sectionRef = useRef();
  const trackRef = useRef();
  const headRef = useRef();

  useLayoutEffect(() => {
    let ctx;
    const id = setTimeout(() => {
      ctx = gsap.context(() => {
        const track = trackRef.current;
        const section = sectionRef.current;
        if (!track || !section) return;
        const getDistance = () => track.scrollWidth - window.innerWidth + 80;

        gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => '+=' + getDistance(),
            pin: true,
            pinSpacing: true,
            scrub: 0.5,
            invalidateOnRefresh: true,
          }
        });

        const bar = section.querySelector('.hs-progress > i');
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: () => '+=' + getDistance(),
          scrub: 0.5,
          onUpdate: (self) => { if (bar) bar.style.transform = `scaleX(${self.progress})`; },
        });

        gsap.from(headRef.current.querySelectorAll('[data-fade]'), {
          y: 24, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: section, start: 'top 80%' }
        });

        ScrollTrigger.refresh();
      }, sectionRef);
    }, 250);
    return () => { clearTimeout(id); ctx && ctx.revert(); };
  }, []);

  const cards = [
    { tag: '01 · Spot Automation',   title: 'Compute, 70% off.', body: 'Replace on-demand with spot across AWS ASGs, GCP MIGs and Azure VMSS. Per-instance SKU rules, eviction handling, and a guaranteed minimum of regular VMs.', stat: ['$1.2M', 'saved last month'], accent: 'terracotta', href: '/platform/spot-automation' },
    { tag: '02 · Disk Rightsizing',  title: 'Pay for what you use.', body: 'Continuous volume monitoring, recommendation engine, and automated resize with safe filesystem expansion. EBS, Persistent Disk, Managed Disk.', stat: ['38%', 'avg storage reduction'], accent: 'ochre', href: '/platform/disk-rightsizing' },
    { tag: '03 · DBOps',             title: 'Databases on autopilot.', body: 'Automated scaling, backup verification, performance tuning and patch windows for RDS, Cloud SQL, Cosmos DB and beyond.', stat: ['0', 'manual pages last 30 days'], accent: 'moss', href: '/platform/dbops' },
    { tag: '04 · SecOps',            title: 'Security at deploy speed.', body: 'Continuous CIS posture checks, drift detection and automated remediation that runs alongside your CI/CD, not after the fact.', stat: ['4m 12s', 'mean time to remediation'], accent: 'terracotta', href: '/platform/secops' },
    { tag: '05 · Cost Analytics',    title: 'Spreadsheets, retired.', body: 'Real-time savings dashboards, daily aggregations, and reservation/commitment coverage for RIs, CUDs and Savings Plans.', stat: ['80%', 'reservation coverage'], accent: 'ochre', href: '/platform/cost-analytics' },
    { tag: '06 · SRE Investigation', title: 'Alert to root cause.', body: 'AI-assisted log triage, anomaly detection and an investigation timeline that connects metrics, logs and traces across your stack.', stat: ['11×', 'faster RCAs'], accent: 'moss', href: '/platform/sre' },
    { tag: '+ Coming soon',          title: 'Agentic SRE.', body: 'A fully autonomous SRE agent that investigates, diagnoses and resolves incidents without paging anyone. Joining XamOps in Q3.', stat: ['Q3', 'private alpha'], accent: 'ink', href: '/platform' },
  ];

  const accentColor = { terracotta: 'var(--terracotta)', ochre: 'var(--ochre)', moss: 'var(--moss)', ink: 'var(--ink)' };

  return (
    <section ref={sectionRef} className="sec-light relative h-screen overflow-hidden">
      <div className="h-full flex flex-col">
        <div ref={headRef} className="max-w-[1240px] mx-auto px-6 md:px-10 pt-24 pb-8 w-full">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div data-fade className="sec-label mb-4">[ 02 ] Capabilities</div>
              <h2 data-fade className="serif text-[clamp(34px,5vw,64px)] leading-[1.02] max-w-[20ch]">
                Six automations. <span style={{color:'var(--terracotta)'}}>One control plane.</span>
              </h2>
            </div>
            <div data-fade className="text-[14px]" style={{color:'var(--olive)'}}>
              <div className="mono text-[11px] uppercase tracking-widest" style={{color:'var(--olive-2)'}}>Scroll →</div>
              Translate vertical scroll into horizontal motion.
            </div>
          </div>
          <div className="hs-progress mt-6 h-px w-full overflow-hidden" style={{background:'var(--rule)'}}>
            <i className="block h-px w-full origin-left" style={{transform:'scaleX(0)', background:'var(--terracotta)'}}/>
          </div>
        </div>
        <div className="flex-1 flex items-center overflow-hidden" style={{maskImage:'linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%)', WebkitMaskImage:'linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%)'}}>
          <div ref={trackRef} className="flex gap-6 px-6 md:px-10 will-change-transform" style={{paddingRight:'40vw'}}>
            {cards.map((c, i) => (
              <div key={i} className="hs-card relative ring-soft rounded-3xl overflow-hidden hcard" style={{background:'var(--ivory)'}}>
                <div className="absolute inset-x-0 top-0 h-1" style={{background: accentColor[c.accent]}}/>
                <Link to={c.href} className="p-8 h-full flex flex-col" style={{color:'inherit', textDecoration:'none'}}>
                  <div className="flex items-start justify-between">
                    <div className="eyebrow">{c.tag}</div>
                    <span className="mono text-[11px]" style={{color:'var(--olive)'}}>0{i+1}/{cards.length}</span>
                  </div>
                  <h3 className="serif text-[44px] leading-[1.05] mt-8 max-w-[14ch]">{c.title}</h3>
                  <p className="mt-4 text-[15px] leading-[1.6]" style={{color:'var(--olive)'}}>{c.body}</p>
                  <div className="mt-auto pt-6">
                    <div className="rounded-2xl p-5 mb-4" style={{background:'var(--parchment)', boxShadow:'0 0 0 1px var(--rule)'}}>
                      <div className="big-num text-[44px] leading-none" style={{color: accentColor[c.accent]}}>{c.stat[0]}</div>
                      <div className="text-[13px] mt-1" style={{color:'var(--olive)'}}>{c.stat[1]}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] inline-flex items-center gap-2 ulink">Read deep-dive <Icon.Arrow width="14" height="14"/></span>
                      <span className="mono text-[11px]" style={{color:'var(--olive)'}}>aws · gcp · azure</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComingSoon() {
  const ref = useRef();
  useReveal(ref);
  const items = [
    { name: 'AI-Powered Recommendations', body: 'XamOps learns your cloud patterns and recommends optimizations before you notice the problem.' },
    { name: 'Agentic SRE',                body: 'A fully autonomous SRE agent that investigates, diagnoses and resolves incidents without paging anyone.' },
    { name: 'Complete Kubernetes Automation', body: 'Full K8s lifecycle management — scaling, cost, security — automated end to end.' },
  ];
  return (
    <section ref={ref} className="sec-dark py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="dots-d" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(250,249,245,0.05)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-d)"/>
        </svg>
      </div>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div data-fade className="sec-label dark mb-4">[ 03 ] Roadmap</div>
            <h2 className="serif text-[clamp(34px,5vw,64px)] leading-[1.02] max-w-[18ch]">
              <div className="reveal-line"><span>The cognitive layer,</span></div>
              <div className="reveal-line"><span style={{color:'var(--terracotta)'}}>arriving soon.</span></div>
            </h2>
          </div>
          <p data-fade className="max-w-[40ch] text-[16px]" style={{color:'var(--olive-2)'}}>
            We're building toward a cloud that runs itself. Here is what is shipping next on the XamOps roadmap.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-px ring-soft-dark rounded-2xl overflow-hidden" style={{background:'var(--rule-dark)'}}>
          {items.map((c, i) => (
            <div key={c.name} data-fade className="p-8 hcard" style={{background:'var(--ivory)'}}>
              <div className="flex items-center justify-between">
                <span className="mono text-[11px]" style={{color:'var(--olive-2)'}}>0{i+1}</span>
                <span className="text-[11px] mono px-2 py-0.5 rounded-full" style={{background:'rgba(201,100,66,0.15)', color:'#e0a48b'}}>Q{i+2} · 2026</span>
              </div>
              <div className="serif text-[28px] mt-10 leading-tight">{c.name}</div>
              <p className="mt-3 text-[15px] leading-[1.6]" style={{color:'var(--olive-2)'}}>{c.body}</p>
              <div className="mt-8 flex items-center gap-2 text-[13px]" style={{color:'#e0a48b'}}>
                Join the waitlist <Icon.Arrow width="14" height="14"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const ref = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ref.current.querySelectorAll('[data-num]').forEach(el => {
        const target = parseFloat(el.dataset.num);
        const dec = parseInt(el.dataset.dec || '0');
        const suf = el.dataset.suf || '';
        const pre = el.dataset.pre || '';
        const o = { v: 0 };
        gsap.to(o, {
          v: target, duration: 1.6, ease: 'power3.out',
          onUpdate: () => { el.textContent = pre + o.v.toFixed(dec) + suf; },
          scrollTrigger: { trigger: el, start: 'top 85%', once: true }
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="sec-light py-24 border-t border-b" style={{borderColor:'var(--rule)'}}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid md:grid-cols-4 gap-px rounded-2xl overflow-hidden ring-soft" style={{background:'var(--rule)'}}>
        {[
          { k:'Compute savings', n:'70', suf:'%', dec:0 },
          { k:'Clouds supported', n:'3',  suf:'',  dec:0 },
          { k:'Manual toil',     n:'0',  suf:'',  dec:0 },
          { k:'Avg ROI',         n:'9.2',suf:'×', dec:1 },
        ].map((m) => (
          <div key={m.k} className="p-8" style={{background:'var(--ivory)'}}>
            <div className="eyebrow">{m.k}</div>
            <div className="big-num text-[clamp(48px,6vw,80px)] leading-none mt-4" data-num={m.n} data-suf={m.suf} data-dec={m.dec}>0</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  const ref = useRef();
  useReveal(ref);
  return (
    <section ref={ref} id="demo" className="sec-light py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="rounded-[32px] p-10 md:p-16 relative overflow-hidden ring-soft" style={{background:'var(--ivory)'}}>
          <div className="absolute -right-20 -bottom-20 w-[420px] h-[420px] rounded-full pointer-events-none"
               style={{background:'radial-gradient(closest-side, rgba(201,100,66,0.18), transparent 70%)'}}/>
          <div className="grid md:grid-cols-12 gap-10 relative">
            <div className="md:col-span-7">
              <div data-fade className="sec-label mb-6">[ 04 ] Ready</div>
              <h3 className="serif text-[clamp(36px,5.5vw,72px)] leading-[1.02] tracking-tight">
                <div className="reveal-line"><span>Ready to operate</span></div>
                <div className="reveal-line"><span style={{color:'var(--terracotta)'}}>smarter?</span></div>
              </h3>
              <p data-fade className="mt-6 text-[17px] max-w-[44ch]" style={{color:'var(--olive)'}}>
                Thirty minutes. We'll connect to a sandbox account and show your cloud automated live — no slides, no theater.
              </p>
              <div data-fade className="mt-8 flex flex-wrap gap-3">
                <Link to="/demo" className="btn-primary">Book a demo <Icon.Arrow width="14" height="14"/></Link>
                <Link to="/demo" className="btn-dark">Sign up free</Link>
              </div>
              <div data-fade className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]" style={{color:'var(--olive)'}}>
                <span className="flex items-center gap-2"><Icon.Check width="14" height="14" style={{color:'var(--moss)'}}/> No credit card</span>
                <span className="flex items-center gap-2"><Icon.Check width="14" height="14" style={{color:'var(--moss)'}}/> SOC 2 Type II</span>
                <span className="flex items-center gap-2"><Icon.Check width="14" height="14" style={{color:'var(--moss)'}}/> Read-only by default</span>
              </div>
            </div>
            <div className="md:col-span-5" data-fade>
              <form className="rounded-2xl p-6 ring-soft" style={{background:'var(--parchment)'}}>
                <div className="eyebrow mb-3">Quick form</div>
                {[
                  ['Work email','you@company.com'],
                  ['Company','Acme Inc.'],
                  ['Cloud providers','aws, gcp, azure'],
                ].map(([l,p]) => (
                  <label key={l} className="block mb-3">
                    <div className="text-[12px] mb-1" style={{color:'var(--olive)'}}>{l}</div>
                    <input className="w-full rounded-[12px] px-3.5 py-3 text-[14px] outline-none" style={{background:'var(--ivory)', boxShadow:'0 0 0 1px var(--rule)'}} placeholder={p}/>
                  </label>
                ))}
                <button type="button" className="btn-primary w-full justify-center mt-2">Schedule 30-min demo</button>
                <div className="mono text-[11px] mt-3 text-center" style={{color:'var(--olive)'}}>or email demo@xamops.com</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero/>
      <PlatformStrip/>
      <FeatureSection index={1} eyebrow="Spot Automation"
        title={[{text:'70% savings'},{text:'on compute,'},{text:'automated.', accent:true}]}
        body="AutoSpotting replaces on-demand instances with spot capacity across AWS Auto Scaling Groups, GCP Managed Instance Groups and Azure VMSS. Per-instance SKU rules, eviction handling, and a guaranteed minimum of regular VMs."
        metric={[['Avg savings','68%'],['Eviction','0.34%'],['Coverage','92%']]} visual={<SpotVisual/>} />
      <FeatureSection index={2} eyebrow="Disk Rightsizing"
        title={[{text:'Stop paying for'},{text:'disk you don\'t', accent:true},{text:'use.'}]} dark side="left"
        body="No other platform automates this. Continuous volume monitoring, recommendations, and safe automated resize for AWS EBS, GCP Persistent Disk and Azure Managed Disks — including filesystem expansion."
        metric={[['Avg reduction','38%'],['Volumes','12,400+'],['Downtime','0s']]} visual={<DiskVisual/>} />
      <FeatureSection index={3} eyebrow="DBOps"
        title={[{text:'Database operations'},{text:'on autopilot.', accent:true}]}
        body="Automated scaling, backup verification, performance optimization, and patch windows — across RDS, Cloud SQL, Cosmos and beyond. Stop being on-call for routine database work."
        metric={[['Manual pages','0'],['Routines','12/day'],['DBs','340+']]} visual={<DBVisual/>} />
      <FeatureSection index={4} eyebrow="SecOps"
        title={[{text:'Security automation'},{text:'that ships with', accent:true},{text:'your code.'}]} dark side="left"
        body="Continuous CIS posture checks, drift detection, and automated remediation that runs alongside CI/CD instead of after the fact. Multi-cloud coverage, single policy plane."
        metric={[['CIS coverage','94%'],['Critical','0'],['MTTR','4m']]} visual={<SecOpsVisual/>} />
      <HorizontalScroll/>
      <FeatureSection index={5} eyebrow="Cost Analytics"
        title={[{text:'See exactly'},{text:'what you spend.'},{text:'Cut the rest.', accent:true}]}
        body="Real-time savings dashboards, daily aggregations, reservation/commitment coverage for RIs, CUDs and Savings Plans, and forecasting that engineering managers actually trust."
        metric={[['Coverage','80%'],['Forecast Δ','±2%'],['Reports','Live']]} visual={<CostVisual/>} />
      <FeatureSection index={6} eyebrow="SRE Investigation"
        title={[{text:'From alert to'},{text:'root cause.', accent:true},{text:'Faster.'}]} side="left"
        body="AI-assisted log triage, anomaly detection, and an investigation timeline that stitches metrics, logs and traces. Powered by XamOps Agents, with auto-detected incident feeds."
        metric={[['Faster RCAs','11×'],['Logs/sec','1.2M'],['Recall','98%']]} visual={<SREVisual/>} />
      <ComingSoon/>
      <Metrics/>
      <FinalCTA/>
    </>
  );
}
