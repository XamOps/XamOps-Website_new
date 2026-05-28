import { Icon } from '../components/Icons';
import PageHero from '../components/shared/PageHero';
import { useDemoModal } from '../lib/demoModal';

export default function PricingPage() {
  const { setOpen } = useDemoModal();
  const tiers = [
    { name: 'Starter',    price: 'Contact us', tag: 'For small teams getting started',   features: ['Up to 50 instances','Spot Automation (1 cloud)','Cost Analytics dashboards','Email support'] },
    { name: 'Growth',     price: 'Contact us', tag: 'For multi-cloud teams scaling fast', highlight: true, features: ['Unlimited instances','All Platform automations','Multi-cloud (AWS · GCP · Azure)','SecOps auto-remediation','Slack support'] },
    { name: 'Enterprise', price: 'Contact us', tag: 'For regulated, large-scale orgs',   features: ['SSO / SAML','Custom SLAs','Dedicated CSM','Audit log export','On-prem connector','24/7 support'] },
  ];
  return (
    <>
      <PageHero eyebrow="Pricing"
        title={[{ text: 'Simple,' }, { text: 'outcome-based pricing.', accent: true }]}
        body="We price on outcomes: savings delivered, toil eliminated. Not on seat counts." cta={false} />
      <section className="sec-light pb-16 md:pb-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 grid md:grid-cols-3 gap-4 sm:gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl p-6 md:p-8 ring-soft relative" style={{ background: t.highlight ? 'var(--ink)' : 'var(--ivory)', color: t.highlight ? 'var(--ivory)' : 'var(--ink)' }}>
              {t.highlight && <span className="absolute top-5 right-5 text-[11px] mono px-2 py-0.5 rounded-full" style={{ background: 'var(--terracotta)', color: '#fff' }}>Most teams</span>}
              <div className="serif text-[clamp(20px,5vw,28px)]">{t.name}</div>
              <div className="text-[13px] mt-1" style={{ color: t.highlight ? 'var(--olive-2)' : 'var(--olive)' }}>{t.tag}</div>
              <div className="serif text-[clamp(28px,7vw,42px)] mt-6 md:mt-8 leading-none">{t.price}</div>
              <ul className="mt-6 space-y-2.5 text-[14px]">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Icon.Check width="14" height="14" style={{ color: t.highlight ? 'var(--terracotta)' : 'var(--moss)', marginTop: 4 }} /> {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => setOpen(true)} className={`mt-6 md:mt-8 w-full justify-center ${t.highlight ? 'btn-primary' : 'btn-dark'}`}>Talk to us</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
