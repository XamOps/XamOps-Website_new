import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';
import PageHero from '../components/shared/PageHero';

export default function BlogPage() {
  const posts = [
    {
      tag: 'FinOps',
      title: 'Your AWS Bill Jumped 40% Last Month — Here\'s How to Actually Investigate It',
      excerpt: 'A step-by-step checklist for DevOps engineers to diagnose and fix unexpected AWS cost spikes — before finance comes knocking again.',
      read: '9 min',
      date: 'May 28, 2026',
      href: '/blog/aws-cost-spike-investigation',
      thumb: {
        backgroundImage: 'repeating-linear-gradient(135deg, rgba(240,179,65,0.07) 0 1px, transparent 1px 12px)',
        backgroundColor: 'var(--parchment)',
      },
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
                <div className="aspect-[16/10]" style={p.thumb} />
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
