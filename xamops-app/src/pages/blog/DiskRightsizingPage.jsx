import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icons';
import CTABanner from '../../components/shared/CTABanner';
import { useDemoModal } from '../../lib/demoModal';

const Xam = () => (
  <span style={{ color: 'var(--terracotta)', fontFamily: 'var(--font-med)', letterSpacing: '-0.01em' }}>XamOps</span>
);

const REASONS = [
  {
    n: '01',
    title: 'No usage signal at the volume level',
    body: "CloudWatch gives you disk read/write IOPS and throughput — but not a \"% of provisioned capacity in use\" metric. A 2 TB gp3 volume that's 94% empty looks identical to a full one in the AWS console. You're billed for what you provisioned, not what you used.",
  },
  {
    n: '02',
    title: "AWS doesn't alert you when a volume is idle",
    body: "An EBS volume can sit unattached for 18 months and AWS will never send you a notification. There are no built-in Cost Explorer anomalies for storage waste — only for spend increases. Gradual accumulation is invisible to any threshold-based alert.",
  },
  {
    n: '03',
    title: 'Provisioned ≠ consumed — and you pay for provisioned',
    body: "When an engineer provisions a 500 GB volume for a database using 80 GB, the other 420 GB costs money every month in perpetuity. The capacity claim is made once; the cost is ongoing. No one reviews provisioned capacity after the fact.",
  },
];

const MOVES = [
  {
    n: '01',
    title: 'Delete unattached EBS volumes — the easiest $300/month',
    body: "Every EC2 instance termination can leave an orphaned EBS volume behind. The default behavior changed in 2022 — volumes are now deleted on instance termination — but any volume provisioned before that change, or with the \"delete on termination\" flag unchecked, persists indefinitely. Filter your volumes by \"available\" state. Every volume in that list is paying rent for nothing.",
    where: 'EC2 → Volumes → Filter: State = available → Sort by Size descending',
    flag: 'Volumes tagged with a project name that has no running instances — the project is dead, the bill is not.',
    xamops: <><Xam /> scans all accounts for volumes in "available" state, clusters them by age and tag, and surfaces them on the Disk Rightsizing dashboard with one-click deletion and a 30-day safety window.</>,
  },
  {
    n: '02',
    title: 'Migrate gp2 → gp3 — same performance, 20% cheaper',
    body: "gp2 is the old general-purpose SSD type. gp3 is newer: 20% cheaper at the same base price, with independently configurable IOPS and throughput. There is no performance regression for general workloads. AWS doesn't migrate you automatically — it's opt-in. Every gp2 volume in your account is a guaranteed 20% refund waiting to happen with zero application impact.",
    where: 'EC2 → Volumes → Filter: Volume type = gp2 → Modify → Volume type = gp3',
    flag: 'A gp2 volume over 1 TB is costing you significantly more than the equivalent gp3 — the per-GB premium compounds fast at scale.',
    xamops: <><Xam /> Disk Rightsizing identifies every gp2 volume across all accounts and regions, validates that the workload doesn't require gp2-specific burst credits, and generates a migration plan with one-click execution.</>,
  },
  {
    n: '03',
    title: 'Rightsize over-provisioned volumes — the biggest lever',
    body: "The hardest move, but the highest impact. An over-provisioned volume is one where CloudWatch shows consistently low utilization relative to provisioned capacity. The typical pattern: an engineer estimates headroom generously, provisions 2× what's needed, and the volume never fills. Rightsizing means snapshotting, resizing, and restoring — operationally safe but requires a maintenance window for attached volumes.",
    where: 'CloudWatch → Metrics → EBS → VolumeReadBytes / VolumeWriteBytes + AWS Cost Explorer → Filter: Service = EC2-Other, Group by: Usage Type',
    flag: 'Volumes where the 90-day P99 utilization is under 40% of provisioned capacity — these are immediate rightsizing candidates.',
    xamops: <><Xam /> pulls 90-day CloudWatch utilization data for every volume, calculates the recommended size, and provides a rightsizing plan with projected savings per volume. High-confidence volumes can be auto-rightsized within a defined maintenance window.</>,
  },
];

const TOC_ITEMS = [
  { href: '#invisible', label: 'Why disk waste is invisible', prefix: null },
  ...MOVES.map(m => ({ href: `#move-${m.n}`, label: m.title, prefix: m.n })),
  { href: '#math', label: 'The math: what this actually costs', prefix: null },
  { href: '#policies', label: 'Disk policies that prevent re-accumulation', prefix: null },
];

export default function DiskRightsizingPage() {
  const { setOpen } = useDemoModal();

  return (
    <>
      {/* ── Article header ─────────────────────────────────────── */}
      <section className="sec-light pt-28 md:pt-36 pb-12 relative overflow-hidden">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(closest-side, rgba(239,109,88,0.07), transparent 70%)' }}
        />
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-7 eyebrow">
            <Link to="/blog" className="ulink hover:text-current">Blog</Link>
            <span style={{ color: 'var(--rule-dark)' }}>/</span>
            <span style={{ color: 'var(--terracotta)' }}>FinOps</span>
            <span style={{ color: 'var(--rule-dark)' }}>·</span>
            <span>May 28, 2026</span>
            <span style={{ color: 'var(--rule-dark)' }}>·</span>
            <span>7 min read</span>
          </div>

          <h1 className="serif text-[clamp(34px,5.2vw,66px)] leading-[1.06] tracking-tight max-w-[22ch]">
            Disk Rightsizing:{' '}
            <span style={{ color: 'var(--terracotta)' }}>
              The Cost Saving Everyone Ignores
            </span>
          </h1>

          <p
            className="mt-5 text-[17px] leading-[1.7] max-w-[62ch]"
            style={{ color: 'var(--olive)' }}
          >
            Three moves that eliminate 30–40% of cloud storage waste — with the discipline
            to prevent it from coming back.
          </p>

          <div className="mt-7 flex items-center gap-3">
            <div className="live-dot" />
            <span className="eyebrow">Aditya Mehta</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        className="max-w-[1240px] mx-auto px-6 md:px-10"
        style={{ height: '1px', background: 'var(--rule)' }}
      />

      {/* ── Article body ────────────────────────────────────────── */}
      <article className="sec-light py-12 md:py-18">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-12">

            {/* ── Content column ── */}
            <div className="md:col-span-8">

              {/* Hook */}
              <section className="mb-12">
                <p className="text-[17px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  Every team investigates their AWS bill the same way. You open Cost Explorer,
                  sort by service, find EC2 at the top, and dig in. Compute costs are visible,
                  attributable, and spiky — easy to notice, easy to blame. So that's where the
                  optimization effort goes.
                </p>
                <p className="text-[17px] leading-[1.78] mt-5" style={{ color: 'var(--ink-2)' }}>
                  Meanwhile, EC2-Other — the line that includes EBS storage — sits quietly at
                  15–25% of your bill with no individual owner, no spike to investigate, and no
                  one asking questions. It grows slowly, steadily, and invisibly. New volumes are
                  provisioned, old instances are terminated, and the orphaned disks keep
                  accumulating at $0.08/GB/mo.
                </p>
                <p className="text-[17px] leading-[1.78] mt-5" style={{ color: 'var(--ink-2)' }}>
                  This guide covers three moves that eliminate the waste. None of them require
                  application changes. All of them can be done in a single afternoon. Together,
                  they typically recover 30–40% of your storage budget — for the average AWS
                  account, that's $15,000–$20,000 per year.
                </p>
              </section>

              {/* Why Invisible */}
              <section id="invisible" className="mb-12" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3">Section 1</div>
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight mb-6">
                  Why Disk Waste Is Invisible
                </h2>
                <div className="space-y-4">
                  {REASONS.map(r => (
                    <div
                      key={r.n}
                      className="ring-soft rounded-xl overflow-hidden"
                      style={{ background: 'var(--ivory)' }}
                    >
                      <div className="p-5 flex gap-4 items-start">
                        <span
                          className="display shrink-0 leading-none select-none"
                          style={{
                            fontSize: '32px',
                            color: 'var(--terracotta)',
                            opacity: 0.35,
                            letterSpacing: '-0.04em',
                            marginTop: '-2px',
                          }}
                        >
                          {r.n}
                        </span>
                        <div>
                          <div className="serif text-[16px] leading-[1.25] mb-2">{r.title}</div>
                          <p className="text-[14px] leading-[1.65]" style={{ color: 'var(--ink-2)' }}>
                            {r.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Moves header */}
              <div className="mb-7">
                <div className="eyebrow mb-3">Section 2 — The 3-Move Rightsizing Playbook</div>
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight">
                  3 moves to eliminate storage waste
                </h2>
              </div>

              {/* Move cards */}
              <div className="space-y-5 mb-14">
                {MOVES.map(move => (
                  <div
                    key={move.n}
                    id={`move-${move.n}`}
                    className="ring-soft rounded-2xl overflow-hidden"
                    style={{ background: 'var(--ivory)', scrollMarginTop: '100px' }}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-5">
                        <span
                          className="display shrink-0 leading-none select-none"
                          style={{
                            fontSize: 'clamp(40px,5.5vw,56px)',
                            color: 'var(--terracotta)',
                            opacity: 0.4,
                            letterSpacing: '-0.04em',
                            marginTop: '-3px',
                          }}
                        >
                          {move.n}
                        </span>
                        <h3 className="serif text-[clamp(18px,2.6vw,24px)] leading-[1.2] tracking-tight pt-1">
                          {move.title}
                        </h3>
                      </div>

                      <p className="text-[15.5px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                        {move.body}
                      </p>

                      <div
                        className="mt-5 rounded-xl overflow-hidden"
                        style={{ border: '1px solid var(--rule-dark)' }}
                      >
                        <div
                          className="px-4 py-2 flex items-center gap-2"
                          style={{ background: 'var(--parchment)', borderBottom: '1px solid var(--rule-dark)' }}
                        >
                          <span className="eyebrow" style={{ fontSize: '10px' }}>Where to find it</span>
                        </div>
                        <div
                          className="px-4 py-3 mono text-[12.5px] leading-[1.65]"
                          style={{ color: 'var(--olive)', background: 'var(--parchment)' }}
                        >
                          {move.where}
                        </div>
                      </div>

                      <div
                        className="mt-3 flex gap-3 rounded-xl px-4 py-3"
                        style={{ background: 'rgba(240,179,65,0.07)', border: '1px solid rgba(240,179,65,0.18)' }}
                      >
                        <span className="shrink-0 mt-px text-[12px] font-bold" style={{ color: 'var(--ochre)' }}>⚠</span>
                        <p className="text-[13px] leading-[1.65]" style={{ color: 'var(--ochre)' }}>
                          <strong>Red flag: </strong>{move.flag}
                        </p>
                      </div>

                      <div
                        className="mt-3 flex gap-3 rounded-xl px-4 py-3"
                        style={{ background: 'rgba(239,109,88,0.06)', border: '1px solid rgba(239,109,88,0.18)' }}
                      >
                        <span className="shrink-0 mt-px text-[11px]" style={{ color: 'var(--terracotta)' }}>◆</span>
                        <p className="text-[13px] leading-[1.65]" style={{ color: 'var(--terracotta)' }}>
                          {move.xamops}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Math table */}
              <section id="math" className="mb-12" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3">Section 3</div>
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight mb-6">
                  The Math: What This Actually Costs
                </h2>
                <div className="ring-soft rounded-2xl overflow-hidden" style={{ background: 'var(--ivory)' }}>
                  <div className="p-6 md:p-8">
                    <p className="text-[15px] leading-[1.7] mb-6" style={{ color: 'var(--ink-2)' }}>
                      Median numbers for a mid-size engineering org running 200–400 EC2 instances.
                      Your totals will vary, but the ratios are consistent across accounts.
                    </p>
                    <div className="overflow-x-auto">
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                        <thead>
                          <tr style={{ borderBottom: '1px solid var(--rule-dark)' }}>
                            {['Waste source', 'Typical volume', 'Monthly cost', 'Recovery'].map(h => (
                              <th
                                key={h}
                                style={{
                                  textAlign: 'left',
                                  padding: '0 12px 10px 0',
                                  color: 'var(--olive)',
                                  fontWeight: 500,
                                  fontFamily: 'var(--font-mono)',
                                  fontSize: '11px',
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { source: 'Unattached volumes', vol: '3.5 TB avg', cost: '~$300/mo', rec: 'Full (delete)' },
                            { source: 'gp2 → gp3 migration', vol: '5 TB avg', cost: '~$400/mo', rec: '20% savings' },
                            { source: 'Over-provisioned', vol: '10 TB avg', cost: '~$800/mo', rec: '40–50% savings' },
                          ].map((row, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid var(--rule)' }}>
                              <td style={{ padding: '10px 12px 10px 0', color: 'var(--ink-2)' }}>{row.source}</td>
                              <td style={{ padding: '10px 12px 10px 0', color: 'var(--olive)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>{row.vol}</td>
                              <td style={{ padding: '10px 12px 10px 0', color: 'var(--terracotta)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>{row.cost}</td>
                              <td style={{ padding: '10px 0 10px 0', color: 'var(--moss)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>{row.rec}</td>
                            </tr>
                          ))}
                          <tr>
                            <td style={{ padding: '14px 12px 0 0', fontWeight: 600, color: 'var(--ink)' }}>Total waste</td>
                            <td />
                            <td style={{ padding: '14px 12px 0 0', color: 'var(--terracotta)', fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700 }}>~$1,500/mo</td>
                            <td style={{ padding: '14px 0 0 0', color: 'var(--moss)', fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700 }}>$18,000/yr</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className="mt-6 rounded-xl p-4"
                      style={{ background: 'rgba(239,109,88,0.06)', border: '1px solid rgba(239,109,88,0.18)' }}
                    >
                      <p className="text-[13.5px] leading-[1.65]" style={{ color: 'var(--ink-2)' }}>
                        $18,000/year is the median. Larger accounts with longer-running infrastructure
                        and less disk hygiene see{' '}
                        <strong style={{ color: 'var(--terracotta)' }}>$40,000–$80,000/year</strong>
                        {' '}in recoverable storage waste — more than a junior engineer's annual salary.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Disk Policies */}
              <section id="policies" className="mb-12" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3">Section 4</div>
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight mb-6">
                  Disk Policies That Prevent Re-Accumulation
                </h2>
                <div className="ring-soft rounded-2xl overflow-hidden" style={{ background: 'var(--ivory)' }}>
                  <div className="p-6 md:p-8 space-y-5">
                    <p className="text-[15.5px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                      Running the 3-move playbook is a one-time cleanup. Without policy enforcement,
                      the waste starts accumulating again the next day — new gp2 volumes get
                      provisioned, terminations leave orphans, and engineers estimate generously.
                      The fix is policy-as-code, not periodic audits.
                    </p>
                    {[
                      {
                        title: 'Require gp3 in new volume provisioning',
                        body: 'Add an SCP (Service Control Policy) or Config rule that denies CreateVolume with type = gp2. Existing Terraform modules should default to gp3. No exception needed — gp3 is strictly superior for general workloads.',
                      },
                      {
                        title: 'Enable DeleteOnTermination for all new instances',
                        body: 'Set delete_on_termination = true in all Launch Templates. For existing instances, update via AWS CLI: aws ec2 modify-instance-attribute. This eliminates the primary source of orphaned volumes.',
                      },
                      {
                        title: 'Tag every volume with owner and project at creation',
                        body: 'Enforce required tags (Owner, Project, Environment) via AWS Config. Untagged volumes are invisible in organizational billing — tagged volumes can be attributed, reviewed, and challenged.',
                      },
                      {
                        title: 'Alert on volumes idle for >14 days',
                        body: 'Create a CloudWatch alarm on VolumeReadOps + VolumeWriteOps < threshold for 14 consecutive days on attached volumes. Unattached volumes should trigger an alert at day 3.',
                      },
                    ].map((p, i, arr) => (
                      <div
                        key={i}
                        className="flex gap-4 items-start pb-5"
                        style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--rule)' : 'none' }}
                      >
                        <span
                          className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-[11px] font-bold"
                          style={{ background: 'rgba(239,109,88,0.1)', color: 'var(--terracotta)', marginTop: '1px' }}
                        >
                          {i + 1}
                        </span>
                        <div>
                          <div className="text-[14px] leading-[1.3] mb-1.5" style={{ fontFamily: 'var(--font-med)' }}>{p.title}</div>
                          <p className="text-[13.5px] leading-[1.65]" style={{ color: 'var(--ink-2)' }}>{p.body}</p>
                        </div>
                      </div>
                    ))}
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
                  style={{ background: 'radial-gradient(closest-side, rgba(239,109,88,0.09), transparent 70%)' }}
                />
                <div className="relative">
                  <div className="eyebrow mb-3">Finds it, fixes it, keeps it fixed</div>
                  <h2 className="serif text-[clamp(20px,3vw,32px)] leading-[1.1] tracking-tight mb-5">
                    Stop paying for empty gigabytes.{' '}
                    <span style={{ color: 'var(--terracotta)' }}><Xam /> makes it automatic.</span>
                  </h2>
                  <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                    The 3-move cleanup above can be done manually. The policy enforcement requires
                    coordinating SCPs, Config rules, Launch Template updates, and CloudWatch alarms
                    across every account and region — and keeping them in sync as your infrastructure
                    changes.
                  </p>
                  <p className="text-[15.5px] leading-[1.78] mb-7" style={{ color: 'var(--ink-2)' }}>
                    <Xam /> Disk Rightsizing runs the full audit continuously: unattached volume
                    detection, gp2 migration planning, utilization-based rightsizing recommendations,
                    and policy drift alerts. High-confidence actions auto-remediate within defined
                    maintenance windows. Everything else surfaces as a prioritized recommendation
                    with projected savings.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => setOpen(true)} className="btn-primary">
                      Book a demo <Icon.Arrow width="14" height="14" />
                    </button>
                    <Link to="/platform/disk-rightsizing" className="btn-ghost">
                      See Disk Rightsizing
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
                      { label: 'Read time', value: '7 minutes', accent: false },
                      { label: 'Category', value: 'FinOps', accent: true },
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
                    {TOC_ITEMS.map(item => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-2.5 py-1.5 opacity-60 hover:opacity-100 transition-opacity"
                        style={{ textDecoration: 'none', color: 'var(--ink-2)' }}
                      >
                        {item.prefix ? (
                          <span className="mono shrink-0 text-[11px] mt-[2px]" style={{ color: 'var(--terracotta)' }}>
                            {item.prefix}
                          </span>
                        ) : (
                          <span className="mono shrink-0 text-[11px] mt-[2px]" style={{ color: 'var(--rule-dark)' }}>§</span>
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
                    style={{ background: 'radial-gradient(closest-side, rgba(239,109,88,0.12), transparent 70%)' }}
                  />
                  <div className="relative">
                    <div className="text-[14px] leading-[1.5] mb-2" style={{ fontFamily: 'var(--font-med)' }}>
                      Stop paying for empty gigabytes
                    </div>
                    <p className="text-[12.5px] leading-[1.6] mb-4" style={{ color: 'var(--olive)' }}>
                      <Xam /> finds unattached volumes, migrates gp2 to gp3, and rightsizes
                      over-provisioned disks — automatically.
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
        heading="30–40% of your storage budget is probably wasted. XamOps finds it, fixes it, and keeps it fixed."
        sub="Unattached volumes, gp2 migration, over-provisioned disks — automated and continuously monitored across all accounts."
      />
    </>
  );
}
