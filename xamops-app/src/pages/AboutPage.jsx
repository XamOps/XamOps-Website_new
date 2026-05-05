import PageHero from '../components/shared/PageHero';
import CTABanner from '../components/shared/CTABanner';

export default function AboutPage() {
  const team = [
    ['Vivek Yadav',  'Founder & CEO',    'Cloud architect · 12 years building DevOps platforms.'],
    ['Aanya Sharma', 'Co-founder & CTO', 'Ex-AWS · designed AutoSpotting at scale.'],
    ['Rohan Mehta',  'Head of SRE',      'Built incident systems for fintech unicorns.'],
    ['Ishita Kapur', 'Head of FinOps',   'CFO whisperer. Ran cloud finance at hyperscaler customer.'],
  ];
  return (
    <>
      <PageHero eyebrow="About"
        title={[{ text: 'Built by' }, { text: 'Xammer Technologies.', accent: true }]}
        body="We believe cloud operations should be autonomous, not manual. Founded in Delhi in 2016, Xammer has spent a decade running DevOps platforms for global teams." cta={false} />
      <section className="sec-light pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-px ring-soft rounded-2xl overflow-hidden" style={{ background: 'var(--rule)' }}>
          {[['10+','years'],['1,000+','projects shipped'],['180','engineers'],['99.9%','uptime SLA'],['40%','avg cost reduction'],['3','cloud providers']].map(([n, l]) => (
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
                <div className="aspect-[4/3] rounded-xl mb-4 flex items-end p-3"
                  style={{ backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 12px)', backgroundColor: 'var(--parchment)' }}>
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
      <CTABanner heading="Want to build the future of cloud ops with us?" sub="We're hiring across SRE, ML and platform engineering — open roles in Delhi and remote." />
    </>
  );
}
