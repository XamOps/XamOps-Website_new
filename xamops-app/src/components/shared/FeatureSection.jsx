import { useRef } from 'react';
import { Icon } from '../Icons';
import useReveal from '../../hooks/useReveal';

export default function FeatureSection({ index, eyebrow, title, body, dark, visual, side = 'right', metric }) {
  const ref = useRef();
  useReveal(ref);
  return (
    <section ref={ref} className={`relative py-12 ${dark ? 'sec-dark' : 'sec-light'}`}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className={`grid md:grid-cols-12 gap-10 items-center ${side === 'left' ? 'md:[&>*:first-child]:order-2' : ''}`}>
          <div className="md:col-span-5">
            <div className={`sec-label ${dark ? 'dark' : ''} mb-6`}>[ {String(index).padStart(2,'0')} ] {eyebrow}</div>
            <h2 className="serif text-[clamp(48px,6.5vw,86px)] leading-[1.04] max-w-[16ch]">
              {title.map((t, i) => (
                <span key={i} style={t.accent ? {color:'var(--terracotta)'} : null}>
                  {t.text}{i < title.length - 1 ? ' ' : ''}
                </span>
              ))}
            </h2>
            <p data-fade className="mt-6 text-[17px] leading-[1.6] max-w-[42ch]" style={{color: 'var(--olive)'}}>{body}</p>
            {metric && (
              <div data-fade className="mt-8 grid grid-cols-3 gap-px rounded-xl overflow-hidden" style={{background: dark ? 'var(--rule-dark)' : 'var(--rule)'}}>
                {metric.map(([n,v]) => (
                  <div key={n} className="p-3 md:p-5" style={{background:'var(--ivory)'}}>
                    <div className={`eyebrow ${dark ? 'eyebrow-dark' : ''} leading-tight text-[9px] md:text-[10px]`}>{n}</div>
                    <div className="big-num text-[clamp(20px,4vw,32px)] mt-1 leading-none">{v}</div>
                  </div>
                ))}
              </div>
            )}
            <div data-fade className="mt-8 flex gap-3">
              <a href="#" className={dark ? 'btn-ghost-dark' : 'btn-ghost'}>Learn more <Icon.Arrow width="14" height="14"/></a>
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
