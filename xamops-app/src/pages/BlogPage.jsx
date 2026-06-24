import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';
import PageHero from '../components/shared/PageHero';

const PROVIDER_THEME = {
  aws: {
    card: '#1a2332',
    thumb: '#0d1820',
    tag: '#FF9900',
    sep: 'rgba(255,255,255,0.2)',
    date: 'rgba(255,255,255,0.45)',
    title: '#f0f2f4',
    excerpt: 'rgba(255,255,255,0.55)',
    read: '#FF9900',
  },
  azure: {
    card: '#0f1e35',
    thumb: '#091628',
    tag: '#0078D4',
    sep: 'rgba(255,255,255,0.2)',
    date: 'rgba(255,255,255,0.45)',
    title: '#f0f2f4',
    excerpt: 'rgba(255,255,255,0.55)',
    read: '#0078D4',
  },
  gcp: {
    card: '#1a1f2e',
    thumb: '#10141f',
    tag: '#4285F4',
    sep: 'rgba(255,255,255,0.2)',
    date: 'rgba(255,255,255,0.45)',
    title: '#f0f2f4',
    excerpt: 'rgba(255,255,255,0.55)',
    read: '#4285F4',
  },
  xamops: {
    card: 'var(--ivory)',
    thumb: 'var(--parchment)',
    tag: 'var(--terracotta)',
    sep: 'var(--rule-dark)',
    date: 'var(--olive)',
    title: 'var(--ink)',
    excerpt: 'var(--olive)',
    read: 'var(--ink)',
  },
};

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
        <line key={y} x1="18" y1={y} x2="362" y2={y} stroke="#223" strokeWidth="1" />
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
      <line x1="18" y1={BASE} x2="362" y2={BASE} stroke="#334" strokeWidth="1.5" />
      {BARS.map(b => (
        <g key={b.label}>
          <text x={b.x + 35} y={BASE - b.h - 6} textAnchor="middle" fontSize="10.5" fill="#ef6d58" fontFamily="monospace">{b.amount}</text>
          <text x={b.x + 35} y={BASE + 16} textAnchor="middle" fontSize="8.5" fill="#8899aa" fontFamily="monospace">{b.label}</text>
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
        <line key={y} x1="18" y1={y} x2="362" y2={y} stroke="#223" strokeWidth="1" />
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
      <line x1="18" y1={BASE} x2="362" y2={BASE} stroke="#334" strokeWidth="1.5" />
      {BARS.map(b => (
        <text key={b.label} x={b.x + 17} y={BASE + 16} textAnchor="middle" fontSize="8.5" fill="#8899aa" fontFamily="monospace">{b.label}</text>
      ))}
      <text x="347" y={BASE + 16} textAnchor="middle" fontSize="8.5" fill="#f0b341" fontFamily="monospace">MAY</text>
    </svg>
  );
}

function FinOpsThumbnail() {
  const PROVIDERS = [
    { label: 'AWS', x: 44, h: 95, color: '#FF9900' },
    { label: 'AZURE', x: 144, h: 110, color: '#0078D4' },
    { label: 'GCP', x: 244, h: 80, color: '#4285F4' },
  ];
  const BASE = 178;
  return (
    <svg viewBox="0 0 380 210" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <linearGradient id="awsFinOps" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF9900" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#FF9900" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="azureFinOps" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0078D4" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#0078D4" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="gcpFinOps" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4285F4" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#4285F4" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {[110, 130, 150, 168].map(y => (
        <line key={y} x1="22" y1={y} x2="358" y2={y} stroke="#223" strokeWidth="1" />
      ))}
      {PROVIDERS.map((p, i) => (
        <g key={p.label}>
          <rect x={p.x} y={BASE - p.h} width="82" height={p.h} rx="4"
            fill={`url(#${['awsFinOps','azureFinOps','gcpFinOps'][i]})`} />
          <text x={p.x + 41} y={BASE - p.h - 7} textAnchor="middle" fontSize="10"
            fill={p.color} fontFamily="monospace" fontWeight="700">
            {p.h === 110 ? '-$1.2k' : p.h === 95 ? '-$840' : '-$620'}
          </text>
          <text x={p.x + 41} y={BASE + 16} textAnchor="middle" fontSize="9"
            fill={p.color} fontFamily="monospace">{p.label}</text>
        </g>
      ))}
      <line x1="22" y1={BASE} x2="358" y2={BASE} stroke="#334" strokeWidth="1.5" />
      <rect x="100" y="14" width="180" height="18" rx="4" fill="#f0b341" opacity="0.1" />
      <text x="190" y="27" textAnchor="middle" fontSize="10" fill="#f0b341"
        fontFamily="monospace" fontWeight="700">MULTI-CLOUD SAVINGS / MO</text>
    </svg>
  );
}

function SecurityAutomationThumbnail() {
  return (
    <svg viewBox="0 0 380 210" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      <rect width="380" height="210" fill="#091628" />
      {/* Grid lines */}
      {[50, 90, 130, 170].map(y => (
        <line key={y} x1="20" y1={y} x2="360" y2={y} stroke="#0078D4" strokeWidth="0.5" opacity="0.12" />
      ))}
      {/* Shield shape */}
      <path d="M190 28 L230 46 L230 90 Q230 118 190 132 Q150 118 150 90 L150 46 Z" fill="#0078D4" opacity="0.15" />
      <path d="M190 38 L222 53 L222 89 Q222 112 190 124 Q158 112 158 89 L158 53 Z" fill="none" stroke="#0078D4" strokeWidth="1.5" opacity="0.6" />
      {/* Checkmark inside shield */}
      <path d="M178 82 L186 90 L202 72" stroke="#0078D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      {/* Scan rings */}
      <circle cx="190" cy="81" r="52" stroke="#0078D4" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.2" />
      <circle cx="190" cy="81" r="72" stroke="#0078D4" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.12" />
      {/* Alert dots */}
      <circle cx="120" cy="60" r="4" fill="#ef6d58" opacity="0.8" />
      <circle cx="120" cy="60" r="8" fill="#ef6d58" opacity="0.15" />
      <text x="130" y="64" fontSize="8" fill="#ef6d58" fontFamily="monospace" opacity="0.8">DRIFT DETECTED</text>
      <circle cx="258" cy="100" r="4" fill="#4285F4" opacity="0.7" />
      <circle cx="258" cy="100" r="8" fill="#4285F4" opacity="0.12" />
      <text x="268" y="104" fontSize="8" fill="#4285F4" fontFamily="monospace" opacity="0.7">REMEDIATED</text>
      {/* Bottom label */}
      <rect x="100" y="152" width="180" height="16" rx="4" fill="#0078D4" opacity="0.1" />
      <text x="190" y="164" textAnchor="middle" fontSize="10" fill="#0078D4" fontFamily="monospace" fontWeight="700" opacity="0.8">CONTINUOUS SECURITY MONITORING</text>
    </svg>
  );
}

function XamOpsPlatformThumbnail() {
  const PILLARS = [
    { label: 'SPOT', x: 22, color: '#FF9900' },
    { label: 'DISK', x: 95, color: '#ef6d58' },
    { label: 'DBOPS', x: 168, color: '#7c5cff' },
    { label: 'SECOPS', x: 248, color: '#4285F4' },
    { label: 'COST', x: 316, color: '#ef6d58' },
  ];
  return (
    <svg viewBox="0 0 380 210" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      <rect width="380" height="210" fill="var(--parchment, #f4f1eb)" />
      <text x="190" y="34" textAnchor="middle" fontSize="11" fill="#8899aa" fontFamily="monospace" fontWeight="600" letterSpacing="2">COGNITIVE CLOUD OS</text>
      <rect x="30" y="44" width="320" height="1" fill="#334" opacity="0.3" />
      {PILLARS.map((p) => (
        <g key={p.label}>
          <rect x={p.x} y="60" width="46" height="100" rx="4" fill={p.color} opacity="0.15" />
          <rect x={p.x + 10} y="110" width="26" height="50" rx="3" fill={p.color} opacity="0.55" />
          <text x={p.x + 23} y="176" textAnchor="middle" fontSize="7.5" fill={p.color} fontFamily="monospace" fontWeight="700">{p.label}</text>
        </g>
      ))}
      <rect x="30" y="160" width="320" height="1" fill="#334" opacity="0.3" />
      <rect x="85" y="186" width="210" height="16" rx="4" fill="#ef6d58" opacity="0.12" />
      <text x="190" y="198" textAnchor="middle" fontSize="10" fill="#ef6d58" fontFamily="monospace" fontWeight="700">AWS · AZURE · GCP</text>
    </svg>
  );
}

function SpotSavingsThumbnail() {
  return (
    <svg viewBox="0 0 380 210" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      {[55, 85, 115, 145].map(y => (
        <line key={y} x1="20" y1={y} x2="360" y2={y} stroke="#223" strokeWidth="1" />
      ))}
      <defs>
        <linearGradient id="odGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#7c5cff" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="spotGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF9900" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FF9900" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <rect x="70" y="25" width="100" height="150" rx="4" fill="url(#odGrad)" />
      <rect x="210" y="130" width="100" height="45" rx="4" fill="url(#spotGrad)" />
      <line x1="20" y1="175" x2="360" y2="175" stroke="#334" strokeWidth="1.5" />
      <text x="120" y="18" textAnchor="middle" fontSize="10.5" fill="#8899aa" fontFamily="monospace">$7,000/mo</text>
      <text x="260" y="124" textAnchor="middle" fontSize="10.5" fill="#FF9900" fontFamily="monospace">$2,200/mo</text>
      <text x="120" y="193" textAnchor="middle" fontSize="9" fill="#8899aa" fontFamily="monospace">ON-DEMAND</text>
      <text x="260" y="193" textAnchor="middle" fontSize="9" fill="#FF9900" fontFamily="monospace">SPOT</text>
      <rect x="219" y="136" width="82" height="22" rx="4" fill="#FF9900" opacity="0.15" />
      <text x="260" y="151" textAnchor="middle" fontSize="11" fill="#FF9900" fontFamily="monospace" fontWeight="700">-70% cheaper</text>
      <line x1="170" y1="25" x2="210" y2="130" stroke="#445" strokeWidth="1" strokeDasharray="4 3" />
    </svg>
  );
}

export default function BlogPage() {
  const posts = [
    {
      provider: 'aws',
      tag: 'FinOps',
      title: 'Best FinOps Practices for Multi-Cloud Environments',
      excerpt: 'Seven practices that bring financial control back to teams running AWS, Azure, and GCP simultaneously, from ownership tagging to automated rightsizing.',
      read: '9 min',
      date: 'June 24, 2026',
      href: '/blog/finops-practices-multi-cloud',
      thumbEl: <FinOpsThumbnail />,
    },
    {
      provider: 'azure',
      tag: 'Security',
      title: 'What Is Cloud Security Automation and Why Is It Important?',
      excerpt: 'Manual security monitoring breaks down at cloud scale. Here is what cloud security automation actually covers and why modern teams cannot afford to skip it.',
      read: '7 min',
      date: 'June 24, 2026',
      href: '/blog/cloud-security-automation',
      thumbEl: <SecurityAutomationThumbnail />,
    },
    {
      provider: 'xamops',
      tag: 'Platform',
      title: 'What Is XamOps? A Smarter Way to Reduce Cloud Costs and Simplify Cloud Operations',
      excerpt: 'A Cognitive Cloud Operating System for DevOps, FinOps, and SRE teams. One platform that automates routine tasks, cuts spending, and keeps infrastructure under control across AWS, Azure, and GCP.',
      read: '8 min',
      date: 'June 22, 2026',
      href: '/blog/what-is-xamops',
      thumbEl: <XamOpsPlatformThumbnail />,
    },
    {
      provider: 'aws',
      tag: 'FinOps',
      title: "Your AWS Bill Jumped 40% Last Month: Here's How to Actually Investigate It",
      excerpt: 'A step-by-step checklist for DevOps engineers to diagnose and fix unexpected AWS cost spikes, before finance comes knocking again.',
      read: '9 min',
      date: 'May 28, 2026',
      href: '/blog/aws-cost-spike-investigation',
      thumbEl: <CostSpikeThumbnail />,
    },
    {
      provider: 'aws',
      tag: 'Spot',
      title: 'EC2 Spot Instances in Production: How to Stop Fearing Interruptions and Save 70%',
      excerpt: 'A practical guide for DevOps engineers on running Spot instances safely in production, with the five patterns that make interruptions a non-event.',
      read: '10 min',
      date: 'May 28, 2026',
      href: '/blog/ec2-spot-instances-production',
      thumbEl: <SpotSavingsThumbnail />,
    },
    {
      provider: 'aws',
      tag: 'FinOps',
      title: 'Disk Rightsizing: The Cost Saving Everyone Ignores',
      excerpt: 'Three moves that eliminate 30–40% of cloud storage waste: unattached volumes, gp2 migration, and over-provisioned disks. With the discipline to prevent it from coming back.',
      read: '7 min',
      date: 'May 28, 2026',
      href: '/blog/disk-rightsizing-ebs',
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
      <section className="sec-light pt-8 pb-24 overflow-x-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => {
            const CardEl = p.href ? Link : 'a';
            const cardProps = p.href ? { to: p.href } : { href: '#' };
            const t = PROVIDER_THEME[p.provider] || PROVIDER_THEME.xamops;
            return (
              <CardEl
                key={p.title}
                {...cardProps}
                className="rounded-2xl overflow-hidden hcard block min-w-0"
                style={{
                  background: t.card,
                  boxShadow: p.provider === 'aws' ? '0 0 0 1px rgba(255,153,0,0.12)' : '0 0 0 1px var(--rule)',
                  textDecoration: 'none',
                }}
              >
                <div
                  className="aspect-[16/10] overflow-hidden"
                  style={{ backgroundColor: t.thumb }}
                >
                  {p.thumbEl || null}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 eyebrow">
                    <span style={{ color: t.tag }}>{p.tag}</span>
                    <span style={{ color: t.sep }}>·</span>
                    <span style={{ color: t.date }}>{p.date}</span>
                  </div>
                  <div
                    className="serif text-[clamp(17px,4vw,22px)] mt-3 leading-[1.18]"
                    style={{ color: t.title }}
                  >
                    {p.title}
                  </div>
                  <div
                    className="text-[14px] mt-3 leading-[1.55]"
                    style={{ color: t.excerpt }}
                  >
                    {p.excerpt}
                  </div>
                  <div
                    className="text-[13px] mt-5 inline-flex items-center gap-2"
                    style={{ color: t.read }}
                  >
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
