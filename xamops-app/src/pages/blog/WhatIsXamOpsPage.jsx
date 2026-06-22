import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icons';
import CTABanner from '../../components/shared/CTABanner';
import { useDemoModal } from '../../lib/demoModal';

const Xam = () => (
  <span style={{ color: 'var(--terracotta)', fontFamily: 'var(--font-med)', letterSpacing: '-0.01em' }}>XamOps</span>
);

const FEATURES = [
  {
    n: '01',
    title: 'Spot Automation Across AWS, Azure, and GCP',
    body: 'One of the fastest ways to reduce cloud spending is through intelligent use of Spot resources. XamOps automatically identifies suitable workloads and replaces eligible on-demand instances with lower-cost alternatives. This process helps organizations lower compute costs without sacrificing reliability or operational stability.',
    tag: 'Cost',
  },
  {
    n: '02',
    title: 'Automated Disk Rightsizing',
    body: 'Storage waste is a common issue in cloud environments. Many organizations provision large storage volumes but only use a fraction of the allocated capacity. XamOps continuously monitors disk utilization and identifies opportunities to reduce unnecessary storage expenses. Automated rightsizing ensures businesses pay for the storage they actually need.',
    tag: 'FinOps',
  },
  {
    n: '03',
    title: 'DBOps: Database Operations on Autopilot',
    body: 'Managing databases requires ongoing attention. Backups, updates, performance monitoring, and scaling activities can consume valuable engineering time. XamOps simplifies these routine database operations through automation, helping teams maintain healthy database environments while reducing manual intervention.',
    tag: 'Automation',
  },
  {
    n: '04',
    title: 'SecOps: Continuous Security and Compliance',
    body: 'Cloud security cannot be treated as a one-time task. Configurations change frequently, creating the risk of compliance gaps and security vulnerabilities. XamOps continuously evaluates cloud environments, detects configuration drift, and supports automated remediation. This helps organizations maintain stronger security practices while reducing operational overhead.',
    tag: 'Security',
  },
  {
    n: '05',
    title: 'Real-Time Cost Analytics',
    body: 'Many businesses struggle to understand exactly where their cloud budget is being spent. XamOps provides real-time visibility into cloud spending through dashboards, reporting tools, and forecasting capabilities. These insights help FinOps teams make informed decisions and identify opportunities for additional savings.',
    tag: 'FinOps',
  },
  {
    n: '06',
    title: 'AI-Assisted SRE Investigation',
    body: 'When incidents occur, finding the root cause quickly is critical. XamOps helps SRE teams investigate issues by connecting logs, metrics, and operational data into a single workflow. This can significantly reduce troubleshooting time and improve incident response efficiency.',
    tag: 'SRE',
  },
];

const FAQS = [
  {
    q: 'What is XamOps?',
    a: 'XamOps is a platform that helps businesses manage and automate their cloud operations. It streamlines infrastructure management, cuts costs, and boosts efficiency for teams using AWS, Azure, or GCP.',
  },
  {
    q: 'How does XamOps help with cloud cost optimization?',
    a: 'XamOps fights cloud waste with tools like Spot Automation, disk rightsizing, cost analytics, and smart, automated suggestions for optimizing your setup.',
  },
  {
    q: 'Who should use XamOps?',
    a: 'DevOps engineers, FinOps teams, cloud architects, SREs, and anyone running workloads across multiple clouds will find XamOps useful.',
  },
  {
    q: 'Does XamOps support multiple cloud providers?',
    a: 'Yes, XamOps works with AWS, Azure, and Google Cloud, so it is a solid choice for organizations that use more than one cloud platform.',
  },
  {
    q: 'Why is cloud automation important?',
    a: 'Automating your cloud means less manual work, fewer mistakes, and smoother operations, which becomes even more important as your company grows.',
  },
];

const TOC_ITEMS = [
  { href: '#problem', label: 'Why modern cloud teams struggle', prefix: null },
  { href: '#what-is', label: 'What is XamOps and how it works', prefix: null },
  ...FEATURES.map(f => ({ href: `#feature-${f.n}`, label: f.title, prefix: f.n })),
  { href: '#benefits', label: 'Benefits for DevOps, FinOps, and SRE', prefix: null },
  { href: '#faq', label: 'Frequently asked questions', prefix: null },
];

export default function WhatIsXamOpsPage() {
  const { setOpen } = useDemoModal();

  return (
    <>
      {/* ── Article header ─────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-14 relative overflow-hidden" style={{ background: '#1a1f2a' }}>
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(closest-side, rgba(239,109,88,0.07), transparent 70%)' }}
        />
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-7 eyebrow">
            <Link to="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
            <span style={{ color: 'var(--terracotta)' }}>Platform</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>June 22, 2026</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>8 min read</span>
          </div>

          <h1 className="serif text-[clamp(34px,5.2vw,66px)] leading-[1.06] tracking-tight max-w-[24ch]" style={{ color: '#ffffff' }}>
            What Is XamOps?{' '}
            <span style={{ color: 'var(--terracotta)' }}>
              A Smarter Way to Reduce Cloud Costs and Simplify Cloud Operations
            </span>
          </h1>

          <p
            className="mt-5 text-[17px] leading-[1.7] max-w-[62ch]"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            A Cognitive Cloud Operating System that helps DevOps, FinOps, and SRE teams automate
            routine tasks, cut spending, and regain control across AWS, Azure, and GCP.
          </p>

          <div className="mt-7 flex items-center gap-3">
            <div className="live-dot" />
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Aditya Mehta</span>
          </div>
        </div>
      </section>

      {/* ── Article body ────────────────────────────────────────── */}
      <article className="sec-light py-12 md:py-20">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-12">

            {/* ── Content column ── */}
            <div className="md:col-span-8">

              {/* Hook */}
              <section className="mb-12">
                <p className="text-[17px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  Cloud computing offers big opportunities. Companies can expand apps, launch new services,
                  and reach global audiences. Yet as businesses grow their cloud setups, things get tough:
                  it&rsquo;s pricey, complex, and time-consuming to maintain.
                </p>
                <p className="text-[17px] leading-[1.78] mt-5" style={{ color: 'var(--ink-2)' }}>
                  Engineers end up buried in work. They&rsquo;re chasing down where money&rsquo;s going,
                  dealing with unexpected incidents, resizing resources on the fly, double-checking security
                  settings, and keeping databases alive. Once you have multiple services running across AWS,
                  Azure, and Google Cloud, the workload gets out of hand fast.
                </p>
                <p className="text-[17px] leading-[1.78] mt-5" style={{ color: 'var(--ink-2)' }}>
                  That&rsquo;s why XamOps exists.
                </p>
              </section>

              {/* Why cloud teams struggle */}
              <section id="problem" className="mb-12" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3">Section 1</div>
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight mb-6">
                  Why Modern Businesses Need Cloud Operations Automation
                </h2>
                <p className="text-[16px] leading-[1.78] mb-5" style={{ color: 'var(--ink-2)' }}>
                  Most companies start with a pretty basic cloud setup. But as time goes on, things get
                  complicated: more apps, more databases, more storage, more virtual machines. Suddenly
                  it&rsquo;s a mess that&rsquo;s tough to wrangle.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      label: 'Wasted resources',
                      body: 'Companies end up paying for storage no one uses, servers running long after anyone needs them, or random services left on after a project wraps up.',
                    },
                    {
                      label: 'Mounting pressure on engineering',
                      body: 'Teams are supposed to speed things up, lock things down, and jump on every incident, all at once. The context switching alone drains capacity.',
                    },
                    {
                      label: 'No single source of truth',
                      body: 'Cost data lives in one tool, security in another, incident signals in a third. Nobody has a complete picture of what the cloud environment is actually doing.',
                    },
                  ].map(({ label, body }) => (
                    <div
                      key={label}
                      className="flex gap-4 rounded-xl px-5 py-4"
                      style={{ background: 'var(--ivory)', border: '1px solid var(--rule-dark)' }}
                    >
                      <span className="shrink-0 mt-1 text-[13px] font-bold" style={{ color: 'var(--terracotta)' }}>—</span>
                      <div>
                        <span
                          className="text-[14px] leading-[1.55]"
                          style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}
                        >
                          {label}:{' '}
                        </span>
                        <span className="text-[14px] leading-[1.55]" style={{ color: 'var(--ink-2)' }}>
                          {body}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[16px] leading-[1.78] mt-6" style={{ color: 'var(--ink-2)' }}>
                  That&rsquo;s where automation really steps in. It cuts out endless manual tasks and keeps
                  cloud resources in check. Instead of constantly playing catch-up, teams can take charge,
                  boosting performance and trimming costs before problems pop up.
                </p>
              </section>

              {/* What is XamOps */}
              <section id="what-is" className="mb-12" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3">Section 2</div>
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight mb-6">
                  What Is XamOps and How Does It Work?
                </h2>
                <p className="text-[16px] leading-[1.78] mb-5" style={{ color: 'var(--ink-2)' }}>
                  XamOps is a <strong>Cognitive Cloud Operating System</strong> that lets organizations
                  automate routine cloud tasks, streamline infrastructure, and keep a tighter grip on
                  spending. Instead of juggling different tools and handling tasks manually, teams get one
                  platform for all the critical cloud work.
                </p>
                <p className="text-[16px] leading-[1.78] mb-5" style={{ color: 'var(--ink-2)' }}>
                  It works with all the major cloud providers, AWS, Azure, and GCP, so you&rsquo;re not
                  tied to one ecosystem. The real win: XamOps handles repetitive chores like maintenance
                  and daily operations, giving your team more time to build great products.
                </p>
                <div
                  className="rounded-xl p-5 mb-2"
                  style={{ background: 'rgba(239,109,88,0.06)', border: '1px solid rgba(239,109,88,0.18)' }}
                >
                  <p className="text-[14px] leading-[1.65]" style={{ color: 'var(--ink-2)' }}>
                    XamOps brings cost optimization, cloud governance, security, and operational intelligence
                    together in one place, giving teams a single spot to take control of their entire cloud
                    environment.
                  </p>
                </div>
              </section>

              {/* Key features header */}
              <div className="mb-7">
                <div className="eyebrow mb-3">Section 3: Key Features</div>
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight">
                  What the XamOps platform covers
                </h2>
              </div>

              {/* Feature cards */}
              <div className="space-y-5 mb-14">
                {FEATURES.map((feature) => (
                  <div
                    key={feature.n}
                    id={`feature-${feature.n}`}
                    className="ring-soft rounded-2xl overflow-hidden"
                    style={{ background: 'var(--ivory)', scrollMarginTop: '100px' }}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <span
                          className="display shrink-0 leading-none select-none"
                          style={{
                            fontSize: 'clamp(40px,5.5vw,56px)',
                            color: 'var(--terracotta)',
                            opacity: 0.35,
                            letterSpacing: '-0.04em',
                            marginTop: '-3px',
                          }}
                        >
                          {feature.n}
                        </span>
                        <div className="pt-1">
                          <div
                            className="eyebrow mb-1"
                            style={{ fontSize: '10px', color: 'var(--terracotta)' }}
                          >
                            {feature.tag}
                          </div>
                          <h3 className="serif text-[clamp(17px,2.4vw,22px)] leading-[1.2] tracking-tight">
                            {feature.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-[15.5px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                        {feature.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <section id="benefits" className="mb-12" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3">Section 4</div>
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight mb-6">
                  Benefits for DevOps, FinOps, and SRE Teams
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {[
                    {
                      role: 'DevOps',
                      benefit: 'Less time on boring, repetitive infrastructure work. More time shipping features that matter.',
                    },
                    {
                      role: 'FinOps',
                      benefit: 'Clearer view of cloud expenses and an easier path to optimizing costs across providers.',
                    },
                    {
                      role: 'SRE',
                      benefit: 'Faster incident investigation and cleaner operational workflows without the usual context-switching overhead.',
                    },
                  ].map(({ role, benefit }) => (
                    <div
                      key={role}
                      className="rounded-xl p-5"
                      style={{ background: 'var(--ivory)', border: '1px solid var(--rule-dark)' }}
                    >
                      <div
                        className="eyebrow mb-3"
                        style={{ fontSize: '11px', color: 'var(--terracotta)' }}
                      >
                        {role}
                      </div>
                      <p className="text-[13.5px] leading-[1.65]" style={{ color: 'var(--ink-2)' }}>
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-[16px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  Many cloud management tools focus on only one area, such as monitoring, security, or cost
                  reporting. XamOps combines multiple operational functions within a single platform. Instead
                  of requiring separate solutions for cost optimization, database operations, security
                  automation, and incident investigation, businesses can manage these activities through one
                  unified system. Less complexity, more time delivering value rather than managing
                  infrastructure.
                </p>
              </section>

              {/* Conclusion */}
              <section
                className="rounded-2xl p-7 md:p-9 ring-soft relative overflow-hidden mb-12"
                style={{ background: 'var(--ivory)' }}
              >
                <div
                  className="absolute -right-16 -bottom-16 w-[300px] h-[300px] rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(closest-side, rgba(239,109,88,0.07), transparent 70%)' }}
                />
                <div className="relative">
                  <div className="eyebrow mb-3">One platform. Every cloud.</div>
                  <h2 className="serif text-[clamp(20px,3vw,32px)] leading-[1.1] tracking-tight mb-5">
                    Stop managing tools.{' '}
                    <span style={{ color: 'var(--terracotta)' }}>Start managing outcomes.</span>
                  </h2>
                  <p className="text-[15.5px] leading-[1.78] mb-7" style={{ color: 'var(--ink-2)' }}>
                    XamOps delivers something useful for pretty much everyone in the company. DevOps folk
                    spend less time on boring, repetitive infrastructure work. FinOps teams get a clearer
                    view of cloud expenses and an easier time optimizing costs. SRE teams dig into incidents
                    faster and sort out operational problems without all the usual hassle. Everyone works
                    better together, and the cloud setup becomes a lot more efficient.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => setOpen(true)} className="btn-primary">
                      Book a demo <Icon.Arrow width="14" height="14" />
                    </button>
                    <Link to="/platform" className="btn-ghost">
                      Explore the platform
                    </Link>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3">Section 5</div>
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
                      { label: 'Published', value: 'June 22, 2026', accent: false },
                      { label: 'Read time', value: '8 minutes', accent: false },
                      { label: 'Category', value: 'Platform', accent: true },
                      { label: 'Author', value: 'Aditya Mehta', accent: false },
                    ].map(({ label, value, accent }) => (
                      <div key={label} className="flex justify-between items-center gap-4">
                        <span style={{ color: 'var(--olive)' }}>{label}</span>
                        <span
                          style={{
                            color: accent ? 'var(--terracotta)' : 'var(--ink)',
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
                          <span
                            className="mono shrink-0 text-[11px] mt-[2px]"
                            style={{ color: 'var(--terracotta)' }}
                          >
                            {item.prefix}
                          </span>
                        ) : (
                          <span
                            className="mono shrink-0 text-[11px] mt-[2px]"
                            style={{ color: 'var(--rule-dark)' }}
                          >
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
                    style={{ background: 'radial-gradient(closest-side, rgba(239,109,88,0.1), transparent 70%)' }}
                  />
                  <div className="relative">
                    <div
                      className="text-[14px] leading-[1.5] mb-2"
                      style={{ fontFamily: 'var(--font-med)' }}
                    >
                      One platform. Every cloud.
                    </div>
                    <p className="text-[12.5px] leading-[1.6] mb-4" style={{ color: 'var(--olive)' }}>
                      See how <Xam /> handles cost, security, and operations across AWS, Azure, and GCP in a single workflow.
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
        heading="Stop managing tools. Start managing outcomes."
        sub="XamOps brings cost optimization, security, database operations, and SRE intelligence into one platform, across AWS, Azure, and GCP."
      />
    </>
  );
}
