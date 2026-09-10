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
    id: 'why-matters',
    prefix: '01',
    title: 'Why FinOps Matters for Modern Businesses',
    paras: [
      'Cloud computing provides flexibility, scalability, and access to powerful technologies, but these benefits can also create financial complexity. Without proper monitoring and optimization, companies may continue paying for resources that are underutilized, incorrectly configured, or no longer required.',
      <>XamOps delivers <Mark>Cloud FinOps Services in Ahmedabad</Mark> to help organizations gain greater visibility into cloud expenditure and make informed decisions about infrastructure usage. Instead of treating cloud expenses as a fixed IT cost, FinOps encourages businesses to understand cloud spending as a shared responsibility across engineering, finance, and business teams.</>,
      'Effective FinOps can help organizations identify spending patterns, establish accountability, improve forecasting, and align cloud usage with business objectives. The goal is not simply to reduce every cloud expense. The real objective is to maximize business value from every amount invested in cloud infrastructure.',
    ],
  },
  {
    id: 'how-xamops-helps',
    prefix: '02',
    title: 'How XamOps Helps Optimize Cloud Spending',
    paras: [
      'XamOps approaches FinOps through continuous visibility, analysis, optimization, and governance. Businesses can gain a clearer understanding of which applications, departments, environments, and workloads are responsible for cloud consumption.',
      <>Our <Mark>FinOps Consultants in Ahmedabad</Mark> can help organizations evaluate existing cloud environments and identify opportunities to improve resource utilization. This may include analyzing compute instances, storage consumption, databases, networking costs, managed services, and other cloud resources.</>,
      'Cloud optimization should not be based on assumptions. It should be supported by measurable data. By examining historical usage and current consumption patterns, businesses can make better decisions about resource allocation and operational priorities.',
      'XamOps also emphasizes continuous monitoring because cloud environments are constantly changing. A workload that is cost-efficient today may become expensive after application growth, configuration changes, or increased traffic. Continuous analysis allows organizations to respond before unnecessary spending becomes a long-term problem.',
    ],
  },
  {
    id: 'cost-visibility',
    prefix: '03',
    title: 'FinOps Services in Ahmedabad for Cost Visibility and Control',
    paras: [
      'A strong FinOps strategy starts with visibility. Organizations need to know how much they are spending, where the money is going, which teams are responsible for consumption, and whether cloud usage is producing measurable business value.',
      <>XamOps provides <Mark>FinOps Consulting Services in Ahmedabad</Mark> that can help businesses establish better cost visibility and governance practices. Cost allocation, tagging strategies, reporting structures, budget monitoring, and usage analysis can provide stakeholders with a more detailed view of cloud expenditure.</>,
      'When cloud costs are visible to the right teams, accountability becomes easier. Engineering teams can understand the financial impact of infrastructure decisions, while finance teams can gain better insight into technology spending. Business leaders can then use this information for planning and forecasting.',
      'This collaborative approach is one of the key principles of FinOps. It brings technical and financial decision-making closer together so that organizations can balance performance, scalability, reliability, and cost.',
    ],
  },
  {
    id: 'without-compromising',
    prefix: '04',
    title: 'Cloud Optimization Without Compromising Performance',
    paras: [
      'Cost reduction should never come at the expense of application performance or reliability. Reducing resources without understanding workload requirements can create performance issues, service interruptions, or poor user experiences.',
      <>XamOps focuses on optimization that considers both financial and technical requirements. Our <Mark>FinOps Service Provider in Ahmedabad</Mark> approach helps businesses evaluate whether cloud resources are appropriately sized for actual workloads.</>,
      'Right-sizing is one area where organizations can potentially improve efficiency. If resources are consistently operating below their capacity, businesses may have opportunities to adjust configurations. Similarly, workloads with predictable usage patterns may benefit from appropriate purchasing or commitment strategies.',
      'The right optimization strategy depends on workload behavior, application requirements, business priorities, and expected growth. XamOps helps organizations evaluate these factors before making infrastructure decisions.',
    ],
  },
  {
    id: 'culture',
    prefix: '05',
    title: 'Building a Culture of Financial Accountability',
    paras: [
      'FinOps is not only about technology or cloud billing. It is also about creating a culture where teams understand the financial consequences of technical decisions.',
      <>With support from experienced <Mark>FinOps Consultants in Ahmedabad</Mark>, organizations can establish practical processes that encourage engineering and operations teams to consider cost alongside performance and reliability.</>,
      'For example, development teams can evaluate the cost impact of new architectures before implementation. Operations teams can monitor infrastructure utilization and identify unusual spending patterns. Finance teams can use cloud usage data for improved forecasting and budgeting.',
      'This shared responsibility model can make cloud financial management more proactive. Instead of discovering unexpected expenses at the end of a billing cycle, organizations can establish processes that identify potential issues earlier.',
    ],
  },
  {
    id: 'why-choose',
    prefix: '06',
    title: 'Why Choose XamOps for FinOps Management?',
    paras: [
      'XamOps combines cloud operations knowledge with financial management principles to provide a practical approach to FinOps. Our objective is to help businesses improve cloud efficiency while maintaining the performance and availability their applications require.',
      <>With <Mark>24/7 Infrastructure Monitoring</Mark>, teams can maintain continuous awareness of critical cloud environments. Our <Mark>99.9% Availability Focus</Mark> reflects the importance of maintaining dependable infrastructure while pursuing cost optimization.</>,
      <>XamOps also provides <Mark>Technical Support by Certified Engineers</Mark>, helping businesses address technical concerns with experienced professionals. The focus is on delivering practical recommendations rather than generic optimization suggestions.</>,
      <>For organizations looking for <Mark>Cloud FinOps Services in Ahmedabad</Mark>, XamOps can support the complete journey from cloud cost visibility to optimization and ongoing governance. Our approach can be adapted according to business size, cloud architecture, operational maturity, and financial objectives.</>,
    ],
  },
  {
    id: 'growing-organizations',
    prefix: '07',
    title: 'FinOps Consulting Services in Ahmedabad for Growing Organizations',
    paras: [
      'Growing businesses often experience significant changes in cloud consumption. New applications, additional users, geographic expansion, data growth, and increased workloads can quickly affect cloud budgets.',
      <>XamOps offers <Mark>FinOps Consulting Services in Ahmedabad</Mark> to help organizations establish a scalable framework for managing these changes. Rather than applying the same strategy to every business, our consultants can assess the organization's existing environment and identify areas where improved processes may provide greater financial control.</>,
      'Cloud cost management can become particularly challenging when organizations operate multiple accounts, subscriptions, projects, environments, or cloud platforms. A centralized FinOps strategy can help bring these different areas together through consistent reporting and governance.',
      'For businesses planning future cloud expansion, early FinOps adoption can also help create a stronger financial foundation. Establishing cost visibility before cloud usage becomes highly complex can make future optimization easier and more manageable.',
    ],
  },
  {
    id: 'proactive-monitoring',
    prefix: '08',
    title: 'Proactive Monitoring and Continuous Improvement',
    paras: [
      'Successful FinOps is an ongoing process rather than a one-time cost reduction exercise. Cloud environments continuously evolve, which means optimization opportunities can appear at different stages of the business lifecycle.',
      'XamOps uses ongoing analysis to help organizations identify changes in usage and spending patterns. Businesses can review performance, evaluate resource utilization, monitor budgets, and identify areas that require attention.',
      <>Our <Mark>FinOps Service Provider in Ahmedabad</Mark> capabilities are designed around continuous improvement. As applications change and business requirements evolve, cloud financial strategies can also be adjusted to maintain an appropriate balance between cost, performance, scalability, and reliability.</>,
      'This proactive approach can help businesses avoid reactive cloud cost management, where financial issues are addressed only after unexpected bills or budget overruns occur.',
    ],
  },
  {
    id: 'better-decisions',
    prefix: '09',
    title: 'Supporting Better Cloud Decisions With Data',
    paras: [
      'Data-driven decision-making is at the heart of effective FinOps. Businesses need accurate and timely information to determine whether cloud resources are being used efficiently.',
      'XamOps helps organizations use cloud consumption data to support practical decisions. Through structured reporting and analysis, stakeholders can better understand trends and identify opportunities for optimization.',
      <>Our <Mark>Cloud FinOps Services in Ahmedabad</Mark> can also help businesses establish meaningful metrics around cloud efficiency. Instead of measuring success only through total cost reduction, organizations can evaluate factors such as cost per workload, resource utilization, application performance, business output, and forecast accuracy.</>,
      'This broader perspective helps ensure that cloud optimization contributes to business value rather than simply reducing infrastructure expenditure.',
    ],
  },
  {
    id: 'reliable-partner',
    prefix: '10',
    title: 'A Reliable Partner for Long-Term Cloud Financial Management',
    paras: [
      'Choosing the right FinOps partner can make a significant difference for organizations that want to manage cloud spending more effectively. Businesses need a provider that understands both technical infrastructure and financial objectives.',
      <>XamOps works as a strategic technology partner for organizations seeking better control over cloud expenditure. Our <Mark>FinOps Consultants in Ahmedabad</Mark> focus on practical recommendations, ongoing visibility, and optimization strategies that align with real business requirements.</>,
      <>With <Mark>100% technical support</Mark>, businesses can receive assistance when they need help understanding infrastructure, identifying optimization opportunities, or addressing cloud-related concerns. The combination of monitoring, consulting, optimization, and governance provides a comprehensive foundation for long-term cloud financial management.</>,
    ],
  },
  {
    id: 'future',
    prefix: '11',
    title: 'The Future of Cloud Cost Management With XamOps',
    paras: [
      'As cloud adoption continues to grow, FinOps will become increasingly important for organizations that want to balance innovation with financial responsibility. Businesses can no longer depend only on traditional IT budgeting models when cloud consumption can change dynamically based on workloads and customer demand.',
      <>XamOps provides <Mark>Cloud FinOps Services in Ahmedabad</Mark> to help businesses prepare for this changing environment. By improving visibility, encouraging accountability, optimizing resource usage, and establishing continuous governance, organizations can create a more sustainable approach to cloud operations.</>,
      <>For businesses searching for <Mark>FinOps Services in Ahmedabad</Mark>, XamOps offers a practical combination of cloud expertise, monitoring, consulting, and technical support. Whether the objective is improving cloud cost visibility, optimizing existing infrastructure, strengthening governance, or preparing for future growth, a structured FinOps strategy can help organizations achieve greater value from their cloud investments.</>,
      'The right FinOps approach does not mean choosing cost over performance. It means making informed decisions that balance cost, reliability, scalability, security, and business value. With XamOps, organizations can move toward a more transparent and efficient cloud operating model while keeping their technology aligned with their long-term business goals.',
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
  { q: 'What are FinOps Services in Ahmedabad?', a: 'FinOps Services in Ahmedabad help businesses control cloud spending without slowing down innovation, through a structured approach combining 24/7 infrastructure monitoring, availability focus, and technical support by certified engineers.' },
  { q: 'How do FinOps Consultants in Ahmedabad help reduce cloud costs?', a: 'FinOps Consultants in Ahmedabad evaluate existing cloud environments, analyze compute instances, storage, databases, networking costs, and managed services, and identify optimization opportunities backed by measurable usage data.' },
  { q: 'Does cloud optimization affect application performance?', a: 'It should not. XamOps focuses on optimization that considers both financial and technical requirements, evaluating whether resources are appropriately sized for actual workloads rather than reducing capacity blindly.' },
  { q: 'What is included in FinOps Consulting Services in Ahmedabad for growing businesses?', a: 'FinOps Consulting Services in Ahmedabad help growing organizations establish a scalable framework as new applications, users, and workloads affect cloud budgets, including centralized reporting and governance across multiple accounts and platforms.' },
  { q: 'Is FinOps a one-time project or an ongoing process?', a: 'Successful FinOps is an ongoing process. Cloud environments continuously evolve, so XamOps uses continuous analysis to identify changes in usage and spending patterns rather than treating optimization as a single exercise.' },
  { q: 'Why choose XamOps as a FinOps Service Provider in Ahmedabad?', a: 'XamOps combines cloud operations knowledge with financial management principles, backed by 24/7 Infrastructure Monitoring, a 99.9% Availability Focus, and Technical Support by Certified Engineers, to deliver practical, data-driven recommendations.' },
];

const TOC_ITEMS = [
  { href: '#why-matters', label: 'Why FinOps Matters for Modern Businesses', prefix: '01' },
  { href: '#how-xamops-helps', label: 'How XamOps Helps Optimize Cloud Spending', prefix: '02' },
  { href: '#cost-visibility', label: 'Cost Visibility and Control', prefix: '03' },
  { href: '#without-compromising', label: 'Optimization Without Compromising Performance', prefix: '04' },
  { href: '#culture', label: 'Building a Culture of Financial Accountability', prefix: '05' },
  { href: '#why-choose', label: 'Why Choose XamOps for FinOps Management?', prefix: '06' },
  { href: '#growing-organizations', label: 'FinOps for Growing Organizations', prefix: '07' },
  { href: '#proactive-monitoring', label: 'Proactive Monitoring & Continuous Improvement', prefix: '08' },
  { href: '#better-decisions', label: 'Supporting Better Cloud Decisions With Data', prefix: '09' },
  { href: '#reliable-partner', label: 'A Reliable Long-Term Partner', prefix: '10' },
  { href: '#future', label: 'The Future of Cloud Cost Management', prefix: '11' },
  { href: '#faq', label: 'Frequently asked questions', prefix: null },
];

export default function FinOpsServicesInAhmedabadPage() {
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
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>10 min read</span>
          </div>

          <h1 className="serif text-[clamp(28px,4.2vw,54px)] leading-[1.1] tracking-tight max-w-[30ch]" style={{ color: '#ffffff' }}>
            FinOps Services in Ahmedabad:{' '}
            <span style={{ color: ACCENT }}>24/7 Monitoring, 99.9% Availability &amp; 100% Technical Support</span>
          </h1>

          <p className="mt-5 text-[17px] leading-[1.7] max-w-[62ch]" style={{ color: 'rgba(255,255,255,0.65)' }}>
            FinOps Services in Ahmedabad are becoming increasingly important for businesses that
            want to control cloud spending without slowing down innovation. XamOps provides a
            structured approach to cloud financial management with 24/7 Infrastructure
            Monitoring, 99.9% Availability Focus, Technical Support by Certified Engineers, and
            100% technical support designed to help organizations improve visibility,
            accountability, and cost efficiency across their cloud environments.
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
                  As cloud infrastructure becomes an essential part of modern business operations,
                  organizations often face a common challenge: cloud costs can increase faster
                  than expected. Multiple services, changing workloads, unused resources,
                  unpredictable demand, and complex pricing models can make it difficult for
                  businesses to understand exactly where their cloud budget is being used. XamOps
                  helps businesses address these challenges by connecting technology, finance, and
                  operational teams through{' '}
                  <Link to="/platform/finops" style={{ color: ACCENT, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                    practical FinOps strategies
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
                    Move toward a{' '}
                    <span style={{ color: ACCENT }}>transparent, efficient cloud operating model.</span>
                  </h2>
                  <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                    XamOps offers a practical combination of cloud expertise, monitoring,
                    consulting, and technical support for businesses searching for FinOps Services
                    in Ahmedabad.
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
                    to="/blog/benefits-of-finops-services-cloud-cost-optimization"
                    className="ring-soft rounded-xl p-4 block transition-transform hover:-translate-y-0.5"
                    style={{ background: 'var(--ivory)', textDecoration: 'none' }}
                  >
                    <div className="text-[14px] mb-1" style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}>
                      Top Benefits of FinOps Services for Cloud Cost Optimization
                    </div>
                    <div className="text-[13px]" style={{ color: 'var(--olive)' }}>How FinOps services reduce cloud waste and improve ROI.</div>
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
                      { label: 'Read time', value: '10 minutes', accent: false },
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
                      Cloud spend, under control.
                    </div>
                    <p className="text-[12.5px] leading-[1.6] mb-4" style={{ color: 'var(--olive)' }}>
                      <Xam /> connects cost and operational data across AWS, Azure, and GCP so
                      teams can act on waste before it recurs.
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
        heading="Bring FinOps and cloud operations together with XamOps."
        sub="Cost visibility, resource optimization, and governance across AWS, Azure, and GCP for businesses in Ahmedabad."
      />
    </>
  );
}
