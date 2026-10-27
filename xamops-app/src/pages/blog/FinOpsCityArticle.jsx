import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icons';
import CTABanner from '../../components/shared/CTABanner';
import { useDemoModal } from '../../lib/demoModal';
import useInView from '../../hooks/useInView';

// Shared layout for the "FinOps Services in <City>" posts. Each city page owns
// its copy, FAQs and reviews; the FAQ/Review data is mirrored in that route's
// schema in pageMeta.js — keep the two in sync.

// Aggregate rating shown on the page. Mirrors FINOPS_RATING in pageMeta.js.
const RATING ={ value: '4.9', count: 1459 };

const Xam = () => (
  <span style={{ color: 'var(--terracotta)', fontFamily: 'var(--font-med)', letterSpacing: '-0.01em' }}>XamOps</span>
);

const Mark = ({ children }) => (
  <strong style={{ color: 'var(--ink)', fontFamily: 'var(--font-med)' }}>{children}</strong>
);

function Reveal({ children, className = '', style, id }) {
  const [ref, inView] = useInView(0.15);
  return (
    <section
      ref={ref}
      id={id}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(18px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      {children}
    </section>
  );
}

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Bolds every keyword phrase found in a plain-text paragraph. Longest phrases
// first so "Cloud FinOps Services in X" wins over "FinOps Services in X".
function highlight(text, phrases) {
  if (!phrases.length) return text;
  const re = new RegExp(`(${[...phrases].sort((a, b) => b.length - a.length).map(escapeRe).join('|')})`, 'g');
  return text.split(re).map((part, i) => (phrases.includes(part) ? <Mark key={i}>{part}</Mark> : part));
}

const Stars = ({ label }) => (
  <span className="text-[13px] tracking-[0.15em]" aria-label={label}>★★★★★</span>
);

export default function FinOpsCityArticle({
  accent,
  date,
  read,
  h1Lead,
  h1Accent,
  lede,
  highlights,
  keywords,
  introTitle,
  introParas,
  sections,
  conclusion,
  reviews,
  faqs,
  related,
  sidebar,
  cta,
}) {
  const { setOpen } = useDemoModal();
  const hl = (t) => highlight(t, keywords);
  const ratingLabel = `Rated ${RATING.value} out of 5 from ${RATING.count.toLocaleString('en-US')} reviews`;

  const toc = [
    ...sections.map((s, i) => ({ href: `#${s.id}`, label: s.toc, prefix: String(i + 1).padStart(2, '0') })),
    { href: '#reviews', label: 'Customer reviews', prefix: null },
    { href: '#faq', label: 'Frequently asked questions', prefix: null },
  ];

  return (
    <>
      {/* ── Article header ─────────────────────────────────────── */}
      <section className="pt-22 md:pt-24 pb-9 relative overflow-hidden" style={{ background: '#131313' }}>
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(closest-side, var(--halo), transparent 70%)` }}
        />
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-7 eyebrow">
            <Link to="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
            <span style={{ color: accent }}>FinOps</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>{date}</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>{read} min read</span>
          </div>

          <h1 className="serif text-[clamp(28px,4.2vw,54px)] leading-[1.1] tracking-tight max-w-[30ch]" style={{ color: '#ffffff' }}>
            {h1Lead}{' '}
            <span style={{ color: accent }}>{h1Accent}</span>
          </h1>

          <p className="mt-5 text-[17px] leading-[1.7] max-w-[62ch]" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {lede}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-3">
              <div className="live-dot" />
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Aditya Mehta · Co-founder, XamOps</span>
            </div>
            <a href="#reviews" className="flex items-center gap-2" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.75)' }}>
              <span style={{ color: accent }}><Stars label={ratingLabel} /></span>
              <span className="text-[13px]" style={{ fontFamily: 'var(--font-mono)' }}>
                {RATING.value}/5 · {RATING.count.toLocaleString('en-US')} reviews
              </span>
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {highlights.map((h) => (
              <span
                key={h}
                className="text-[12px] px-3 py-1.5 rounded-full transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-mono)' }}
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Article body ────────────────────────────────────────── */}
      <article className="sec-light py-8 md:py-12">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-12">

            {/* ── Content column ── */}
            <div className="md:col-span-8">

              {/* Intro */}
              <Reveal className="mb-12">
                <h2 className="serif text-[clamp(22px,3.2vw,32px)] leading-[1.15] tracking-tight mb-5">
                  {introTitle}
                </h2>
                {introParas.map((p, i) => (
                  <p key={i} className="text-[17px] leading-[1.78] mb-5" style={{ color: 'var(--ink-2)' }}>
                    {hl(p)}
                  </p>
                ))}
                <p className="text-[17px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  See how our{' '}
                  <Link to="/platform/cost-analytics" style={{ color: accent, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                    cloud cost analytics platform
                  </Link>{' '}
                  turns billing data into decisions your finance and engineering teams can act on.
                </p>
              </Reveal>

              {sections.map((s, idx) => (
                <Reveal key={s.id} id={s.id} className="mb-14" style={{ scrollMarginTop: '100px' }}>
                  <div className="eyebrow mb-3" style={{ color: accent }}>{String(idx + 1).padStart(2, '0')}</div>
                  <h2 className="serif text-[clamp(22px,3.2vw,32px)] leading-[1.15] tracking-tight mb-5">
                    {s.title}
                  </h2>
                  {s.paras.map((p, i) => (
                    <p
                      key={i}
                      className="text-[15.5px] leading-[1.78]"
                      style={{ color: 'var(--ink-2)', marginBottom: i < s.paras.length - 1 ? '1.25rem' : 0 }}
                    >
                      {hl(p)}
                    </p>
                  ))}
                </Reveal>
              ))}

              {/* Conclusion callout */}
              <Reveal
                className="rounded-2xl p-7 md:p-9 ring-soft relative overflow-hidden mb-12"
                style={{ background: 'var(--ivory)' }}
              >
                <div
                  className="absolute -right-16 -bottom-16 w-[300px] h-[300px] rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(closest-side, var(--halo), transparent 70%)` }}
                />
                <div className="relative">
                  <div className="eyebrow mb-3">Conclusion</div>
                  <h2 className="serif text-[clamp(20px,3vw,32px)] leading-[1.1] tracking-tight mb-5">
                    {conclusion.title}{' '}
                    <span style={{ color: accent }}>{conclusion.accent}</span>
                  </h2>
                  {conclusion.paras.map((p, i) => (
                    <p key={i} className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                      {hl(p)}
                    </p>
                  ))}
                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => setOpen(true)} className="btn-primary">
                      Book a demo <Icon.Arrow width="14" height="14" />
                    </button>
                    <Link to="/platform/cost-analytics" className="btn-ghost">
                      See Cost Analytics
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* Reviews */}
              <Reveal id="reviews" className="mb-14" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3">Reviews</div>
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight mb-4">
                  What teams say about XamOps
                </h2>
                <div className="flex items-center gap-3 mb-6">
                  <span className="serif text-[34px] leading-none" style={{ color: 'var(--ink)' }}>{RATING.value}</span>
                  <div>
                    <div style={{ color: accent }}><Stars label={ratingLabel} /></div>
                    <div className="text-[12.5px] mt-0.5" style={{ color: 'var(--olive)' }}>
                      out of 5 · based on {RATING.count.toLocaleString('en-US')} reviews
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {reviews.map(({ quote, name, role, company }) => (
                    <figure
                      key={name}
                      className="rounded-xl p-5 flex flex-col justify-between"
                      style={{ background: 'var(--ivory)', border: '1px solid var(--rule-dark)' }}
                    >
                      <div>
                        <div className="mb-3" style={{ color: accent }}><Stars label="Rated 5 out of 5" /></div>
                        <blockquote className="text-[14px] leading-[1.7]" style={{ color: 'var(--ink-2)' }}>
                          &ldquo;{quote}&rdquo;
                        </blockquote>
                      </div>
                      <figcaption className="mt-4 pt-4" style={{ borderTop: '1px solid var(--rule-dark)' }}>
                        <div className="text-[13px]" style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}>{name}</div>
                        <div className="text-[12px] mt-0.5" style={{ color: 'var(--olive)' }}>{role}, {company}</div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <Link to="/customers" className="inline-block mt-4 text-[13px]" style={{ color: accent, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  Read more customer stories
                </Link>
              </Reveal>

              {/* Related reading */}
              <Reveal className="mb-14">
                <div className="eyebrow mb-4">Related reading</div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {related.map(({ to, title, blurb }) => (
                    <Link
                      key={to}
                      to={to}
                      className="ring-soft rounded-xl p-4 block transition-transform hover:-translate-y-0.5"
                      style={{ background: 'var(--ivory)', textDecoration: 'none' }}
                    >
                      <div className="text-[14px] mb-1" style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}>{title}</div>
                      <div className="text-[13px]" style={{ color: 'var(--olive)' }}>{blurb}</div>
                    </Link>
                  ))}
                </div>
              </Reveal>

              {/* FAQ */}
              <Reveal id="faq" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3">FAQs</div>
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {faqs.map(({ q, a }, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden"
                      style={{ border: '1px solid var(--rule-dark)', background: 'var(--ivory)' }}
                    >
                      <div className="px-5 py-4" style={{ borderBottom: '1px solid var(--rule-dark)', background: 'var(--parchment)' }}>
                        <h3 className="text-[14px] leading-[1.55]" style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}>
                          {i + 1}. {q}
                        </h3>
                      </div>
                      <div className="px-5 py-4">
                        <p className="text-[14px] leading-[1.65]" style={{ color: 'var(--ink-2)' }}>{a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

            </div>

            {/* ── Sidebar ── */}
            <div className="hidden md:block md:col-span-4">
              <div style={{ position: 'sticky', top: '96px' }} className="space-y-4">

                <div className="ring-soft rounded-xl p-5" style={{ background: 'var(--ivory)' }}>
                  <div className="eyebrow mb-4">About this article</div>
                  <div className="space-y-3 text-[13px]">
                    {[
                      { label: 'Published', value: date, accent: false },
                      { label: 'Read time', value: `${read} minutes`, accent: false },
                      { label: 'Category', value: 'FinOps', accent: true },
                      { label: 'Author', value: 'Aditya Mehta', accent: false },
                    ].map(({ label, value, accent: isAccent }) => (
                      <div key={label} className="flex justify-between items-center gap-4">
                        <span style={{ color: 'var(--olive)' }}>{label}</span>
                        <span
                          style={{
                            color: isAccent ? accent : 'var(--ink)',
                            fontFamily: isAccent ? 'var(--font-mono)' : 'inherit',
                            fontSize: isAccent ? '11px' : 'inherit',
                            letterSpacing: isAccent ? '0.12em' : 'inherit',
                            textTransform: isAccent ? 'uppercase' : 'inherit',
                          }}
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="ring-soft rounded-xl p-5" style={{ background: 'var(--ivory)' }}>
                  <div className="eyebrow mb-4">In this article</div>
                  <nav className="space-y-1">
                    {toc.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-2.5 py-1.5 opacity-60 hover:opacity-100 transition-opacity"
                        style={{ textDecoration: 'none', color: 'var(--ink-2)' }}
                      >
                        {item.prefix ? (
                          <span className="mono shrink-0 text-[11px] mt-[2px]" style={{ color: accent }}>{item.prefix}</span>
                        ) : (
                          <span className="mono shrink-0 text-[11px] mt-[2px]" style={{ color: 'var(--rule-dark)' }}>§</span>
                        )}
                        <span className="text-[13px] leading-[1.45]">{item.label}</span>
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="ring-soft rounded-xl p-5 relative overflow-hidden" style={{ background: 'var(--ivory)' }}>
                  <div
                    className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(closest-side, var(--halo), transparent 70%)` }}
                  />
                  <div className="relative">
                    <div className="text-[14px] leading-[1.5] mb-2" style={{ fontFamily: 'var(--font-med)' }}>
                      {sidebar.title}
                    </div>
                    <p className="text-[12.5px] leading-[1.6] mb-4" style={{ color: 'var(--olive)' }}>
                      <Xam /> {sidebar.text}
                    </p>
                    <button
                      onClick={() => setOpen(true)}
                      className="btn-primary w-full justify-center"
                      style={{ fontSize: '13px', padding: '10px 14px' }}
                    >
                      Book a demo <Icon.Arrow width="13" height="13" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </article>

      <CTABanner heading={cta.heading} sub={cta.sub} />
    </>
  );
}
