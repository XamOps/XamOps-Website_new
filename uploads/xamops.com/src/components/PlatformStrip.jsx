import React, { useRef } from 'react';
import { Icon } from './Icon.jsx';
import { useReveal } from '../hooks/useReveal.js';

export default function PlatformStrip() {
  const ref = useRef();
  useReveal(ref);
  const items = [
    { I: Icon.Spot, name: 'Spot Automation', sub: 'Up to 70% off compute' },
    { I: Icon.Disk, name: 'Disk Rightsizing', sub: 'Industry-only automation' },
    { I: Icon.DB, name: 'DBOps', sub: 'Database autopilot' },
    { I: Icon.Sec, name: 'SecOps', sub: 'Continuous posture' },
    { I: Icon.Cost, name: 'Cost Analytics', sub: 'No more spreadsheets' },
    { I: Icon.SRE, name: 'SRE Investigation', sub: 'From alert to RCA' },
  ];
  return (
    <section ref={ref} className="sec-light py-24 border-t" style={{ borderColor: 'var(--rule)' }}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div data-fade className="sec-label mb-4">[ 01 ] Platform</div>
            <h2 className="serif text-[clamp(34px,5vw,64px)] leading-[1.02] max-w-[18ch]">
              <div className="reveal-line"><span>One platform.</span></div>
              <div className="reveal-line"><span>Every layer of</span></div>
              <div className="reveal-line"><span>your cloud. Automated.</span></div>
            </h2>
          </div>
          <a href="#" data-fade className="btn-ghost">Explore the platform <Icon.Arrow width="14" height="14" /></a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px ring-soft rounded-2xl overflow-hidden" style={{ background: 'var(--rule)' }}>
          {items.map(({ I, name, sub }, i) => (
            <a href="#" key={name} data-fade className="hcard p-7 group" style={{ background: 'var(--ivory)' }}>
              <div className="flex items-start justify-between">
                <I width="22" height="22" style={{ color: 'var(--ink)' }} />
                <span className="mono text-[11px]" style={{ color: 'var(--olive)' }}>0{i + 1}</span>
              </div>
              <div className="serif text-[24px] mt-10">{name}</div>
              <div className="text-[14px] mt-2" style={{ color: 'var(--olive)' }}>{sub}</div>
              <div className="mt-8 inline-flex items-center gap-1.5 text-[13px]">
                Learn more <Icon.Arrow width="14" height="14" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
