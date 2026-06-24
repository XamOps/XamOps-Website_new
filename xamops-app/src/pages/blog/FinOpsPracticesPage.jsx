import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icons';
import CTABanner from '../../components/shared/CTABanner';
import { useDemoModal } from '../../lib/demoModal';

const Xam = () => (
  <span style={{ color: 'var(--terracotta)', fontFamily: 'var(--font-med)', letterSpacing: '-0.01em' }}>XamOps</span>
);

const PRACTICES = [
  {
    id: 'ownership',
    n: '01',
    title: 'Give Every Resource an Owner',
    body: [
      'One of the easiest yet most ignored FinOps practices is ownership. Picture walking into a parking lot jammed with cars where nobody knows who owns each vehicle. That is how many cloud environments look after a couple of years of growth: servers running, storage volumes sitting, databases ticking along, but nobody remembers who asked for them or whether they are still necessary.',
      'When teams own their resources, spending becomes traceable. Accountability uncovers major savings on its own. No automation required, just a tagging policy and a clear mapping of which team pays for what.',
    ],
    xamops: 'XamOps surfaces untagged and orphaned resources across AWS, Azure, and GCP, flagging them with suggested owners based on usage patterns and account structure.',
  },
  {
    id: 'real-time',
    n: '02',
    title: 'Look Beyond Monthly Bills',
    body: [
      'A monthly invoice tells you how much was spent. It rarely explains why. Waiting thirty days to discover a spending issue is often too late, especially in fast-moving environments where teams spin up workloads daily.',
      'Successful FinOps teams focus on continuous monitoring rather than end-of-month reviews. Real-time visibility lets teams identify unusual spending patterns early and take corrective action before costs spiral further.',
    ],
    xamops: 'XamOps Cost Analytics provides live dashboards showing spend by service, team, region, and provider, updated continuously rather than at billing cycle end.',
  },
  {
    id: 'unused',
    n: '03',
    title: 'Stop Paying for Things Nobody Uses',
    body: [
      'Unused resources remain one of the biggest causes of cloud waste. Test environments stay active after projects end. Old virtual machines continue running quietly. Storage volumes stay attached long after the data is gone.',
      'The frustrating part is that these expenses often go unnoticed for months. Regular cloud audits help organizations identify resources that no longer serve a purpose. Removing unused assets reduces spending and simplifies infrastructure at the same time.',
    ],
    xamops: 'XamOps Disk Rightsizing and automated cleanup workflows scan for idle instances, unattached volumes, and forgotten snapshots across all linked accounts.',
  },
  {
    id: 'collaboration',
    n: '04',
    title: 'Get Finance and Engineering in the Same Room',
    body: [
      'Cloud cost management cannot be handled by finance teams alone. Engineers understand how applications work. Finance teams understand budgets and business goals. When these groups operate in silos, important decisions are made without the full picture.',
      'Top FinOps practices focus heavily on collaboration. Shared dashboards, regular cost reviews, and common objectives create alignment across departments. The result is a healthier balance between performance requirements and financial efficiency.',
    ],
    xamops: 'XamOps shared cost dashboards let engineering and finance teams view the same data, with role-appropriate views so neither side is overwhelmed by the other\'s concerns.',
  },
  {
    id: 'automation',
    n: '05',
    title: 'Use Automation Wherever Possible',
    body: [
      'Nobody enjoys spending hours reviewing cloud reports manually. Automation identifies idle resources, flags unusual spending behavior, and surfaces optimization opportunities. Instead of searching for problems, teams can focus on solving them.',
      'Automation also becomes more valuable as cloud environments grow. What works for ten workloads becomes impossible for hundreds. Manual processes do not scale; automated ones do.',
    ],
    xamops: 'XamOps AutoSpotting, rightsizing recommendations, and automated cleanup policies run continuously across all opted-in accounts, eliminating the need for manual cost reviews.',
  },
  {
    id: 'forecasting',
    n: '06',
    title: 'Plan for Growth Instead of Reacting to It',
    body: [
      'As businesses grow, cloud spending grows too. Companies that forecast their cloud needs fare significantly better than those constantly reacting to bill shock. Anticipating resource demands helps teams avoid expensive surprises and allocate budgets before they are needed.',
      'With the right data, organizations can model future spend based on current growth trends, upcoming launches, and seasonal patterns, turning cloud budgeting from a reactive scramble into a planned activity.',
    ],
    xamops: 'XamOps cost forecasting shows projected spend by service and team based on historical trends, with configurable budget thresholds that trigger alerts before limits are hit.',
  },
  {
    id: 'culture',
    n: '07',
    title: 'Build a Culture of Cost Awareness',
    body: [
      'Technology alone will not fix cloud spending issues. Organizations that do well build a culture where everyone understands that cloud resources are not free. Developers, operations staff, and business leaders all need to be part of making smart choices.',
      'When cost consciousness is woven into everyday workflows, optimization stops feeling like a separate project and becomes part of how teams naturally work.',
    ],
    xamops: 'XamOps Slack and email alerts keep cost awareness in front of the right people at the right time, without requiring anyone to log into a dashboard unprompted.',
  },
];

const FAQS = [
  {
    q: 'What is a FinOps platform?',
    a: 'A FinOps platform helps companies track, optimize, and manage cloud spending. It improves collaboration between finance, operations, and engineering teams, and provides visibility into where cloud budget is actually going.',
  },
  {
    q: 'Why are FinOps practices important in multi-cloud environments?',
    a: 'Multi-cloud environments make cost control harder because each provider uses different pricing, interfaces, and billing structures. FinOps practices bring clarity, accountability, and consistent cost governance across all of them.',
  },
  {
    q: 'What are the best FinOps practices for reducing cloud costs?',
    a: 'The highest-impact practices are assigning resource ownership, monitoring spend in real time, removing unused resources, automating rightsizing, and forecasting future needs before budgets are set.',
  },
  {
    q: 'How does automation help FinOps teams?',
    a: 'Automation catches idle resources, unusual spending patterns, and optimization opportunities faster than manual reviews, and it scales as cloud environments grow.',
  },
  {
    q: 'What practices do successful organizations use for FinOps?',
    a: 'Successful organizations combine cost transparency, cross-team collaboration, proactive forecasting, and continuous automation to maintain financial control as cloud usage evolves.',
  },
];

const TOC_ITEMS = [
  ...PRACTICES.map(p => ({ href: `#${p.id}`, label: p.title, prefix: p.n })),
  { href: '#faq', label: 'Frequently asked questions', prefix: null },
];

const ACCENT = '#f0b341';

export default function FinOpsPracticesPage() {
  const { setOpen } = useDemoModal();

  return (
    <>
      {/* ── Article header ─────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-14 relative overflow-hidden" style={{ background: '#1c1a10' }}>
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(closest-side, rgba(240,179,65,0.08), transparent 70%)` }}
        />
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-7 eyebrow">
            <Link to="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
            <span style={{ color: ACCENT }}>FinOps</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>June 24, 2026</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>9 min read</span>
          </div>

          <h1 className="serif text-[clamp(34px,5.2vw,66px)] leading-[1.06] tracking-tight max-w-[22ch]" style={{ color: '#ffffff' }}>
            Best FinOps Practices for{' '}
            <span style={{ color: ACCENT }}>Multi-Cloud Environments</span>
          </h1>

          <p
            className="mt-5 text-[17px] leading-[1.7] max-w-[62ch]"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            Cloud bills have a knack for surprising people. Seven practices that bring financial
            control back to teams running AWS, Azure, and GCP simultaneously.
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
                  When you first jump in, things look under control. A few tasks on AWS, some storage,
                  a database here and there. Costs seem small enough. Then growth hits. Teams expand,
                  apps multiply, and soon you are using three cloud providers like there is no tomorrow.
                </p>
                <p className="text-[17px] leading-[1.78] mt-5" style={{ color: 'var(--ink-2)' }}>
                  That is when the questions start. &ldquo;Why did costs spike?&rdquo; &ldquo;Who is
                  consuming all these resources?&rdquo; &ldquo;Are all our servers actually
                  necessary?&rdquo; Keeping track of expenses across multiple cloud platforms is
                  genuinely difficult. Each provider has its own pricing model, interface, and billing
                  structure.
                </p>
                <p className="text-[17px] leading-[1.78] mt-5" style={{ color: 'var(--ink-2)' }}>
                  These seven practices are what separates organizations with real financial control
                  from those perpetually surprised by their monthly bill.
                </p>
              </section>

              {/* Practice cards */}
              <div className="space-y-5 mb-14">
                {PRACTICES.map((p) => (
                  <div
                    key={p.id}
                    id={p.id}
                    className="ring-soft rounded-2xl overflow-hidden"
                    style={{ background: 'var(--ivory)', scrollMarginTop: '100px' }}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-5">
                        <span
                          className="display shrink-0 leading-none select-none"
                          style={{
                            fontSize: 'clamp(40px,5.5vw,56px)',
                            color: ACCENT,
                            opacity: 0.35,
                            letterSpacing: '-0.04em',
                            marginTop: '-3px',
                          }}
                        >
                          {p.n}
                        </span>
                        <h2 className="serif text-[clamp(18px,2.6vw,24px)] leading-[1.2] tracking-tight pt-2">
                          {p.title}
                        </h2>
                      </div>

                      <div className="space-y-4 mb-5">
                        {p.body.map((para, i) => (
                          <p
                            key={i}
                            className="text-[15.5px] leading-[1.78]"
                            style={{ color: 'var(--ink-2)' }}
                          >
                            {para}
                          </p>
                        ))}
                      </div>

                      <div
                        className="flex gap-3 rounded-xl px-4 py-3"
                        style={{ background: 'rgba(240,179,65,0.07)', border: '1px solid rgba(240,179,65,0.2)' }}
                      >
                        <span className="shrink-0 mt-px text-[11px]" style={{ color: ACCENT }}>◆</span>
                        <p className="text-[13px] leading-[1.65]" style={{ color: 'var(--ink-2)' }}>
                          <strong style={{ color: ACCENT }}>XamOps: </strong>{p.xamops}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Conclusion callout */}
              <section
                className="rounded-2xl p-7 md:p-9 ring-soft relative overflow-hidden mb-12"
                style={{ background: 'var(--ivory)' }}
              >
                <div
                  className="absolute -right-16 -bottom-16 w-[300px] h-[300px] rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(closest-side, rgba(240,179,65,0.08), transparent 70%)` }}
                />
                <div className="relative">
                  <div className="eyebrow mb-3">Putting it together</div>
                  <h2 className="serif text-[clamp(20px,3vw,32px)] leading-[1.1] tracking-tight mb-5">
                    Multi-cloud cost control is a{' '}
                    <span style={{ color: ACCENT }}>discipline, not a dashboard.</span>
                  </h2>
                  <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                    Managing cloud costs across multiple providers gets harder as environments expand.
                    Assigning ownership, monitoring continuously, eliminating waste, and automating
                    optimization all compound over time. The organizations that do this well treat
                    FinOps as an ongoing practice, not a quarterly fire drill.
                  </p>
                  <p className="text-[15.5px] leading-[1.78] mb-7" style={{ color: 'var(--ink-2)' }}>
                    A good FinOps platform brings clarity, control, and long-term savings by putting
                    all these practices into a single workflow rather than a disconnected collection
                    of tools.
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
                      { label: 'Read time', value: '9 minutes', accent: false },
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
                    style={{ background: `radial-gradient(closest-side, rgba(240,179,65,0.12), transparent 70%)` }}
                  />
                  <div className="relative">
                    <div className="text-[14px] leading-[1.5] mb-2" style={{ fontFamily: 'var(--font-med)' }}>
                      Real-time cost control. One platform.
                    </div>
                    <p className="text-[12.5px] leading-[1.6] mb-4" style={{ color: 'var(--olive)' }}>
                      <Xam /> gives FinOps teams live spend data, automated rightsizing, and cross-provider visibility in one place.
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
        heading="Seven practices. One platform to run them."
        sub="XamOps brings ownership tracking, real-time cost visibility, automated rightsizing, and FinOps collaboration tools into a single workflow across AWS, Azure, and GCP."
      />
    </>
  );
}
