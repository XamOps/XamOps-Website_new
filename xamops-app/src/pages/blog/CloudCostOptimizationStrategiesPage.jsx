import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icons';
import CTABanner from '../../components/shared/CTABanner';
import { useDemoModal } from '../../lib/demoModal';

const Xam = () => (
  <span style={{ color: 'var(--terracotta)', fontFamily: 'var(--font-med)', letterSpacing: '-0.01em' }}>XamOps</span>
);

const ACCENT = '#22c55e';

const STRATEGIES = [
  {
    id: 'visibility',
    n: '01',
    title: 'Gain Complete Visibility into Cloud Spending',
    body: 'The first step in cloud cost optimization is understanding where your money is actually going. Most teams are surprised to discover how fragmented their spending data is across AWS, Azure, and GCP. Use cloud monitoring and reporting tools to track expenses across departments, projects, and environments. Detailed dashboards make cloud spending transparent and actionable rather than a quarterly shock.',
    xamops: 'XamOps Cost Analytics consolidates spend data across all linked cloud accounts into a single dashboard, broken down by service, team, region, and provider.',
  },
  {
    id: 'tagging',
    n: '02',
    title: 'Implement Resource Tagging',
    body: 'Proper tagging lets teams categorize cloud resources by team, application, environment, or business unit. Without tags, cost allocation is guesswork. With a consistent tagging policy, FinOps teams can identify exactly which project or department is driving high spend and optimize accordingly. This single practice often uncovers savings faster than any technical change.',
    xamops: 'XamOps surfaces untagged resources across all accounts and flags resources that break tagging policy, making enforcement straightforward rather than a recurring manual audit.',
  },
  {
    id: 'unused',
    n: '03',
    title: 'Eliminate Unused Resources',
    body: 'Organizations routinely pay for idle virtual machines, unattached storage volumes, and inactive services. These expenses accumulate silently over months. Regular cloud audits catch resources that no longer serve a purpose — test environments left running after a project ended, databases for decommissioned apps, snapshots from years ago. Removing them reduces spend immediately and simplifies infrastructure.',
    xamops: 'XamOps automated cleanup workflows scan for idle instances, unattached volumes, and forgotten snapshots on a continuous basis and surface them for review or auto-deletion.',
  },
  {
    id: 'rightsizing',
    n: '04',
    title: 'Right-Size Cloud Resources',
    body: 'Overprovisioned resources are one of the biggest causes of cloud waste. An engineer provisions a large instance to be safe at launch and nobody revisits the decision six months later. Analyzing usage patterns and resizing instances to match actual workload requirements ensures businesses only pay for what they genuinely use, not what someone guessed they might need.',
    xamops: 'XamOps pulls 90-day CloudWatch and Azure Monitor utilization data for every instance and generates rightsizing recommendations with projected monthly savings per resource.',
  },
  {
    id: 'scheduling',
    n: '05',
    title: 'Automate Resource Scheduling',
    body: 'Development and testing environments often run around the clock, even when no engineer is at a keyboard. Automatically shutting down non-production resources during off-hours and restarting them when needed can reduce compute costs for those environments by 60 percent or more. This is one of the fastest wins available to most engineering teams.',
    xamops: 'XamOps resource scheduling policies apply across AWS, Azure, and GCP, with environment-level controls so production is never touched while dev and staging shut down on a defined schedule.',
  },
  {
    id: 'commitments',
    n: '06',
    title: 'Use Reserved Instances and Savings Plans',
    body: "Cloud providers offer significantly discounted pricing for long-term commitments. The discount for a one-year reservation typically runs 30 to 40 percent; three-year reservations often exceed 60 percent. FinOps teams should analyze steady-state usage trends and invest in reserved instances or savings plans for workloads that won't change, while keeping variable workloads on on-demand or Spot.",
    xamops: 'XamOps commitment coverage analysis identifies which workloads are consistent enough to benefit from reservations and models the projected savings before any purchase is made.',
  },
  {
    id: 'budgets',
    n: '07',
    title: 'Establish Cloud Budgets and Alerts',
    body: 'Budgeting is essential for effective cloud financial management. Without predefined thresholds, unusual spending goes unnoticed until the bill arrives. Setting spending limits and configuring alerts to notify stakeholders when costs approach or exceed predefined boundaries turns cost control from reactive to proactive.',
    xamops: 'XamOps budget alerts fire in real time via Slack, email, or webhook when spend crosses configurable thresholds, broken down by team, service, or provider.',
  },
  {
    id: 'storage',
    n: '08',
    title: 'Optimize Storage Costs',
    body: 'Storage expenses grow quietly as data volumes increase. Old snapshots stack up, infrequently accessed data sits in expensive tiers, and duplicate files persist across environments. Lifecycle policies that move data to cheaper storage classes, archive rules for cold data, and regular cleanup of redundant files can cut storage costs substantially with no impact on active workloads.',
    xamops: 'XamOps Disk Rightsizing identifies over-provisioned volumes, flags gp2 volumes eligible for gp3 migration, and surfaces lifecycle policy gaps across all storage services.',
  },
  {
    id: 'collaboration',
    n: '09',
    title: 'Encourage FinOps Collaboration',
    body: 'Cloud cost optimization is not solely a finance team responsibility. Engineers understand how applications work. Finance teams understand budgets and business goals. When these groups operate separately, important decisions get made without the full picture. Shared dashboards, regular cost reviews, and common objectives create alignment that technology alone cannot produce.',
    xamops: 'XamOps provides role-appropriate cost views so engineers see resource-level detail while finance sees budget rollups — the same underlying data presented for each audience.',
  },
  {
    id: 'forecasting',
    n: '10',
    title: 'Leverage Predictive Analytics',
    body: 'Modern FinOps platforms use predictive analytics to forecast future cloud expenses based on historical patterns, growth trends, and planned initiatives. These insights let organizations plan budgets more accurately and identify potential cost overruns before they happen rather than after the invoice arrives.',
    xamops: 'XamOps cost forecasting models project spend by service and team, with configurable budget horizons and scenario analysis for planned infrastructure changes.',
  },
];

const BENEFITS = [
  'Improved visibility into cloud spending across all providers',
  'Better financial accountability across engineering and finance teams',
  'Automated cost optimization recommendations without manual review',
  'Accurate budgeting and forecasting based on real usage data',
  'Reduced operational overhead from routine cloud management tasks',
  'Greater return on cloud investments through continuous optimization',
];

const FAQS = [
  {
    q: 'What is cloud cost optimization?',
    a: 'Cloud cost optimization is the process of reducing unnecessary cloud expenses while maintaining or improving resource utilization and operational performance. It combines FinOps practices, automation tools, and cross-team accountability.',
  },
  {
    q: 'How does a FinOps automation platform help businesses save costs?',
    a: 'A FinOps automation platform provides real-time visibility into cloud usage, identifies underutilized resources, automates cost-saving actions like rightsizing and scheduling, and helps organizations manage budgets proactively.',
  },
  {
    q: 'What are the most impactful strategies for reducing cloud costs?',
    a: 'The highest-impact strategies are eliminating unused resources, rightsizing overprovisioned instances, automating resource scheduling, and purchasing reserved instances for steady-state workloads. These four together typically reduce cloud spend by 30 to 50 percent.',
  },
  {
    q: 'What features should businesses look for in a FinOps platform?',
    a: 'Look for cost monitoring, budget alerts, resource optimization recommendations, forecasting, automated reporting, multi-cloud support, and integrations with existing DevOps workflows.',
  },
  {
    q: 'Which teams benefit most from FinOps practices?',
    a: 'DevOps, FinOps, SRE, and engineering leadership all benefit directly. Finance teams gain clearer budget forecasting, engineers gain resource-level cost data, and business leaders gain confidence that cloud spending aligns with organizational priorities.',
  },
];

const TOC_ITEMS = [
  ...STRATEGIES.map(s => ({ href: `#${s.id}`, label: s.title, prefix: s.n })),
  { href: '#benefits', label: 'Benefits of a FinOps platform', prefix: null },
  { href: '#faq', label: 'Frequently asked questions', prefix: null },
];

export default function CloudCostOptimizationStrategiesPage() {
  const { setOpen } = useDemoModal();

  return (
    <>
      {/* ── Article header ─────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-14 relative overflow-hidden" style={{ background: '#0d1f14' }}>
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(closest-side, rgba(34,197,94,0.07), transparent 70%)' }}
        />
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-7 eyebrow">
            <Link to="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
            <span style={{ color: ACCENT }}>FinOps</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>June 24, 2026</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>10 min read</span>
          </div>

          <h1 className="serif text-[clamp(34px,5.2vw,66px)] leading-[1.06] tracking-tight max-w-[22ch]" style={{ color: '#ffffff' }}>
            Cloud Cost Optimization:{' '}
            <span style={{ color: ACCENT }}>10 Proven Strategies for FinOps Teams</span>
          </h1>

          <p
            className="mt-5 text-[17px] leading-[1.7] max-w-[62ch]"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            As cloud infrastructure scales, managing expenses becomes a critical business priority.
            Ten actionable strategies that FinOps teams can implement today to reduce waste and
            maximize the value of every dollar spent.
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
                  As organizations expand their cloud infrastructure, managing cloud expenses has become
                  a critical business priority. Companies seek better visibility, control, and efficiency
                  in their cloud spending — not just at the end of the month, but continuously.
                </p>
                <p className="text-[17px] leading-[1.78] mt-5" style={{ color: 'var(--ink-2)' }}>
                  FinOps brings finance, operations, and engineering teams together to create
                  accountability and transparency in cloud spending. The right strategies produce
                  sustainable cost savings without sacrificing performance or scalability. Here are
                  ten of them.
                </p>
              </section>

              {/* Strategy cards */}
              <div className="space-y-4 mb-14">
                {STRATEGIES.map((s) => (
                  <div
                    key={s.id}
                    id={s.id}
                    className="ring-soft rounded-2xl overflow-hidden"
                    style={{ background: 'var(--ivory)', scrollMarginTop: '100px' }}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <span
                          className="display shrink-0 leading-none select-none"
                          style={{
                            fontSize: 'clamp(38px,5vw,52px)',
                            color: ACCENT,
                            opacity: 0.3,
                            letterSpacing: '-0.04em',
                            marginTop: '-2px',
                          }}
                        >
                          {s.n}
                        </span>
                        <h2 className="serif text-[clamp(17px,2.4vw,22px)] leading-[1.2] tracking-tight pt-2">
                          {s.title}
                        </h2>
                      </div>

                      <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                        {s.body}
                      </p>

                      <div
                        className="flex gap-3 rounded-xl px-4 py-3"
                        style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.18)' }}
                      >
                        <span className="shrink-0 mt-px text-[11px]" style={{ color: ACCENT }}>◆</span>
                        <p className="text-[13px] leading-[1.65]" style={{ color: 'var(--ink-2)' }}>
                          <strong style={{ color: ACCENT }}>XamOps: </strong>{s.xamops}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <section id="benefits" className="mb-12" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3">Why it matters</div>
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight mb-6">
                  Benefits of Using a FinOps Platform
                </h2>
                <div className="ring-soft rounded-2xl overflow-hidden" style={{ background: 'var(--ivory)' }}>
                  <div className="p-6 md:p-8">
                    <div className="space-y-3">
                      {BENEFITS.map((b, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span
                            className="shrink-0 mt-1 text-[13px] font-bold"
                            style={{ color: ACCENT }}
                          >
                            ✓
                          </span>
                          <p className="text-[15px] leading-[1.65]" style={{ color: 'var(--ink-2)' }}>
                            {b}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="text-[14.5px] leading-[1.7] mt-6 pt-6" style={{ color: 'var(--ink-2)', borderTop: '1px solid var(--rule-dark)' }}>
                      As cloud environments become more complex, manual cost management is no longer
                      sufficient. FinOps solutions enable organizations to maintain financial control
                      while supporting innovation and growth.
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusion CTA */}
              <section
                className="rounded-2xl p-7 md:p-9 ring-soft relative overflow-hidden mb-12"
                style={{ background: 'var(--ivory)' }}
              >
                <div
                  className="absolute -right-16 -bottom-16 w-[300px] h-[300px] rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(closest-side, rgba(34,197,94,0.07), transparent 70%)` }}
                />
                <div className="relative">
                  <div className="eyebrow mb-3">All ten strategies. One platform.</div>
                  <h2 className="serif text-[clamp(20px,3vw,32px)] leading-[1.1] tracking-tight mb-5">
                    Stop managing cloud costs manually.{' '}
                    <span style={{ color: ACCENT }}>Start optimizing automatically.</span>
                  </h2>
                  <p className="text-[15.5px] leading-[1.78] mb-7" style={{ color: 'var(--ink-2)' }}>
                    Investing in a FinOps automation platform provides the visibility, automation, and
                    governance required to manage cloud expenses effectively. Organizations that embrace
                    FinOps practices are better positioned to achieve long-term financial and
                    operational success as cloud adoption continues to grow.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => setOpen(true)} className="btn-primary">
                      Book a demo <Icon.Arrow width="14" height="14" />
                    </button>
                    <Link to="/solutions/finops" className="btn-ghost">
                      See FinOps solutions
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
                      { label: 'Read time', value: '10 minutes', accent: false },
                      { label: 'Category', value: 'FinOps', accent: true },
                      { label: 'Author', value: 'Aditya Mehta', accent: false },
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
                    style={{ background: `radial-gradient(closest-side, rgba(34,197,94,0.1), transparent 70%)` }}
                  />
                  <div className="relative">
                    <div className="text-[14px] leading-[1.5] mb-2" style={{ fontFamily: 'var(--font-med)' }}>
                      10 strategies. Automated.
                    </div>
                    <p className="text-[12.5px] leading-[1.6] mb-4" style={{ color: 'var(--olive)' }}>
                      <Xam /> runs rightsizing, scheduling, cleanup, and budget alerts continuously, so your team focuses on what matters.
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
        heading="10 proven strategies. One platform to run them all."
        sub="XamOps automates rightsizing, scheduling, cleanup, budget alerts, and forecasting continuously across AWS, Azure, and GCP."
      />
    </>
  );
}
