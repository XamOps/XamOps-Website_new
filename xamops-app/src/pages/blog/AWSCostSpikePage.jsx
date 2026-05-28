import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icons';
import CTABanner from '../../components/shared/CTABanner';
import { useDemoModal } from '../../lib/demoModal';

const Xam = () => (
  <span style={{
    color: 'var(--terracotta)',
    fontFamily: 'var(--font-med)',
    letterSpacing: '-0.01em',
  }}>XamOps</span>
);

const STEPS = [
  {
    n: '01',
    title: 'Check the service breakdown first',
    body: 'Before you dig into individual resources, start at 30,000 feet. Pull up AWS Cost Explorer, set the grouping to "Service," and look at the delta between last month and the previous month. Which service line moved? EC2, S3, Data Transfer, RDS, or something else entirely? Narrowing the blast radius from "AWS in general" to "EC2 specifically" cuts your investigation time in half — you\'re not chasing shadows across 30 different dashboards.',
    where: 'AWS Cost Explorer → Group by: Service → Date range: last 2 months',
    flag: 'A single service that jumped 30%+ with no corresponding deployment is the signal. Everything else is noise.',
    xamops: <><Xam /> Cost Analytics surfaces this service-level delta automatically on the Waste &amp; Cost dashboard — no manual report building required.</>,
  },
  {
    n: '02',
    title: 'Look at Data Transfer charges — the silent killer',
    body: 'Data transfer is the most misunderstood line item on any AWS bill. It hides under vague labels like "EC2 Other" and splits across three different cost dimensions: cross-AZ traffic, NAT Gateway egress, and internet-bound egress. A poorly placed microservice that talks cross-AZ instead of intra-AZ can rack up thousands of dollars in a single month — and it\'ll show up as a flat 2¢/GB that sounds harmless until you\'re moving 200 TB.',
    where: 'Cost Explorer → Filter: Service = EC2-Other + DataTransfer → Group by: Usage Type',
    flag: '"DataTransfer-Out-Bytes" or "DataTransfer-Regional-Bytes" climbing without a corresponding traffic increase on your CDN.',
    xamops: <><Xam /> surfaces cross-AZ and NAT Gateway transfer anomalies on the Cost dashboard with the exact resource generating the traffic.</>,
  },
  {
    n: '03',
    title: 'Audit EC2 instance types and counts',
    body: 'Did anything scale out and forget to scale back? Auto Scaling Groups are powerful, but they don\'t always scale in as aggressively as they scale out — especially if you tuned them during a traffic spike and never reverted the minimum capacity. Pull a 30-day EC2 inventory and compare instance-hour counts week over week. A fleet that was running 40 instances and quietly ballooned to 65 is your culprit. Also check On-Demand vs Reserved vs Spot ratios — an On-Demand surge while Reserved capacity sits idle is a pricing mismatch that finance will notice.',
    where: 'EC2 → Instances (sort by Launch Time) + Cost Explorer → Group by: Instance Type',
    flag: 'Instance-hours running 20%+ above baseline with no corresponding change in deployment logs.',
    xamops: <><Xam /> tracks fleet size and On-Demand vs Spot ratios over time, alerting when instance count or cost efficiency drifts beyond threshold.</>,
  },
  {
    n: '04',
    title: 'Check for Spot → On-Demand fallbacks',
    body: 'This one is the most expensive surprise in the AWS toolkit. If your Auto Scaling Group exhausted Spot capacity in a given AZ — common during regional demand spikes — it silently falls back to On-Demand. You don\'t get a banner, you don\'t get an alert. You just get a bill. On-Demand EC2 runs 3–5× the cost of equivalent Spot capacity. A single weekend fallback event for a medium-sized fleet can double your compute bill for the month.',
    where: 'EC2 → Auto Scaling Groups → Activity History + CloudWatch → ASG metric: OnDemandCapacity',
    flag: 'On-Demand capacity appearing in an ASG that is normally 100% Spot.',
    xamops: <><Xam /> monitors Spot-to-On-Demand fallback events in real time and alerts the moment a fallback starts — not when the bill lands.</>,
  },
  {
    n: '05',
    title: 'Look at RDS and managed service sprawl',
    body: 'The database tier accumulates waste quietly. Multi-AZ is almost always enabled "just in case" on dev and staging databases — which doubles the instance cost. Read replicas created for a load test and never deleted keep charging hourly. Automated snapshot storage silently grows month over month. Pull a list of every RDS instance, note whether it\'s Multi-AZ, count the read replicas, and check snapshot retention policies. Then ask: does this environment actually need production-level HA?',
    where: 'RDS → Databases (filter by environment tag) + Cost Explorer → Group by: Database',
    flag: 'Multi-AZ enabled on non-production databases, or read replica count exceeding the number of active applications.',
    xamops: <><Xam /> flags Multi-AZ on non-prod environments and orphaned read replicas automatically on the Waste dashboard.</>,
  },
  {
    n: '06',
    title: 'Hunt for orphaned resources',
    body: 'When engineers spin up infrastructure and don\'t tear it down cleanly, the orphans accumulate: EBS volumes detached from terminated instances, Application Load Balancers with no registered targets, Elastic IPs not associated with any resource, NAT Gateways in VPCs that are no longer used. None of these are dramatically expensive individually — but combined across a large AWS account, they routinely add 5–15% to the monthly bill.',
    where: 'EC2 → Volumes (state=available) + EC2 → Load Balancers (0 targets) + EC2 → Elastic IPs',
    flag: 'Unattached EBS volumes, load balancers with 0 healthy targets, or Elastic IPs not associated with a running instance.',
    xamops: <><Xam /> scans for orphaned resources continuously and surfaces them in a prioritized Waste list — no manual console crawling needed.</>,
  },
  {
    n: '07',
    title: 'Check data processing costs',
    body: 'Athena, Lambda, and CloudWatch are usage-priced and often invisible until they aren\'t. Athena charges per TB of data scanned — a single unpartitioned query on a large S3 bucket can cost more than a full day\'s worth of EC2. Lambda invocation counts can spike if a misconfigured event source starts firing at 10× the expected rate. CloudWatch log ingestion bills by the gigabyte — verbose logging from a debugging session that was never turned off keeps charging indefinitely.',
    where: 'Cost Explorer → Filter: Service = Athena / Lambda / CloudWatch → Group by: Usage Type',
    flag: 'Athena queries scanning TB+ without partitioning, Lambda invocations doubling without a deployment, or CloudWatch log ingestion growing without a known debugging session.',
    xamops: <><Xam /> tracks Athena, Lambda, and CloudWatch costs as part of the Cost dashboard, with anomaly alerts when processing costs deviate from the 30-day baseline.</>,
  },
];

const ROOT_CAUSES = [
  {
    label: 'A forgotten resource',
    desc: 'Something was created, used once, and left running. NAT Gateways, EBS volumes, idle load balancers. Low per-unit cost, high aggregate cost over weeks.',
  },
  {
    label: "A scaling event that didn't reverse",
    desc: "The fleet scaled out for a traffic event and the scale-in never completed correctly. Minimum capacity settings, misconfigured cooldown periods, or a Spot fallback that got locked in.",
  },
  {
    label: 'A data transfer surprise',
    desc: "A service was moved between AZs, a VPC peering was misconfigured, or a NAT Gateway started handling traffic it shouldn't. Data transfer is invisible until it isn't.",
  },
];

export default function AWSCostSpikePage() {
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
            <span style={{ color: '#FF9900' }}>FinOps</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>May 28, 2026</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>9 min read</span>
          </div>

          <h1 className="serif text-[clamp(34px,5.2vw,66px)] leading-[1.06] tracking-tight max-w-[22ch]" style={{ color: '#ffffff' }}>
            Your AWS Bill Jumped 40% Last Month —{' '}
            <span style={{ color: '#FF9900' }}>
              Here&rsquo;s How to Actually Investigate It
            </span>
          </h1>

          <p
            className="mt-5 text-[17px] leading-[1.7] max-w-[62ch]"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            A step-by-step checklist for DevOps engineers to diagnose and fix unexpected AWS cost
            spikes — before finance comes knocking again.
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
                  It&rsquo;s Monday morning. You open Slack and see three messages from the finance
                  team — all in the last hour. Your AWS bill came in 40% above the previous month.
                  No major deployment happened. No launch, no traffic spike you know of. The Cost
                  Explorer alert that was supposed to catch this? It didn&rsquo;t fire. Now you have
                  until end of day to explain what happened and produce a remediation plan.
                </p>
                <p className="text-[17px] leading-[1.78] mt-5" style={{ color: 'var(--ink-2)' }}>
                  This checklist is what we wish we&rsquo;d had the first time that happened. Seven
                  steps, in order of most likely cause to most obscure, each with a direct path to
                  the answer inside the AWS console — and a note on where XamOps would have caught
                  it before finance did.
                </p>
              </section>

              {/* Why it's hard */}
              <section className="mb-12">
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight mb-5">
                  Why AWS Cost Spikes Are Hard to Diagnose
                </h2>
                <p className="text-[17px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  AWS Cost Explorer has a 24-hour reporting lag. Billing dimensions are spread across
                  dozens of service-specific consoles. A single forgotten resource can hide in the
                  statistical noise of a large account. And unlike application errors, there is no
                  stack trace — just a larger number at the bottom of a table.
                </p>
                <p className="text-[17px] leading-[1.78] mt-4" style={{ color: 'var(--ink-2)' }}>
                  The core problem is dimensionality. AWS bills across 500+ distinct usage types,
                  split across regions, availability zones, account IDs, and resource tags. Finding
                  the spike means narrowing from the entire billing surface down to a single resource
                  or behavior — and doing it fast enough to actually fix something before next
                  month&rsquo;s bill arrives.
                </p>
                <p className="text-[17px] leading-[1.78] mt-4" style={{ color: 'var(--ink-2)' }}>
                  This is not a reflection on your engineering competence. The tooling is genuinely
                  fragmented. The checklist below is a proven sequence for cutting through that noise
                  systematically.
                </p>
              </section>

              {/* Checklist header */}
              <div className="mb-7">
                <div className="eyebrow mb-3">The Investigation Checklist</div>
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight">
                  7 steps, in order of blast radius
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
                          style={{
                            background: 'var(--parchment)',
                            borderBottom: '1px solid var(--rule-dark)',
                          }}
                        >
                          <span className="eyebrow" style={{ fontSize: '10px' }}>Where to look</span>
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

              {/* Root cause pattern */}
              <section className="mb-12">
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight mb-5">
                  The Root Cause Pattern
                </h2>
                <p className="text-[17px] leading-[1.78] mb-6" style={{ color: 'var(--ink-2)' }}>
                  After running this checklist across hundreds of cost spikes, the root cause almost
                  always traces back to one of three patterns:
                </p>
                <div className="space-y-4">
                  {ROOT_CAUSES.map((p) => (
                    <div
                      key={p.label}
                      className="rounded-xl p-5"
                      style={{
                        background: 'var(--ivory-2)',
                        borderLeft: '3px solid var(--terracotta)',
                        boxShadow: '0 0 0 1px var(--rule)',
                      }}
                    >
                      <div className="font-medium text-[15px] mb-1.5" style={{ fontFamily: 'var(--font-med)' }}>
                        {p.label}
                      </div>
                      <p className="text-[14px] leading-[1.7]" style={{ color: 'var(--olive)' }}>
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-[17px] leading-[1.78] mt-6" style={{ color: 'var(--ink-2)' }}>
                  The checklist above is ordered to hit all three. Start at the service level, narrow
                  to the resource type, and follow the money.
                </p>
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
                  <div className="eyebrow mb-3">How <Xam /> automates this</div>
                  <h2 className="serif text-[clamp(20px,3vw,32px)] leading-[1.1] tracking-tight mb-5">
                    Run this checklist once.{' '}
                    <span style={{ color: '#FF9900' }}>Then never again.</span>
                  </h2>
                  <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                    The investigation above takes a skilled engineer 2–4 hours the first time —
                    longer if they&rsquo;re new to the account. And it has to be repeated every time
                    a spike happens, because AWS doesn&rsquo;t maintain the institutional memory of
                    what normal looks like.
                  </p>
                  <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                    <Xam /> monitors all seven of these dimensions continuously, across AWS, GCP, and
                    Azure, in near-real time. When something deviates — a Spot fallback, a new
                    orphaned volume, an unusual data transfer pattern — you get an anomaly alert
                    before the billing period closes. The Waste &amp; Cost dashboard shows the root
                    cause in a single view: which resource, which account, which team, and the
                    projected monthly impact.
                  </p>
                  <p className="text-[15.5px] leading-[1.78] mb-7" style={{ color: 'var(--ink-2)' }}>
                    No Cost Explorer pivot tables. No manual inventory audits. No Monday morning
                    Slack messages from finance.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => setOpen(true)} className="btn-primary">
                      Book a demo <Icon.Arrow width="14" height="14" />
                    </button>
                    <Link to="/platform/cost-analytics" className="btn-ghost">
                      See Cost Analytics
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
                      { label: 'Read time', value: '9 minutes', accent: false },
                      { label: 'Category', value: 'FinOps', accent: true },
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
                    {STEPS.map((step) => (
                      <a
                        key={step.n}
                        href={`#step-${step.n}`}
                        className="flex items-start gap-2.5 py-1.5 opacity-60 hover:opacity-100 transition-opacity"
                        style={{ textDecoration: 'none', color: 'var(--ink-2)' }}
                      >
                        <span
                          className="mono shrink-0 text-[11px] mt-[2px]"
                          style={{ color: '#FF9900' }}
                        >
                          {step.n}
                        </span>
                        <span className="text-[13px] leading-[1.45]">{step.title}</span>
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
                      Stop doing this manually
                    </div>
                    <p className="text-[12.5px] leading-[1.6] mb-4" style={{ color: 'var(--olive)' }}>
                      <Xam /> monitors all 7 dimensions continuously across AWS, GCP, and Azure.
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
        heading="Stop investigating. Start preventing."
        sub="XamOps monitors all 7 cost dimensions continuously and alerts on anomalies before finance does."
      />
    </>
  );
}
