import useInView from '../../hooks/useInView';

const DB_ROWS = [
  ['rds-prod-orders',  'PostgreSQL 16', 'healthy',   'replicas 2 · qps 4.2k', '68%'],
  ['cloudsql-billing', 'MySQL 8',       'healthy',   'replicas 1 · qps 1.1k', '68%'],
  ['azure-cosmos-cart','Cosmos NoSQL',  'optimizing','RU/s 18k → 9k',         '46%'],
  ['rds-staging-api',  'PostgreSQL 16', 'patching',  'minor 16.2 → 16.4',     '22%'],
];

export default function DBVisual() {
  const [ref, inView] = useInView(0.2);

  return (
    <div ref={ref} className="rounded-3xl p-6 ring-soft" style={{background:'var(--ivory)'}}>
      <div className="grid grid-cols-12 gap-4">
        {DB_ROWS.map(([n, e, s, m, w], idx) => (
          <div key={n} className="col-span-12 md:col-span-6 ring-soft rounded-xl p-4 hcard" style={{
            background:'var(--parchment)',
            opacity: inView ? 1 : 0,
            animation: inView ? `fadeSlideUp 0.45s ease ${idx * 0.1}s both` : 'none',
          }}>
            <div className="flex items-center justify-between">
              <div className="serif text-[18px]">{n}</div>
              <span className="text-[11px] mono px-2 py-0.5 rounded-full" style={{
                background: s === 'healthy' ? 'rgba(43,212,168,0.18)' : s === 'optimizing' ? 'rgba(124,92,255,0.18)' : 'rgba(240,179,65,0.18)',
                color: s === 'healthy' ? '#2bd4a8' : s === 'optimizing' ? '#a48dff' : '#f0b341',
              }}>{s}</span>
            </div>
            <div className="text-[12px] mt-1" style={{color:'var(--olive)'}}>{e}</div>
            <div className="text-[13px] mt-3">{m}</div>
            {/* Progress bar animates width */}
            <div className="mt-3 h-1.5 rounded-full overflow-hidden" style={{background:'var(--rule)'}}>
              <div className="h-1.5 rounded-full origin-left" style={{
                width: w,
                background: 'var(--terracotta)',
                transform: inView ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: `transform 0.9s ease ${0.3 + idx * 0.12}s`,
              }}/>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 ring-soft rounded-xl p-4 flex items-center justify-between" style={{
        background:'var(--parchment)',
        opacity: inView ? 1 : 0,
        transition: 'opacity 0.5s ease 0.6s',
      }}>
        <div className="text-[13px]"><span className="serif text-[16px]">Last 24h</span> · 0 manual interventions · 12 routines automated</div>
        <span className="mono text-[12px]" style={{color:'var(--olive)'}}>0 pages</span>
      </div>
    </div>
  );
}
