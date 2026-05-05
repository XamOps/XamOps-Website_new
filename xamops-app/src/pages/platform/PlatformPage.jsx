import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icons';
import PageHero from '../../components/shared/PageHero';
import CTABanner from '../../components/shared/CTABanner';

export default function PlatformPage() {
  const cats = [
    { I: Icon.Spot,  to: '/platform/spot-automation',  name: 'Spot Automation',   body: 'Replace on-demand with spot capacity across AWS ASGs, GCP MIGs, Azure VMSS. Up to 70% off compute.' },
    { I: Icon.Disk,  to: '/platform/disk-rightsizing', name: 'Disk Rightsizing',  body: 'The only platform that automates disk rightsizing at scale across EBS, Persistent Disk, Managed Disks.' },
    { I: Icon.DB,    to: '/platform/dbops',            name: 'DBOps',             body: 'Automated scaling, backup verification, performance tuning and patch windows for managed DBs.' },
    { I: Icon.Sec,   to: '/platform/secops',           name: 'SecOps',            body: 'Continuous CIS posture, drift detection and automated remediation alongside your CI/CD.' },
    { I: Icon.Cost,  to: '/platform/cost-analytics',   name: 'Cost Analytics',    body: 'Real-time savings dashboards, daily aggregations, RI/CUD/Savings Plan coverage and forecasting.' },
    { I: Icon.SRE,   to: '/platform/sre',              name: 'SRE Investigation', body: 'AI-assisted log triage and an investigation timeline that connects metrics, logs and traces.' },
  ];
  return (
    <>
      <PageHero eyebrow="Platform"
        title={[{ text: 'One platform.' }, { text: 'Every layer of your cloud.', accent: true }, { text: 'Fully automated.' }]}
        body="XamOps unifies six automations into a single control plane that runs across AWS, GCP and Azure — so engineers stop babysitting infrastructure and managers stop signing oversized cloud bills." />
      <section className="sec-light pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-px ring-soft rounded-2xl overflow-hidden" style={{ background: 'var(--rule)' }}>
            {cats.map(({ I, to, name, body }, i) => (
              <Link to={to} key={name} className="p-8 hcard block" style={{ background: 'var(--ivory)' }}>
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
