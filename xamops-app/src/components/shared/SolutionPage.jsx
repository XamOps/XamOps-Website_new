import { Icon } from '../Icons';
import PageHero from './PageHero';
import FeatureGrid from './FeatureGrid';
import CTABanner from './CTABanner';

export default function SolutionPage({ eyebrow, title, body, before, after, relevant }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} body={body} />
      <section className="sec-light py-16">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10">
          <div className="ring-soft rounded-2xl p-8" style={{ background: 'var(--ivory)' }}>
            <div className="eyebrow mb-3">A typical week</div>
            <ul className="space-y-3 text-[15px]">
              {before.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mono text-[11px] mt-1" style={{ color: 'var(--olive)' }}>—</span><span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="ring-soft rounded-2xl p-8" style={{ background: 'var(--ivory)' }}>
            <div className="eyebrow mb-3">With XamOps</div>
            <ul className="space-y-3 text-[15px]">
              {after.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <Icon.Check width="14" height="14" style={{ color: 'var(--moss)', marginTop: 5 }} /> <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <FeatureGrid title="Most relevant capabilities" items={relevant} dark />
      <CTABanner />
    </>
  );
}
