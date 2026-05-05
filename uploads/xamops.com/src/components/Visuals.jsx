import React from 'react';
import { Icon } from './Icon.jsx';

export function SpotVisual() {
  return (
    <div className="ring-soft rounded-3xl p-6" style={{ background: 'var(--ivory)' }}>
      <div className="flex items-center justify-between">
        <div className="eyebrow">Replacement loop</div>
        <span className="mono text-[11px]" style={{ color: 'var(--olive)' }}>autospotting v3.2</span>
      </div>
      <div className="mt-6 grid grid-cols-5 gap-2">
        {['Validate', 'Convert', 'Scale', 'Verify', 'Replace'].map((s, i) => (
          <div key={s} className="text-center">
            <div className="mx-auto w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: i < 4 ? 'var(--terracotta)' : 'var(--parchment)', color: i < 4 ? '#fff' : 'var(--ink)', boxShadow: i >= 4 ? '0 0 0 1px var(--rule)' : 'none' }}>
              {i < 4 ? <Icon.Check width="14" height="14" /> : <Icon.Dot width="10" height="10" />}
            </div>
            <div className="text-[12px] mt-2">{s}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 ring-soft rounded-xl overflow-hidden">
        <div className="px-4 py-2 flex items-center justify-between" style={{ background: 'var(--parchment)', borderBottom: '1px solid var(--rule)' }}>
          <div className="mono text-[12px]" style={{ color: 'var(--olive)' }}>asg-prod-api · 64 instances</div>
          <div className="flex items-center gap-1.5 text-[12px]"><span className="live-dot" />converting</div>
        </div>
        <div className="grid gap-1 p-4" style={{ gridTemplateColumns: 'repeat(16, minmax(0,1fr))' }}>
          {Array.from({ length: 64 }).map((_, i) => {
            const conv = i < 44;
            return <div key={i} className="aspect-square rounded-sm" style={{ background: conv ? 'var(--terracotta)' : '#e3d6c4', opacity: conv ? (0.5 + (i % 6) / 12) : 0.7 }} />;
          })}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[['Spot ratio', '86%'], ['Eviction', '0.34%'], ['Min regular', '4']].map(([k, v]) => (
          <div key={k} className="rounded-lg p-3 ring-soft" style={{ background: 'var(--parchment)' }}>
            <div className="eyebrow">{k}</div>
            <div className="serif text-[22px] mt-0.5">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DiskVisual() {
  return (
    <div className="rounded-3xl p-6 relative overflow-hidden" style={{ background: '#1d1d1b', boxShadow: '0 0 0 1px var(--rule-dark)' }}>
      <div className="flex items-center justify-between">
        <div className="eyebrow eyebrow-dark">Volume rightsizing</div>
        <div className="flex items-center gap-2 mono text-[11px]" style={{ color: 'var(--olive-2)' }}>
          <span>EBS</span><span>·</span><span>PD</span><span>·</span><span>Managed Disk</span>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 mt-5">
        <div className="col-span-12 md:col-span-7 rounded-xl p-4 faux-grid-dark" style={{ background: '#141413', boxShadow: '0 0 0 1px var(--rule-dark)' }}>
          <div className="text-[13px]" style={{ color: 'var(--ivory)' }}>Volume utilization</div>
          <svg viewBox="0 0 360 160" className="w-full mt-2">
            <path d="M0,120 L40,118 L40,80 L80,80 L80,90 L120,90 L120,60 L160,60 L160,90 L200,90 L200,40 L240,40 L240,90 L280,90 L280,70 L320,70 L320,100 L360,100" fill="none" stroke="#c96442" strokeWidth="1.8" />
            <path d="M0,140 L360,140" stroke="#3a3935" strokeDasharray="2 4" />
            <text x="0" y="138" fill="#8a8880" fontSize="10" fontFamily="JetBrains Mono">avg use 18%</text>
          </svg>
          <div className="mt-3 text-[13px]" style={{ color: 'var(--olive-2)' }}>Provisioned 500 GB · Recommended 160 GB</div>
        </div>
        <div className="col-span-12 md:col-span-5 rounded-xl p-4" style={{ background: '#141413', boxShadow: '0 0 0 1px var(--rule-dark)' }}>
          <div className="eyebrow eyebrow-dark">Plan</div>
          <ul className="mt-3 text-[13px] space-y-2">
            <li className="flex justify-between"><span>Snapshot</span><span className="mono" style={{ color: 'var(--olive-2)' }}>00:14</span></li>
            <li className="flex justify-between"><span>Modify volume</span><span className="mono" style={{ color: 'var(--olive-2)' }}>00:42</span></li>
            <li className="flex justify-between"><span>Filesystem resize</span><span className="mono" style={{ color: 'var(--olive-2)' }}>01:08</span></li>
            <li className="flex justify-between"><span>Verify IOPS</span><span className="mono" style={{ color: 'var(--olive-2)' }}>00:30</span></li>
          </ul>
          <div className="mt-4 pt-3" style={{ borderTop: '1px dashed #3a3935' }}>
            <div className="text-[13px]">Estimated savings</div>
            <div className="serif text-[40px] leading-none mt-1" style={{ color: 'var(--terracotta)' }}>$3,420<span className="text-[16px]" style={{ color: 'var(--olive-2)' }}>/mo</span></div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-[12px] mono" style={{ color: 'var(--olive-2)' }}>
        <span>vol-09a3f1c5b · prod-orders-db</span>
        <span className="flex items-center gap-1.5"><span className="live-dot" /> auto-resize scheduled · 02:00 UTC</span>
      </div>
    </div>
  );
}

export function DBVisual() {
  return (
    <div className="rounded-3xl p-6 ring-soft" style={{ background: 'var(--ivory)' }}>
      <div className="grid grid-cols-12 gap-4">
        {[
          ['rds-prod-orders', 'PostgreSQL 16', 'healthy', 'replicas 2 · qps 4.2k'],
          ['cloudsql-billing', 'MySQL 8', 'healthy', 'replicas 1 · qps 1.1k'],
          ['azure-cosmos-cart', 'Cosmos NoSQL', 'optimizing', 'RU/s 18k → 9k'],
          ['rds-staging-api', 'PostgreSQL 16', 'patching', 'minor 16.2 → 16.4'],
        ].map(([n, e, s, m]) => (
          <div key={n} className="col-span-12 md:col-span-6 ring-soft rounded-xl p-4" style={{ background: 'var(--parchment)' }}>
            <div className="flex items-center justify-between">
              <div className="serif text-[18px]">{n}</div>
              <span className="text-[11px] mono px-2 py-0.5 rounded-full"
                style={{ background: s === 'healthy' ? '#dde6c7' : s === 'optimizing' ? '#f1d8c8' : '#ece2c0', color: '#3a3935' }}>{s}</span>
            </div>
            <div className="text-[12px] mt-1" style={{ color: 'var(--olive)' }}>{e}</div>
            <div className="text-[13px] mt-3">{m}</div>
            <div className="mt-3 h-1.5 rounded-full" style={{ background: 'var(--rule)' }}>
              <div className="h-1.5 rounded-full" style={{ width: s === 'healthy' ? '68%' : s === 'optimizing' ? '46%' : '22%', background: 'var(--terracotta)' }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 ring-soft rounded-xl p-4 flex items-center justify-between" style={{ background: 'var(--parchment)' }}>
        <div className="text-[13px]"><span className="serif text-[16px]">Last 24h</span> · 0 manual interventions · 12 routines automated</div>
        <span className="mono text-[12px]" style={{ color: 'var(--olive)' }}>0 pages</span>
      </div>
    </div>
  );
}

export function SecOpsVisual() {
  return (
    <div className="rounded-3xl p-6 ring-soft-dark" style={{ background: '#1d1d1b' }}>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-7">
          <div className="eyebrow eyebrow-dark">Posture timeline · 30 days</div>
          <svg viewBox="0 0 600 180" className="w-full mt-2">
            {Array.from({ length: 30 }).map((_, i) => {
              const findings = Math.max(0, 14 - i * 0.4 + (i % 5 === 0 ? 4 : 0));
              const h = findings * 8;
              return <rect key={i} x={i * 20} y={170 - h} width="14" height={h} fill={i > 25 ? '#5b6b3a' : 'rgba(201,100,66,0.6)'} />;
            })}
          </svg>
          <div className="flex justify-between text-[11px] mono mt-1" style={{ color: 'var(--olive-2)' }}>
            <span>Apr 04</span><span>May 04</span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="eyebrow eyebrow-dark">Auto-remediations</div>
          <ul className="mt-3 space-y-3 text-[13px]">
            {[
              ['Public S3 bucket', 'access removed', '02:14'],
              ['Open security group :22', 'restricted', '02:08'],
              ['Stale IAM key (>90d)', 'rotated', '01:55'],
              ['IMDSv1 instance', 'enforced v2', '01:40'],
            ].map(([k, a, t]) => (
              <li key={k} className="flex items-start gap-3">
                <Icon.Check width="14" height="14" style={{ color: '#5b6b3a', marginTop: 3 }} />
                <div className="flex-1">
                  <div>{k}</div>
                  <div className="mono text-[11px]" style={{ color: 'var(--olive-2)' }}>{a} · {t}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {[['CIS coverage', '94%'], ['Critical findings', '0'], ['MTTR', '4m 12s']].map(([k, v]) => (
          <div key={k} className="rounded-xl p-3" style={{ background: '#141413', boxShadow: '0 0 0 1px var(--rule-dark)' }}>
            <div className="eyebrow eyebrow-dark">{k}</div>
            <div className="serif text-[22px] mt-0.5">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CostVisual() {
  return (
    <div className="rounded-3xl p-6 ring-soft" style={{ background: 'var(--ivory)' }}>
      <div className="flex items-center justify-between">
        <div className="eyebrow">Reservation coverage · this quarter</div>
        <div className="mono text-[12px]" style={{ color: 'var(--olive)' }}>RIs · CUDs · Savings Plans</div>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-5">
          <svg viewBox="0 0 200 200" className="w-full max-w-[260px] mx-auto">
            <circle cx="100" cy="100" r="78" fill="none" stroke="var(--rule)" strokeWidth="22" />
            <circle cx="100" cy="100" r="78" fill="none" stroke="var(--terracotta)" strokeWidth="22"
              strokeDasharray="490" strokeDashoffset="98" strokeLinecap="butt" transform="rotate(-90 100 100)" />
            <text x="100" y="98" textAnchor="middle" fontFamily="Georgia" fontSize="42" fill="#141413">80%</text>
            <text x="100" y="120" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" fill="#5e5d59">covered</text>
          </svg>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="space-y-3">
            {[['On-demand', '$612k', '22%'], ['Reserved', '$1.4M', '51%'], ['Savings Plans', '$760k', '27%']].map(([k, v, p], i) => (
              <div key={k} className="ring-soft rounded-xl p-3" style={{ background: 'var(--parchment)' }}>
                <div className="flex justify-between text-[13px]"><span>{k}</span><span className="mono" style={{ color: 'var(--olive)' }}>{v}</span></div>
                <div className="h-1.5 rounded-full mt-2" style={{ background: 'var(--rule)' }}>
                  <div className="h-1.5 rounded-full" style={{ width: p, background: ['#8a8880', 'var(--terracotta)', '#b48a3c'][i] }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 ring-soft rounded-xl p-3 flex items-center justify-between" style={{ background: 'var(--parchment)' }}>
            <div className="text-[13px]"><span className="serif text-[16px]">Forecast Q3</span> · $7.8M ↘ $5.1M with optimizations</div>
            <Icon.Arrow width="14" height="14" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SREVisual() {
  return (
    <div className="rounded-3xl p-6 ring-soft" style={{ background: 'var(--ivory)' }}>
      <div className="flex items-center justify-between">
        <div>
          <div className="eyebrow">Investigation · INC-2147</div>
          <div className="serif text-[20px] mt-1">api-orders p99 spike</div>
        </div>
        <span className="text-[11px] mono px-2 py-0.5 rounded-full" style={{ background: '#f1d8c8', color: '#a44d31' }}>investigating</span>
      </div>
      <div className="mt-5 relative pl-6">
        <div className="absolute left-2 top-1 bottom-1 w-px" style={{ background: 'var(--rule)' }} />
        {[
          ['09:14:02', 'Anomaly detected', 'p99 latency 1.2s → 4.6s', 'olive'],
          ['09:14:18', 'Correlated metrics', 'CPU on rds-prod-orders +62%', 'olive'],
          ['09:14:34', 'Logs scanned', '12,403 lines · 3 candidate causes', 'olive'],
          ['09:14:51', 'Root cause hypothesis', 'index miss on orders.created_at after migration v218', 'terracotta'],
          ['09:15:03', 'Suggested fix', 'CREATE INDEX CONCURRENTLY ix_orders_created_at', 'terracotta'],
        ].map(([t, h, m, c], i) => (
          <div key={i} className="mb-4 relative">
            <span className="absolute -left-[18px] top-1.5 w-2.5 h-2.5 rounded-full" style={{ background: c === 'terracotta' ? 'var(--terracotta)' : '#8a8880' }} />
            <div className="mono text-[11px]" style={{ color: 'var(--olive)' }}>{t}</div>
            <div className="text-[14px]">{h}</div>
            <div className="text-[13px]" style={{ color: 'var(--olive)' }}>{m}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <button className="btn-primary">Apply fix</button>
        <button className="btn-ghost">Open in OpenObserve</button>
      </div>
    </div>
  );
}
