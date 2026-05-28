import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';
import PageHero from '../components/shared/PageHero';

function SpotSavingsThumbnail() {
  return (
    <svg viewBox="0 0 380 210" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      {[55, 85, 115, 145].map(y => (
        <line key={y} x1="20" y1={y} x2="360" y2={y} stroke="#1f2430" strokeWidth="1" />
      ))}
      <defs>
        <linearGradient id="odGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#7c5cff" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="spotGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2bd4a8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#2bd4a8" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      {/* On-Demand bar */}
      <rect x="70" y="25" width="100" height="150" rx="4" fill="url(#odGrad)" />
      {/* Spot bar */}
      <rect x="210" y="130" width="100" height="45" rx="4" fill="url(#spotGrad)" />
      {/* Baseline */}
      <line x1="20" y1="175" x2="360" y2="175" stroke="#1f2430" strokeWidth="1.5" />
      {/* Price labels */}
      <text x="120" y="18" textAnchor="middle" fontSize="10.5" fill="#8b90a0" fontFamily="monospace">$7,000/mo</text>
      <text x="260" y="124" textAnchor="middle" fontSize="10.5" fill="#2bd4a8" fontFamily="monospace">$2,200/mo</text>
      {/* Bar labels */}
      <text x="120" y="193" textAnchor="middle" fontSize="9" fill="#5b6173" fontFamily="monospace">ON-DEMAND</text>
      <text x="260" y="193" textAnchor="middle" fontSize="9" fill="#2bd4a8" fontFamily="monospace">SPOT</text>
      {/* -70% badge */}
      <rect x="219" y="136" width="82" height="22" rx="4" fill="#2bd4a8" opacity="0.15" />
      <text x="260" y="151" textAnchor="middle" fontSize="11" fill="#2bd4a8" fontFamily="monospace" fontWeight="700">-70% cheaper</text>
      {/* Connector */}
      <line x1="170" y1="25" x2="210" y2="130" stroke="#2b2f3e" strokeWidth="1" strokeDasharray="4 3" />
    </svg>
  );
}

function DiskWasteThumbnail() {
  const BARS = [
    { label: 'UNATTACHED', h: 45, x: 45, amount: '$300/mo' },
    { label: 'GP2→GP3', h: 60, x: 145, amount: '$400/mo' },
    { label: 'OVER-SIZED', h: 120, x: 245, amount: '$800/mo' },
  ];
  const BASE = 185;
  return (
    <svg viewBox="0 0 380 210" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      {[100, 130, 155, 175].map(y => (
        <line key={y} x1="18" y1={y} x2="362" y2={y} stroke="#1f2430" strokeWidth="1" />
      ))}
      <defs>
        <linearGradient id="wasteGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ef6d58" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ef6d58" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {BARS.map(b => (
        <rect key={b.label} x={b.x} y={BASE - b.h} width="70" height={b.h} rx="3" fill="url(#wasteGrad)" />
      ))}
      <line x1="18" y1={BASE} x2="362" y2={BASE} stroke="#1f2430" strokeWidth="1.5" />
      {BARS.map(b => (
        <g key={b.label}>
          <text x={b.x + 35} y={BASE - b.h - 6} textAnchor="middle" fontSize="10.5" fill="#ef6d58" fontFamily="monospace">{b.amount}</text>
          <text x={b.x + 35} y={BASE + 16} textAnchor="middle" fontSize="8.5" fill="#5b6173" fontFamily="monospace">{b.label}</text>
        </g>
      ))}
      <rect x="120" y="16" width="140" height="22" rx="4" fill="#ef6d58" opacity="0.12" />
      <text x="190" y="31" textAnchor="middle" fontSize="11" fill="#ef6d58" fontFamily="monospace" fontWeight="700">$1,500/mo wasted</text>
    </svg>
  );
}

function CostSpikeThumbnail() {
  const BARS = [
    { label: 'NOV', h: 85, x: 24 },
    { label: 'DEC', h: 90, x: 75 },
    { label: 'JAN', h: 80, x: 126 },
    { label: 'FEB', h: 87, x: 177 },
    { label: 'MAR', h: 78, x: 228 },
    { label: 'APR', h: 84, x: 279 },
  ];
  const BASE = 192;
  return (
    <svg viewBox="0 0 380 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      {[155, 130, 108, 85].map(y => (
        <line key={y} x1="18" y1={y} x2="362" y2={y} stroke="#1f2430" strokeWidth="1" />
      ))}
      <line x1="18" y1={BASE - 85} x2="362" y2={BASE - 85} stroke="#ef4444" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.45" />
      {BARS.map(b => (
        <rect key={b.label} x={b.x} y={BASE - b.h} width="34" height={b.h} rx="3" fill="#7c5cff" opacity="0.42" />
      ))}
      <defs>
        <linearGradient id="spikeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0b341" stopOpacity="1" />
          <stop offset="100%" stopColor="#f0b341" stopOpacity="0.75" />
        </linearGradient>
      </defs>
      <rect x="330" y={BASE - 128} width="34" height="128" rx="3" fill="url(#spikeGrad)" />
      <rect x="319" y={BASE - 148} width="56" height="18" rx="4" fill="#f0b341" opacity="0.12" />
      <text x="347" y={BASE - 134} textAnchor="middle" fontSize="10" fill="#f0b341" fontFamily="monospace" fontWeight="700">+40%</text>
      <line x1="18" y1={BASE} x2="362" y2={BASE} stroke="#1f2430" strokeWidth="1.5" />
      {BARS.map(b => (
        <text key={b.label} x={b.x + 17} y={BASE + 16} textAnchor="middle" fontSize="8.5" fill="#5b6173" fontFamily="monospace">{b.label}</text>
      ))}
      <text x="347" y={BASE + 16} textAnchor="middle" fontSize="8.5" fill="#f0b341" fontFamily="monospace">MAY</text>
    </svg>
  );
}

export default function BlogPage() {
  const posts = [
    {
      tag: 'FinOps',
      title: 'Your AWS Bill Jumped 40% Last Month — Here\'s How to Actually Investigate It',
      excerpt: 'A step-by-step checklist for DevOps engineers to diagnose and fix unexpected AWS cost spikes — before finance comes knocking again.',
      read: '9 min',
      date: 'May 28, 2026',
      href: '/blog/aws-cost-spike-investigation',
      thumb: { backgroundColor: 'var(--parchment)' },
      thumbEl: <CostSpikeThumbnail />,
    },
    {
      tag: 'Spot',
      title: 'EC2 Spot Instances in Production — How to Stop Fearing Interruptions and Save 70%',
      excerpt: 'A practical guide for DevOps engineers on running Spot instances safely in production — with the five patterns that make interruptions a non-event.',
      read: '10 min',
      date: 'May 28, 2026',
      href: '/blog/ec2-spot-instances-production',
      thumb: { backgroundColor: 'var(--parchment)' },
      thumbEl: <SpotSavingsThumbnail />,
    },
    {
      tag: 'FinOps',
      title: 'Disk Rightsizing: The Cost Saving Everyone Ignores',
      excerpt: 'Three moves that eliminate 30–40% of cloud storage waste — unattached volumes, gp2 migration, and over-provisioned disks — with the discipline to prevent it from coming back.',
      read: '7 min',
      date: 'May 28, 2026',
      href: '/blog/disk-rightsizing-ebs',
      thumb: { backgroundColor: 'var(--parchment)' },
      thumbEl: <DiskWasteThumbnail />,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={[{ text: 'Notes from' }, { text: 'the cognitive layer.', accent: true }]}
        body="Engineering deep-dives, FinOps math, and the occasional opinion from the people building XamOps."
        cta={false}
      />
      <section className="sec-light pb-24 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {posts.map((p) => {
            const CardEl = p.href ? Link : 'a';
            const cardProps = p.href ? { to: p.href } : { href: '#' };
            return (
              <CardEl
                key={p.title}
                {...cardProps}
                className="ring-soft rounded-2xl overflow-hidden hcard block min-w-0"
                style={{ background: 'var(--ivory)' }}
              >
                <div className="aspect-[16/10] overflow-hidden" style={p.thumb}>
                  {p.thumbEl || null}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 eyebrow">
                    <span>{p.tag}</span><span>·</span><span>{p.date}</span>
                  </div>
                  <div className="serif text-[clamp(17px,4vw,22px)] mt-3 leading-[1.18]">{p.title}</div>
                  <div className="text-[14px] mt-3 leading-[1.55]" style={{ color: 'var(--olive)' }}>{p.excerpt}</div>
                  <div className="text-[13px] mt-5 inline-flex items-center gap-2 ulink">
                    Read · {p.read} <Icon.Arrow width="14" height="14" />
                  </div>
                </div>
              </CardEl>
            );
          })}
        </div>
      </section>
    </>
  );
}
