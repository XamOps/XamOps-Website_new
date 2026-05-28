import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';
import PageHero from '../components/shared/PageHero';

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
      title: 'How Spot Automation saves teams 70% on compute',
      excerpt: 'A walk-through of the staged replacement loop, eviction handling and minimum-regular-VM safety net.',
      read: '8 min',
      date: 'Apr 28, 2026',
      href: null,
      thumb: {
        backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 12px)',
        backgroundColor: 'var(--parchment)',
      },
    },
    {
      tag: 'FinOps',
      title: 'Disk Rightsizing: the cost saving everyone ignores',
      excerpt: 'Compute gets all the FinOps press. Disks quietly waste 30–40%.',
      read: '6 min',
      date: 'Apr 14, 2026',
      href: null,
      thumb: {
        backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 12px)',
        backgroundColor: 'var(--parchment)',
      },
    },
    {
      tag: 'Vision',
      title: 'What is a Cognitive Cloud OS?',
      excerpt: 'A definition, a manifesto, and a roadmap for the next decade of cloud operations.',
      read: '12 min',
      date: 'Apr 02, 2026',
      href: null,
      thumb: {
        backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 12px)',
        backgroundColor: 'var(--parchment)',
      },
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
      <section className="sec-light pb-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {posts.map((p) => {
            const CardEl = p.href ? Link : 'a';
            const cardProps = p.href ? { to: p.href } : { href: '#' };
            return (
              <CardEl
                key={p.title}
                {...cardProps}
                className="ring-soft rounded-2xl overflow-hidden hcard block"
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
