import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from './Icon.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const ref = useRef();
  const bgRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-eyebrow', { y: 14, opacity: 0, duration: 0.7 })
        .to('.hero-line > span', { y: '0%', duration: 1.1, stagger: 0.09 }, '-=0.4')
        .from('.hero-sub', { y: 16, opacity: 0, duration: 0.8 }, '-=0.6')
        .from('.hero-ctas > *', { y: 14, opacity: 0, duration: 0.7, stagger: 0.08 }, '-=0.5')
        .from('.hero-strip', { y: 20, opacity: 0, duration: 0.8 }, '-=0.4')
        .from('.hero-floats > *', { y: 14, opacity: 0, duration: 0.7, stagger: 0.08 }, '-=0.6');

      gsap.to(bgRef.current, {
        yPercent: 18, ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="sec-light relative grain pt-[120px] pb-20 overflow-hidden">
      <div ref={bgRef} aria-hidden className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(20,20,19,0.06)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        <div className="absolute -top-20 -left-20 w-[480px] h-[480px] rounded-full"
          style={{ background: 'radial-gradient(closest-side, rgba(201,100,66,0.18), transparent 70%)' }} />
        <div className="absolute top-40 right-0 w-[520px] h-[520px] rounded-full"
          style={{ background: 'radial-gradient(closest-side, rgba(180,138,60,0.12), transparent 70%)' }} />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative">
        <div className="hero-eyebrow eyebrow flex items-center gap-2 mb-8">
          <span className="live-dot" /> Now in private beta · v1.0
        </div>

        <h1 className="serif text-[clamp(48px,8vw,116px)] leading-[0.95] tracking-tight max-w-[14ch]">
          <div className="reveal-line"><span className="hero-line">The Cognitive</span></div>
          <div className="reveal-line"><span className="hero-line" style={{ color: 'var(--terracotta)' }}>Cloud Operating</span></div>
          <div className="reveal-line"><span className="hero-line">System.</span></div>
        </h1>

        <p className="hero-sub mt-8 text-[18px] md:text-[20px] leading-[1.55] max-w-[640px]" style={{ color: 'var(--olive)' }}>
          Automate cloud operations across <span style={{ color: 'var(--ink)' }}>AWS</span>, <span style={{ color: 'var(--ink)' }}>GCP</span>, and <span style={{ color: 'var(--ink)' }}>Azure</span>. Cut costs by up to 70%. Eliminate toil. Move faster than your infrastructure can drift.
        </p>

        <div className="hero-ctas mt-10 flex flex-wrap items-center gap-3">
          <a href="#demo" className="btn-primary">Book a demo <Icon.Arrow width="14" height="14" /></a>
          <a href="#" className="btn-dark">Sign up free</a>
          <a href="#" className="btn-ghost">
            <span className="mono text-[12px]" style={{ color: 'var(--olive)' }}>$ </span>
            See live savings
          </a>
        </div>

        <div className="hero-strip mt-16 ring-soft rounded-[28px] overflow-hidden" style={{ background: 'var(--ivory)' }}>
          <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: 'var(--rule)' }}>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#d6a89b' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#e3d6a3' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#b6c79c' }} />
              <span className="ml-3 mono text-[12px]" style={{ color: 'var(--olive)' }}>console.xamops.com / overview</span>
            </div>
            <div className="mono text-[11px]" style={{ color: 'var(--olive)' }}>aws · gcp · azure</div>
          </div>
          <div className="grid grid-cols-12 gap-px" style={{ background: 'var(--rule)' }}>
            <div className="col-span-12 md:col-span-3 p-6" style={{ background: 'var(--ivory)' }}>
              <div className="eyebrow">Monthly savings</div>
              <div className="serif text-[56px] leading-none mt-3">$1.84M</div>
              <div className="mt-2 text-[13px]" style={{ color: 'var(--olive)' }}>+18.2% vs last month</div>
              <div className="mt-6 space-y-2.5">
                {[['Spot Automation', 68], ['Disk Rightsizing', 22], ['Reservation Coverage', 7], ['DBOps', 3]].map(([n, v]) => (
                  <div key={n}>
                    <div className="flex items-center justify-between text-[12px]"><span>{n}</span><span className="mono" style={{ color: 'var(--olive)' }}>{v}%</span></div>
                    <div className="h-1 rounded-full mt-1" style={{ background: 'var(--rule)' }}>
                      <div className="h-1 rounded-full" style={{ width: `${v}%`, background: 'var(--terracotta)' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 p-6 relative" style={{ background: 'var(--ivory)' }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="eyebrow">Hourly compute spend · 7 days</div>
                  <div className="serif text-[20px] mt-1">Spot conversion in progress</div>
                </div>
                <div className="flex items-center gap-2 text-[12px]">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: '#141413' }} />On-demand</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: 'var(--terracotta)' }} />Spot</span>
                </div>
              </div>
              <svg viewBox="0 0 600 220" className="w-full mt-4 faux-grid rounded-md" style={{ background: 'var(--parchment)' }}>
                <path d="M0,120 C 60,100 100,140 160,110 C 220,80 260,150 320,120 C 380,90 420,140 480,100 C 540,70 580,110 600,90 L600,220 L0,220 Z" fill="rgba(20,20,19,0.08)" />
                <path d="M0,120 C 60,100 100,140 160,110 C 220,80 260,150 320,120 C 380,90 420,140 480,100 C 540,70 580,110 600,90" fill="none" stroke="#141413" strokeWidth="1.6" />
                <path d="M0,180 C 80,170 120,170 200,160 C 280,150 320,140 400,120 C 480,100 520,80 600,60" fill="none" stroke="#c96442" strokeWidth="2" />
                {[80, 200, 320, 440, 560].map((x, i) => (<circle key={i} cx={x} cy={[170, 160, 140, 110, 75][i]} r="3" fill="#c96442" />))}
              </svg>
              <div className="grid grid-cols-3 gap-3 mt-5">
                {[['Instances replaced', '2,418'], ['Eviction rate', '0.34%'], ['Coverage', '92.1%']].map(([k, v]) => (
                  <div key={k} className="ring-soft rounded-lg p-3" style={{ background: 'var(--parchment)' }}>
                    <div className="eyebrow">{k}</div>
                    <div className="serif text-[22px] mt-0.5">{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 p-6" style={{ background: 'var(--ivory)' }}>
              <div className="eyebrow flex items-center gap-2"><span className="live-dot" /> Live activity</div>
              <ul className="mt-4 space-y-3 mono text-[12px]" style={{ color: 'var(--ink)' }}>
                {[
                  ['08:21:04', 'asg-prod-api ↗ converted 14 → spot'],
                  ['08:20:51', 'ebs-vol-09a3 resized 500→160 GB'],
                  ['08:20:32', 'rds-orders ↺ minor-version patch'],
                  ['08:19:58', 'gke-batch ↗ scaled 18 → 26'],
                  ['08:19:14', 'iam policy drift remediated'],
                  ['08:18:02', 'reservation cov. → 84% (+2.1)'],
                ].map(([t, m]) => (
                  <li key={t} className="flex gap-3"><span style={{ color: 'var(--olive)' }}>{t}</span><span className="truncate">{m}</span></li>
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
