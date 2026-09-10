import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icons';
import CTABanner from '../../components/shared/CTABanner';
import { useDemoModal } from '../../lib/demoModal';
import useInView from '../../hooks/useInView';

const Xam = () => (
  <span style={{ color: 'var(--terracotta)', fontFamily: 'var(--font-med)', letterSpacing: '-0.01em' }}>XamOps</span>
);

const Mark = ({ children }) => (
  <strong style={{ color: 'var(--ink)', fontFamily: 'var(--font-med)' }}>{children}</strong>
);

const ACCENT = 'var(--viz-3)';

function Reveal({ children, className = '', style, id }) {
  const [ref, inView] = useInView(0.15);
  return (
    <section
      ref={ref}
      id={id}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(18px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      {children}
    </section>
  );
}

const SECTIONS = [
  {
    id: 'better-control',
    prefix: '01',
    title: 'Enterprise FinOps Services in Noida for Better Cloud Financial Control',
    paras: [
      'Cloud adoption has changed how enterprises deploy applications, store information, support remote teams, and deliver digital services. However, increased cloud usage can also create unexpected expenses when resources are not properly monitored or optimized. XamOps delivers a structured FinOps approach that helps organizations understand where their cloud budget is going, why costs are increasing, and what actions can improve financial efficiency.',
      <>Modern <Mark>Cloud FinOps Services in Noida</Mark> combine financial governance with cloud engineering practices. This means that finance, operations, engineering, procurement, and business teams can work from a shared understanding of cloud expenditure. Instead of treating cloud bills as a monthly accounting exercise, FinOps turns cloud spending into an ongoing operational process where teams can measure, analyze, forecast, and optimize costs.</>,
      'XamOps focuses on creating practical cloud cost management strategies that align technology decisions with business objectives. The objective is not simply to reduce every possible cloud expense. Excessive cost reduction can sometimes affect performance, availability, or innovation. A mature FinOps strategy focuses on achieving the right balance between cost, performance, reliability, security, and business value.',
    ],
  },
  {
    id: 'why-enterprises-need',
    prefix: '02',
    title: 'Why Enterprises Need Professional FinOps Management',
    paras: [
      'Enterprise cloud environments can include multiple accounts, subscriptions, regions, applications, teams, storage systems, databases, containers, virtual machines, and third-party services. Without proper governance, unused resources, oversized infrastructure, inefficient storage, and unpredictable workloads can increase monthly cloud expenditure.',
      <>Professional <Mark>FinOps Consultants in Noida</Mark> help organizations identify these challenges and establish processes that make cloud costs easier to understand. Consultants can analyze historical spending patterns, evaluate resource utilization, identify optimization opportunities, and develop governance models that encourage responsible cloud consumption.</>,
      'A professional FinOps model also improves communication between technical and financial teams. Engineers can understand how infrastructure decisions influence budgets, while finance teams can gain better visibility into the technology costs behind business operations. This shared accountability can help organizations make faster and more informed decisions.',
      'XamOps supports enterprises by connecting cloud operations with financial intelligence. The approach can include cost allocation, resource tagging strategies, budget monitoring, utilization analysis, forecasting, optimization recommendations, and continuous reporting. These capabilities allow businesses to move from reactive cloud billing management toward proactive financial operations.',
    ],
  },
  {
    id: 'how-xamops-supports',
    prefix: '03',
    title: 'How XamOps Supports Cloud Cost Optimization',
    paras: [
      <>One of the key benefits of <Mark>FinOps Consulting Services in Noida</Mark> is the ability to create a repeatable framework for managing cloud expenditure. Instead of making isolated cost-cutting decisions, businesses can establish policies and workflows that continue to deliver value as the environment grows.</>,
      'XamOps can help organizations review resource utilization and identify areas where infrastructure does not match actual demand. For example, an enterprise may have computing resources that are consistently underutilized, storage that contains unnecessary data, or development environments that remain active outside working hours. Identifying such patterns can create opportunities to improve efficiency without affecting production workloads.',
      "Cloud cost optimization can also involve rightsizing resources, improving workload scheduling, reviewing storage configurations, optimizing database usage, and evaluating pricing options. The right strategy depends on the organization's workload architecture, business requirements, availability expectations, and growth plans.",
      'The goal is to make cloud spending more predictable and transparent. With continuous monitoring and clear reporting, enterprises can identify unusual spending patterns earlier and take corrective action before they become major budget issues.',
    ],
  },
  {
    id: 'governance',
    prefix: '04',
    title: 'FinOps Governance for Enterprise Cloud Environments',
    paras: [
      'Effective FinOps requires governance that is practical enough for engineering teams to follow while providing finance teams with meaningful financial visibility. XamOps helps organizations develop governance practices around budgets, ownership, tagging, reporting, accountability, and optimization.',
      'A strong governance framework can define who owns specific cloud resources, which teams are responsible for budgets, how costs should be categorized, and what processes should be followed when spending exceeds predefined thresholds. These practices help organizations reduce ambiguity and improve accountability across departments.',
      <><Mark>Cloud FinOps Services in Noida</Mark> can also support multi-cloud and hybrid environments where businesses operate across different cloud platforms and infrastructure models. A unified FinOps strategy can make it easier to compare spending, monitor business units, evaluate workload efficiency, and establish consistent financial controls.</>,
      'XamOps takes a business-focused approach to FinOps governance. Rather than introducing unnecessary complexity, the objective is to create processes that provide useful insights and can scale with the organization. This approach is particularly valuable for enterprises experiencing rapid cloud adoption or expanding their digital infrastructure.',
    ],
  },
  {
    id: 'specialists',
    prefix: '05',
    title: 'Benefits of Working With FinOps Specialists',
    paras: [
      <>Working with experienced <Mark>FinOps Consultants in Noida</Mark> can provide organizations with specialized knowledge that may not be available within an internal finance or infrastructure team. FinOps requires an understanding of cloud architecture, billing models, utilization metrics, financial planning, operational processes, and business priorities.</>,
      'Specialists can help enterprises identify hidden cost drivers and prioritize optimization opportunities according to their potential business impact. They can also help establish dashboards and reporting mechanisms that make cloud spending easier for stakeholders to understand.',
      'Another important advantage is continuous improvement. Cloud environments change frequently because businesses launch new applications, increase workloads, adopt new services, and modify infrastructure. A one-time optimization exercise may deliver short-term savings, but continuous FinOps management helps organizations maintain financial discipline as their technology environment evolves.',
      <>XamOps combines technical understanding with financial awareness to help businesses develop a sustainable cloud cost management culture. With <Mark>24/7 Infrastructure Monitoring</Mark> and support from certified technical professionals, organizations can maintain better visibility over critical cloud operations while continuing to pursue optimization opportunities.</>,
    ],
  },
  {
    id: 'predictable-strategy',
    prefix: '06',
    title: 'Building a Predictable Cloud Financial Strategy',
    paras: [
      'A predictable cloud financial strategy begins with visibility. Organizations need to know how much they are spending, which teams and applications are responsible for that spending, and how current consumption compares with historical trends and business forecasts.',
      <><Mark>FinOps Service Provider in Noida</Mark> solutions can help enterprises establish dashboards, budgets, cost allocation methods, forecasting practices, and alert mechanisms. These capabilities provide decision-makers with information that can support better planning and reduce the risk of unexpected cloud expenditure.</>,
      'Forecasting is particularly important for businesses with seasonal workloads, rapidly growing applications, or changing customer demand. By analyzing historical usage and current trends, FinOps teams can help organizations anticipate potential changes in cloud costs and prepare appropriate budgets.',
      'XamOps can also support optimization reviews that evaluate whether cloud resources are being used efficiently. This may involve analyzing compute utilization, storage consumption, database workloads, network usage, and other cost-generating services. The result is a more transparent relationship between technology consumption and business spending.',
    ],
  },
  {
    id: 'why-choose',
    prefix: '07',
    title: 'Why Choose XamOps for FinOps?',
    paras: [
      'XamOps is focused on helping enterprises achieve stronger operational and financial control across their cloud environments. The company combines technical expertise, monitoring capabilities, cloud management knowledge, and FinOps practices to support organizations at different stages of cloud maturity.',
      <>Businesses looking for <Mark>FinOps Consulting Services in Noida</Mark> can benefit from a structured approach that begins with understanding their existing cloud environment. From there, optimization priorities can be identified based on business impact, technical feasibility, and financial opportunity.</>,
      <>XamOps also emphasizes operational continuity. With a <Mark>99.9% Availability Focus</Mark>, <Mark>Technical Support by Certified Engineers</Mark>, and <Mark>100% technical support</Mark>, organizations can receive assistance while maintaining attention to reliability and performance. These capabilities are important for enterprises where cloud infrastructure directly supports customer-facing applications and mission-critical operations.</>,
      'The focus is not simply on producing cloud cost reports. The broader objective is to help businesses establish a culture where teams understand cloud economics and make infrastructure decisions with cost, performance, and business outcomes in mind.',
    ],
  },
  {
    id: 'future',
    prefix: '08',
    title: 'Enterprise FinOps Services in Noida: The Future of Cloud Financial Management',
    paras: [
      'As enterprises continue moving critical applications and workloads to the cloud, financial management will become an increasingly important part of technology strategy. Organizations that monitor cloud costs only after receiving their monthly bills may find it difficult to respond quickly to unexpected spending.',
      'A mature FinOps model provides continuous visibility and encourages collaboration between engineering, finance, operations, and leadership teams. It can help enterprises identify optimization opportunities, establish accountability, improve forecasting, and make better decisions about cloud investments.',
      <>XamOps provides <Mark>Enterprise FinOps Services in Noida</Mark> designed to help businesses bring financial discipline into everyday cloud operations. By combining monitoring, optimization, governance, reporting, and technical expertise, XamOps can help enterprises build a cloud environment that is more transparent, efficient, and aligned with business objectives.</>,
      'The future of cloud management is not only about deploying faster or scaling bigger. It is also about understanding the financial impact of every technology decision. Organizations that adopt a proactive FinOps strategy can improve visibility, strengthen cost accountability, and create a healthier balance between innovation and financial efficiency.',
      'For enterprises seeking dependable cloud financial management, XamOps provides a practical pathway toward better cost control and smarter cloud operations. With continuous monitoring, certified technical expertise, structured governance, and a business-focused FinOps approach, organizations can transform cloud expenditure from an unpredictable challenge into a measurable and manageable part of their overall technology strategy.',
    ],
  },
];

const HIGHLIGHTS = [
  '24/7 Infrastructure Monitoring',
  '99.9% Availability Focus',
  'Technical Support by Certified Engineers',
  '100% technical support',
];

const FAQS = [
  { q: 'What are Enterprise FinOps Services in Noida?', a: 'Enterprise FinOps Services in Noida help large organizations control cloud spending without compromising application performance, scalability, or innovation, combining cloud financial management with 24/7 infrastructure monitoring, availability focus, and technical support by certified engineers.' },
  { q: 'How does XamOps provide 24/7 Infrastructure Monitoring?', a: 'XamOps maintains continuous visibility into critical cloud environments so that spending anomalies, underutilized resources, and operational issues can be identified and addressed before they become major budget or performance problems.' },
  { q: 'What does a 99.9% Availability Focus mean for FinOps?', a: 'It means cost optimization is never pursued at the expense of reliability. XamOps evaluates the right balance between cost, performance, reliability, security, and business value rather than simply cutting every possible expense.' },
  { q: 'What is included in FinOps governance for enterprises?', a: 'FinOps governance includes practices around budgets, resource ownership, tagging, reporting, accountability, and optimization, defining who owns specific cloud resources and what processes apply when spending exceeds predefined thresholds.' },
  { q: 'Why work with FinOps Consultants in Noida instead of an internal team alone?', a: 'FinOps Consultants in Noida bring specialized knowledge of cloud architecture, billing models, utilization metrics, and financial planning that may not exist within an internal finance or infrastructure team, and can identify hidden cost drivers faster.' },
  { q: 'Does XamOps support multi-cloud and hybrid enterprise environments?', a: 'Yes. Cloud FinOps Services in Noida from XamOps can support multi-cloud and hybrid environments, making it easier to compare spending, monitor business units, evaluate workload efficiency, and establish consistent financial controls.' },
];

const TOC_ITEMS = [
  { href: '#better-control', label: 'Better Cloud Financial Control', prefix: '01' },
  { href: '#why-enterprises-need', label: 'Why Enterprises Need FinOps Management', prefix: '02' },
  { href: '#how-xamops-supports', label: 'How XamOps Supports Cost Optimization', prefix: '03' },
  { href: '#governance', label: 'FinOps Governance for Enterprises', prefix: '04' },
  { href: '#specialists', label: 'Benefits of FinOps Specialists', prefix: '05' },
  { href: '#predictable-strategy', label: 'Building a Predictable Cloud Strategy', prefix: '06' },
  { href: '#why-choose', label: 'Why Choose XamOps for FinOps?', prefix: '07' },
  { href: '#future', label: 'The Future of Cloud Financial Management', prefix: '08' },
  { href: '#faq', label: 'Frequently asked questions', prefix: null },
];

export default function EnterpriseFinOpsServicesInNoidaPage() {
  const { setOpen } = useDemoModal();

  return (
    <>
      {/* ── Article header ─────────────────────────────────────── */}
      <section className="pt-22 md:pt-24 pb-9 relative overflow-hidden" style={{ background: '#131313' }}>
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(closest-side, var(--halo), transparent 70%)` }}
        />
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-7 eyebrow">
            <Link to="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
            <span style={{ color: ACCENT }}>FinOps</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>September 10, 2026</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>9 min read</span>
          </div>

          <h1 className="serif text-[clamp(28px,4.2vw,54px)] leading-[1.1] tracking-tight max-w-[30ch]" style={{ color: '#ffffff' }}>
            Enterprise FinOps Services in Noida:{' '}
            <span style={{ color: ACCENT }}>24/7 Monitoring, 99.9% Availability &amp; 100% Technical Support</span>
          </h1>

          <p className="mt-5 text-[17px] leading-[1.7] max-w-[62ch]" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Enterprise FinOps Services in Noida are becoming increasingly important for businesses
            that want to control cloud spending without compromising application performance,
            scalability, or innovation. XamOps helps organizations build a disciplined approach to
            cloud financial management with 24/7 Infrastructure Monitoring, 99.9% Availability
            Focus, Technical Support by Certified Engineers, and 100% technical support designed
            around modern enterprise requirements.
          </p>

          <div className="mt-7 flex items-center gap-3">
            <div className="live-dot" />
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>XamOps Team</span>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {HIGHLIGHTS.map((h) => (
              <span
                key={h}
                className="text-[12px] px-3 py-1.5 rounded-full transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-mono)' }}
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Article body ────────────────────────────────────────── */}
      <article className="sec-light py-8 md:py-12">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-12">

            {/* ── Content column ── */}
            <div className="md:col-span-8">

              {/* Intro */}
              <Reveal className="mb-12">
                <p className="text-[17px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  As cloud environments become more complex, businesses need more than basic cost
                  reports; they need continuous visibility, financial accountability, optimization
                  strategies, and technical expertise that connect cloud usage with business
                  value. This is what <Xam /> delivers through{' '}
                  <Link to="/platform/finops" style={{ color: ACCENT, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                    the XamOps FinOps Platform
                  </Link>.
                </p>
              </Reveal>

              {SECTIONS.map((s) => (
                <Reveal key={s.id} id={s.id} className="mb-14" style={{ scrollMarginTop: '100px' }}>
                  <div className="eyebrow mb-3" style={{ color: ACCENT }}>{s.prefix}</div>
                  <h2 className="serif text-[clamp(22px,3.2vw,32px)] leading-[1.15] tracking-tight mb-5">
                    {s.title}
                  </h2>
                  {s.paras.map((p, i) => (
                    <p
                      key={i}
                      className="text-[15.5px] leading-[1.78]"
                      style={{ color: 'var(--ink-2)', marginBottom: i < s.paras.length - 1 ? '1.25rem' : 0 }}
                    >
                      {p}
                    </p>
                  ))}
                </Reveal>
              ))}

              {/* Conclusion callout */}
              <Reveal
                className="rounded-2xl p-7 md:p-9 ring-soft relative overflow-hidden mb-12"
                style={{ background: 'var(--ivory)' }}
              >
                <div
                  className="absolute -right-16 -bottom-16 w-[300px] h-[300px] rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(closest-side, var(--halo), transparent 70%)` }}
                />
                <div className="relative">
                  <div className="eyebrow mb-3">Get started</div>
                  <h2 className="serif text-[clamp(20px,3vw,32px)] leading-[1.1] tracking-tight mb-5">
                    Bring financial discipline into{' '}
                    <span style={{ color: ACCENT }}>everyday cloud operations.</span>
                  </h2>
                  <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                    XamOps provides Enterprise FinOps Services in Noida designed to help
                    businesses bring financial discipline into everyday cloud operations, with
                    continuous monitoring, certified technical expertise, structured governance,
                    and a business-focused FinOps approach.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => setOpen(true)} className="btn-primary">
                      Book a demo <Icon.Arrow width="14" height="14" />
                    </button>
                    <Link to="/platform/finops" className="btn-ghost">
                      See FinOps Platform
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* Related reading */}
              <Reveal className="mb-14">
                <div className="eyebrow mb-4">Related reading</div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Link
                    to="/blog/finops-services-in-noida"
                    className="ring-soft rounded-xl p-4 block transition-transform hover:-translate-y-0.5"
                    style={{ background: 'var(--ivory)', textDecoration: 'none' }}
                  >
                    <div className="text-[14px] mb-1" style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}>
                      FinOps Services in Noida, Delhi NCR, Bangalore, Hyderabad &amp; Jaipur
                    </div>
                    <div className="text-[13px]" style={{ color: 'var(--olive)' }}>A five-city overview of FinOps services across India.</div>
                  </Link>
                  <Link
                    to="/blog/finops-practices-multi-cloud"
                    className="ring-soft rounded-xl p-4 block transition-transform hover:-translate-y-0.5"
                    style={{ background: 'var(--ivory)', textDecoration: 'none' }}
                  >
                    <div className="text-[14px] mb-1" style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}>
                      Best FinOps Practices for Multi-Cloud Environments
                    </div>
                    <div className="text-[13px]" style={{ color: 'var(--olive)' }}>Seven practices for financial control across AWS, Azure, and GCP.</div>
                  </Link>
                </div>
              </Reveal>

              {/* FAQ */}
              <Reveal id="faq" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3">FAQs</div>
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {FAQS.map(({ q, a }, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden transition-colors hover:border-[var(--viz-3)]"
                      style={{ border: '1px solid var(--rule-dark)', background: 'var(--ivory)' }}
                    >
                      <div className="px-5 py-4" style={{ borderBottom: '1px solid var(--rule-dark)', background: 'var(--parchment)' }}>
                        <p className="text-[14px] leading-[1.55]" style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}>
                          {i + 1}. {q}
                        </p>
                      </div>
                      <div className="px-5 py-4">
                        <p className="text-[14px] leading-[1.65]" style={{ color: 'var(--ink-2)' }}>{a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

            </div>

            {/* ── Sidebar ── */}
            <div className="hidden md:block md:col-span-4">
              <div style={{ position: 'sticky', top: '96px' }} className="space-y-4">

                <div className="ring-soft rounded-xl p-5" style={{ background: 'var(--ivory)' }}>
                  <div className="eyebrow mb-4">About this article</div>
                  <div className="space-y-3 text-[13px]">
                    {[
                      { label: 'Published', value: 'September 10, 2026', accent: false },
                      { label: 'Read time', value: '9 minutes', accent: false },
                      { label: 'Category', value: 'FinOps', accent: true },
                      { label: 'Author', value: 'XamOps Team', accent: false },
                    ].map(({ label, value, accent }) => (
                      <div key={label} className="flex justify-between items-center gap-4">
                        <span style={{ color: 'var(--olive)' }}>{label}</span>
                        <span
                          style={{
                            color: accent ? ACCENT : 'var(--ink)',
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
                          <span className="mono shrink-0 text-[11px] mt-[2px]" style={{ color: ACCENT }}>{item.prefix}</span>
                        ) : (
                          <span className="mono shrink-0 text-[11px] mt-[2px]" style={{ color: 'var(--rule-dark)' }}>§</span>
                        )}
                        <span className="text-[13px] leading-[1.45]">{item.label}</span>
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="ring-soft rounded-xl p-5 relative overflow-hidden" style={{ background: 'var(--ivory)' }}>
                  <div
                    className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(closest-side, var(--halo), transparent 70%)` }}
                  />
                  <div className="relative">
                    <div className="text-[14px] leading-[1.5] mb-2" style={{ fontFamily: 'var(--font-med)' }}>
                      Financial discipline, automated.
                    </div>
                    <p className="text-[12.5px] leading-[1.6] mb-4" style={{ color: 'var(--olive)' }}>
                      <Xam /> connects cost and operational data across AWS, Azure, and GCP with
                      24/7 monitoring and certified technical support.
                    </p>
                    <button
                      onClick={() => setOpen(true)}
                      className="btn-primary w-full justify-center"
                      style={{ fontSize: '13px', padding: '10px 14px' }}
                    >
                      Book a demo <Icon.Arrow width="13" height="13" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </article>

      <CTABanner
        heading="Bring enterprise-grade FinOps discipline to your cloud."
        sub="24/7 infrastructure monitoring, 99.9% availability focus, and certified technical support for enterprises in Noida."
      />
    </>
  );
}
