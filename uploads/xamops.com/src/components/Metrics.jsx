import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Metrics() {
  const ref = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ref.current.querySelectorAll('[data-num]').forEach((el) => {
        const target = parseFloat(el.dataset.num);
        const dec = parseInt(el.dataset.dec || '0');
        const suf = el.dataset.suf || '';
        const pre = el.dataset.pre || '';
        const o = { v: 0 };
        gsap.to(o, {
          v: target, duration: 1.6, ease: 'power3.out',
          onUpdate: () => { el.textContent = pre + o.v.toFixed(dec) + suf; },
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="sec-light py-24 border-t border-b" style={{ borderColor: 'var(--rule)' }}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid md:grid-cols-4 gap-px rounded-2xl overflow-hidden ring-soft" style={{ background: 'var(--rule)' }}>
        {[
          { k: 'Compute savings', n: '70', suf: '%', dec: 0 },
          { k: 'Clouds supported', n: '3', suf: '', dec: 0 },
          { k: 'Manual toil', n: '0', suf: '', dec: 0 },
          { k: 'Avg ROI', n: '9.2', suf: '×', dec: 1 },
        ].map((m) => (
          <div key={m.k} className="p-8" style={{ background: 'var(--ivory)' }}>
            <div className="eyebrow">{m.k}</div>
            <div className="big-num text-[clamp(48px,6vw,80px)] leading-none mt-4" data-num={m.n} data-suf={m.suf} data-dec={m.dec}>0</div>
          </div>
        ))}
      </div>
    </section>
  );
}
