import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icons';
import PageHero from '../../components/shared/PageHero';
import CTABanner from '../../components/shared/CTABanner';
import FeatureMeta from '../../components/shared/FeatureMeta';
import NotFoundPage from '../NotFoundPage';
import {
  GROUPS, groupById, groupPath, groupProviders,
  featureSlug, PROVIDER_LABEL,
} from '../../lib/platform';
import { detailFor, faqsFor } from '../../lib/platformDetail';

/** Jump-nav over the capabilities on this page. */
function Contents({ group }) {
  return (
    <section className="sec-light pb-8 md:pb-10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="ring-soft rounded-2xl p-5 md:p-6" style={{ background: 'var(--ivory)' }}>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <div className="eyebrow">On this page</div>
            <div className="flex flex-wrap items-center gap-1.5">
              {groupProviders(group).map((p) => (
                <span key={p} className="chip">{PROVIDER_LABEL[p]}</span>
              ))}
            </div>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0"
            style={{ listStyle: 'none', margin: 0, padding: 0, counterReset: 'cap' }}>
            {group.features.map((f, i) => (
              <li key={f.name} className="py-2 border-b" style={{ borderColor: 'var(--rule)' }}>
                <a href={`#${featureSlug(f.name)}`}
                  className="flex items-baseline gap-3 text-[14px]"
                  style={{ color: 'var(--ink-2)', textDecoration: 'none' }}>
                  <span className="mono text-[11px] flex-shrink-0" style={{ color: 'var(--olive-2)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="ulink">{f.name}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/** One capability, in depth. */
function Capability({ feature, index, accent }) {
  const d = detailFor(feature.name);
  return (
    <div id={featureSlug(feature.name)} className="py-7 md:py-9 border-t"
      style={{ borderColor: 'var(--rule)', scrollMarginTop: '80px' }}>
      <div className="grid md:grid-cols-12 gap-5 md:gap-10">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="mono text-[11px]" style={{ color: accent }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <FeatureMeta providers={feature.providers} status={feature.status} />
          </div>
          <h3 className="serif text-[clamp(23px,2.5vw,30px)] leading-[1.12]">{feature.name}</h3>
          {feature.to && (
            <Link to={feature.to} className="btn-ghost mt-4">
              Deep dive <Icon.Arrow width="14" height="14" />
            </Link>
          )}
        </div>
        <div className="md:col-span-8">
          <p className="text-[16px] leading-[1.65] m-0" style={{ color: 'var(--ink-2)' }}>
            {feature.body}
          </p>
          {d?.detail && (
            <p className="mt-3 text-[15px] leading-[1.7]" style={{ color: 'var(--olive)' }}>
              {d.detail}
            </p>
          )}
          {d?.bullets && (
            <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-2.5"
              style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {d.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[14px]" style={{ color: 'var(--ink-2)' }}>
                  <Icon.Check width="14" height="14" style={{ color: accent, marginTop: 4, flexShrink: 0 }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function Capabilities({ group }) {
  return (
    <section className="sec-light py-4 md:py-6">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="sec-label mb-6">[ 01 ] {group.features.length} capabilities in detail</div>
        {group.features.map((f, i) => (
          <Capability key={f.name} feature={f} index={i} accent={group.accent} />
        ))}
      </div>
    </section>
  );
}

function Faqs({ group }) {
  const faqs = faqsFor(group.id);
  if (!faqs.length) return null;
  return (
    <section className="sec-light py-8 md:py-12 border-t" style={{ borderColor: 'var(--rule)' }}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-4">
            <div className="sec-label mb-5">[ 02 ] Questions</div>
            <h2 className="serif text-[clamp(28px,3.4vw,40px)] leading-[1.08]">
              {group.name},{' '}
              <span style={{ color: 'var(--terracotta)' }}>answered.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            {faqs.map(([q, a], i) => (
              <div key={q} className="py-5 border-b" style={{ borderColor: 'var(--rule)' }}>
                <div className="flex items-start gap-4">
                  <span className="mono text-[11px] mt-1.5 flex-shrink-0" style={{ color: 'var(--olive-2)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="text-[16px] font-medium" style={{ color: 'var(--ink)' }}>{q}</div>
                    <p className="mt-2 text-[15px] leading-[1.65]" style={{ color: 'var(--olive)' }}>{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** The rest of the platform, so a group page is never a dead end. */
function OtherGroups({ current }) {
  const others = GROUPS.filter((g) => g.id !== current.id);
  return (
    <section className="sec-dark py-8 md:py-12">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-5 mb-8">
          <div>
            <div className="sec-label dark mb-4">[ 03 ] Rest of the platform</div>
            <h2 className="serif text-[clamp(28px,4vw,46px)] leading-[1.06] max-w-[22ch]">
              {current.name} is one module of{' '}
              <span style={{ color: 'var(--terracotta)' }}>{GROUPS.length}.</span>
            </h2>
          </div>
          <Link to="/platform" className="btn-ghost-dark">
            All capabilities <Icon.Arrow width="14" height="14" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px ring-soft-dark rounded-2xl overflow-hidden"
          style={{ background: 'var(--rule-dark)' }}>
          {others.map((g) => {
            const I = Icon[g.icon];
            return (
              <Link key={g.id} to={groupPath(g)} className="hcard p-5 block"
                style={{ background: 'var(--ivory)', textDecoration: 'none', color: 'inherit' }}>
                <I width="20" height="20" style={{ color: g.accent }} />
                <div className="serif text-[16px] mt-5 leading-tight">{g.name}</div>
                <div className="mono text-[11px] mt-2" style={{ color: 'var(--olive)' }}>
                  {g.features.length} caps
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function GroupPage({ id }) {
  const group = groupById(id);
  if (!group) return <NotFoundPage />;

  const I = Icon[group.icon];
  const [first, ...rest] = group.tagline.split(' ');

  return (
    <>
      <PageHero
        eyebrow={`Platform · ${group.name}`}
        title={[{ text: first }, { text: rest.join(' '), accent: true }]}
        body={group.body}
      />

      {/* The problem this module exists to solve */}
      <section className="sec-light pb-8 md:pb-10">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="ring-soft rounded-2xl p-6 md:p-8 grid md:grid-cols-12 gap-6 md:gap-10"
            style={{ background: 'var(--ivory)' }}>
            <div className="md:col-span-5 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--ivory-2)' }}>
                <I width="22" height="22" style={{ color: group.accent }} />
              </div>
              <div>
                <div className="eyebrow">Without XamOps</div>
                {group.status && <FeatureMeta status={group.status} className="mt-2" />}
              </div>
            </div>
            <p className="md:col-span-7 text-[16px] md:text-[17px] leading-[1.6] m-0"
              style={{ color: 'var(--ink-2)' }}>
              {group.problem}
            </p>
          </div>
        </div>
      </section>

      <Contents group={group} />
      <Capabilities group={group} />
      <Faqs group={group} />
      <OtherGroups current={group} />
      <CTABanner
        heading={`Ready to automate ${group.name.toLowerCase()}?`}
        sub="30-minute walkthrough. We connect to a sandbox and show this module running against real infrastructure."
      />
    </>
  );
}
