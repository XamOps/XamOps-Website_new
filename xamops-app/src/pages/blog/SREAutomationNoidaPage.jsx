import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icons';
import CTABanner from '../../components/shared/CTABanner';
import { useDemoModal } from '../../lib/demoModal';

const Xam = () => (
  <span style={{ color: 'var(--terracotta)', fontFamily: 'var(--font-med)', letterSpacing: '-0.01em' }}>XamOps</span>
);

const ACCENT = '#14b8a6';

const WHY_NOIDA = [
  'Downtime without planning',
  'Slow incident response',
  'Performance bottlenecks',
  'High cloud infrastructure costs',
  'Invisibility of the infrastructure',
  'Manually operated processes',
];

const CAPABILITIES = [
  'Monitor cloud infrastructure in real-time',
  'Automate recurring operational tasks',
  'Boost application performance',
  'Cut down on manual work',
  'Enhance cloud governance',
  'Boost infrastructure reliability',
];

const CHALLENGES = [
  { title: 'Less Visibility', body: 'The absence of any centralized monitoring makes it hard to locate problems within the cloud infrastructure.' },
  { title: 'Manually Troubleshooting Issues', body: 'Engineers manually troubleshoot issues which could have been avoided through proper monitoring.' },
  { title: 'High Cloud Costs', body: 'The cost associated with cloud can become very high owing to the inefficient use of infrastructure.' },
  { title: 'Performance Issues with Infrastructure', body: 'Application performance can suffer significantly when there are unresolved problems in the underlying infrastructure.' },
  { title: 'Multi-Cloud Environment Complexities', body: 'Managing applications over multiple clouds, including AWS, Microsoft Azure, and Google Cloud, requires careful coordination.' },
];

const SOLUTIONS = [
  { title: 'Centralized Visibility', body: 'A single dashboard replaces scattered monitoring tools, so infrastructure problems surface immediately instead of hiding across disconnected systems.' },
  { title: 'Automated Issue Resolution', body: 'Recurring incidents are detected and remediated automatically, freeing engineers from repetitive manual troubleshooting.' },
  { title: 'Cloud Cost Optimization', body: 'Continuous analysis of resource utilization identifies waste and inefficiency, keeping cloud spend under control.' },
  { title: 'Proactive Performance Monitoring', body: 'Real-time infrastructure health checks catch performance issues before they affect application availability.' },
  { title: 'Unified Multi-Cloud Management', body: 'AWS, Microsoft Azure, and Google Cloud are managed from one platform, removing the complexity of juggling separate consoles.' },
];

const BENEFITS = [
  'Increased Cloud Reliability',
  'Quick Problem Solving',
  'Decreased Downtime in Infrastructure',
  'Higher Cloud Efficiency',
  'Automated Workflow Management',
  'Reduced Cloud Infrastructure Cost',
  'Advanced Cloud Governance',
  'Multi-Cloud Insights',
  'Infrastructure Health Management',
  'Enterprise-Level Cloud Security',
];

const WHY_XAMOPS = [
  'Intelligent cloud automation',
  'Real-time observability',
  'Cloud infrastructure management',
  'Automated incident response',
  'Performance optimization',
  'Cloud governance',
  'Resource optimization',
  'Enterprise scalability',
];

const FAQS = [
  { q: 'What is an SRE Automation Platform in Noida?', a: 'An SRE Automation Platform enables organizations to automate cloud operations, monitoring, reduce downtime, and enhance application reliability through Site Reliability Engineering principles.' },
  { q: 'How does Xamops improve Cloud Infrastructure in Noida?', a: 'Xamops ensures cloud monitoring in real time, incident management automation, automation of cloud infrastructure, and performance optimization.' },
  { q: 'Why should businesses in Noida invest in Cloud Infrastructure Management?', a: 'Effective Cloud Infrastructure Management in Noida is a way for organizations to enhance system performance, save on cloud costs, increase security, and keep application availability high.' },
  { q: 'Which industries can benefit from the Xamops SRE Automation Platform?', a: 'Xamops caters to IT firms, SaaS firms, healthcare firms, manufacturing, BFSI, retail, logistics, education, and enterprises having cloud infrastructures.' },
  { q: 'Can Xamops reduce cloud downtime?', a: 'Yes. Xamops monitors cloud infrastructure continuously, identifies any problems in advance, and responds automatically to avoid downtime and increase service reliability.' },
];

const TOC_ITEMS = [
  { href: '#why-noida', label: 'Why Businesses in Noida Need an SRE Automation Platform', prefix: '01' },
  { href: '#what-is-sre', label: 'What Is an SRE Automation Platform?', prefix: '02' },
  { href: '#challenges', label: 'Challenges of Managing Cloud Infrastructure', prefix: '03' },
  { href: '#improvements', label: 'How Xamops Improves Cloud Infrastructure', prefix: '04' },
  { href: '#benefits', label: 'Benefits of Choosing Xamops', prefix: '05' },
  { href: '#why-xamops', label: 'Why Xamops Is the Preferred Platform', prefix: '06' },
  { href: '#faq', label: 'Frequently asked questions', prefix: null },
];

export default function SREAutomationNoidaPage() {
  const { setOpen } = useDemoModal();

  return (
    <>
      {/* ── Article header ─────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-14 relative overflow-hidden" style={{ background: '#0c1f1c' }}>
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(closest-side, rgba(20,184,166,0.1), transparent 70%)` }}
        />
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-7 eyebrow">
            <Link to="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
            <span style={{ color: ACCENT }}>SRE</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>July 10, 2026</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>8 min read</span>
          </div>

          <h1 className="serif text-[clamp(30px,4.6vw,58px)] leading-[1.08] tracking-tight max-w-[24ch]" style={{ color: '#ffffff' }}>
            SRE Automation Platform:{' '}
            <span style={{ color: ACCENT }}>Building Reliable Cloud Infrastructure for Enterprises in Noida</span>
          </h1>

          <p
            className="mt-5 text-[17px] leading-[1.7] max-w-[62ch]"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            As cloud infrastructure grows more complex, manual management can no longer keep pace.
            Here is how Site Reliability Engineering automation helps enterprises in Noida, Delhi,
            and Lucknow build resilient, cost-efficient cloud environments.
          </p>

          <div className="mt-7 flex items-center gap-3">
            <div className="live-dot" />
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>XamOps Team</span>
          </div>
        </div>
      </section>

      {/* ── Article body ────────────────────────────────────────── */}
      <article className="sec-light py-12 md:py-20">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-12">

            {/* ── Content column ── */}
            <div className="md:col-span-8">

              {/* Intro */}
              <section className="mb-12">
                <p className="text-[17px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  In today's era, cloud computing plays an integral part in business organizations.
                  Organizations of all sizes use cloud infrastructure for operating their
                  applications, keeping customer data, and delivering cloud services without hassle.
                  But with more development of cloud infrastructure, it is becoming tough to manage
                  manually. Issues related to cloud infrastructure failures, application downtime,
                  rising cloud costs, and incident resolution can affect the performance of your
                  organization adversely.
                </p>
                <p className="text-[17px] leading-[1.78] mt-5" style={{ color: 'var(--ink-2)' }}>
                  This is when you should think of the <Xam /> SRE Automation Platform in Noida.
                  With the help of the principles of Site Reliability Engineering (SRE), Xamops is
                  offering solutions to organizations which want to automate their cloud management,
                  monitor cloud infrastructure instantly, and resolve issues well before they cause
                  problems to their customers.
                </p>
                <p className="text-[17px] leading-[1.78] mt-5" style={{ color: 'var(--ink-2)' }}>
                  It does not matter if you work in Noida, Delhi, Lucknow, or NCR — adopting an SRE
                  Automation Platform is the key to creating a robust cloud infrastructure
                  environment.
                </p>
              </section>

              {/* Why Noida needs it */}
              <section id="why-noida" className="mb-14" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3" style={{ color: ACCENT }}>01</div>
                <h2 className="serif text-[clamp(22px,3.2vw,32px)] leading-[1.15] tracking-tight mb-5">
                  Why Businesses in Noida Need an SRE Automation Platform
                </h2>
                <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                  Noida has emerged as one of the most rapidly growing tech centers in India.
                  Companies working in the field of IT services, software-as-a-service solutions,
                  finance technology, healthcare, and manufacturing find cloud infrastructure to be
                  essential to their day-to-day operations.
                </p>
                <p className="text-[15.5px] leading-[1.78] mb-5" style={{ color: 'var(--ink-2)' }}>
                  As cloud workloads increase, businesses often experience challenges such as:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  {WHY_NOIDA.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-[14.5px]" style={{ color: 'var(--ink-2)' }}>
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-[15.5px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  Noida Cloud Infrastructure Management is not just about performing routine IT
                  tasks. There is a necessity to automate and intelligently manage incidents to
                  guarantee 24/7 operation of applications. <Xam /> SRE Automation Platform will
                  help you obtain the required automation and service reliability capabilities.
                </p>
              </section>

              {/* What is SRE */}
              <section id="what-is-sre" className="mb-14" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3" style={{ color: ACCENT }}>02</div>
                <h2 className="serif text-[clamp(22px,3.2vw,32px)] leading-[1.15] tracking-tight mb-5">
                  What Is an SRE Automation Platform?
                </h2>
                <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                  The SRE Automation Platform includes automation, monitoring, observability, and
                  incident management of cloud infrastructure reliability.
                </p>
                <p className="text-[15.5px] leading-[1.78] mb-5" style={{ color: 'var(--ink-2)' }}>
                  As opposed to the traditional approach, where system errors have to happen before
                  they can be addressed, SRE entails monitoring applications, infrastructure,
                  databases, and cloud infrastructure continuously in order to detect any issues
                  that might occur. A lot of operational tasks are resolved automatically through
                  automation. With the <Xam /> SRE Automation Platform, organizations can:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  {CAPABILITIES.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-[14.5px]" style={{ color: 'var(--ink-2)' }}>
                      <Icon.Check width="14" height="14" style={{ color: ACCENT, flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-[15.5px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  This way, IT teams can focus on adding value to the organization instead of
                  managing infrastructure.
                </p>
              </section>

              {/* Challenges */}
              <section id="challenges" className="mb-14" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3" style={{ color: ACCENT }}>03</div>
                <h2 className="serif text-[clamp(22px,3.2vw,32px)] leading-[1.15] tracking-tight mb-5">
                  Challenges of Managing Cloud Infrastructure in Noida
                </h2>
                <p className="text-[15.5px] leading-[1.78] mb-6" style={{ color: 'var(--ink-2)' }}>
                  As companies adopt digital services more, the management of their cloud services
                  becomes very complicated. Many companies still use manual monitoring systems or
                  separate systems, making the task of maintaining performance consistency very
                  difficult. The most common challenges include:
                </p>
                <div className="space-y-4">
                  {CHALLENGES.map((c) => (
                    <div key={c.title} className="ring-soft rounded-xl p-5" style={{ background: 'var(--ivory)' }}>
                      <div className="text-[15px] mb-1.5" style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}>
                        {c.title}
                      </div>
                      <p className="text-[14.5px] leading-[1.7]" style={{ color: 'var(--ink-2)' }}>
                        {c.body}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* How Xamops improves */}
              <section id="improvements" className="mb-14" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3" style={{ color: ACCENT }}>04</div>
                <h2 className="serif text-[clamp(22px,3.2vw,32px)] leading-[1.15] tracking-tight mb-5">
                  How Xamops Improves Cloud Infrastructure in Noida
                </h2>
                <div className="space-y-4 mb-5">
                  {SOLUTIONS.map((s) => (
                    <div
                      key={s.title}
                      className="rounded-xl p-5"
                      style={{ background: 'rgba(20,184,166,0.06)', border: '1px solid rgba(20,184,166,0.2)' }}
                    >
                      <div className="text-[15px] mb-1.5" style={{ fontFamily: 'var(--font-med)', color: ACCENT }}>
                        {s.title}
                      </div>
                      <p className="text-[14.5px] leading-[1.7]" style={{ color: 'var(--ink-2)' }}>
                        {s.body}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-[15.5px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  <Xam /> Cloud Infrastructure Management Platform resolves each of these
                  challenges through intelligent automation.
                </p>
              </section>

              {/* Benefits */}
              <section id="benefits" className="mb-14" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3" style={{ color: ACCENT }}>05</div>
                <h2 className="serif text-[clamp(22px,3.2vw,32px)] leading-[1.15] tracking-tight mb-5">
                  Benefits of Choosing the Xamops SRE Automation Platform
                </h2>
                <p className="text-[15.5px] leading-[1.78] mb-5" style={{ color: 'var(--ink-2)' }}>
                  Businesses in Noida, Delhi, and Lucknow opt for Xamops because it streamlines
                  cloud operations while enhancing operational efficiency. Key benefits include:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  {BENEFITS.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-[14.5px]" style={{ color: 'var(--ink-2)' }}>
                      <Icon.Check width="14" height="14" style={{ color: ACCENT, flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-[15.5px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  Xamops makes cloud operations more modernized without adding to the complexity of
                  operations.
                </p>
              </section>

              {/* Why Xamops preferred */}
              <section id="why-xamops" className="mb-14" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3" style={{ color: ACCENT }}>06</div>
                <h2 className="serif text-[clamp(22px,3.2vw,32px)] leading-[1.15] tracking-tight mb-5">
                  Why Xamops Is the Preferred SRE Automation Platform in Noida
                </h2>
                <p className="text-[15.5px] leading-[1.78] mb-5" style={{ color: 'var(--ink-2)' }}>
                  Unlike traditional monitoring solutions, Xamops brings together SRE automation,
                  cloud monitoring, infrastructure management, cloud cost optimization, and
                  operational visibility within a single platform. Businesses choose Xamops because
                  it offers:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  {WHY_XAMOPS.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-[14.5px]" style={{ color: 'var(--ink-2)' }}>
                      <Icon.Check width="14" height="14" style={{ color: ACCENT, flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-[15.5px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  Whether you're managing a single cloud environment or a complex multi-cloud
                  infrastructure, Xamops provides the tools needed to maintain reliability and
                  performance.
                </p>
              </section>

              {/* Conclusion callout */}
              <section
                className="rounded-2xl p-7 md:p-9 ring-soft relative overflow-hidden mb-12"
                style={{ background: 'var(--ivory)' }}
              >
                <div
                  className="absolute -right-16 -bottom-16 w-[300px] h-[300px] rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(closest-side, rgba(20,184,166,0.08), transparent 70%)` }}
                />
                <div className="relative">
                  <div className="eyebrow mb-3">Conclusion</div>
                  <h2 className="serif text-[clamp(20px,3vw,32px)] leading-[1.1] tracking-tight mb-5">
                    Manual cloud management is no longer{' '}
                    <span style={{ color: ACCENT }}>enough.</span>
                  </h2>
                  <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                    With an increasing number of businesses using digital technology, it has become
                    mandatory that cloud infrastructure be implemented. But with changing
                    environments in the world of cloud, the usage of manual cloud infrastructure
                    has not been enough.
                  </p>
                  <p className="text-[15.5px] leading-[1.78] mb-7" style={{ color: 'var(--ink-2)' }}>
                    <Xam /> SRE Automation Platform in Noida is useful for organizations in creating
                    efficient cloud infrastructure with automation and ensuring reliability of
                    services. The use of the Xamops Automation Platform in Noida, Delhi, and
                    Lucknow has proved to be very advantageous for organizations that wish to
                    implement cloud infrastructure.
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
                      { label: 'Published', value: 'July 10, 2026', accent: false },
                      { label: 'Read time', value: '8 minutes', accent: false },
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
                    style={{ background: `radial-gradient(closest-side, rgba(20,184,166,0.12), transparent 70%)` }}
                  />
                  <div className="relative">
                    <div className="text-[14px] leading-[1.5] mb-2" style={{ fontFamily: 'var(--font-med)' }}>
                      Reliability, automated.
                    </div>
                    <p className="text-[12.5px] leading-[1.6] mb-4" style={{ color: 'var(--olive)' }}>
                      <Xam /> monitors infrastructure continuously and resolves recurring incidents
                      before they reach your customers.
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
        sub="Real-time monitoring, automated incident response, and cost optimization for enterprises in Noida, Delhi, Lucknow, and beyond."
      />
    </>
  );
}
