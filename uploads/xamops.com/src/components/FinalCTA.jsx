import React, { useRef } from 'react';
import { Icon } from './Icon.jsx';
import { useReveal } from '../hooks/useReveal.js';

export default function FinalCTA() {
  const ref = useRef();
  useReveal(ref);
  return (
    <section ref={ref} id="demo" className="sec-light py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="rounded-[32px] p-10 md:p-16 relative overflow-hidden ring-soft" style={{ background: 'var(--ivory)' }}>
          <div className="absolute -right-20 -bottom-20 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(closest-side, rgba(201,100,66,0.18), transparent 70%)' }} />
          <div className="grid md:grid-cols-12 gap-10 relative">
            <div className="md:col-span-7">
              <div data-fade className="sec-label mb-6">[ 04 ] Ready</div>
              <h3 className="serif text-[clamp(36px,5.5vw,72px)] leading-[1.02] tracking-tight">
                <div className="reveal-line"><span>Ready to operate</span></div>
                <div className="reveal-line"><span style={{ color: 'var(--terracotta)' }}>smarter?</span></div>
              </h3>
              <p data-fade className="mt-6 text-[17px] max-w-[44ch]" style={{ color: 'var(--olive)' }}>
                Thirty minutes. We’ll connect to a sandbox account and show your cloud automated live — no slides, no theater.
              </p>
              <div data-fade className="mt-8 flex flex-wrap gap-3">
                <a href="#" className="btn-primary">Book a demo <Icon.Arrow width="14" height="14" /></a>
                <a href="#" className="btn-dark">Sign up free</a>
              </div>
              <div data-fade className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]" style={{ color: 'var(--olive)' }}>
                <span className="flex items-center gap-2"><Icon.Check width="14" height="14" style={{ color: 'var(--moss)' }} /> No credit card</span>
                <span className="flex items-center gap-2"><Icon.Check width="14" height="14" style={{ color: 'var(--moss)' }} /> SOC 2 Type II</span>
                <span className="flex items-center gap-2"><Icon.Check width="14" height="14" style={{ color: 'var(--moss)' }} /> Read-only by default</span>
              </div>
            </div>
            <div className="md:col-span-5" data-fade>
              <form className="rounded-2xl p-6 ring-soft" style={{ background: 'var(--parchment)' }} onSubmit={(e) => e.preventDefault()}>
                <div className="eyebrow mb-3">Quick form</div>
                {[['Work email', 'you@company.com'], ['Company', 'Acme Inc.'], ['Cloud providers', 'aws, gcp, azure']].map(([l, p]) => (
                  <label key={l} className="block mb-3">
                    <div className="text-[12px] mb-1" style={{ color: 'var(--olive)' }}>{l}</div>
                    <input className="w-full rounded-[12px] px-3.5 py-3 text-[14px] outline-none" style={{ background: 'var(--ivory)', boxShadow: '0 0 0 1px var(--rule)' }} placeholder={p} />
                  </label>
                ))}
                <button type="submit" className="btn-primary w-full justify-center mt-2">Schedule 30-min demo</button>
                <div className="mono text-[11px] mt-3 text-center" style={{ color: 'var(--olive)' }}>or email demo@xamops.com</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
