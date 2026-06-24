import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icons';
import CTABanner from '../../components/shared/CTABanner';
import { useDemoModal } from '../../lib/demoModal';

const Xam = () => (
  <span style={{ color: 'var(--terracotta)', fontFamily: 'var(--font-med)', letterSpacing: '-0.01em' }}>XamOps</span>
);

const SECTIONS = [
  {
    id: 'manual-limits',
    n: '01',
    tag: 'Security',
    title: 'Why Manual Cloud Security No Longer Works',
    body: [
      'Back then, managing cloud security was not this complicated. A small IT team could easily track servers, applications, and users without depending too much on automation tools. But things changed fast.',
      'Companies now run workloads across different cloud platforms, remote teams access systems from everywhere, and data moves constantly between applications. Keeping all this secure manually is tiring and error-prone. Instead of checking every login attempt or server activity one by one, automated systems handle many tasks in the background. If something unusual happens, the system can send alerts instantly or even stop suspicious activity before it spreads further.',
      'Imagine a company running hundreds of cloud instances and storage services. No employee can sit the entire day reviewing logs and configurations manually. Automation makes the work manageable.',
    ],
  },
  {
    id: 'cost-problem',
    n: '02',
    tag: 'FinOps',
    title: 'Security Is Not the Only Problem — Cost Is Too',
    body: [
      'A lot of companies waste money on resources they forgot were still active. Virtual machines continue running for months without being used. Through proper cloud cost optimization and a reliable cloud cost optimization platform, businesses can identify unnecessary spending and reduce it before costs become too high.',
      'Cloud cost management helps teams understand where their cloud budget is going. This becomes critical for growing companies where cloud usage changes almost every week. Automated cost controls catch drift early, before the bill arrives.',
    ],
  },
  {
    id: 'ops-pressure',
    n: '03',
    tag: 'Operations',
    title: 'Reducing Operational Pressure on IT Teams',
    body: [
      'IT teams already deal with updates, downtime issues, employee access requests, and security checks. Adding manual cloud management on top of this creates even more workload.',
      'That is why many enterprises are shifting toward cloud operations automation and automated cloud operations to reduce repetitive tasks. When routine work runs on autopilot, teams can focus their attention on work that actually requires human judgement.',
    ],
  },
  {
    id: 'devops',
    n: '04',
    tag: 'DevOps',
    title: 'DevOps Automation: Fixing Problems Earlier',
    body: [
      'Modern development teams rely heavily on automation. A DevOps automation platform helps developers and operations teams work together without slowing deployments. Many businesses use DevOps automation solutions to scan applications for vulnerabilities before software goes live.',
      'Fixing security problems earlier in the development cycle saves both time and money later. A vulnerability caught before deployment costs a fraction of what it costs after a breach.',
    ],
  },
  {
    id: 'monitoring',
    n: '05',
    tag: 'Monitoring',
    title: 'Cloud Monitoring and Visibility',
    body: [
      'As cloud environments continue growing, companies need better visibility. A proper cloud monitoring platform helps businesses monitor performance, unusual traffic, and resource activity from a single dashboard. Instead of searching through endless reports, teams can quickly focus on important alerts.',
      'Large organizations usually manage multiple cloud providers together. A cloud management platform or cloud infrastructure management platform organizes operations in one place, supporting enterprise cloud management across AWS, Azure, and GCP simultaneously.',
    ],
  },
  {
    id: 'ai',
    n: '06',
    tag: 'AI',
    title: 'AI-Powered Cloud Automation',
    body: [
      'Artificial intelligence is becoming part of cloud operations. An AI cloud optimization platform can study cloud usage patterns and suggest smarter ways to improve efficiency. AI-powered cloud automation helps businesses react faster to issues by analyzing data automatically.',
      'Some companies are also using AI cloud operations platforms for predictive monitoring and faster incident response. Instead of reacting to problems after they happen, AI-driven systems can flag anomalies before they escalate into outages.',
    ],
  },
];

const FAQS = [
  {
    q: 'What is cloud security automation?',
    a: 'Cloud security automation means using automated tools and processes to manage security tasks inside cloud environments, from access control to configuration compliance.',
  },
  {
    q: 'Why do companies use cloud automation platforms?',
    a: 'Companies use them to reduce manual work, improve security monitoring, and manage cloud resources more efficiently across multiple providers.',
  },
  {
    q: 'How does cloud cost optimization help businesses?',
    a: 'It helps identify unused resources and unnecessary spending, which lowers overall cloud expenses before they appear on the next billing cycle.',
  },
  {
    q: 'Can automation improve DevOps operations?',
    a: 'Yes, DevOps automation solutions help teams deploy applications faster while keeping security checks in place throughout the development pipeline.',
  },
  {
    q: 'What is the benefit of AI-powered cloud automation?',
    a: 'AI-powered systems can detect patterns, improve monitoring, and respond to issues faster than manual processes, especially at scale.',
  },
];

const TOC_ITEMS = [
  ...SECTIONS.map(s => ({ href: `#${s.id}`, label: s.title, prefix: s.n })),
  { href: '#faq', label: 'Frequently asked questions', prefix: null },
];

export default function CloudSecurityAutomationPage() {
  const { setOpen } = useDemoModal();

  return (
    <>
      {/* ── Article header ─────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-14 relative overflow-hidden" style={{ background: '#0f1e35' }}>
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(closest-side, rgba(0,120,212,0.09), transparent 70%)' }}
        />
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-7 eyebrow">
            <Link to="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
            <span style={{ color: '#0078D4' }}>Security</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>June 24, 2026</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>7 min read</span>
          </div>

          <h1 className="serif text-[clamp(34px,5.2vw,66px)] leading-[1.06] tracking-tight max-w-[24ch]" style={{ color: '#ffffff' }}>
            What Is Cloud Security Automation{' '}
            <span style={{ color: '#0078D4' }}>and Why Is It Important?</span>
          </h1>

          <p
            className="mt-5 text-[17px] leading-[1.7] max-w-[62ch]"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            Manual security monitoring breaks down at cloud scale. Here is what cloud security
            automation actually covers and why modern teams cannot afford to skip it.
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
                  Cloud security used to be manageable. A small IT team could track servers,
                  applications, and users without much tooling. But cloud environments scaled faster
                  than teams did. Today the question is not whether to automate security, it is how
                  fast you can get there before something goes wrong.
                </p>
              </section>

              {/* Key stat strip */}
              <div
                className="grid grid-cols-3 gap-3 mb-12 rounded-2xl overflow-hidden"
                style={{ border: '1px solid var(--rule-dark)' }}
              >
                {[
                  { value: '80%', label: 'of breaches involve misconfigured cloud resources' },
                  { value: '3×', label: 'faster incident response with automated detection' },
                  { value: '$4.5M', label: 'average cost of a cloud data breach in 2024' },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="p-5 text-center"
                    style={{ background: 'var(--ivory)', borderRight: '1px solid var(--rule-dark)' }}
                  >
                    <div
                      className="big-num text-[clamp(22px,3.5vw,32px)] mb-1"
                      style={{ color: '#0078D4' }}
                    >
                      {value}
                    </div>
                    <div className="text-[12px] leading-[1.5]" style={{ color: 'var(--olive)' }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Section cards */}
              <div className="space-y-5 mb-14">
                {SECTIONS.map((sec) => (
                  <div
                    key={sec.id}
                    id={sec.id}
                    className="ring-soft rounded-2xl overflow-hidden"
                    style={{ background: 'var(--ivory)', scrollMarginTop: '100px' }}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-5">
                        <span
                          className="display shrink-0 leading-none select-none"
                          style={{
                            fontSize: 'clamp(40px,5.5vw,56px)',
                            color: '#0078D4',
                            opacity: 0.3,
                            letterSpacing: '-0.04em',
                            marginTop: '-3px',
                          }}
                        >
                          {sec.n}
                        </span>
                        <div className="pt-1">
                          <div
                            className="eyebrow mb-1"
                            style={{ fontSize: '10px', color: '#0078D4' }}
                          >
                            {sec.tag}
                          </div>
                          <h2 className="serif text-[clamp(18px,2.6vw,24px)] leading-[1.2] tracking-tight">
                            {sec.title}
                          </h2>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {sec.body.map((para, i) => (
                          <p
                            key={i}
                            className="text-[15.5px] leading-[1.78]"
                            style={{ color: 'var(--ink-2)' }}
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* What XamOps does */}
              <section
                className="rounded-2xl p-7 md:p-9 ring-soft relative overflow-hidden mb-12"
                style={{ background: 'var(--ivory)' }}
              >
                <div
                  className="absolute -right-16 -bottom-16 w-[300px] h-[300px] rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(closest-side, rgba(0,120,212,0.07), transparent 70%)' }}
                />
                <div className="relative">
                  <div className="eyebrow mb-3">How XamOps handles this</div>
                  <h2 className="serif text-[clamp(20px,3vw,32px)] leading-[1.1] tracking-tight mb-5">
                    Cloud infrastructure and automation,{' '}
                    <span style={{ color: '#0078D4' }}>in one platform.</span>
                  </h2>
                  <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                    <Xam /> SecOps continuously evaluates cloud environments, detects configuration
                    drift, and supports automated remediation across AWS, Azure, and GCP. Security
                    posture is not a quarterly audit, it is a live signal.
                  </p>
                  <p className="text-[15.5px] leading-[1.78] mb-7" style={{ color: 'var(--ink-2)' }}>
                    Cloud efficiency tools, automation systems, and optimization platforms inside
                    <Xam /> work together, so teams save time, lower operational stress, and expand
                    without burning out their infrastructure staff.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => setOpen(true)} className="btn-primary">
                      Book a demo <Icon.Arrow width="14" height="14" />
                    </button>
                    <Link to="/platform/secops" className="btn-ghost">
                      See SecOps
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
                      { label: 'Published', value: 'June 24, 2026', accent: false },
                      { label: 'Read time', value: '7 minutes', accent: false },
                      { label: 'Category', value: 'Security', accent: true },
                      { label: 'Author', value: 'Aditya Mehta', accent: false },
                    ].map(({ label, value, accent }) => (
                      <div key={label} className="flex justify-between items-center gap-4">
                        <span style={{ color: 'var(--olive)' }}>{label}</span>
                        <span
                          style={{
                            color: accent ? '#0078D4' : 'var(--ink)',
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
                            style={{ color: '#0078D4' }}
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
                    style={{ background: 'radial-gradient(closest-side, rgba(0,120,212,0.1), transparent 70%)' }}
                  />
                  <div className="relative">
                    <div
                      className="text-[14px] leading-[1.5] mb-2"
                      style={{ fontFamily: 'var(--font-med)' }}
                    >
                      Continuous security. Zero manual audits.
                    </div>
                    <p className="text-[12.5px] leading-[1.6] mb-4" style={{ color: 'var(--olive)' }}>
                      <Xam /> SecOps detects configuration drift and remediates automatically, across every account and region.
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
        heading="Security that runs itself."
        sub="XamOps SecOps continuously monitors configuration drift, compliance gaps, and security posture across AWS, Azure, and GCP, automatically."
      />
    </>
  );
}
