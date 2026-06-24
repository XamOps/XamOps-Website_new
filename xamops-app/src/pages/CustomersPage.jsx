import { Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import CTABanner from '../components/shared/CTABanner';
import { useDemoModal } from '../lib/demoModal';
import { Icon } from '../components/Icons';

const STATS = [
  { n: '40%', l: 'average cost reduction' },
  { n: '3×', l: 'faster incident response' },
  { n: '200+', l: 'teams onboarded' },
  { n: '$12M+', l: 'cloud savings generated' },
];

const TESTIMONIALS = [
  {
    quote: 'XamOps cut our AWS bill by 38% in the first quarter. The Spot automation ran itself — we barely had to touch it after the initial setup.',
    name: 'Priya Nair',
    role: 'Head of Infrastructure',
    company: 'Series B SaaS',
    tag: 'Spot Automation',
  },
  {
    quote: 'We had visibility problems across three cloud providers. XamOps gave our FinOps team one dashboard for everything. Budget conversations with leadership are completely different now.',
    name: 'Rahul Desai',
    role: 'VP Engineering',
    company: 'E-commerce Scale-up',
    tag: 'Cost Analytics',
  },
  {
    quote: 'Our SRE team was spending too much time on runbooks. XamOps SecOps caught a misconfiguration in staging before it hit production — that alone saved us from a compliance headache.',
    name: 'Anjali Mehta',
    role: 'Principal SRE',
    company: 'Fintech Platform',
    tag: 'SecOps',
  },
  {
    quote: 'DBOps took our database maintenance burden from a weekend job to a background process. The team now ships features on Sundays instead of babysitting backups.',
    name: 'Kiran Sharma',
    role: 'CTO',
    company: 'HealthTech Startup',
    tag: 'DBOps',
  },
  {
    quote: 'Disk rightsizing alone recovered $4,200 a month. We had no idea how much was sitting unattached. XamOps found it in minutes, we cleaned it up in an afternoon.',
    name: 'Suresh Iyer',
    role: 'Cloud Architect',
    company: 'Enterprise Software',
    tag: 'Disk Rightsizing',
  },
  {
    quote: 'The onboarding was fast. We connected our AWS accounts, tagged our ASGs, and AutoSpotting was running in under an hour. The savings showed up on the next bill.',
    name: 'Deepa Krishnan',
    role: 'DevOps Lead',
    company: 'EdTech Platform',
    tag: 'Spot Automation',
  },
];

const USE_CASES = [
  {
    title: 'DevOps Teams',
    body: 'Automate Spot fleets, rightsizing, and scheduling. Spend less time on infrastructure and more time shipping.',
    href: '/solutions/devops',
  },
  {
    title: 'FinOps Teams',
    body: 'Real-time cost visibility across AWS, Azure, and GCP. Budget alerts, forecasting, and automated cost reduction.',
    href: '/solutions/finops',
  },
  {
    title: 'SRE Teams',
    body: 'AI-assisted incident investigation, continuous security monitoring, and database operations on autopilot.',
    href: '/solutions/sre',
  },
];

export default function CustomersPage() {
  const { setOpen } = useDemoModal();

  return (
    <>
      <PageHero
        eyebrow="Customers"
        title={[{ text: 'Trusted by teams' }, { text: 'moving fast on cloud.', accent: true }]}
        body="DevOps, FinOps, and SRE teams use XamOps to cut cloud costs, automate operations, and regain control across AWS, Azure, and GCP."
        cta={false}
      />

      {/* Stats */}
      <section className="sec-light pb-12 md:pb-20">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px ring-soft rounded-2xl overflow-hidden"
            style={{ background: 'var(--rule)' }}
          >
            {STATS.map(({ n, l }) => (
              <div key={l} className="p-6 md:p-8" style={{ background: 'var(--ivory)' }}>
                <div
                  className="big-num text-[clamp(28px,6vw,44px)] leading-none"
                  style={{ color: 'var(--terracotta)' }}
                >
                  {n}
                </div>
                <div className="eyebrow mt-3">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="sec-dark py-12 md:py-20">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="sec-label dark mb-5">What teams say</div>
          <h2 className="serif text-[clamp(26px,4vw,48px)] leading-[1.08] mb-10 max-w-[22ch]">
            Real results from real{' '}
            <span style={{ color: 'var(--terracotta)' }}>engineering teams.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TESTIMONIALS.map(({ quote, name, role, company, tag }) => (
              <div
                key={name}
                className="rounded-2xl p-6 flex flex-col justify-between"
                style={{ background: 'var(--ivory)', border: '1px solid var(--rule-dark)' }}
              >
                <div>
                  <div
                    className="eyebrow mb-4"
                    style={{ fontSize: '10px', color: 'var(--terracotta)' }}
                  >
                    {tag}
                  </div>
                  <p
                    className="text-[14.5px] leading-[1.72]"
                    style={{ color: 'var(--ink-2)' }}
                  >
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>
                <div className="mt-5 pt-5" style={{ borderTop: '1px solid var(--rule-dark)' }}>
                  <div
                    className="text-[13px]"
                    style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}
                  >
                    {name}
                  </div>
                  <div className="text-[12px] mt-0.5" style={{ color: 'var(--olive)' }}>
                    {role} · {company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="sec-light py-12 md:py-20">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="sec-label mb-5">By team</div>
          <h2 className="serif text-[clamp(26px,4vw,48px)] leading-[1.08] mb-10 max-w-[24ch]">
            Built for every team that touches cloud infrastructure.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {USE_CASES.map(({ title, body, href }) => (
              <Link
                key={title}
                to={href}
                className="rounded-2xl p-6 block ring-soft hcard"
                style={{ background: 'var(--ivory)', textDecoration: 'none' }}
              >
                <div
                  className="serif text-[20px] mb-3"
                  style={{ color: 'var(--ink)' }}
                >
                  {title}
                </div>
                <p
                  className="text-[14px] leading-[1.65] mb-5"
                  style={{ color: 'var(--olive)' }}
                >
                  {body}
                </p>
                <div
                  className="inline-flex items-center gap-2 text-[13px]"
                  style={{ color: 'var(--terracotta)' }}
                >
                  Learn more <Icon.Arrow width="13" height="13" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Join 200+ teams optimizing their cloud with XamOps."
        sub="Get started in under an hour. No agents to install, no YAML to manage."
      />
    </>
  );
}
