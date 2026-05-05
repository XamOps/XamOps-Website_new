import { Icon } from '../components/Icons';
import PageHero from '../components/shared/PageHero';

export default function BlogPage() {
  const posts = [
    { tag: 'Spot',   title: 'How Spot Automation saves teams 70% on compute',  excerpt: 'A walk-through of the staged replacement loop, eviction handling and minimum-regular-VM safety net.', read: '8 min',  date: 'Apr 28, 2026' },
    { tag: 'FinOps', title: 'Disk Rightsizing: the cost saving everyone ignores', excerpt: 'Compute gets all the FinOps press. Disks quietly waste 30–40%.', read: '6 min',  date: 'Apr 14, 2026' },
    { tag: 'Vision', title: 'What is a Cognitive Cloud OS?',                    excerpt: 'A definition, a manifesto, and a roadmap for the next decade of cloud operations.', read: '12 min', date: 'Apr 02, 2026' },
  ];
  return (
    <>
      <PageHero eyebrow="Blog"
        title={[{ text: 'Notes from' }, { text: 'the cognitive layer.', accent: true }]}
        body="Engineering deep-dives, FinOps math, and the occasional opinion from the people building XamOps." cta={false} />
      <section className="sec-light pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <a key={p.title} href="#" className="ring-soft rounded-2xl overflow-hidden hcard block" style={{ background: 'var(--ivory)' }}>
              <div className="aspect-[16/10]" style={{ backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 12px)', backgroundColor: 'var(--parchment)' }} />
              <div className="p-6">
                <div className="flex items-center gap-3 eyebrow"><span>{p.tag}</span><span>·</span><span>{p.date}</span></div>
                <div className="serif text-[22px] mt-3 leading-[1.18]">{p.title}</div>
                <div className="text-[14px] mt-3 leading-[1.55]" style={{ color: 'var(--olive)' }}>{p.excerpt}</div>
                <div className="text-[13px] mt-5 inline-flex items-center gap-2 ulink">Read · {p.read} <Icon.Arrow width="14" height="14" /></div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
