import React, { useRef } from 'react';
import { Icon } from './Icon.jsx';
import { useReveal } from '../hooks/useReveal.js';

/** Generic alternating light/dark feature deep-dive section. */
export default function TextSection({ index, eyebrow, title, body, dark, visual, side = 'right', metric }) {
  const ref = useRef();
  useReveal(ref);
  return (
    <section ref={ref} className={`relative py-28 ${dark ? 'sec-dark' : 'sec-light'}`}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className={`grid md:grid-cols-12 gap-10 items-center ${side === 'left' ? 'md:[&>*:first-child]:order-2' : ''}`}>
          <div className="md:col-span-5">
            <div data-fade className={`sec-label ${dark ? 'dark' : ''} mb-6`}>[ {String(index).padStart(2, '0')} ] {eyebrow}</div>
            <h3 className="serif text-[clamp(32px,4.4vw,56px)] leading-[1.04] max-w-[16ch]">
              {title.map((t, i) => (
                <div key={i} className="reveal-line"><span style={t.accent ? { color: 'var(--terracotta)' } : null}>{t.text}</span></div>
              ))}
            </h3>
            <p data-fade className="mt-6 text-[17px] leading-[1.6] max-w-[42ch]" style={{ color: dark ? 'var(--olive-2)' : 'var(--olive)' }}>{body}</p>
            {metric && (
              <div data-fade className="mt-8 grid grid-cols-3 gap-px rounded-xl overflow-hidden" style={{ background: dark ? 'var(--rule-dark)' : 'var(--rule)' }}>
                {metric.map(([n, v]) => (
                  <div key={n} className="p-5" style={{ background: dark ? '#1d1d1b' : 'var(--ivory)' }}>
                    <div className={`eyebrow ${dark ? 'eyebrow-dark' : ''}`}>{n}</div>
                    <div className="big-num text-[32px] mt-1">{v}</div>
                  </div>
                ))}
              </div>
            )}
            <div data-fade className="mt-8 flex gap-3">
              <a href="#" className={dark ? 'btn-ghost-dark' : 'btn-ghost'}>Learn more <Icon.Arrow width="14" height="14" /></a>
              <a href="#" className="btn-primary">Book demo</a>
            </div>
          </div>
          <div className="md:col-span-7" data-fade>
            {visual}
          </div>
        </div>
      </div>
    </section>
  );
}
