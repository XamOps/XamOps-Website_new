import { useRef, useLayoutEffect, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Icon } from '../components/Icons';
import useReveal from '../hooks/useReveal';
import FeatureSection from '../components/shared/FeatureSection';
import { useDemoModal } from '../lib/demoModal';
import { GROUPS, FEATURE_COUNT, UPCOMING, STATUS_LABEL, STATUS_BADGE } from '../lib/platform';

const GridScan = lazy(() => import('../components/GridScan/GridScan').then(m => ({ default: m.GridScan })));

// Section numbering is one continuous sequence in document order. Reorder or
// insert here and every [ nn ] label follows; don't hardcode numbers inline.
const SECTION_ORDER = [
  'Platform',
  'Spot Automation',
  'Disk Rightsizing',
  'DBOps',
  'SecOps',
  'Flagship automations',
  'Cost Analytics',
  'SRE Investigation',
  'Roadmap',
  'Ready',
];
const secNo = (label) => String(SECTION_ORDER.indexOf(label) + 1).padStart(2, '0');
const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;
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
  const { setOpen } = useDemoModal();

  useLayoutEffect(() => {
    if (isMobile) return;
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
    <section ref={ref} className="sec-dark relative grain pt-20 md:pt-[96px] pb-10 overflow-hidden">
      <div ref={bgRef} aria-hidden className="absolute inset-0 pointer-events-none">
        {!isMobile && (
          <Suspense fallback={null}>
            <GridScan
              sensitivity={0.55}
              lineThickness={1}
              linesColor="#242424"
              gridScale={0.1}
              scanColor="#e5e5e5"
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
          </Suspense>
        )}
        <div className="absolute -top-20 -left-20 w-[480px] h-[480px] rounded-full pointer-events-none"
             style={{background:'radial-gradient(closest-side, var(--halo), transparent 70%)'}}/>
        <div className="absolute top-40 right-0 w-[520px] h-[520px] rounded-full pointer-events-none"
             style={{background:'radial-gradient(closest-side, var(--halo), transparent 70%)'}}/>
      </div>

      <div className="max-w-[1240px] mx-auto px-5 md:px-10 relative">
        <div className="hero-eyebrow eyebrow flex items-center gap-2 mb-6 md:mb-8">
          <span className="live-dot"/> Now in private beta · v1.0
        </div>

        <h1 className="serif text-[clamp(42px,11vw,148px)] leading-[0.95] tracking-tight">
          <div className="reveal-line"><span className="hero-line">The Cognitive</span></div>
          <div style={{lineHeight:0.95, whiteSpace:'nowrap'}}>
            <span>Cloud </span><span className="hero-ticker-wrap">
              <span className="hero-ticker-inner ticker-animate" style={{color:'var(--terracotta)'}}>
                <span>Operating</span>
                <span>Automating</span>
                <span>Optimizing</span>
                <span>Governing</span>
              </span>
            </span>
          </div>
          <div className="reveal-line"><span className="hero-line">System.</span></div>
        </h1>

        <p className="hero-sub mt-6 md:mt-8 text-[16px] md:text-[20px] leading-[1.55] max-w-[580px]" style={{color:'var(--olive)'}}>
          Automate cloud operations across <span style={{color:'var(--ink)'}}>AWS</span>, <span style={{color:'var(--ink)'}}>GCP</span>, and <span style={{color:'var(--ink)'}}>Azure</span>. Cut costs by up to 70%. Eliminate toil. Move faster than your infrastructure can drift.
        </p>

        <div className="hero-ctas mt-8 flex flex-wrap items-center gap-3">
          <button onClick={() => setOpen(true)} className="btn-primary">Book a demo <Icon.Arrow width="14" height="14"/></button>
          <a href="https://live.xamops.com" className="btn-dark">Sign in <Icon.Arrow width="14" height="14"/></a>
        </div>

        <div className="hero-strip float-card mt-10 md:mt-16 ring-soft rounded-[20px] md:rounded-[28px] overflow-x-auto" style={{background:'var(--ivory)'}}>
          <div className="flex items-center justify-between px-5 py-3 border-b" style={{borderColor:'var(--rule)'}}>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{background:'var(--viz-4)'}}/>
              <span className="w-2.5 h-2.5 rounded-full" style={{background:'var(--viz-3)'}}/>
              <span className="w-2.5 h-2.5 rounded-full" style={{background:'var(--viz-2)'}}/>
              <span className="ml-3 mono text-[12px]" style={{color:'var(--olive)'}}>console.xamops.com / overview</span>
            </div>
            <div className="mono text-[11px]" style={{color:'var(--olive)'}}>aws · gcp · azure</div>
          </div>
          <div className="grid grid-cols-12 gap-px" style={{background:'var(--rule)', minWidth:'760px'}}>
            <div className="col-span-12 md:col-span-3 p-6" style={{background:'var(--ivory)'}}>
              <div className="eyebrow">Monthly savings</div>
              <div className="serif text-[56px] leading-none mt-3">$1.84M</div>
              <div className="mt-2 text-[13px]" style={{color:'var(--viz-2)'}}>+18.2% vs last month</div>
              <div className="mt-6 space-y-2.5">
                {[
                  ['Spot Automation', 68, 'var(--viz-2)'],
                  ['Disk Rightsizing', 22, 'var(--viz-1)'],
                  ['Reservation Coverage', 7, 'var(--viz-3)'],
                  ['DBOps', 3, 'var(--viz-5)'],
                ].map(([n, v, c], i) => (
                  <div key={n}>
                    <div className="flex items-center justify-between text-[12px]">
                      <span>{n}</span><span className="mono" style={{color:'var(--olive)'}}>{v}%</span>
                    </div>
                    <div className="h-1 rounded-full mt-1 overflow-hidden" style={{background:'var(--rule)'}}>
                      <div
                        className="h-1 rounded-full bar-fill"
                        style={{width:`${v}%`, background:c, animationDelay:`${0.6 + i * 0.18}s`}}
                      />
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
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{background:'var(--ink)'}}/>On-demand</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{background:'var(--viz-2)'}}/>Spot</span>
                </div>
              </div>
              <svg viewBox="0 0 600 220" className="w-full mt-4 faux-grid rounded-md" style={{background:'var(--parchment)'}}>
                <path d="M0,120 C 60,100 100,140 160,110 C 220,80 260,150 320,120 C 380,90 420,140 480,100 C 540,70 580,110 600,90 L600,220 L0,220 Z" fill="var(--viz-4-soft)"/>
                <path d="M0,120 C 60,100 100,140 160,110 C 220,80 260,150 320,120 C 380,90 420,140 480,100 C 540,70 580,110 600,90" fill="none" style={{stroke:'var(--ink)'}} strokeWidth="1.6"/>
                <path d="M0,180 C 80,170 120,170 200,160 C 280,150 320,140 400,120 C 480,100 520,80 600,60" fill="none" stroke="var(--viz-2)" strokeWidth="2"/>
                {[80,200,320,440,560].map((x,i) => (
                  <circle key={i} cx={x} cy={[170,160,140,110,75][i]} r="3" fill="var(--viz-2)"/>
                ))}
              </svg>
              <div className="grid grid-cols-3 gap-3 mt-5">
                {[['Instances replaced', '2,418', 'var(--ink)'],['Eviction rate', '0.34%', 'var(--ink)'],['Coverage', '92.1%', 'var(--viz-2)']].map(([k,v,c])=>(
                  <div key={k} className="ring-soft rounded-lg p-3" style={{background:'var(--parchment)'}}>
                    <div className="eyebrow">{k}</div>
                    <div className="serif text-[22px] mt-0.5" style={{color:c}}>{v}</div>
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
  return (
    <section ref={ref} className="sec-light pt-7 pb-9 md:pt-11 md:pb-12 border-t" style={{borderColor:'var(--rule)'}}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="sec-label mb-4">[ {secNo('Platform')} ] Platform</div>
            <h2 className="serif text-[clamp(48px,6.5vw,90px)] leading-[1.02] max-w-[18ch]">
              One platform.<br/>Every layer of<br/><span style={{color:'var(--terracotta)'}}>your cloud. Automated.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3">
            <span data-fade className="mono text-[12px]" style={{color:'var(--olive)'}}>
              {FEATURE_COUNT} capabilities · {GROUPS.length} groups · AWS · GCP · Azure
            </span>
            <Link to="/platform" data-fade className="btn-ghost">Explore the platform <Icon.Arrow width="14" height="14"/></Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px ring-soft rounded-2xl overflow-hidden" style={{background:'var(--rule)'}}>
          {GROUPS.map((g, i) => {
            const I = Icon[g.icon];
            return (
              <Link to={`/platform/${g.slug}`} key={g.id} data-fade className="hcard p-5 md:p-6 group block" style={{background:'var(--ivory)'}}>
                <div className="flex items-start justify-between">
                  <I width="22" height="22" style={{color: g.accent}}/>
                  <span className="mono text-[11px]" style={{color:'var(--olive)'}}>{String(i+1).padStart(2,'0')}</span>
                </div>
                <div className="serif text-[18px] md:text-[22px] mt-6 md:mt-9 leading-tight">{g.name}</div>
                <div className="text-[13px] mt-2 leading-[1.5]" style={{color:'var(--olive)'}}>{g.tagline}</div>
                <div className="mt-5 md:mt-7 flex items-center justify-between text-[12px] mono" style={{color:'var(--olive-2)'}}>
                  <span>{g.features.length} capabilities</span>
                  <Icon.Arrow width="14" height="14"/>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HorizontalScroll() {
  const trackRef = useRef();
  const headRef = useRef();
  useReveal(headRef);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const bar = track.closest('section')?.querySelector('.hs-progress > i');
    const onScroll = () => {
      if (!bar) return;
      const { scrollLeft, scrollWidth, clientWidth } = track;
      const progress = scrollWidth > clientWidth ? scrollLeft / (scrollWidth - clientWidth) : 0;
      bar.style.transform = `scaleX(${progress})`;
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  const cards = [
    { tag: '01 · Spot Automation',   title: 'Compute, 70% off.', body: 'Replace on-demand with spot across AWS ASGs, GCP MIGs and Azure VMSS. Per-instance SKU rules, eviction handling, and a guaranteed minimum of regular VMs.', stat: ['$1.2M', 'saved last month'], accent: 'viz2', href: '/platform/spot-automation' },
    { tag: '02 · Disk Rightsizing',  title: 'Pay for what you use.', body: 'Continuous volume monitoring, recommendation engine, and automated resize with safe filesystem expansion. EBS, Persistent Disk, Managed Disk.', stat: ['38%', 'avg storage reduction'], accent: 'viz1', href: '/platform/disk-rightsizing' },
    { tag: '03 · DBOps',             title: 'Databases on autopilot.', body: 'Automated scaling, backup verification, performance tuning and patch windows for RDS, Cloud SQL, Cosmos DB and beyond.', stat: ['0', 'manual pages last 30 days'], accent: 'viz5', href: '/platform/dbops' },
    { tag: '04 · SecOps',            title: 'Security at deploy speed.', body: 'Continuous CIS posture checks, drift detection and automated remediation that runs alongside your CI/CD, not after the fact.', stat: ['4m 12s', 'mean time to remediation'], accent: 'viz4', href: '/platform/secops' },
    { tag: '05 · Cost Analytics',    title: 'Spreadsheets, retired.', body: 'Real-time savings dashboards, daily aggregations, and reservation/commitment coverage for RIs, CUDs and Savings Plans.', stat: ['80%', 'reservation coverage'], accent: 'viz3', href: '/platform/cost-analytics' },
    { tag: '06 · SRE Investigation', title: 'Alert to root cause.', body: 'AI-assisted log triage, anomaly detection and an investigation timeline that connects metrics, logs and traces across your stack.', stat: ['11×', 'faster RCAs'], accent: 'viz1', href: '/platform/sre' },
    { tag: '+ And 41 more',          title: 'The full catalogue.', body: 'CloudSitter schedules, Kubernetes autoscaling, WAR attack-surface scoring, SOC 2 tracking, CloudMap topology, CloudShell, MediaOps and the rest of the platform.', stat: [`${FEATURE_COUNT}`, 'capabilities shipping today'], accent: 'ink', href: '/platform' },
  ];

  const accentColor = {
    viz1: 'var(--viz-1)', viz2: 'var(--viz-2)', viz3: 'var(--viz-3)',
    viz4: 'var(--viz-4)', viz5: 'var(--viz-5)', ink: 'var(--ink)',
  };

  return (
    <section className="sec-light relative py-7 md:py-11">
      <div ref={headRef} className="max-w-[1240px] mx-auto px-6 md:px-10 pb-8 w-full">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div data-fade className="sec-label mb-4">[ {secNo('Flagship automations')} ] Flagship automations</div>
            <h2 data-fade className="serif text-[clamp(48px,6.5vw,90px)] leading-[1.02] max-w-[20ch]">
              Every automation. <span style={{color:'var(--terracotta)'}}>One control plane.</span>
            </h2>
          </div>
        </div>
        <div className="hs-progress mt-6 h-px w-full overflow-hidden" style={{background:'var(--rule)'}}>
          <i className="block h-px w-full origin-left" style={{transform:'scaleX(0)', background:'var(--terracotta)'}}/>
        </div>
      </div>
      <div ref={trackRef} className="hs-track flex gap-6 px-6 md:px-10 overflow-x-auto pb-4">
        {cards.map((c, i) => (
          <div key={i} className="hs-card relative ring-soft rounded-3xl overflow-hidden hcard" style={{background:'var(--ivory)'}}>
            <div className="absolute inset-x-0 top-0 h-1" style={{background: accentColor[c.accent]}}/>
            <Link to={c.href} className="p-8 h-full flex flex-col" style={{color:'inherit', textDecoration:'none'}}>
              <div className="flex items-start justify-between">
                <div className="eyebrow">{c.tag}</div>
                <span className="mono text-[11px]" style={{color:'var(--olive)'}}>0{i+1}/{cards.length}</span>
              </div>
              <h3 className="serif text-[clamp(28px,7vw,44px)] leading-[1.05] mt-6 max-w-[14ch]">{c.title}</h3>
              <p className="mt-4 text-[15px] leading-[1.6]" style={{color:'var(--olive)'}}>{c.body}</p>
              <div className="mt-auto pt-6">
                <div className="rounded-2xl p-5 mb-4" style={{background:'var(--parchment)', boxShadow:'0 0 0 1px var(--rule)'}}>
                  <div className="big-num text-[clamp(28px,7vw,44px)] leading-none" style={{color: accentColor[c.accent]}}>{c.stat[0]}</div>
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
    </section>
  );
}

function ComingSoon() {
  const ref = useRef();
  useReveal(ref);
  const items = UPCOMING;
  return (
    <section ref={ref} className="sec-dark py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="dots-d" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.05)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-d)"/>
        </svg>
      </div>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div data-fade className="sec-label dark mb-4">[ {secNo('Roadmap')} ] Roadmap</div>
            <h2 className="serif text-[clamp(48px,6.5vw,90px)] leading-[1.02] max-w-[18ch]">
              <div className="reveal-line"><span>The cognitive layer,</span></div>
              <div className="reveal-line"><span style={{color:'var(--terracotta)'}}>arriving soon.</span></div>
            </h2>
          </div>
          <p data-fade className="max-w-[40ch] text-[16px]" style={{color:'var(--olive)'}}>
            We're building toward a cloud that runs itself. These modules are in customers' hands now, ahead of general availability.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-px ring-soft-dark rounded-2xl overflow-hidden" style={{background:'var(--rule-dark)'}}>
          {items.map((c, i) => (
            <div key={c.name} data-fade className="p-6 md:p-8 hcard flex flex-col" style={{background:'var(--ivory)'}}>
              <div className="flex items-center justify-between gap-3">
                <span className="mono text-[11px]" style={{color:'var(--olive)'}}>{String(i+1).padStart(2,'0')}</span>
                <span className={`badge ${STATUS_BADGE[c.status]}`}>{STATUS_LABEL[c.status]}</span>
              </div>
              <div className="serif text-[clamp(20px,5vw,28px)] mt-7 md:mt-9 leading-tight">{c.name}</div>
              <p className="mt-3 text-[15px] leading-[1.6]" style={{color:'var(--olive)'}}>{c.body}</p>
              <Link to={c.to || '/platform'} className="mt-auto pt-8 flex items-center gap-2 text-[13px]"
                style={{color: c.accent, textDecoration:'none'}}>
                {c.group} <Icon.Arrow width="14" height="14"/>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const ref = useRef();
  useReveal(ref);
  const { setOpen } = useDemoModal();
  return (
    <section ref={ref} id="demo" className="sec-light py-8 md:py-12">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="rounded-2xl md:rounded-[32px] p-6 sm:p-10 md:p-16 relative overflow-hidden ring-soft" style={{background:'var(--ivory)'}}>
          <div className="absolute -right-20 -bottom-20 w-[420px] h-[420px] rounded-full pointer-events-none"
               style={{background:'radial-gradient(closest-side, var(--halo), transparent 70%)'}}/>
          <div className="grid md:grid-cols-12 gap-10 relative">
            <div className="md:col-span-7">
              <div data-fade className="sec-label mb-6">[ {secNo('Ready')} ] Ready</div>
              <h3 className="serif text-[clamp(44px,6vw,82px)] leading-[1.02] tracking-tight">
                <div className="reveal-line"><span>Ready to operate</span></div>
                <div className="reveal-line"><span style={{color:'var(--terracotta)'}}>smarter?</span></div>
              </h3>
              <p data-fade className="mt-6 text-[17px] max-w-[44ch]" style={{color:'var(--olive)'}}>
                Thirty minutes. We'll connect to a sandbox account and show your cloud automated live. No slides, no theater.
              </p>
              <div data-fade className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => setOpen(true)} className="btn-primary">Book a demo <Icon.Arrow width="14" height="14"/></button>
                <a href="https://live.xamops.com" className="btn-dark">Sign in <Icon.Arrow width="14" height="14"/></a>
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
                  ['Work email',     'quick-email',    'email',   'email',        'you@company.com'],
                  ['Company',        'quick-company',  'company', 'organization', 'Acme Inc.'],
                  ['Cloud providers','quick-providers','providers','off',         'aws, gcp, azure'],
                ].map(([l, id, name, autoComplete, p]) => (
                  <label key={id} htmlFor={id} className="block mb-3">
                    <div className="text-[12px] mb-1" style={{color:'var(--olive)'}}>{l}</div>
                    <input id={id} name={name} autoComplete={autoComplete} className="w-full rounded-[12px] px-3.5 py-3 text-[14px] outline-none" style={{background:'var(--ivory)', boxShadow:'0 0 0 1px var(--rule)'}} placeholder={p}/>
                  </label>
                ))}
                <button type="button" onClick={() => setOpen(true)} className="btn-primary w-full justify-center mt-2">Schedule 30-min demo</button>
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
      <FeatureSection index={secNo('Spot Automation')} eyebrow="Spot Automation"
        title={[{text:'70% savings'},{text:'on compute,'},{text:'automated.', accent:true}]}
        body="AutoSpotting replaces on-demand instances with spot capacity across AWS Auto Scaling Groups, GCP Managed Instance Groups and Azure VMSS. Per-instance SKU rules, eviction handling, and a guaranteed minimum of regular VMs."
        metric={[['Avg savings','68%'],['Eviction','0.34%'],['Coverage','92%']]} visual={<SpotVisual/>} to="/platform/spot-automation" />
      <FeatureSection index={secNo('Disk Rightsizing')} eyebrow="Disk Rightsizing"
        title={[{text:'Stop paying for'},{text:'disk you don\'t', accent:true},{text:'use.'}]} dark side="left"
        body="No other platform automates this. Continuous volume monitoring, recommendations, and safe automated resize for AWS EBS, GCP Persistent Disk and Azure Managed Disks, including filesystem expansion."
        metric={[['Avg reduction','38%'],['Volumes','12,400+'],['Downtime','0s']]} visual={<DiskVisual/>} to="/platform/disk-rightsizing" />
      <FeatureSection index={secNo('DBOps')} eyebrow="DBOps"
        title={[{text:'Database operations'},{text:'on autopilot.', accent:true}]}
        body="Automated scaling, backup verification, performance optimization, and patch windows across RDS, Cloud SQL, Cosmos and beyond. Stop being on-call for routine database work."
        metric={[['Manual pages','0'],['Routines','12/day'],['DBs','340+']]} visual={<DBVisual/>} to="/platform/dbops" />
      <FeatureSection index={secNo('SecOps')} eyebrow="SecOps"
        title={[{text:'Security automation'},{text:'that ships with', accent:true},{text:'your code.'}]} dark side="left"
        body="Continuous CIS posture checks, drift detection, and automated remediation that runs alongside CI/CD instead of after the fact. Multi-cloud coverage, single policy plane."
        metric={[['CIS coverage','94%'],['Critical','0'],['MTTR','4m']]} visual={<SecOpsVisual/>} to="/platform/secops" />
      <HorizontalScroll/>
      <FeatureSection index={secNo('Cost Analytics')} eyebrow="Cost Analytics"
        title={[{text:'See exactly'},{text:'what you spend.'},{text:'Cut the rest.', accent:true}]}
        body="Real-time savings dashboards, daily aggregations, reservation/commitment coverage for RIs, CUDs and Savings Plans, and forecasting that engineering managers actually trust."
        metric={[['Coverage','80%'],['Forecast Δ','±2%'],['Reports','Live']]} visual={<CostVisual/>} to="/platform/cost-analytics" />
      <FeatureSection index={secNo('SRE Investigation')} eyebrow="SRE Investigation"
        title={[{text:'From alert to'},{text:'root cause.', accent:true},{text:'Faster.'}]} side="left"
        body="AI-assisted log triage, anomaly detection, and an investigation timeline that stitches metrics, logs and traces. Powered by XamOps Agents, with auto-detected incident feeds."
        metric={[['Faster RCAs','11×'],['Logs/sec','1.2M'],['Recall','98%']]} visual={<SREVisual/>} to="/platform/sre" />
      <ComingSoon/>
      <FinalCTA/>
    </>
  );
}
