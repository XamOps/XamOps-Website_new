import PageHero from '../components/shared/PageHero';
import CTABanner from '../components/shared/CTABanner';

const STATS = [
  ['5+', 'years of cloud expertise'],
  ['1,000+', 'projects delivered'],
  ['180+', 'certified cloud engineers'],
  ['99.9%', 'uptime SLA'],
  ['30–40%', 'guaranteed cost reduction'],
  ['200+', 'enterprise clients'],
];

const VALUES = [
  ['Outcome-First Thinking', 'We measure success by your results — cost saved, uptime delivered, deployments accelerated. Not by hours billed.'],
  ['Engineering Integrity', 'Every recommendation we make is the one we would make if it were our own infrastructure. No vendor kickbacks, no upsells you don’t need.'],
  ['Embedded Partnership', 'We don’t deliver projects and disappear. We embed with your team, understand your business, and stay accountable for outcomes.'],
  ['Speed with Precision', 'We move fast because we’ve done this before — but never at the cost of reliability. Automation is how we make both possible.'],
  ['People Over Process', 'Technology is a means, not an end. We keep people — your customers, your team, your users — at the centre of every decision.'],
  ['India-Rooted, World-Class', 'Built in Delhi, serving enterprises across India and globally. We combine local market understanding with world-class cloud engineering.'],
];

const JOURNEY = [
  ['2014', 'Founded in Delhi', 'Xammer was founded with a simple belief: Indian enterprises deserve world-class cloud engineering without the enterprise price tag.'],
  ['2016', 'First 100 Clients', 'Crossed 100 active managed services clients across Delhi NCR, primarily in FinTech and healthcare sectors.'],
  ['2018', 'AWS Partner Status', 'Achieved AWS Select Tier Consulting Partner status — recognition of technical depth and client satisfaction outcomes.'],
  ['2020', 'Multi-Cloud Practice', 'Expanded to full multi-cloud coverage — AWS, Azure, and GCP — with 500+ projects delivered.'],
  ['2022', 'Azure Expert MSP', 'Earned Microsoft Azure Expert MSP designation — fewer than 100 partners globally — and launched our DevSecOps practice.'],
  ['2024', '1,000+ Projects', 'Crossed 1,000 successful project deliveries with 180+ certified professionals serving enterprises across 12 industries.'],
];

const PARTNERS = ['AWS Select Tier Consulting Partner', 'Microsoft Azure Expert MSP', 'Google Cloud Certified Partner'];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About"
        title={[{ text: 'Engineering partners' }, { text: 'you can actually rely on.', accent: true }]}
        body="Xammer is India's trusted cloud managed services and IT consulting company — founded in Delhi, built on engineering integrity, and obsessed with delivering measurable outcomes for every client."
        cta={false} />

      <section className="sec-light pb-8 md:pb-14">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-3 gap-px ring-soft rounded-2xl overflow-hidden" style={{ background: 'var(--rule)' }}>
          {STATS.map(([n, l]) => (
            <div key={l} className="p-5 md:p-7" style={{ background: 'var(--ivory)' }}>
              <div className="big-num text-[clamp(28px,8vw,44px)] leading-none">{n}</div>
              <div className="eyebrow mt-3">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="sec-dark py-8 md:py-14">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="sec-label dark mb-5">Our Story</div>
          <h2 className="serif text-[clamp(28px,4vw,52px)] leading-[1.06] max-w-[24ch] mb-7">
            Born from a frustration with <span style={{ color: 'var(--terracotta)' }}>how cloud should work.</span>
          </h2>
          <div className="max-w-[68ch] space-y-4">
            <p className="text-[16px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Xammer was founded in 2014 by a team of cloud engineers who were frustrated with a consistent
              pattern: Indian enterprises were paying too much for cloud infrastructure, receiving too little
              expertise in return, and being treated as ticket numbers rather than partners.
            </p>
            <p className="text-[16px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.7)' }}>
              We set out to build the managed services company we would have wanted to work with — one that
              embeds itself in your operations, takes accountability for outcomes, and makes your cloud
              environment something your engineering team is proud of rather than afraid of.
            </p>
            <p className="text-[16px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Ten years, 1,000+ projects, and 180+ certified engineers later, that founding principle still
              drives everything we do.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            {PARTNERS.map((p) => (
              <span key={p} className="eyebrow" style={{ border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '8px 16px', color: 'rgba(255,255,255,0.75)' }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-light py-8 md:py-14">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="sec-label mb-6">Our Values</div>
          <h2 className="serif text-[clamp(26px,3.6vw,44px)] leading-[1.1] max-w-[22ch] mb-9">
            What drives every decision we make.
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {VALUES.map(([title, body], i) => (
              <div key={title} className="ring-soft rounded-2xl p-6" style={{ background: 'var(--ivory)' }}>
                <span className="mono text-[11px]" style={{ color: 'var(--olive)' }}>{String(i + 1).padStart(2, '0')}</span>
                <div className="serif text-[19px] mt-4 leading-tight">{title}</div>
                <p className="text-[13.5px] mt-3 leading-[1.6]" style={{ color: 'var(--olive)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-light pb-8 md:pb-14">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="sec-label mb-6">Our Journey</div>
          <h2 className="serif text-[clamp(26px,3.6vw,44px)] leading-[1.1] max-w-[22ch] mb-9">
            A decade of building better cloud.
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px ring-soft rounded-2xl overflow-hidden" style={{ background: 'var(--rule)' }}>
            {JOURNEY.map(([year, title, body]) => (
              <div key={year} className="p-6 md:p-7" style={{ background: 'var(--ivory)' }}>
                <div className="mono text-[13px]" style={{ color: 'var(--terracotta)' }}>{year}</div>
                <div className="serif text-[18px] mt-3 leading-tight">{title}</div>
                <p className="text-[13.5px] mt-3 leading-[1.6]" style={{ color: 'var(--olive)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to meet your engineering partner?" sub="Whether you need a free cloud cost audit, a migration partner, or a 24×7 managed services team — Xammer is ready." />
    </>
  );
}
