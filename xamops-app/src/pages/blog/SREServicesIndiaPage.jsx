import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icons';
import CTABanner from '../../components/shared/CTABanner';
import { useDemoModal } from '../../lib/demoModal';

const Xam = () => (
  <span style={{ color: 'var(--terracotta)', fontFamily: 'var(--font-med)', letterSpacing: '-0.01em' }}>XamOps</span>
);

const ACCENT = 'var(--viz-5)';

const NEEDS = [
  'Reduce application downtime',
  'Improve system performance',
  'Automate repetitive infrastructure tasks',
  'Detect potential issues earlier',
  'Improve incident response',
  'Monitor cloud infrastructure',
  'Manage scalability more effectively',
  'Establish measurable reliability goals',
];

const CITIES = [
  {
    id: 'noida',
    prefix: '03',
    title: 'Site Reliability Engineering Services in Noida',
    paras: [
      "Businesses in Noida are increasingly adopting cloud applications and digital platforms. Site Reliability Engineering Services in Noida can help organizations improve infrastructure monitoring, application availability, cloud performance, and deployment processes.",
      'With the right SRE approach, businesses can automate repetitive tasks and identify reliability problems before they become major production issues.',
    ],
  },
  {
    id: 'delhi-ncr',
    prefix: '04',
    title: 'Site Reliability Engineering Services in Delhi NCR',
    paras: [
      'Organizations operating across Delhi NCR need dependable digital infrastructure to maintain consistent customer experiences. Site Reliability Engineering Services in Delhi NCR can support application monitoring, cloud infrastructure, incident management, and performance optimization.',
      'Proactive monitoring and automation can help teams identify potential problems before they result in significant downtime.',
    ],
  },
  {
    id: 'bangalore',
    prefix: '05',
    title: 'Site Reliability Engineering Services in Bangalore',
    paras: [
      "Bangalore's strong technology and SaaS ecosystem means many businesses manage applications with rapidly changing workloads. Site Reliability Engineering Services in Bangalore can help companies improve application reliability, scalability, observability, and deployment efficiency.",
      'SRE practices are particularly useful for organizations working with microservices, containers, Kubernetes, and cloud-native applications.',
    ],
  },
  {
    id: 'hyderabad',
    prefix: '06',
    title: 'Site Reliability Engineering Services in Hyderabad',
    paras: [
      'Hyderabad is another major technology and cloud services hub. Site Reliability Engineering Services in Hyderabad can help organizations manage complex infrastructure while maintaining application availability and performance.',
      'From infrastructure monitoring to automated deployments and incident management, SRE can create a more structured approach to production operations.',
    ],
  },
  {
    id: 'jaipur',
    prefix: '07',
    title: 'Site Reliability Engineering Services in Jaipur',
    paras: [
      'Startups and growing technology businesses in Jaipur also need reliable infrastructure as their applications and customer base expand. Site Reliability Engineering Services in Jaipur can help businesses improve uptime, monitor infrastructure, automate operational processes, and prepare their systems for future growth.',
    ],
  },
];

const FAQS = [
  { q: 'What are Site Reliability Engineering Services?', a: 'Site Reliability Engineering Services help businesses improve the reliability, availability, scalability, and performance of applications and IT infrastructure using engineering, automation, monitoring, and operational practices.' },
  { q: 'Why are SRE services important for businesses?', a: 'SRE services can help reduce downtime, improve application performance, detect infrastructure issues earlier, and automate repetitive operational activities.' },
  { q: 'Can XamOps provide SRE solutions for cloud infrastructure?', a: 'Yes. XamOps provides cloud operations, observability, reliability, and SRE-focused capabilities that can help businesses manage modern infrastructure, investigate incidents, and improve operational efficiency.' },
  { q: 'What is the difference between SRE and DevOps?', a: 'DevOps focuses on collaboration and improving software delivery between development and operations teams, while SRE applies software engineering principles to reliability and operational challenges. Both approaches can work together to improve software delivery and infrastructure reliability.' },
  { q: 'How do I choose the right SRE service provider?', a: 'Look for experience in your cloud environment, monitoring and observability, automation, incident management, scalability, and application reliability. The provider should also understand your business objectives and existing infrastructure.' },
];

const TOC_ITEMS = [
  { href: '#what-is-sre', label: 'What Are Site Reliability Engineering Services?', prefix: '01' },
  { href: '#why-need', label: 'Why Do Businesses Need SRE Services?', prefix: '02' },
  { href: '#noida', label: 'SRE Services in Noida', prefix: '03' },
  { href: '#delhi-ncr', label: 'SRE Services in Delhi NCR', prefix: '04' },
  { href: '#bangalore', label: 'SRE Services in Bangalore', prefix: '05' },
  { href: '#hyderabad', label: 'SRE Services in Hyderabad', prefix: '06' },
  { href: '#jaipur', label: 'SRE Services in Jaipur', prefix: '07' },
  { href: '#xamops-help', label: 'How Can XamOps Help With SRE?', prefix: '08' },
  { href: '#choose-provider', label: 'How to Choose the Right SRE Service Provider?', prefix: '09' },
  { href: '#faq', label: 'Frequently asked questions', prefix: null },
];

export default function SREServicesIndiaPage() {
  const { setOpen } = useDemoModal();

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
            <span style={{ color: ACCENT }}>SRE</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>August 19, 2026</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>9 min read</span>
          </div>

          <h1 className="serif text-[clamp(28px,4.2vw,54px)] leading-[1.1] tracking-tight max-w-[28ch]" style={{ color: '#ffffff' }}>
            Site Reliability Engineering Services in India:{' '}
            <span style={{ color: ACCENT }}>Noida, Delhi NCR, Bangalore, Hyderabad & Jaipur</span>
          </h1>

          <p
            className="mt-5 text-[17px] leading-[1.7] max-w-[62ch]"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            Modern businesses depend on cloud applications, APIs, databases, and digital
            platforms to serve customers every day. Even a small period of downtime can affect
            revenue, productivity, and customer trust. This is where Site Reliability
            Engineering Services can help businesses build more stable and scalable digital
            infrastructure.
          </p>

          <div className="mt-7 flex items-center gap-3">
            <div className="live-dot" />
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>XamOps Team</span>
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
              <section className="mb-12">
                <p className="text-[17px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  <Xam /> provides SRE-focused solutions designed to help businesses improve
                  application reliability, automate operational processes, monitor
                  infrastructure, and manage cloud environments more efficiently.
                </p>
              </section>

              {/* What is SRE */}
              <section id="what-is-sre" className="mb-14" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3" style={{ color: ACCENT }}>01</div>
                <h2 className="serif text-[clamp(22px,3.2vw,32px)] leading-[1.15] tracking-tight mb-5">
                  What Are Site Reliability Engineering Services?
                </h2>
                <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                  Site Reliability Engineering Services combine software engineering and IT
                  operations to improve the reliability, availability, and performance of
                  applications and infrastructure.
                </p>
                <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                  SRE teams use automation, monitoring, observability, incident management, and
                  performance optimization to identify potential issues and resolve them before
                  they significantly affect users.
                </p>
                <p className="text-[15.5px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  These services can include infrastructure monitoring, cloud optimization,
                  deployment automation, incident response, capacity planning, reliability
                  testing, and performance monitoring.
                </p>
              </section>

              {/* Why businesses need SRE */}
              <section id="why-need" className="mb-14" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3" style={{ color: ACCENT }}>02</div>
                <h2 className="serif text-[clamp(22px,3.2vw,32px)] leading-[1.15] tracking-tight mb-5">
                  Why Do Businesses Need SRE Services?
                </h2>
                <p className="text-[15.5px] leading-[1.78] mb-5" style={{ color: 'var(--ink-2)' }}>
                  As applications grow, manually managing infrastructure becomes increasingly
                  difficult. Businesses need systems that can handle changing workloads while
                  maintaining consistent performance.
                </p>
                <p className="text-[15.5px] leading-[1.78] mb-5" style={{ color: 'var(--ink-2)' }}>
                  With the right SRE services, businesses can:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  {NEEDS.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-[14.5px]" style={{ color: 'var(--ink-2)' }}>
                      <Icon.Check width="14" height="14" style={{ color: ACCENT, flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-[15.5px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  The objective is to create reliable systems while reducing unnecessary manual
                  operational work.
                </p>
              </section>

              {/* City sections */}
              {CITIES.map((city) => (
                <section key={city.id} id={city.id} className="mb-14" style={{ scrollMarginTop: '100px' }}>
                  <div className="eyebrow mb-3" style={{ color: ACCENT }}>{city.prefix}</div>
                  <h2 className="serif text-[clamp(22px,3.2vw,32px)] leading-[1.15] tracking-tight mb-5">
                    {city.title}
                  </h2>
                  {city.paras.map((p, i) => (
                    <p
                      key={i}
                      className="text-[15.5px] leading-[1.78]"
                      style={{ color: 'var(--ink-2)', marginBottom: i < city.paras.length - 1 ? '1.25rem' : 0 }}
                    >
                      {p}
                    </p>
                  ))}
                </section>
              ))}

              {/* How XamOps can help */}
              <section id="xamops-help" className="mb-14" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3" style={{ color: ACCENT }}>08</div>
                <h2 className="serif text-[clamp(22px,3.2vw,32px)] leading-[1.15] tracking-tight mb-5">
                  How Can XamOps Help With SRE?
                </h2>
                <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                  <Xam /> helps businesses approach infrastructure reliability through
                  automation, monitoring, cloud operations, and SRE practices. Instead of
                  relying only on manual troubleshooting, businesses can use structured
                  processes to monitor systems, identify risks, and improve operational
                  efficiency.
                </p>
                <p className="text-[15.5px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  An effective SRE strategy should be based on the organization's
                  infrastructure, application architecture, traffic patterns, and business
                  requirements. This allows reliability improvements to support both technical
                  performance and long-term business growth.
                </p>
              </section>

              {/* Choosing a provider */}
              <section id="choose-provider" className="mb-14" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3" style={{ color: ACCENT }}>09</div>
                <h2 className="serif text-[clamp(22px,3.2vw,32px)] leading-[1.15] tracking-tight mb-5">
                  How to Choose the Right SRE Service Provider?
                </h2>
                <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                  When choosing an SRE service provider, consider their experience with cloud
                  platforms, infrastructure automation, monitoring, observability, Kubernetes,
                  incident management, and performance optimization.
                </p>
                <p className="text-[15.5px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  It is also important to choose a provider that understands your existing
                  technology environment rather than applying the same solution to every
                  business.
                </p>
              </section>

              {/* Conclusion callout */}
              <section
                className="rounded-2xl p-7 md:p-9 ring-soft relative overflow-hidden mb-12"
                style={{ background: 'var(--ivory)' }}
              >
                <div
                  className="absolute -right-16 -bottom-16 w-[300px] h-[300px] rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(closest-side, var(--halo), transparent 70%)` }}
                />
                <div className="relative">
                  <div className="eyebrow mb-3">Get started</div>
                  <h2 className="serif text-[clamp(20px,3vw,32px)] leading-[1.1] tracking-tight mb-5">
                    Build reliable infrastructure with{' '}
                    <span style={{ color: ACCENT }}>Site Reliability Engineering.</span>
                  </h2>
                  <p className="text-[15.5px] leading-[1.78] mb-7" style={{ color: 'var(--ink-2)' }}>
                    Whether your team is based in Noida, Delhi NCR, Bangalore, Hyderabad, or
                    Jaipur, <Xam /> helps you monitor infrastructure, automate operations, and
                    improve reliability across your cloud environment.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => setOpen(true)} className="btn-primary">
                      Book a demo <Icon.Arrow width="14" height="14" />
                    </button>
                    <Link to="/platform/sre" className="btn-ghost">
                      See SRE Automation Platform
                    </Link>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3">FAQs</div>
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {FAQS.map(({ q, a }, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden"
                      style={{ border: '1px solid var(--rule-dark)', background: 'var(--ivory)' }}
                    >
                      <div
                        className="px-5 py-4"
                        style={{ borderBottom: '1px solid var(--rule-dark)', background: 'var(--parchment)' }}
                      >
                        <p
                          className="text-[14px] leading-[1.55]"
                          style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}
                        >
                          {i + 1}. {q}
                        </p>
                      </div>
                      <div className="px-5 py-4">
                        <p className="text-[14px] leading-[1.65]" style={{ color: 'var(--ink-2)' }}>
                          {a}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* ── Sidebar ── */}
            <div className="hidden md:block md:col-span-4">
              <div style={{ position: 'sticky', top: '96px' }} className="space-y-4">

                {/* Meta */}
                <div className="ring-soft rounded-xl p-5" style={{ background: 'var(--ivory)' }}>
                  <div className="eyebrow mb-4">About this article</div>
                  <div className="space-y-3 text-[13px]">
                    {[
                      { label: 'Published', value: 'August 19, 2026', accent: false },
                      { label: 'Read time', value: '9 minutes', accent: false },
                      { label: 'Category', value: 'SRE', accent: true },
                      { label: 'Author', value: 'XamOps Team', accent: false },
                    ].map(({ label, value, accent }) => (
                      <div key={label} className="flex justify-between items-center gap-4">
                        <span style={{ color: 'var(--olive)' }}>{label}</span>
                        <span
                          style={{
                            color: accent ? ACCENT : 'var(--ink)',
                            fontFamily: accent ? 'var(--font-mono)' : 'inherit',
                            fontSize: accent ? '11px' : 'inherit',
                            letterSpacing: accent ? '0.12em' : 'inherit',
                            textTransform: accent ? 'uppercase' : 'inherit',
                          }}
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TOC */}
                <div className="ring-soft rounded-xl p-5" style={{ background: 'var(--ivory)' }}>
                  <div className="eyebrow mb-4">In this article</div>
                  <nav className="space-y-1">
                    {TOC_ITEMS.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-2.5 py-1.5 opacity-60 hover:opacity-100 transition-opacity"
                        style={{ textDecoration: 'none', color: 'var(--ink-2)' }}
                      >
                        {item.prefix ? (
                          <span className="mono shrink-0 text-[11px] mt-[2px]" style={{ color: ACCENT }}>
                            {item.prefix}
                          </span>
                        ) : (
                          <span className="mono shrink-0 text-[11px] mt-[2px]" style={{ color: 'var(--rule-dark)' }}>
                            §
                          </span>
                        )}
                        <span className="text-[13px] leading-[1.45]">{item.label}</span>
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Mini CTA */}
                <div
                  className="ring-soft rounded-xl p-5 relative overflow-hidden"
                  style={{ background: 'var(--ivory)' }}
                >
                  <div
                    className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(closest-side, var(--halo), transparent 70%)` }}
                  />
                  <div className="relative">
                    <div className="text-[14px] leading-[1.5] mb-2" style={{ fontFamily: 'var(--font-med)' }}>
                      Reliability, automated.
                    </div>
                    <p className="text-[12.5px] leading-[1.6] mb-4" style={{ color: 'var(--olive)' }}>
                      <Xam /> monitors infrastructure continuously and resolves recurring
                      incidents before they reach your customers.
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

      <CTABanner
        heading="Build reliable cloud infrastructure with XamOps."
        sub="Real-time monitoring, automated incident response, and cost optimization for enterprises in Noida, Delhi NCR, Bangalore, Hyderabad, and Jaipur."
      />
    </>
  );
}
