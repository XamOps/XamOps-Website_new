import useInView from '../../hooks/useInView';

const TIMELINE = [
  ['09:14:02','Anomaly detected',       'p99 latency 1.2s → 4.6s',                              'olive'],
  ['09:14:18','Correlated metrics',     'CPU on rds-prod-orders +62%',                          'olive'],
  ['09:14:34','Logs scanned',           '12,403 lines · 3 candidate causes',                    'olive'],
  ['09:14:51','Root cause hypothesis',  'index miss on orders.created_at after migration v218', 'terracotta'],
  ['09:15:03','Suggested fix',          'CREATE INDEX CONCURRENTLY ix_orders_created_at',       'terracotta'],
];

export default function SREVisual() {
  const [ref, inView] = useInView(0.2);

  return (
    <div ref={ref} className="rounded-3xl p-6 ring-soft" style={{background:'var(--ivory)'}}>
      {/* Header fades in */}
      <div className="flex items-center justify-between" style={{
        opacity: inView ? 1 : 0,
        transition: 'opacity 0.4s ease 0s',
      }}>
        <div>
          <div className="eyebrow">Investigation · INC-2147</div>
          <div className="serif text-[20px] mt-1">api-orders p99 spike</div>
        </div>
        <span className="text-[11px] mono px-2 py-0.5 rounded-full" style={{background:'rgba(240,179,65,0.18)', color:'#f0b341'}}>investigating</span>
      </div>

      {/* Timeline line draws down */}
      <div className="mt-5 relative pl-6">
        <div className="absolute left-2 top-1 w-px" style={{
          background:'var(--rule)',
          height: inView ? 'calc(100% - 8px)' : '0%',
          transition: 'height 0.8s ease 0.2s',
        }}/>

        {/* Each event slides in staggered */}
        {TIMELINE.map(([t, h, m, c], i) => (
          <div key={i} className="mb-4 relative" style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-10px)',
            transition: `opacity 0.4s ease ${0.2 + i * 0.12}s, transform 0.4s ease ${0.2 + i * 0.12}s`,
          }}>
            <span className="absolute -left-[18px] top-1.5 w-2.5 h-2.5 rounded-full" style={{
              background: c === 'terracotta' ? 'var(--terracotta)' : '#8b90a0',
              transform: inView ? 'scale(1)' : 'scale(0)',
              transition: `transform 0.3s ease ${0.25 + i * 0.12}s`,
            }}/>
            <div className="mono text-[11px]" style={{color:'var(--olive)'}}>{t}</div>
            <div className="text-[14px]">{h}</div>
            <div className="text-[13px]" style={{color:'var(--olive)'}}>{m}</div>
          </div>
        ))}
      </div>

      {/* Buttons pop in */}
      <div className="mt-3 flex gap-2" style={{
        opacity: inView ? 1 : 0,
        animation: inView ? `fadeSlideUp 0.4s ease 0.9s both` : 'none',
      }}>
        <button className="btn-primary">Apply fix</button>
        <button className="btn-ghost">Open in XamOps Agents</button>
      </div>
    </div>
  );
}
