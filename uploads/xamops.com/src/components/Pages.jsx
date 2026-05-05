import React, { useRef } from 'react';
import { Icon } from './Icon.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { Link } from '../router.jsx';
import PageHero from './PageHero.jsx';
import {
  SpotVisual, DiskVisual, DBVisual, SecOpsVisual, CostVisual, SREVisual,
} from './Visuals.jsx';

/* -------- Shared bits -------- */

function CTABanner({ heading = 'Ready to operate smarter?', sub = '30-minute demo. We connect to a sandbox and show your cloud automated live.' }) {
  return (
    <section className="sec-light py-24">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="rounded-[32px] p-10 md:p-14 ring-soft relative overflow-hidden" style={{ background: 'var(--ivory)' }}>
          <div className="absolute -right-20 -bottom-20 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(closest-side, rgba(201,100,66,0.18), transparent 70%)' }} />
          <div className="grid md:grid-cols-12 gap-8 relative items-center">
            <div className="md:col-span-8">
              <h3 className="serif text-[clamp(30px,4.4vw,56px)] leading-[1.04] tracking-tight max-w-[20ch]">
                {heading}
              </h3>
              <p className="mt-4 text-[16px] max-w-[60ch]" style={{ color: 'var(--olive)' }}>{sub}</p>
            </div>
            <div className="md:col-span-4 flex flex-wrap gap-3 md:justify-end">
              <Link to="/demo" className="btn-primary">Book a demo <Icon.Arrow width="14" height="14" /></Link>
              <Link to="/pricing" className="btn-ghost">Pricing</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Steps({ steps, dark }) {
  return (
    <section className={`py-24 ${dark ? 'sec-dark' : 'sec-light'}`}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className={`sec-label ${dark ? 'dark' : ''} mb-6`}>How it works</div>
        <div className="grid md:grid-cols-4 gap-px ring-soft rounded-2xl overflow-hidden" style={{ background: dark ? 'var(--rule-dark)' : 'var(--rule)' }}>
          {steps.map((s, i) => (
            <div key={s[0]} className="p-7" style={{ background: dark ? '#1d1d1b' : 'var(--ivory)' }}>
              <div className={`mono text-[11px] ${dark ? 'eyebrow-dark' : ''}`} style={{ color: dark ? 'var(--olive-2)' : 'var(--olive)' }}>0{i + 1}</div>
              <div className="serif text-[22px] mt-6">{s[0]}</div>
              <div className="text-[14px] mt-2" style={{ color: dark ? 'var(--olive-2)' : 'var(--olive)' }}>{s[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureGrid({ title, items, dark }) {
  return (
    <section className={`py-24 ${dark ? 'sec-dark' : 'sec-light'}`}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {title && <h2 className={`serif text-[clamp(28px,3.6vw,42px)] leading-[1.05] mb-10 max-w-[24ch]`}>{title}</h2>}
        <div className="grid md:grid-cols-3 gap-px ring-soft rounded-2xl overflow-hidden" style={{ background: dark ? 'var(--rule-dark)' : 'var(--rule)' }}>
          {items.map(([k, v], i) => (
            <div key={k} className="p-6" style={{ background: dark ? '#1d1d1b' : 'var(--ivory)' }}>
              <div className={`mono text-[11px] mb-4 ${dark ? 'eyebrow-dark' : ''}`} style={{ color: dark ? 'var(--olive-2)' : 'var(--olive)' }}>0{i + 1}</div>
              <div className="serif text-[20px]">{k}</div>
              <div className="text-[14px] mt-2" style={{ color: dark ? 'var(--olive-2)' : 'var(--olive)' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cloud3({ items }) {
  return (
    <section className="sec-light py-16 border-t border-b" style={{ borderColor: 'var(--rule)' }}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="eyebrow mb-4">Works on</div>
        <div className="flex flex-wrap gap-3">
          {items.map((s) => <span key={s} className="chip">{s}</span>)}
        </div>
      </div>
    </section>
  );
}

/* -------- Platform Overview -------- */

export function PlatformPage() {
  const ref = useRef(); useReveal(ref);
  const cats = [
    { I: Icon.Spot,  to: '/platform/spot-automation', name: 'Spot Automation',    body: 'Replace on-demand with spot capacity across AWS ASGs, GCP MIGs, Azure VMSS. Up to 70% off compute.' },
    { I: Icon.Disk,  to: '/platform/disk-rightsizing',name: 'Disk Rightsizing',   body: 'The only platform that automates disk rightsizing at scale across EBS, Persistent Disk, Managed Disks.' },
    { I: Icon.DB,    to: '/platform/dbops',           name: 'DBOps',              body: 'Automated scaling, backup verification, performance tuning and patch windows for managed DBs.' },
    { I: Icon.Sec,   to: '/platform/secops',          name: 'SecOps',             body: 'Continuous CIS posture, drift detection and automated remediation alongside your CI/CD.' },
    { I: Icon.Cost,  to: '/platform/cost-analytics',  name: 'Cost Analytics',     body: 'Real-time savings dashboards, daily aggregations, RI/CUD/Savings Plan coverage and forecasting.' },
    { I: Icon.SRE,   to: '/platform/sre',             name: 'SRE Investigation',  body: 'AI-assisted log triage and an investigation timeline that connects metrics, logs and traces.' },
  ];
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title={[{ text: 'One platform.' }, { text: 'Every layer of your cloud.', accent: true }, { text: 'Fully automated.' }]}
        body="XamOps unifies six automations into a single control plane that runs across AWS, GCP and Azure — so engineers stop babysitting infrastructure and managers stop signing oversized cloud bills."
      />
      <section ref={ref} className="sec-light pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-px ring-soft rounded-2xl overflow-hidden" style={{ background: 'var(--rule)' }}>
            {cats.map(({ I, to, name, body }, i) => (
              <Link to={to} key={name} data-fade className="p-8 hcard block" style={{ background: 'var(--ivory)' }}>
                <div className="flex items-start justify-between">
                  <I width="24" height="24" />
                  <span className="mono text-[11px]" style={{ color: 'var(--olive)' }}>0{i + 1}</span>
                </div>
                <div className="serif text-[28px] mt-10">{name}</div>
                <div className="text-[15px] mt-3 leading-[1.6]" style={{ color: 'var(--olive)' }}>{body}</div>
                <div className="mt-6 inline-flex items-center gap-2 text-[14px]">Learn more <Icon.Arrow width="14" height="14" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}

/* -------- Spot -------- */

export function SpotPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Spot Automation"
        title={[{ text: 'Cut your compute bill' }, { text: 'by up to 70%.', accent: true }, { text: 'Automatically.' }]}
        body="AutoSpotting safely replaces on-demand instances with spot capacity across AWS Auto Scaling Groups, GCP Managed Instance Groups and Azure VMSS. Per-instance SKU rules. Eviction handling. Guaranteed minimum of regular VMs."
      />
      <section className="sec-light pb-16">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10"><SpotVisual /></div>
      </section>
      <Steps steps={[
        ['Validate',  'Inspect your ASG/MIG/VMSS configuration, capacity strategy and workload tolerances.'],
        ['Convert',   'Stage replacements one instance at a time, watching health checks and signals.'],
        ['Scale',     'Maintain a minimum of regular VMs and a target spot ratio per group.'],
        ['Verify & replace', 'Drain, terminate, and verify before continuing the loop.'],
      ]} dark />
      <Cloud3 items={['aws.autoscaling', 'gcp.mig.preemptible', 'azure.vmss', 'spot fleet · mixed instance']} />
      <FeatureGrid items={[
        ['Per-instance SKU rules',     'Define which instance types are eligible per ASG, with preferred fallbacks.'],
        ['Spot ratio targets',         'Hold a configurable spot percentage per group; balance savings vs reliability.'],
        ['Min regular VMs',            'Always keep N on-demand instances for stability-critical capacity.'],
        ['Eviction handling',          'Pre-emption signals trigger graceful drain and replacement.'],
        ['Multi-cloud capacity',       'AWS, GCP and Azure spot pools, blended in one policy.'],
        ['Audit trail',                'Every conversion is logged with reason, savings impact and replacement target.'],
      ]} />
      <CTABanner heading="See spot savings on your account in 30 minutes." />
    </>
  );
}

/* -------- Disk -------- */

export function DiskPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Disk Rightsizing"
        title={[{ text: 'Stop paying for' }, { text: 'disk you don’t use.', accent: true }]}
        body="No other platform automates this at scale. XamOps continuously monitors volume utilization, recommends right-sized targets, and safely resizes — including filesystem expansion — across AWS EBS, GCP Persistent Disk and Azure Managed Disks."
      />
      <section className="sec-light pb-16">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10"><DiskVisual /></div>
      </section>
      <section className="sec-dark py-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="ring-soft-dark rounded-2xl p-10" style={{ background: '#1d1d1b' }}>
            <div className="eyebrow eyebrow-dark mb-3">Industry differentiator</div>
            <div className="serif text-[clamp(28px,3.4vw,40px)] leading-[1.1] max-w-[28ch]">
              Other tools recommend. XamOps actually <span style={{ color: 'var(--terracotta)' }}>does the work</span> — safely, on a schedule, with rollback.
            </div>
          </div>
        </div>
      </section>
      <Steps steps={[
        ['Monitor',     'Continuous IOPS, throughput and free-space telemetry per volume.'],
        ['Recommend',   'Suggest right-sized capacity with confidence intervals and risk score.'],
        ['Schedule',    'Pick a maintenance window with snapshot-and-rollback safety net.'],
        ['Resize',      'Shrink/grow the volume and expand the filesystem in place.'],
      ]} />
      <Cloud3 items={['aws.ebs gp3 · io2', 'gcp.persistent-disk', 'azure.managed-disk', 'lvm · ext4 · xfs · ntfs']} />
      <CTABanner heading="Disk costs you can finally cut." />
    </>
  );
}

/* -------- DBOps -------- */

export function DBOpsPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · DBOps"
        title={[{ text: 'Database operations' }, { text: 'on autopilot.', accent: true }]}
        body="Automated scaling, backup verification, performance optimization, and minor-version patching for RDS, Cloud SQL, Cosmos DB and beyond. Stop being on-call for routine database work."
      />
      <section className="sec-light pb-16">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10"><DBVisual /></div>
      </section>
      <FeatureGrid title="Built for managed and self-managed databases" items={[
        ['Auto-scaling',           'Reactive and predictive vertical/horizontal scaling for read replicas and storage.'],
        ['Backup verification',    'Restore-test backups on a schedule. Catch broken backups before you need them.'],
        ['Performance tuning',     'Index suggestions, slow-query analysis, and connection-pool tuning.'],
        ['Patch windows',          'Minor-version patches applied during low-traffic windows with health gates.'],
        ['Failover drills',        'Game-day exercises run automatically, no engineer required.'],
        ['Multi-cloud',            'RDS, Aurora, Cloud SQL, Cosmos, Memorystore, ElastiCache.'],
      ]} dark />
      <Cloud3 items={['aws.rds · aurora', 'gcp.cloudsql', 'azure.cosmos', 'self-managed · postgres · mysql']} />
      <CTABanner heading="Stop paging your DBA at 3am." />
    </>
  );
}

/* -------- SecOps -------- */

export function SecOpsPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · SecOps"
        title={[{ text: 'Security automation' }, { text: 'that ships with', accent: true }, { text: 'your code.' }]}
        body="Continuous CIS posture checks, drift detection and automated remediation that runs alongside your CI/CD instead of after the fact. Multi-cloud coverage, single policy plane."
      />
      <section className="sec-light pb-16">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10"><SecOpsVisual /></div>
      </section>
      <FeatureGrid title="Posture, prevention and response" items={[
        ['CIS benchmarks',         'AWS, GCP and Azure baseline coverage. Continuous evaluation, not quarterly audits.'],
        ['Auto-remediation',       'Scoped playbooks that fix common violations with full audit trail.'],
        ['IAM hygiene',            'Stale keys, over-permissive roles and unused credentials surfaced and rotated.'],
        ['Network exposure',       'Detect and remediate open security groups, public buckets and orphan endpoints.'],
        ['Policy as code',         'Version-controlled policies with PR-based review.'],
        ['Compliance reports',     'SOC 2, ISO, HIPAA evidence collected automatically.'],
      ]} />
      <CTABanner heading="Drift catches you. Or XamOps does first." />
    </>
  );
}

/* -------- Cost -------- */

export function CostPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Cost Analytics"
        title={[{ text: 'See exactly' }, { text: 'what you spend.' }, { text: 'Cut the rest.', accent: true }]}
        body="Real-time savings dashboards, daily aggregations, reservation/commitment coverage for RIs, CUDs and Savings Plans, and forecasting that engineering managers actually trust."
      />
      <section className="sec-light pb-16">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10"><CostVisual /></div>
      </section>
      <FeatureGrid title="Replace your cost spreadsheet" items={[
        ['Live dashboards',        'No 24-hour CUR delay. See spend changes as they happen.'],
        ['Daily aggregations',     'Roll-ups by team, environment, service, tag, and account.'],
        ['Commitment coverage',    'Optimal RI / CUD / Savings Plan recommendations with break-even analysis.'],
        ['Forecasts',              'Per-team forecasts within ±2% accuracy at 30 days.'],
        ['Anomaly alerts',         'Spend spike detection with workload attribution.'],
        ['Showback / chargeback',  'Per-team reports your finance org will actually accept.'],
      ]} dark />
      <CTABanner heading="Retire the cost spreadsheet." />
    </>
  );
}

/* -------- SRE -------- */

export function SREPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · SRE Investigation"
        title={[{ text: 'From alert to' }, { text: 'root cause.', accent: true }, { text: 'Faster.' }]}
        body="AI-assisted log triage, anomaly detection, and an investigation timeline that stitches metrics, logs and traces. Native OpenObserve integration, with auto-detected incident feeds."
      />
      <section className="sec-light pb-16">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10"><SREVisual /></div>
      </section>
      <FeatureGrid title="Intelligence at the speed of an incident" items={[
        ['Anomaly detection',      'Per-service baselines that learn seasonality and deploys.'],
        ['Log triage',             'AI-narrated summaries of relevant log windows, ranked by likelihood.'],
        ['Incident timeline',      'Metrics, logs, traces, deploys and tickets stitched into one view.'],
        ['OpenObserve integration','Logs explorer, retention policies and saved searches.'],
        ['Auto-detected incidents','Open and group related anomalies into a single incident automatically.'],
        ['Postmortem drafts',      'Pre-filled timelines, contributing factors and action items.'],
      ]} />
      <CTABanner heading="Faster RCAs. Quieter pagers." />
    </>
  );
}

/* -------- Solutions -------- */

function SolutionPage({ persona, pain, solution, relevant, eyebrow }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={pain} body={solution} />
      <section className="sec-light py-16">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10">
          <div className="ring-soft rounded-2xl p-8" style={{ background: 'var(--ivory)' }}>
            <div className="eyebrow mb-3">A typical week</div>
            <ul className="space-y-3 text-[15px]">
              {persona.before.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mono text-[11px] mt-1" style={{ color: 'var(--olive)' }}>—</span><span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="ring-soft rounded-2xl p-8" style={{ background: 'var(--ivory)' }}>
            <div className="eyebrow mb-3">With XamOps</div>
            <ul className="space-y-3 text-[15px]">
              {persona.after.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <Icon.Check width="14" height="14" style={{ color: 'var(--moss)', marginTop: 5 }} /> <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <FeatureGrid title="Most relevant capabilities" items={relevant} dark />
      <CTABanner />
    </>
  );
}

export function DevOpsPage() {
  return <SolutionPage
    eyebrow="Solutions · For DevOps Engineers"
    pain={[{ text: 'You manage 3 clouds.' }, { text: 'Toil never ends.', accent: true }]}
    solution="XamOps automates the operations layer so platform engineers ship platforms — not babysit instances, disks and patch windows."
    persona={{
      before: [
        'Manual ASG/MIG capacity tuning across regions.',
        'Disk usage tickets queued every Monday.',
        'Out-of-band DB patching on Friday nights.',
        'Drift detection runs… some of the time.',
      ],
      after: [
        'Spot conversions and capacity rules run themselves.',
        'Disk rightsizing scheduled with snapshot-rollback.',
        'DB minor patches applied in low-traffic windows automatically.',
        'Drift caught and remediated before a PR closes.',
      ],
    }}
    relevant={[
      ['Spot Automation',    'Cut compute up to 70% with safe staged conversions.'],
      ['Disk Rightsizing',   'Continuous resize with filesystem expansion across clouds.'],
      ['DBOps',              'Automate scaling, backups and patch windows for managed DBs.'],
    ]}
  />;
}

export function FinOpsPage() {
  return <SolutionPage
    eyebrow="Solutions · For FinOps Teams"
    pain={[{ text: 'Cloud bills grow.' }, { text: 'Visibility is a spreadsheet.', accent: true }]}
    solution="Real-time cost dashboards, automated rightsizing, and reservation coverage that doesn’t leak. Stop reconciling CSVs — start proving savings."
    persona={{
      before: [
        'Monthly bill arrives with surprises.',
        'CUDs and RIs underused; commitments leak.',
        'No per-team showback, no chargeback.',
        'Forecasts are best-effort guesses.',
      ],
      after: [
        'Live spend dashboards per team and service.',
        'Optimal RI/CUD/Savings Plan plan with break-even.',
        'Showback automated; chargeback finance accepts.',
        'Forecasts within ±2% at 30 days.',
      ],
    }}
    relevant={[
      ['Cost Analytics',    'Live dashboards, anomalies, forecasts.'],
      ['Disk Rightsizing',  '38% average storage spend reduction.'],
      ['Spot Automation',   'Up to 70% off compute, automated.'],
    ]}
  />;
}

export function SRESolutionPage() {
  return <SolutionPage
    eyebrow="Solutions · For SRE Teams"
    pain={[{ text: 'Always firefighting.' }, { text: 'Every incident takes hours.', accent: true }]}
    solution="Agentic investigation, anomaly feeds, and log intelligence — so RCAs are minutes, not afternoons. And so on-call gets a full night’s sleep."
    persona={{
      before: [
        'Alert storms; correlation by hand.',
        'Log queries copy-pasted between dashboards.',
        'Postmortems take days to write up.',
        'Same incident type keeps recurring.',
      ],
      after: [
        'Auto-detected incidents group related anomalies.',
        'AI-narrated log summaries ranked by likelihood.',
        'Postmortems drafted with timeline and action items.',
        'Recurring patterns flagged and tracked.',
      ],
    }}
    relevant={[
      ['SRE Investigation', 'Metrics, logs, traces and deploys in one timeline.'],
      ['SecOps',            'Auto-remediation removes a whole class of pages.'],
      ['Agentic SRE — soon','Autonomous investigation and resolution.'],
    ]}
  />;
}

/* -------- Pricing -------- */

export function PricingPage() {
  const tiers = [
    { name: 'Starter',    price: 'Contact us', tag: 'For small teams getting started', features: ['Up to 50 instances', 'Spot Automation (1 cloud)', 'Cost Analytics dashboards', 'Email support'] },
    { name: 'Growth',     price: 'Contact us', tag: 'For multi-cloud teams scaling fast', highlight: true, features: ['Unlimited instances', 'All Platform automations', 'Multi-cloud (AWS · GCP · Azure)', 'SecOps auto-remediation', 'Slack support'] },
    { name: 'Enterprise', price: 'Contact us', tag: 'For regulated, large-scale orgs',  features: ['SSO / SAML', 'Custom SLAs', 'Dedicated CSM', 'Audit log export', 'On-prem connector', '24/7 support'] },
  ];
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={[{ text: 'Simple,' }, { text: 'outcome-based pricing.', accent: true }]}
        body="We price on outcomes — savings delivered, toil eliminated — not on seat counts. Talk to us about scope and we’ll quote it."
      />
      <section className="sec-light pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl p-8 ring-soft relative" style={{ background: t.highlight ? 'var(--ink)' : 'var(--ivory)', color: t.highlight ? 'var(--ivory)' : 'var(--ink)' }}>
              {t.highlight && <span className="absolute top-5 right-5 text-[11px] mono px-2 py-0.5 rounded-full" style={{ background: 'var(--terracotta)', color: '#fff' }}>Most teams</span>}
              <div className="serif text-[28px]">{t.name}</div>
              <div className="text-[13px] mt-1" style={{ color: t.highlight ? 'var(--olive-2)' : 'var(--olive)' }}>{t.tag}</div>
              <div className="serif text-[42px] mt-8 leading-none">{t.price}</div>
              <ul className="mt-6 space-y-2.5 text-[14px]">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Icon.Check width="14" height="14" style={{ color: t.highlight ? 'var(--terracotta)' : 'var(--moss)', marginTop: 4 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/demo" className={`mt-8 w-full justify-center ${t.highlight ? 'btn-primary' : 'btn-dark'}`}>Talk to us</Link>
            </div>
          ))}
        </div>
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 mt-10 text-[14px]" style={{ color: 'var(--olive)' }}>
          We price on outcomes, not seat counts. Most customers see ROI within 60 days.
        </div>
      </section>
    </>
  );
}

/* -------- About -------- */

export function AboutPage() {
  const team = [
    ['Vivek Yadav',  'Founder & CEO',     'Cloud architect · 12 years building DevOps platforms.'],
    ['Aanya Sharma', 'Co-founder & CTO',  'Ex-AWS · designed AutoSpotting at scale.'],
    ['Rohan Mehta',  'Head of SRE',       'Built incident systems for fintech unicorns.'],
    ['Ishita Kapur', 'Head of FinOps',    'CFO whisperer. Ran cloud finance at a hyperscaler customer.'],
  ];
  return (
    <>
      <PageHero
        eyebrow="About"
        title={[{ text: 'Built by' }, { text: 'Xammer Technologies.', accent: true }]}
        body="We believe cloud operations should be autonomous, not manual. Founded in Delhi in 2016, Xammer has spent a decade running DevOps platforms for global teams. XamOps is what we built when we got tired of writing the same scripts twice."
      />
      <section className="sec-light pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-px ring-soft rounded-2xl overflow-hidden" style={{ background: 'var(--rule)' }}>
          {[
            ['10+',   'years'],
            ['1,000+','projects shipped'],
            ['180',   'engineers'],
            ['99.9%', 'uptime SLA'],
            ['40%',   'avg cost reduction'],
            ['3',     'cloud providers'],
          ].map(([n, l]) => (
            <div key={l} className="p-7" style={{ background: 'var(--ivory)' }}>
              <div className="big-num text-[44px] leading-none">{n}</div>
              <div className="eyebrow mt-3">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="sec-dark py-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="sec-label dark mb-5">Mission</div>
          <h2 className="serif text-[clamp(28px,4vw,52px)] leading-[1.06] max-w-[28ch]">
            We believe cloud operations should be <span style={{ color: 'var(--terracotta)' }}>autonomous, not manual.</span> Engineers should ship products, not run scripts.
          </h2>
        </div>
      </section>

      <section className="sec-light py-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="sec-label mb-6">Team</div>
          <div className="grid md:grid-cols-4 gap-6">
            {team.map(([n, role, bio]) => (
              <div key={n} className="ring-soft rounded-2xl p-5" style={{ background: 'var(--ivory)' }}>
                <div className="aspect-[4/3] rounded-xl stripe-light mb-4 flex items-end p-3"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(135deg, rgba(20,20,19,0.06) 0 1px, transparent 1px 12px)',
                    backgroundColor: 'var(--parchment)',
                  }}>
                  <span className="mono text-[10px]" style={{ color: 'var(--olive)' }}>portrait_placeholder.png</span>
                </div>
                <div className="serif text-[18px]">{n}</div>
                <div className="text-[13px]" style={{ color: 'var(--olive)' }}>{role}</div>
                <div className="text-[13px] mt-2 leading-[1.55]">{bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Want to build the future of cloud ops with us?" sub="We’re hiring across SRE, ML and platform engineering — open roles in Delhi and remote." />
    </>
  );
}

/* -------- Demo -------- */

export function DemoPage() {
  return (
    <>
      <section className="sec-light pt-[140px] pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <div className="eyebrow mb-5">Book a demo</div>
            <h1 className="serif text-[clamp(40px,6vw,72px)] leading-[1.02] tracking-tight">
              30 minutes. <span style={{ color: 'var(--terracotta)' }}>See your cloud automated live.</span>
            </h1>
            <p className="mt-6 text-[17px] leading-[1.6] max-w-[52ch]" style={{ color: 'var(--olive)' }}>
              We connect to a sandbox account and show real spot conversions, disk rightsizing recommendations and cost savings — on infrastructure that looks like yours. No slideware.
            </p>
            <ul className="mt-8 space-y-3 text-[15px]">
              {[
                ['Read-only by default',       'We only get the access you grant. Revoke anytime.'],
                ['Bring your own scenario',    'Show us a real workload and we’ll map savings.'],
                ['Engineers in the room',      'Your call is with the people who built this.'],
                ['SOC 2 Type II',              'Full evidence pack available pre-call.'],
              ].map(([k, v]) => (
                <li key={k} className="flex items-start gap-3">
                  <Icon.Check width="16" height="16" style={{ color: 'var(--moss)', marginTop: 3 }} />
                  <div><div className="font-medium">{k}</div><div className="text-[13px]" style={{ color: 'var(--olive)' }}>{v}</div></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-6">
            <form className="ring-soft rounded-2xl p-7" style={{ background: 'var(--ivory)' }} onSubmit={(e) => { e.preventDefault(); alert('Demo request received — we\'ll email you within 1 business day.'); }}>
              <div className="serif text-[24px] mb-5">Tell us about your stack</div>
              {[
                ['Full name',        'Aarya Patel',         'text'],
                ['Work email',       'you@company.com',     'email'],
                ['Company',          'Acme Cloud',          'text'],
                ['Team size',        '20',                  'number'],
              ].map(([l, p, t]) => (
                <label key={l} className="block mb-3">
                  <div className="text-[12px] mb-1" style={{ color: 'var(--olive)' }}>{l}</div>
                  <input required type={t} className="w-full rounded-[12px] px-3.5 py-3 text-[14px] outline-none" style={{ background: 'var(--parchment)', boxShadow: '0 0 0 1px var(--rule)' }} placeholder={p} />
                </label>
              ))}
              <div className="text-[12px] mb-1 mt-2" style={{ color: 'var(--olive)' }}>Cloud providers (pick all that apply)</div>
              <div className="flex flex-wrap gap-2 mb-4">
                {['AWS', 'GCP', 'Azure', 'On-prem'].map((c) => (
                  <label key={c} className="chip cursor-pointer">
                    <input type="checkbox" className="accent-[var(--terracotta)]" /> {c}
                  </label>
                ))}
              </div>
              <label className="block mb-4">
                <div className="text-[12px] mb-1" style={{ color: 'var(--olive)' }}>What would you like to see?</div>
                <textarea rows="3" className="w-full rounded-[12px] px-3.5 py-3 text-[14px] outline-none" style={{ background: 'var(--parchment)', boxShadow: '0 0 0 1px var(--rule)' }} placeholder="Spot conversion on prod-api ASG, disk rightsizing across the staging fleet…"></textarea>
              </label>
              <button type="submit" className="btn-primary w-full justify-center">Request demo <Icon.Arrow width="14" height="14" /></button>
              <div className="mono text-[11px] mt-3 text-center" style={{ color: 'var(--olive)' }}>or email demo@xamops.com</div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

/* -------- Blog -------- */

export function BlogPage() {
  const posts = [
    { tag: 'Spot', title: 'How Spot Automation saves teams 70% on compute', excerpt: 'A walk-through of the staged replacement loop, eviction handling and minimum-regular-VM safety net that makes spot safe for production.', read: '8 min', date: 'Apr 28, 2026' },
    { tag: 'FinOps', title: 'Disk Rightsizing: the cost saving everyone ignores', excerpt: 'Compute gets all the FinOps press. Disks quietly waste 30–40%. Here is the math, and how to automate the fix without downtime.', read: '6 min', date: 'Apr 14, 2026' },
    { tag: 'Vision', title: 'What is a Cognitive Cloud OS?', excerpt: 'A definition, a manifesto, and a roadmap. Why the next decade of cloud operations belongs to systems that think, not scripts that run.', read: '12 min', date: 'Apr 02, 2026' },
  ];
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={[{ text: 'Notes from' }, { text: 'the cognitive layer.', accent: true }]}
        body="Engineering deep-dives, FinOps math, and the occasional opinion from the people building XamOps."
        cta={false}
      />
      <section className="sec-light pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <a key={p.title} href="#" className="ring-soft rounded-2xl overflow-hidden hcard block" style={{ background: 'var(--ivory)' }}>
              <div className="aspect-[16/10]" style={{
                backgroundImage: 'repeating-linear-gradient(135deg, rgba(20,20,19,0.06) 0 1px, transparent 1px 12px)',
                backgroundColor: 'var(--parchment)'
              }} />
              <div className="p-6">
                <div className="flex items-center gap-3 eyebrow"><span>{p.tag}</span><span>·</span><span>{p.date}</span></div>
                <div className="serif text-[22px] mt-3 leading-[1.18]">{p.title}</div>
                <div className="text-[14px] mt-3 leading-[1.55]" style={{ color: 'var(--olive)' }}>{p.excerpt}</div>
                <div className="text-[13px] mt-5 inline-flex items-center gap-2 ulink">Read · {p.read} <Icon.Arrow width="14" height="14" /></div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

/* -------- Contact -------- */

export function ContactPage() {
  return (
    <>
      <section className="sec-light pt-[140px] pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="eyebrow mb-5">Contact</div>
            <h1 className="serif text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight">
              Talk to us.
            </h1>
            <p className="mt-5 text-[17px] leading-[1.6]" style={{ color: 'var(--olive)' }}>
              General enquiries, partnerships, press, or just to say hello — we read everything.
            </p>
            <div className="mt-8 space-y-4 text-[15px]">
              <div>
                <div className="eyebrow mb-1">Email</div>
                <a href="mailto:support@xammer.in" className="ulink">support@xammer.in</a>
              </div>
              <div>
                <div className="eyebrow mb-1">Sales</div>
                <a href="mailto:demo@xamops.com" className="ulink">demo@xamops.com</a>
              </div>
              <div>
                <div className="eyebrow mb-1">Office</div>
                Xammer Technologies · New Delhi, India
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <form className="ring-soft rounded-2xl p-7" style={{ background: 'var(--ivory)' }} onSubmit={(e) => { e.preventDefault(); alert('Message sent — we’ll get back within 1 business day.'); }}>
              {[
                ['Name', 'Aarya Patel', 'text'],
                ['Email', 'you@company.com', 'email'],
              ].map(([l, p, t]) => (
                <label key={l} className="block mb-3">
                  <div className="text-[12px] mb-1" style={{ color: 'var(--olive)' }}>{l}</div>
                  <input required type={t} className="w-full rounded-[12px] px-3.5 py-3 text-[14px] outline-none" style={{ background: 'var(--parchment)', boxShadow: '0 0 0 1px var(--rule)' }} placeholder={p} />
                </label>
              ))}
              <label className="block mb-4">
                <div className="text-[12px] mb-1" style={{ color: 'var(--olive)' }}>Message</div>
                <textarea required rows="6" className="w-full rounded-[12px] px-3.5 py-3 text-[14px] outline-none" style={{ background: 'var(--parchment)', boxShadow: '0 0 0 1px var(--rule)' }} placeholder="What can we help with?"></textarea>
              </label>
              <button type="submit" className="btn-primary">Send message <Icon.Arrow width="14" height="14" /></button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

/* -------- 404 -------- */

export function NotFoundPage() {
  return (
    <section className="sec-light pt-[140px] pb-24">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="eyebrow">404</div>
        <h1 className="serif text-[clamp(40px,6vw,84px)] leading-[1.02] mt-3">Page not found.</h1>
        <p className="mt-4 text-[17px]" style={{ color: 'var(--olive)' }}>That URL drifted. Our drift detection has been notified.</p>
        <Link to="/" className="btn-primary mt-8">Back home <Icon.Arrow width="14" height="14" /></Link>
      </div>
    </section>
  );
}
