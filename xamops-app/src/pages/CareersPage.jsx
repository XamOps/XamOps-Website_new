import PageHero from '../components/shared/PageHero';
import CTABanner from '../components/shared/CTABanner';

const VALUES = [
  {
    title: 'Ship real things',
    body: 'We build automation that runs in production for real teams. Every feature we ship saves someone a Monday morning fire drill.',
  },
  {
    title: 'Own the outcome',
    body: 'We do not hand off and move on. The engineer who builds it is the one who makes sure it works. Accountability is the whole game.',
  },
  {
    title: 'Default to transparency',
    body: 'Cost data, roadmap priorities, company metrics — shared openly across the team. No information hoarding, no surprises.',
  },
  {
    title: 'Think in systems',
    body: 'Cloud infrastructure is complex. We look for people who can hold the whole system in their head and reason about second-order effects.',
  },
];

const PERKS = [
  ['Remote-first', 'Work from anywhere. We have team members across Delhi, Bangalore, and remote globally.'],
  ['Competitive salary', 'Benchmarked against top-quartile SaaS companies. Reviewed annually.'],
  ['Health coverage', 'Medical, dental, and vision for you and your family.'],
  ['Learning budget', '₹1L / year for courses, conferences, and certifications.'],
  ['Cloud credits', 'Generous personal cloud credits for experimentation and side projects.'],
  ['Flexible hours', 'Overlap with your team matters. The rest is up to you.'],
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={[{ text: 'Build the future of' }, { text: 'cloud operations.', accent: true }]}
        body="We are a small team with a big surface area. If you love cloud infrastructure, automation, and making complex things simple, you will fit right in."
        cta={false}
      />

      {/* Values */}
      <section className="sec-light pb-12 md:pb-20">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="sec-label mb-6">How we work</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VALUES.map(({ title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-6 ring-soft"
                style={{ background: 'var(--ivory)' }}
              >
                <div
                  className="serif text-[19px] mb-3"
                  style={{ color: 'var(--ink)' }}
                >
                  {title}
                </div>
                <p className="text-[14.5px] leading-[1.68]" style={{ color: 'var(--ink-2)' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="sec-dark py-12 md:py-20">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="sec-label dark mb-5">Open roles</div>
          <h2 className="serif text-[clamp(26px,4vw,48px)] leading-[1.08] mb-10">
            We are{' '}
            <span style={{ color: 'var(--terracotta)' }}>actively hiring.</span>
          </h2>
          <div className="space-y-3">
            {[
              ['Senior Platform Engineer', 'Engineering · Remote / Delhi', 'Full-time'],
              ['SRE — Cloud Automation', 'Engineering · Remote / Delhi', 'Full-time'],
              ['FinOps Product Manager', 'Product · Remote', 'Full-time'],
              ['Frontend Engineer (React)', 'Engineering · Remote', 'Full-time'],
              ['Solutions Engineer', 'Customer Success · Remote / Delhi', 'Full-time'],
            ].map(([role, team, type]) => (
              <div
                key={role}
                className="flex flex-wrap items-center justify-between gap-4 rounded-xl px-5 py-4"
                style={{ background: 'var(--ivory)', border: '1px solid var(--rule-dark)' }}
              >
                <div>
                  <div
                    className="text-[15px]"
                    style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}
                  >
                    {role}
                  </div>
                  <div className="text-[12px] mt-0.5" style={{ color: 'var(--olive)' }}>
                    {team} · {type}
                  </div>
                </div>
                <a
                  href="mailto:careers@xammer.in"
                  className="btn-primary"
                  style={{ fontSize: '13px', padding: '9px 16px' }}
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[13px]" style={{ color: 'var(--olive)' }}>
            Do not see your role? Send us a note at{' '}
            <a
              href="mailto:careers@xammer.in"
              style={{ color: 'var(--terracotta)', textDecoration: 'none' }}
            >
              careers@xammer.in
            </a>
            {' '}and tell us what you would build.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="sec-light py-12 md:py-20">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="sec-label mb-6">Benefits</div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px ring-soft rounded-2xl overflow-hidden"
            style={{ background: 'var(--rule)' }}
          >
            {PERKS.map(([title, body]) => (
              <div
                key={title}
                className="p-6"
                style={{ background: 'var(--ivory)' }}
              >
                <div
                  className="text-[14px] mb-2"
                  style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}
                >
                  {title}
                </div>
                <p className="text-[13px] leading-[1.62]" style={{ color: 'var(--olive)' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Want to build the future of cloud ops with us?"
        sub="We are hiring across engineering, product, and customer success. Remote-first, based in Delhi."
      />
    </>
  );
}
