import { Icon } from '../Icons';
import useInView from '../../hooks/useInView';

const BARS = [
  ['On-demand',    '$612k', '22%', '#8b90a0'],
  ['Reserved',     '$1.4M', '51%', 'var(--terracotta)'],
  ['Savings Plans','$760k', '27%', '#f0b341'],
];

export default function CostVisual() {
  const [ref, inView] = useInView(0.2);

  return (
    <div ref={ref} className="rounded-3xl p-6 ring-soft" style={{background:'var(--ivory)'}}>
      <div className="flex items-center justify-between">
        <div className="eyebrow">Reservation coverage · this quarter</div>
        <div className="mono text-[12px]" style={{color:'var(--olive)'}}>RIs · CUDs · Savings Plans</div>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-5">
          <svg viewBox="0 0 200 200" className="w-full max-w-[260px] mx-auto">
            {/* Track circle */}
            <circle cx="100" cy="100" r="78" fill="none" stroke="var(--rule)" strokeWidth="22"/>
            {/* Animated fill arc — strokeDashoffset from 490→98 */}
            <circle
              cx="100" cy="100" r="78"
              fill="none" stroke="var(--terracotta)" strokeWidth="22"
              strokeDasharray="490"
              strokeDashoffset={inView ? 98 : 490}
              strokeLinecap="butt"
              transform="rotate(-90 100 100)"
              style={{ transition: 'stroke-dashoffset 1.4s ease 0.2s' }}
            />
            <text x="100" y="98"  textAnchor="middle" fontFamily="Georgia"      fontSize="42" fill="#ecedf2"
              style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.4s ease 1s' }}>80%</text>
            <text x="100" y="120" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" fill="#8b90a0"
              style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.4s ease 1.1s' }}>covered</text>
          </svg>
        </div>

        <div className="col-span-12 md:col-span-7">
          <div className="space-y-3">
            {BARS.map(([k, v, p, color], i) => (
              <div key={k} className="ring-soft rounded-xl p-3 hcard" style={{
                background:'var(--parchment)',
                opacity: inView ? 1 : 0,
                animation: inView ? `fadeSlideUp 0.4s ease ${0.1 + i * 0.1}s both` : 'none',
              }}>
                <div className="flex justify-between text-[13px]">
                  <span>{k}</span>
                  <span className="mono" style={{color:'var(--olive)'}}>{v}</span>
                </div>
                {/* Bar animates width */}
                <div className="h-1.5 rounded-full mt-2 overflow-hidden" style={{background:'var(--rule)'}}>
                  <div className="h-1.5 rounded-full" style={{
                    width: p,
                    background: color,
                    transformOrigin: 'left',
                    transform: inView ? 'scaleX(1)' : 'scaleX(0)',
                    transition: `transform 0.9s ease ${0.4 + i * 0.15}s`,
                  }}/>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 ring-soft rounded-xl p-3 flex items-center justify-between hcard" style={{
            background:'var(--parchment)',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.5s ease 0.7s',
          }}>
            <div className="text-[13px]"><span className="serif text-[16px]">Forecast Q3</span> · $7.8M ↘ $5.1M with optimizations</div>
            <Icon.Arrow width="14" height="14"/>
          </div>
        </div>
      </div>
    </div>
  );
}
