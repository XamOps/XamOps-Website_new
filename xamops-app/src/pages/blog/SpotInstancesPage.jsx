import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icons';
import CTABanner from '../../components/shared/CTABanner';
import { useDemoModal } from '../../lib/demoModal';

const Xam = () => (
  <span style={{ color: 'var(--terracotta)', fontFamily: 'var(--font-med)', letterSpacing: '-0.01em' }}>XamOps</span>
);

const MYTHS = [
  {
    myth: '"Spot is only for batch workloads."',
    reality: 'Spot runs production web services, ML inference, real-time APIs, and Kubernetes worker nodes. The constraint is stateful single-instance workloads — not latency-sensitive ones.',
  },
  {
    myth: '"If a Spot instance gets interrupted, my service goes down."',
    reality: 'Only if your fleet has no redundancy and no graceful shutdown handler. With a minimum On-Demand floor and a lifecycle hook, a Spot interruption is operationally identical to an EC2 health-check replacement.',
  },
  {
    myth: '"The savings aren\'t worth the operational overhead."',
    reality: 'At 70% savings on a $30k/month compute bill = $21k/month saved = $252k/year. The overhead is a one-time setup of 2–4 hours.',
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Understand what a Spot interruption actually looks like',
    body: 'AWS sends a 2-minute interruption notice before reclaiming a Spot instance — a CloudWatch event and an instance metadata endpoint. That\'s 120 seconds to drain connections, finish in-flight requests, and hand off state. The fear is usually of an instant kill. The reality is a predictable warning with a standard API. Most application frameworks can handle a SIGTERM and finish in-flight work well within that window.',
    where: 'EC2 → Spot Requests → Interruption notices + http://169.254.169.254/latest/meta-data/spot/termination-time',
    flag: 'Workloads with no interruption handler and no graceful shutdown logic — these are the ones that actually break on eviction.',
    xamops: <><Xam /> logs every Spot interruption event with timestamp, instance ID, and ASG in Actions History — full eviction audit trail across all accounts.</>,
  },
  {
    n: '02',
    title: 'Set a minimum On-Demand floor — and never go below it',
    body: 'The safest Spot pattern is not 100% Spot. It\'s a Spot-first fleet with a guaranteed On-Demand minimum. Set the smallest number of On-Demand instances your service needs to stay functional during a full Spot interruption wave — usually 1–3 for non-critical services, more for tier-1. Everything above that floor is Spot. This is the single most important configuration decision in your Spot setup.',
    where: 'EC2 → Auto Scaling Groups → Edit → On-Demand Base Capacity',
    flag: 'On-Demand base capacity set to 0 on any customer-facing ASG — this is a ticking clock, not a cost optimization.',
    xamops: <><Xam /> AutoSpotting enforces the minimum On-Demand floor as a hard constraint. The staged replacement loop never drops below your configured minimum — even during simultaneous interruptions across AZs.</>,
  },
  {
    n: '03',
    title: 'Use multiple instance types — capacity diversity is your interruption hedge',
    body: 'The biggest mistake with Spot is requesting a single instance type in a single AZ. When that pool runs out, your entire fleet gets interrupted simultaneously. Request 4–6 instance types of similar size (e.g., m5.xlarge, m5a.xlarge, m4.xlarge) across all available AZs. AWS interrupts Spot when it needs that specific capacity back — if you\'re not over-concentrated, a simultaneous fleet wipeout becomes nearly impossible.',
    where: 'EC2 → Launch Templates → Instance type requirements (flexible mode) → Multiple types + all AZs',
    flag: 'An ASG with a single instance type and fewer than 3 AZs — this is a correlated failure waiting to happen.',
    xamops: <><Xam /> shows Spot fleet instance type and AZ distribution on the AutoSpotting dashboard. Flags over-concentrated ASGs before a capacity crunch exposes them.</>,
  },
  {
    n: '04',
    title: 'Add a lifecycle hook for graceful shutdown',
    body: 'Install a lightweight daemon polling the metadata termination endpoint. On detection: drain from the load balancer, finish in-flight requests, flush local state. For containers: configure the SIGTERM handler and terminationGracePeriodSeconds. For EC2 workloads: use ASG lifecycle hooks with a TERMINATING:WAIT state. This is the difference between a Spot interruption that\'s invisible to users and one that drops requests hard.',
    where: 'EC2 → Auto Scaling → Lifecycle Hooks (TERMINATING:WAIT) + systemd service polling the metadata endpoint',
    flag: 'No lifecycle hooks on Spot ASGs and no SIGTERM handler — interruptions will terminate in-flight requests hard.',
    xamops: <><Xam /> AutoSpotting integrates with ASG lifecycle hooks in the staged replacement loop, health-checking before removing capacity — the same discipline that makes graceful interruption handling work.</>,
  },
  {
    n: '05',
    title: 'Let the replacement loop do the heavy lifting — don\'t DIY it',
    body: 'The hardest part of Spot in production isn\'t the initial config — it\'s keeping the fleet in the right state over time. Spot capacity comes and goes. Manually rebalancing On-Demand ratios, handling fallback events, and re-checking AZ distribution is a part-time job. The engineers who run Spot successfully have automated the control loop: detect drift → add Spot → wait for health check → remove excess On-Demand. Continuously.',
    where: 'EC2 → Auto Scaling Groups → Activity History + CloudWatch metric: OnDemandCapacity vs SpotCapacity ratio',
    flag: 'ASGs that started on Spot months ago and have never been reviewed — they\'re probably mostly On-Demand after a silent fallback event.',
    xamops: <><Xam /> AutoSpotting runs the staged replacement loop automatically — validate ASG candidacy → launch Spot → wait for health → terminate On-Demand. Runs continuously across all opted-in ASGs. Opt in with a single tag.</>,
  },
];

const TOC_ITEMS = [
  { href: '#myths', label: 'Myths keeping teams on On-Demand', prefix: null },
  ...STEPS.map(s => ({ href: `#step-${s.n}`, label: s.title, prefix: s.n })),
  { href: '#savings', label: 'What 70% savings actually means', prefix: null },
];

export default function SpotInstancesPage() {
  const { setOpen } = useDemoModal();

  return (
    <>
      {/* ── Article header ─────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-14 relative overflow-hidden" style={{ background: '#232F3E' }}>
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(closest-side, rgba(255,153,0,0.07), transparent 70%)' }}
        />
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-7 eyebrow">
            <Link to="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
            <span style={{ color: '#FF9900' }}>Spot</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>May 28, 2026</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>10 min read</span>
          </div>

          <h1 className="serif text-[clamp(34px,5.2vw,66px)] leading-[1.06] tracking-tight max-w-[22ch]" style={{ color: '#ffffff' }}>
            EC2 Spot Instances in Production —{' '}
            <span style={{ color: '#FF9900' }}>
              How to Stop Fearing Interruptions and Save 70%
            </span>
          </h1>

          <p
            className="mt-5 text-[17px] leading-[1.7] max-w-[62ch]"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            A practical guide for DevOps engineers on running Spot instances safely in production
            — with the five patterns that make interruptions a non-event.
          </p>

          <div className="mt-7 flex items-center gap-3">
            <div className="live-dot" />
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Aditya Mehta</span>
          </div>
        </div>
      </section>

      {/* ── Article body ────────────────────────────────────────── */}
      <article className="sec-light py-12 md:py-18">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-12">

            {/* ── Content column ── */}
            <div className="md:col-span-8">

              {/* Hook */}
              <section className="mb-12">
                <p className="text-[17px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  You&rsquo;ve seen the numbers. Spot instances are 70–90% cheaper than On-Demand.
                  Your compute bill is the single biggest line item in your AWS account. The math is
                  not complicated. But every time the topic comes up in your team, someone raises the
                  same objection: &ldquo;We can&rsquo;t use Spot in production. What happens when they
                  get interrupted?&rdquo;
                </p>
                <p className="text-[17px] leading-[1.78] mt-5" style={{ color: 'var(--ink-2)' }}>
                  This guide is the answer to that question — a practical five-step pattern used by
                  engineering teams running Spot in production at scale, with a real-time control
                  loop that makes interruptions operationally indistinguishable from a routine
                  health-check replacement.
                </p>
              </section>

              {/* Myths section */}
              <section id="myths" className="mb-12" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3">Section 1</div>
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight mb-6">
                  The Myths Keeping Your Team on On-Demand
                </h2>
                <div className="space-y-4">
                  {MYTHS.map((m, i) => (
                    <div
                      key={i}
                      className="ring-soft rounded-xl overflow-hidden"
                      style={{ background: 'var(--ivory)' }}
                    >
                      <div
                        className="px-5 py-4 flex gap-3 items-start"
                        style={{ borderBottom: '1px solid var(--rule-dark)', background: 'rgba(240,179,65,0.06)' }}
                      >
                        <span className="shrink-0 mt-0.5 font-bold text-[13px]" style={{ color: 'var(--ochre)' }}>✗</span>
                        <p className="text-[14px] leading-[1.65]" style={{ color: 'var(--ochre)', fontStyle: 'italic' }}>
                          {m.myth}
                        </p>
                      </div>
                      <div className="px-5 py-4 flex gap-3 items-start">
                        <span className="shrink-0 mt-0.5 font-bold text-[13px]" style={{ color: '#FF9900' }}>✓</span>
                        <p className="text-[14px] leading-[1.65]" style={{ color: 'var(--ink-2)' }}>
                          {m.reality}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Playbook header */}
              <div className="mb-7">
                <div className="eyebrow mb-3">Section 2 — The Production Spot Playbook</div>
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight">
                  5 steps to Spot-first production fleets
                </h2>
              </div>

              {/* Step cards */}
              <div className="space-y-5 mb-14">
                {STEPS.map((step) => (
                  <div
                    key={step.n}
                    id={`step-${step.n}`}
                    className="ring-soft rounded-2xl overflow-hidden"
                    style={{ background: 'var(--ivory)', scrollMarginTop: '100px' }}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-5">
                        <span
                          className="display shrink-0 leading-none select-none"
                          style={{
                            fontSize: 'clamp(40px,5.5vw,56px)',
                            color: '#FF9900',
                            opacity: 0.4,
                            letterSpacing: '-0.04em',
                            marginTop: '-3px',
                          }}
                        >
                          {step.n}
                        </span>
                        <h3 className="serif text-[clamp(18px,2.6vw,24px)] leading-[1.2] tracking-tight pt-1">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-[15.5px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                        {step.body}
                      </p>

                      <div
                        className="mt-5 rounded-xl overflow-hidden"
                        style={{ border: '1px solid var(--rule-dark)' }}
                      >
                        <div
                          className="px-4 py-2 flex items-center gap-2"
                          style={{ background: 'var(--parchment)', borderBottom: '1px solid var(--rule-dark)' }}
                        >
                          <span className="eyebrow" style={{ fontSize: '10px' }}>Where to configure</span>
                        </div>
                        <div
                          className="px-4 py-3 mono text-[12.5px] leading-[1.65]"
                          style={{ color: 'var(--olive)', background: 'var(--parchment)' }}
                        >
                          {step.where}
                        </div>
                      </div>

                      <div
                        className="mt-3 flex gap-3 rounded-xl px-4 py-3"
                        style={{ background: 'rgba(240,179,65,0.07)', border: '1px solid rgba(240,179,65,0.18)' }}
                      >
                        <span className="shrink-0 mt-px text-[12px] font-bold" style={{ color: 'var(--ochre)' }}>⚠</span>
                        <p className="text-[13px] leading-[1.65]" style={{ color: 'var(--ochre)' }}>
                          <strong>Red flag: </strong>{step.flag}
                        </p>
                      </div>

                      <div
                        className="mt-3 flex gap-3 rounded-xl px-4 py-3"
                        style={{ background: 'rgba(255,153,0,0.06)', border: '1px solid rgba(255,153,0,0.2)' }}
                      >
                        <span className="shrink-0 mt-px text-[11px]" style={{ color: '#FF9900' }}>◆</span>
                        <p className="text-[13px] leading-[1.65]" style={{ color: '#FF9900' }}>
                          {step.xamops}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Savings math */}
              <section id="savings" className="mb-12" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3">Section 3</div>
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight mb-6">
                  What 70% Savings Actually Means
                </h2>
                <div className="ring-soft rounded-2xl overflow-hidden" style={{ background: 'var(--ivory)' }}>
                  <div className="p-6 md:p-8">
                    <div className="grid grid-cols-2 gap-4 mb-7">
                      <div className="rounded-xl p-5" style={{ background: 'var(--parchment)' }}>
                        <div className="eyebrow mb-2" style={{ fontSize: '10px' }}>On-Demand</div>
                        <div
                          className="big-num text-[clamp(26px,4vw,38px)]"
                          style={{ color: 'var(--ink)' }}
                        >
                          $7,000
                        </div>
                        <div className="text-[12px] mt-1" style={{ color: 'var(--olive)' }}>per month</div>
                        <div className="text-[13px] mt-2" style={{ color: 'var(--olive-2)', fontFamily: 'var(--font-mono)' }}>
                          50 × m5.xlarge
                        </div>
                      </div>
                      <div
                        className="rounded-xl p-5"
                        style={{ background: 'var(--parchment)', borderLeft: '2px solid #FF9900' }}
                      >
                        <div className="eyebrow mb-2" style={{ fontSize: '10px', color: '#FF9900' }}>Spot (blended)</div>
                        <div
                          className="big-num text-[clamp(26px,4vw,38px)]"
                          style={{ color: '#FF9900' }}
                        >
                          $2,200
                        </div>
                        <div className="text-[12px] mt-1" style={{ color: 'var(--olive)' }}>per month</div>
                        <div className="text-[13px] mt-2" style={{ color: 'var(--olive-2)', fontFamily: 'var(--font-mono)' }}>
                          same 50 instances
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-xl p-4 mb-6"
                      style={{ background: 'rgba(255,153,0,0.07)', border: '1px solid rgba(255,153,0,0.2)' }}
                    >
                      <p className="text-[13.5px] leading-[1.65]" style={{ color: 'var(--ink-2)' }}>
                        Saving:{' '}
                        <strong style={{ color: '#FF9900' }}>$4,800/month</strong>
                        {' '}={' '}
                        <strong style={{ color: '#FF9900' }}>$57,600/year</strong>
                        {' '}from one afternoon of configuration.
                        At 200 instances → $230k/year. At 500 instances → exceeds the cost of a
                        full platform engineering team.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-6">
                      {[
                        { label: 'Monthly saving', value: '$4,800', sub: '50-instance fleet' },
                        { label: 'Annual saving', value: '$57,600', sub: 'one afternoon of setup' },
                        { label: 'At 500 instances', value: '$576k/yr', sub: 'exceeds a platform team' },
                      ].map(s => (
                        <div key={s.label} className="flex-1 min-w-[120px]">
                          <div className="eyebrow mb-1" style={{ fontSize: '10px' }}>{s.label}</div>
                          <div
                            className="big-num text-[clamp(18px,2.5vw,26px)]"
                            style={{ color: 'var(--terracotta)' }}
                          >
                            {s.value}
                          </div>
                          <div className="text-[12px] mt-1" style={{ color: 'var(--olive)' }}>{s.sub}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* XamOps close */}
              <section
                className="rounded-2xl p-7 md:p-9 ring-soft relative overflow-hidden"
                style={{ background: 'var(--ivory)' }}
              >
                <div
                  className="absolute -right-16 -bottom-16 w-[300px] h-[300px] rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(closest-side, rgba(255,153,0,0.08), transparent 70%)' }}
                />
                <div className="relative">
                  <div className="eyebrow mb-3">The staged replacement loop, running continuously</div>
                  <h2 className="serif text-[clamp(20px,3vw,32px)] leading-[1.1] tracking-tight mb-5">
                    Configure it once.{' '}
                    <span style={{ color: '#FF9900' }}><Xam /> keeps it running.</span>
                  </h2>
                  <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                    The 5-step setup above takes 2–4 hours to configure correctly. The hard part is
                    keeping it in the right state as Spot capacity fluctuates, instance types get
                    deprecated, and new ASGs are added to your account.
                  </p>
                  <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                    <Xam /> AutoSpotting runs the staged replacement loop on every opted-in ASG:
                    validate candidacy → launch Spot → wait for health checks → terminate On-Demand.
                    The minimum On-Demand floor is a hard constraint the loop never violates. Every
                    event is logged to Actions History with timing, savings attribution, and instance
                    IDs.
                  </p>
                  <p className="text-[15.5px] leading-[1.78] mb-7" style={{ color: 'var(--ink-2)' }}>
                    Opt in with a single ASG tag. No agents to install, no YAML to manage.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => setOpen(true)} className="btn-primary">
                      Book a demo <Icon.Arrow width="14" height="14" />
                    </button>
                    <Link to="/platform/spot-automation" className="btn-ghost">
                      See AutoSpotting
                    </Link>
                  </div>
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
                      { label: 'Published', value: 'May 28, 2026', accent: false },
                      { label: 'Read time', value: '10 minutes', accent: false },
                      { label: 'Category', value: 'Spot', accent: true },
                      { label: 'Author', value: 'Aditya Mehta', accent: false },
                    ].map(({ label, value, accent }) => (
                      <div key={label} className="flex justify-between items-center gap-4">
                        <span style={{ color: 'var(--olive)' }}>{label}</span>
                        <span
                          style={{
                            color: accent ? '#FF9900' : 'var(--ink)',
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
                            style={{ color: '#FF9900' }}
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
                    style={{ background: 'radial-gradient(closest-side, rgba(255,153,0,0.1), transparent 70%)' }}
                  />
                  <div className="relative">
                    <div
                      className="text-[14px] leading-[1.5] mb-2"
                      style={{ fontFamily: 'var(--font-med)' }}
                    >
                      70% savings. One tag to opt in.
                    </div>
                    <p className="text-[12.5px] leading-[1.6] mb-4" style={{ color: 'var(--olive)' }}>
                      <Xam /> AutoSpotting runs the replacement loop continuously — across all regions, accounts, and ASGs.
                    </p>
                    <button
                      onClick={() => setOpen(true)}
                      className="btn-primary w-full justify-center"
                      style={{ fontSize: '13px', padding: '10px 14px' }}
                    >
                      Try free <Icon.Arrow width="13" height="13" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </article>

      <CTABanner
        heading="70% compute savings. One tag to opt in."
        sub="XamOps AutoSpotting runs the staged replacement loop continuously — across all regions, all accounts, all ASGs."
      />
    </>
  );
}
