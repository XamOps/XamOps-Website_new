import { Icon } from '../Icons';
import useInView from '../../hooks/useInView';

export default function SecOpsVisual() {
  const [ref, inView] = useInView(0.2);

  return (
    <div ref={ref} className="rounded-3xl p-6 ring-soft-dark" style={{background:'var(--ivory)'}}>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-7">
          <div className="eyebrow eyebrow-dark">Posture timeline · 30 days</div>
          {/* Bar chart — bars scale up from bottom */}
          <svg viewBox="0 0 600 180" className="w-full mt-2" style={{overflow:'visible'}}>
            {Array.from({length: 30}).map((_, i) => {
              const findings = Math.max(0, 14 - i * 0.4 + (i % 5 === 0 ? 4 : 0));
              const h = findings * 8;
              return (
                <rect
                  key={i}
                  x={i * 20} y={170 - h} width="14" height={h}
                  fill={i > 25 ? '#2bd4a8' : 'rgba(124,92,255,0.6)'}
                  style={{
                    transformOrigin: `${i * 20 + 7}px 170px`,
                    transform: inView ? 'scaleY(1)' : 'scaleY(0)',
                    opacity: inView ? 1 : 0,
                    transition: `transform 0.5s ease ${i * 0.025}s, opacity 0.4s ease ${i * 0.025}s`,
                  }}
                />
              );
            })}
          </svg>
          <div className="flex justify-between text-[11px] mono mt-1" style={{color:'var(--olive-2)'}}>
            <span>Apr 04</span><span>May 04</span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5">
          <div className="eyebrow eyebrow-dark">Auto-remediations</div>
          {/* Remediation items slide in staggered */}
          <ul className="mt-3 space-y-3 text-[13px]">
            {[
              ['Public S3 bucket',       'access removed', '02:14'],
              ['Open security group :22','restricted',     '02:08'],
              ['Stale IAM key (>90d)',   'rotated',        '01:55'],
              ['IMDSv1 instance',        'enforced v2',    '01:40'],
            ].map(([k, a, t], i) => (
              <li key={k} className="flex items-start gap-3" style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateX(0)' : 'translateX(12px)',
                transition: `opacity 0.4s ease ${0.3 + i * 0.1}s, transform 0.4s ease ${0.3 + i * 0.1}s`,
              }}>
                <Icon.Check width="14" height="14" style={{color:'#2bd4a8', marginTop:3}}/>
                <div className="flex-1">
                  <div>{k}</div>
                  <div className="mono text-[11px]" style={{color:'var(--olive-2)'}}>{a} · {t}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Metric cards pop in */}
      <div className="mt-5 grid grid-cols-3 gap-3">
        {[['CIS coverage','94%'],['Critical findings','0'],['MTTR','4m 12s']].map(([k, v], i) => (
          <div key={k} className="rounded-xl p-3 hcard" style={{
            background:'var(--parchment)', boxShadow:'0 0 0 1px var(--rule-dark)',
            opacity: inView ? 1 : 0,
            animation: inView ? `scaleIn 0.4s ease ${0.7 + i * 0.1}s both` : 'none',
          }}>
            <div className="eyebrow eyebrow-dark">{k}</div>
            <div className="serif text-[22px] mt-0.5">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
