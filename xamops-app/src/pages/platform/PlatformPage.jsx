import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icons';
import PageHero from '../../components/shared/PageHero';
import CTABanner from '../../components/shared/CTABanner';
import FeatureMeta from '../../components/shared/FeatureMeta';
import {
  GROUPS, FEATURE_COUNT, groupPath, groupProviders, PROVIDER_LABEL,
} from '../../lib/platform';

/** Eight capability groups, each linking to its own page. */
function GroupIndex() {
  return (
    <section className="sec-light pb-8 md:pb-10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px ring-soft rounded-2xl overflow-hidden"
          style={{ background: 'var(--rule)' }}>
          {GROUPS.map((g, i) => {
            const I = Icon[g.icon];
            return (
              <Link key={g.id} to={groupPath(g)} className="hcard p-5 md:p-6 block"
                style={{ background: 'var(--ivory)', textDecoration: 'none', color: 'inherit' }}>
                <div className="flex items-start justify-between">
                  <I width="20" height="20" style={{ color: g.accent }} />
                  <span className="mono text-[11px]" style={{ color: 'var(--olive)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="serif text-[17px] md:text-[19px] mt-5 leading-tight">{g.name}</div>
                <div className="text-[13px] mt-2 leading-[1.5]" style={{ color: 'var(--olive)' }}>
                  {g.tagline}
                </div>
                <div className="mono text-[11px] mt-4 flex items-center justify-between"
                  style={{ color: 'var(--olive-2)' }}>
                  <span>{g.features.length} capabilities</span>
                  <Icon.Arrow width="13" height="13" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Directory row per group: the full capability names, with the descriptive copy
 * living on the group page so the two pages don't duplicate each other.
 */
function GroupDirectory({ group, index }) {
  const I = Icon[group.icon];
  return (
    <section id={group.id} className="sec-light py-7 md:py-10 border-t"
      style={{ borderColor: 'var(--rule)', scrollMarginTop: '80px' }}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-4">
            <div className="sec-label mb-5">
              [ {String(index + 1).padStart(2, '0')} ] {group.name}
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--ivory-2)' }}>
                <I width="22" height="22" style={{ color: group.accent }} />
              </div>
              <div>
                <h2 className="serif text-[clamp(24px,2.6vw,32px)] leading-[1.1]">{group.tagline}</h2>
                {group.status && <FeatureMeta status={group.status} className="mt-2.5" />}
              </div>
            </div>
            <p className="mt-4 text-[15px] leading-[1.65] max-w-[44ch]" style={{ color: 'var(--olive)' }}>
              {group.body}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-1.5">
              {groupProviders(group).map((p) => (
                <span key={p} className="chip">{PROVIDER_LABEL[p]}</span>
              ))}
            </div>
            <Link to={groupPath(group)} className="btn-ghost mt-5">
              Explore {group.name} <Icon.Arrow width="14" height="14" />
            </Link>
          </div>

          <div className="md:col-span-8">
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-0" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {group.features.map((f) => (
                <li key={f.name} className="py-3 border-b" style={{ borderColor: 'var(--rule)' }}>
                  <div className="flex items-start justify-between gap-3">
                    {f.to ? (
                      <Link to={f.to} className="ulink text-[14.5px] leading-snug"
                        style={{ color: 'var(--ink)', textDecoration: 'none' }}>{f.name}</Link>
                    ) : (
                      <span className="text-[14.5px] leading-snug" style={{ color: 'var(--ink-2)' }}>{f.name}</span>
                    )}
                    <FeatureMeta providers={f.providers} status={f.status} className="justify-end flex-shrink-0" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PlatformPage() {
  return (
    <>
      <PageHero eyebrow="Platform"
        title={[{ text: 'One platform.' }, { text: 'Every layer of your cloud.', accent: true }, { text: 'Fully automated.' }]}
        body={`XamOps unifies ${FEATURE_COUNT} capabilities into a single control plane across AWS, GCP and Azure, so engineers stop babysitting infrastructure and managers stop signing oversized cloud bills.`} />
      <GroupIndex />
      {GROUPS.map((g, i) => <GroupDirectory key={g.id} group={g} index={i} />)}
      <CTABanner />
    </>
  );
}
