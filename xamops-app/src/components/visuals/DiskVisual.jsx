import useInView from '../../hooks/useInView';

export default function DiskVisual() {
  const [ref, inView] = useInView(0.2);

  return (
    <div ref={ref} className="rounded-3xl p-6 relative overflow-hidden" style={{background:'var(--ivory)', boxShadow:'0 0 0 1px var(--rule-dark)'}}>
      <div className="flex items-center justify-between">
        <div className="eyebrow eyebrow-dark">Volume rightsizing</div>
        <div className="flex items-center gap-2 mono text-[11px]" style={{color:'var(--olive-2)'}}>
          <span>EBS</span><span>·</span><span>PD</span><span>·</span><span>Managed Disk</span>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 mt-5">
        <div className="col-span-12 md:col-span-7 rounded-xl p-4 faux-grid-dark" style={{background:'var(--parchment)', boxShadow:'0 0 0 1px var(--rule-dark)'}}>
          <div className="text-[13px]" style={{color:'var(--ivory)'}}>Volume utilization</div>
          <svg viewBox="0 0 360 160" className="w-full mt-2">
            {/* Path draws in using pathLength */}
            <path
              d="M0,120 L40,118 L40,80 L80,80 L80,90 L120,90 L120,60 L160,60 L160,90 L200,90 L200,40 L240,40 L240,90 L280,90 L280,70 L320,70 L320,100 L360,100"
              fill="none" stroke="#7c5cff" strokeWidth="1.8"
              pathLength="1"
              style={{
                strokeDasharray: 1,
                strokeDashoffset: inView ? 0 : 1,
                transition: 'stroke-dashoffset 1.4s ease 0.2s',
              }}
            />
            <path d="M0,140 L360,140" stroke="#262c39" strokeDasharray="2 4"/>
            <text x="0" y="138" fill="#8b90a0" fontSize="10" fontFamily="JetBrains Mono">avg use 18%</text>
          </svg>
          <div className="mt-3 text-[13px]" style={{color:'var(--olive-2)'}}>Provisioned 500 GB · Recommended 160 GB</div>
        </div>

        <div className="col-span-12 md:col-span-5 rounded-xl p-4" style={{background:'var(--parchment)', boxShadow:'0 0 0 1px var(--rule-dark)'}}>
          <div className="eyebrow eyebrow-dark">Plan</div>
          {/* Plan rows slide in staggered */}
          <ul className="mt-3 text-[13px] space-y-2">
            {[['Snapshot','00:14'],['Modify volume','00:42'],['Filesystem resize','01:08'],['Verify IOPS','00:30']].map(([label, time], i) => (
              <li key={label} className="flex justify-between" style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateX(0)' : 'translateX(-8px)',
                transition: `opacity 0.4s ease ${0.4 + i * 0.1}s, transform 0.4s ease ${0.4 + i * 0.1}s`,
              }}>
                <span>{label}</span>
                <span className="mono" style={{color:'var(--olive-2)'}}>{time}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-3" style={{borderTop:'1px dashed #262c39'}}>
            <div className="text-[13px]">Estimated savings</div>
            {/* Savings number pops in */}
            <div className="serif text-[40px] leading-none mt-1" style={{
              color:'var(--terracotta)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'scale(1)' : 'scale(0.8)',
              transition: 'opacity 0.5s ease 0.9s, transform 0.5s ease 0.9s',
            }}>
              $3,420<span className="text-[16px]" style={{color:'var(--olive-2)'}}>/mo</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-[12px] mono" style={{color:'var(--olive-2)'}}>
        <span>vol-09a3f1c5b · prod-orders-db</span>
        <span className="flex items-center gap-1.5"><span className="live-dot"/> auto-resize scheduled · 02:00 UTC</span>
      </div>
    </div>
  );
}
