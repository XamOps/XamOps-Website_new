import React, { useRef } from 'react';
import { Icon } from './Icon.jsx';
import { useReveal } from '../hooks/useReveal.js';

export default function ComingSoon() {
  const ref = useRef();
  useReveal(ref);
  const items = [
    { name: 'AI-Powered Recommendations', body: 'XamOps learns your cloud patterns and recommends optimizations before you notice the problem.' },
    { name: 'Agentic SRE', body: 'A fully autonomous SRE agent that investigates, diagnoses and resolves incidents without paging anyone.' },
    { name: 'Complete Kubernetes Automation', body: 'Full K8s lifecycle management — scaling, cost, security — automated end to end.' },
  ];
  return (
    <section ref={ref} className="sec-dark py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="dots-d" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(250,249,245,0.05)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-d)" />
        </svg>
      </div>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div data-fade className="sec-label dark mb-4">[ 03 ] Roadmap</div>
            <h2 className="serif text-[clamp(34px,5vw,64px)] leading-[1.02] max-w-[18ch]">
              <div className="reveal-line"><span>The cognitive layer,</span></div>
              <div className="reveal-line"><span style={{ color: 'var(--terracotta)' }}>arriving soon.</span></div>
            </h2>
          </div>
          <p data-fade className="max-w-[40ch] text-[16px]" style={{ color: 'var(--olive-2)' }}>
            We’re building toward a cloud that runs itself. Here is what is shipping next on the XamOps roadmap.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-px ring-soft-dark rounded-2xl overflow-hidden" style={{ background: 'var(--rule-dark)' }}>
          {items.map((c, i) => (
            <div key={c.name} data-fade className="p-8 hcard" style={{ background: '#1d1d1b' }}>
              <div className="flex items-center justify-between">
                <span className="mono text-[11px]" style={{ color: 'var(--olive-2)' }}>0{i + 1}</span>
                <span className="text-[11px] mono px-2 py-0.5 rounded-full" style={{ background: 'rgba(201,100,66,0.15)', color: '#e0a48b' }}>Q{i + 2} · 2026</span>
              </div>
              <div className="serif text-[28px] mt-10 leading-tight">{c.name}</div>
              <p className="mt-3 text-[15px] leading-[1.6]" style={{ color: 'var(--olive-2)' }}>{c.body}</p>
              <div className="mt-8 flex items-center gap-2 text-[13px]" style={{ color: '#e0a48b' }}>
                Join the waitlist <Icon.Arrow width="14" height="14" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
