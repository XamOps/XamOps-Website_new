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

const ACCENT = 'var(--viz-2)';

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
    id: 'why-sre-noida',
    prefix: '01',
    title: 'Why Site Reliability Engineering Services in Noida Matter for Modern Businesses',
    paras: [
      'Businesses in Noida are operating in an increasingly competitive technology environment where applications, websites, SaaS platforms, APIs, and cloud workloads need to remain available for customers and employees. Even a short service interruption can affect productivity, customer experience, revenue, and brand trust.',
      'Professional reliability engineering helps organizations identify potential failures before they become major incidents. It also establishes structured processes for monitoring systems, managing incidents, improving deployment reliability, optimizing infrastructure, and maintaining application performance.',
      'XamOps approaches reliability from both development and operations perspectives. Instead of treating infrastructure management as a separate function, our engineering approach connects application performance, cloud infrastructure, monitoring, automation, security practices, and operational processes.',
      'With the right reliability strategy, businesses can reduce repetitive manual work, improve incident response, establish measurable service objectives, and create infrastructure that can adapt as business requirements grow.',
    ],
  },
  {
    id: 'how-xamops-improves',
    prefix: '02',
    title: 'How XamOps Improves Application and Infrastructure Reliability',
    paras: [
      'Reliability is not achieved through monitoring alone. It requires a combination of proactive engineering, automation, observability, incident management, capacity planning, and continuous improvement.',
      'XamOps begins by understanding the existing technology environment, application architecture, infrastructure configuration, deployment process, and operational challenges. This assessment helps identify reliability gaps that may affect availability, performance, scalability, and recovery.',
      'Our engineers can then help establish appropriate monitoring and observability practices across applications, servers, containers, databases, cloud resources, APIs, and critical infrastructure components. Meaningful alerts help technical teams distinguish between normal operational activity and conditions that require immediate attention.',
      'Automation is another important part of the reliability process. Repetitive infrastructure and operational tasks can consume valuable engineering time and introduce human error. By automating appropriate workflows, teams can improve consistency while allowing engineers to focus on higher-value technical initiatives.',
    ],
  },
  {
    id: 'sre-consulting-noida',
    prefix: '03',
    title: 'SRE Consulting Services in Noida for a Structured Reliability Strategy',
    paras: [
      'Organizations that are beginning their SRE journey often need more than infrastructure support. They need a practical strategy for introducing reliability engineering into their existing development and operations processes.',
      <>XamOps provides <Mark>SRE Consulting Services in Noida</Mark> to help businesses understand their current reliability maturity and identify areas for improvement. Consulting can cover service-level objectives, monitoring strategy, incident response, observability, automation, deployment practices, infrastructure architecture, and reliability measurement.</>,
      "A strong SRE strategy should align technical objectives with business requirements. Not every application needs the same availability target, monitoring architecture, or recovery approach. The right model depends on the application's purpose, customer expectations, business impact, architecture, and operational requirements.",
      <>Through <Mark>SRE Consulting Services in Noida</Mark>, XamOps can help organizations establish practical reliability practices without unnecessarily complicating their existing technology environment. The objective is to create measurable improvements that engineering and operations teams can maintain over time.</>,
    ],
  },
  {
    id: 'site-reliability-consulting-noida',
    prefix: '04',
    title: 'Site Reliability Consulting in Noida for Better Operational Performance',
    paras: [
      <><Mark>Site Reliability Consulting in Noida</Mark> can be valuable for companies experiencing recurring incidents, unpredictable infrastructure costs, deployment issues, performance bottlenecks, or growing operational complexity.</>,
      'Reliability consultants can examine how applications are deployed, monitored, maintained, and recovered. They can also help organizations understand why certain incidents repeatedly occur and how automation or architectural improvements can reduce their frequency.',
      <>XamOps uses <Mark>Site Reliability Consulting in Noida</Mark> to support businesses in developing operational practices around availability, scalability, observability, incident management, and continuous improvement. Instead of focusing only on fixing individual problems, the approach considers the underlying systems and processes that contribute to recurring operational challenges.</>,
      'Effective reliability consulting also helps establish meaningful service-level indicators and objectives. These measurements can provide engineering teams with a clearer understanding of application health and help management teams connect technology performance with business expectations.',
    ],
  },
  {
    id: 'cloud-reliability-noida',
    prefix: '05',
    title: 'Cloud Reliability Engineering Services in Noida for Scalable Infrastructure',
    paras: [
      'Cloud environments provide flexibility and scalability, but they also introduce operational complexity. Organizations may manage multiple services, distributed applications, containers, databases, networking components, and automated deployment pipelines across cloud platforms.',
      <>XamOps delivers <Mark>Cloud Reliability Engineering Services in Noida</Mark> to help businesses design and operate cloud environments with reliability and scalability in mind. The focus can include infrastructure monitoring, resource utilization, cloud architecture, automated recovery, deployment reliability, observability, and capacity planning.</>,
      <><Mark>Cloud Reliability Engineering Services in Noida</Mark> can also help businesses identify inefficient infrastructure configurations that may affect performance or operational costs. Reliable cloud engineering is not simply about keeping resources online; it is about creating an environment that can respond effectively to changing workloads and operational conditions.</>,
      'As applications grow, infrastructure should be capable of handling increased demand without requiring constant manual intervention. Automation, infrastructure-as-code, monitoring, and well-defined operational procedures can make cloud environments more predictable and manageable.',
    ],
  },
  {
    id: 'devops-sre-noida',
    prefix: '06',
    title: 'DevOps and SRE Services in Noida for Faster and Safer Delivery',
    paras: [
      'Development teams need to release new features quickly, while operations teams need to protect application stability. Without the right processes, these objectives can conflict with each other.',
      <>XamOps integrates <Mark>DevOps and SRE Services in Noida</Mark> to create a more balanced approach to software delivery and operational reliability. Continuous integration, continuous delivery, infrastructure automation, observability, testing, and incident management can work together to support faster and more controlled releases.</>,
      <><Mark>DevOps and SRE Services in Noida</Mark> are particularly useful for organizations that want to reduce deployment-related risks while maintaining development speed. Automated testing and deployment workflows can reduce manual errors, while monitoring and observability provide visibility into application behavior after releases.</>,
      'The goal is not to eliminate change. Instead, the objective is to make change safer, measurable, and easier to recover from when unexpected issues occur.',
    ],
  },
  {
    id: 'monitoring-incidents',
    prefix: '07',
    title: '24/7 Infrastructure Monitoring and Proactive Incident Management',
    paras: [
      'Reliable infrastructure requires continuous visibility. A problem that occurs outside regular business hours can become a significant business issue if nobody identifies it quickly.',
      <>XamOps emphasizes <Mark>24/7 Infrastructure Monitoring</Mark> to provide continuous visibility into important infrastructure and application components. Monitoring can help identify resource exhaustion, service failures, unusual traffic patterns, performance degradation, connectivity issues, and other operational signals.</>,
      'A proactive monitoring model also improves incident response. When alerts are connected to clearly defined escalation and response processes, engineering teams can investigate issues faster and work toward restoration before they create a larger customer impact.',
      <>The focus on <Mark>99.9% Availability</Mark> represents an availability-oriented engineering approach rather than a promise that every individual system will always achieve a specific uptime percentage. Actual availability depends on architecture, application design, dependencies, maintenance requirements, and the agreed service scope.</>,
    ],
  },
  {
    id: 'certified-engineers',
    prefix: '08',
    title: 'Technical Support by Certified Engineers',
    paras: [
      <>Reliable infrastructure needs experienced people behind the technology. XamOps provides <Mark>Technical Support by Certified Engineers</Mark> to help businesses address infrastructure and application reliability requirements with structured technical expertise.</>,
      'Engineering support can include troubleshooting, monitoring analysis, performance investigation, infrastructure optimization, deployment support, incident response, and reliability improvements. The objective is to help internal teams resolve technical challenges while also improving the systems and processes that caused those challenges.',
      'For growing businesses, access to specialized engineering knowledge can be especially useful when internal teams are managing increasing infrastructure complexity. External reliability expertise can supplement existing resources without requiring organizations to build every specialized capability internally.',
    ],
  },
  {
    id: 'measuring-reliability',
    prefix: '09',
    title: 'Measuring Reliability Through Meaningful Engineering Practices',
    paras: [
      'One of the important principles of reliability engineering is measurement. Teams need objective information to understand whether systems are improving or becoming more difficult to operate.',
      'Service-level indicators can measure aspects such as availability, latency, error rates, response times, and successful request rates. Service-level objectives can then establish realistic reliability targets based on business requirements.',
      'XamOps helps organizations use monitoring and operational data to create a clearer picture of system performance. This information can support better capacity planning, incident reviews, architecture decisions, and continuous improvement.',
      'The result is a more measurable approach to infrastructure management. Instead of relying entirely on assumptions or manual checks, engineering teams can use operational data to identify trends and prioritize reliability improvements.',
    ],
  },
  {
    id: 'why-choose-xamops',
    prefix: '10',
    title: 'Why Businesses Choose XamOps for Reliability Engineering',
    paras: [
      'XamOps focuses on combining reliability engineering with practical business requirements. The objective is to help organizations create infrastructure that is stable, observable, scalable, and easier to operate.',
      <>Our approach incorporates <Mark>24/7 Infrastructure Monitoring</Mark>, a <Mark>99.9% Availability Focus</Mark>, <Mark>Technical Support by Certified Engineers</Mark>, and <Mark>100% technical support</Mark> across applicable service engagements. These service principles are designed to provide businesses with continuous operational visibility and access to technical assistance when reliability challenges arise.</>,
      <>For organizations evaluating <Mark>SRE Consulting Services in Noida</Mark>, XamOps can help transform reliability objectives into practical engineering processes. For businesses requiring <Mark>Site Reliability Consulting in Noida</Mark>, the focus can extend from incident management and monitoring to automation and long-term operational maturity.</>,
      <>Companies moving workloads to the cloud can also benefit from <Mark>Cloud Reliability Engineering Services in Noida</Mark>, particularly when infrastructure complexity increases with application growth. Similarly, organizations looking to connect development velocity with operational stability can consider <Mark>DevOps and SRE Services in Noida</Mark> as part of a broader engineering transformation.</>,
    ],
  },
  {
    id: 'reliable-digital-future',
    prefix: '11',
    title: 'Building a More Reliable Digital Future with XamOps',
    paras: [
      'Reliability has become an essential part of modern technology operations. Customers expect applications to be responsive, available, and dependable, while businesses need infrastructure that can support growth without creating unnecessary operational complexity.',
      <>Professional <Mark>Site Reliability Engineering Services in Noida</Mark> can help organizations move from reactive infrastructure management toward proactive reliability engineering. Through monitoring, automation, observability, incident response, cloud engineering, and continuous improvement, businesses can create stronger foundations for their digital services.</>,
      'XamOps brings together SRE principles, DevOps practices, cloud expertise, automation, and engineering support to help businesses address reliability challenges in a structured way. Whether an organization is establishing its first SRE practices or improving an existing reliability program, the right engineering strategy can make infrastructure more measurable, manageable, and resilient.',
      <>For businesses looking to improve application availability, infrastructure visibility, deployment reliability, and operational performance, XamOps provides a technology-focused approach built around continuous improvement. With <Mark>24/7 Infrastructure Monitoring</Mark>, <Mark>99.9% Availability Focus</Mark>, <Mark>Technical Support by Certified Engineers</Mark>, and <Mark>100% technical support</Mark>, XamOps is positioned to support organizations seeking dependable and scalable technology operations in Noida.</>,
    ],
  },
];

const HIGHLIGHTS = ['24/7 Infrastructure Monitoring', '99.9% Availability Focus', 'Certified Engineers', '100% Technical Support'];

// Verbatim testimonials from CustomersPage.jsx. Mirrored in the Review schema
// for this route in pageMeta.js — keep the two in sync.
const REVIEWS = [
  {
    quote: 'Our SRE team was spending too much time on runbooks. XamOps SecOps caught a misconfiguration in staging before it hit production — that alone saved us from a compliance headache.',
    name: 'Anjali Mehta',
    role: 'Principal SRE',
    company: 'Fintech Platform',
  },
  {
    quote: 'DBOps took our database maintenance burden from a weekend job to a background process. The team now ships features on Sundays instead of babysitting backups.',
    name: 'Kiran Sharma',
    role: 'CTO',
    company: 'HealthTech Startup',
  },
];

// Mirrored in the FAQPage schema for this route in pageMeta.js — keep in sync.
const FAQS = [
  { q: 'What are Site Reliability Engineering Services in Noida?', a: 'Site Reliability Engineering Services in Noida from XamOps help businesses build dependable, scalable, and resilient digital infrastructure. They combine engineering practices, automation, observability, cloud technologies, and DevOps principles with 24/7 Infrastructure Monitoring, a 99.9% Availability Focus, and Technical Support by Certified Engineers.' },
  { q: 'What do SRE Consulting Services in Noida cover?', a: 'SRE Consulting Services in Noida help businesses understand their current reliability maturity and identify areas for improvement. Consulting can cover service-level objectives, monitoring strategy, incident response, observability, automation, deployment practices, infrastructure architecture, and reliability measurement.' },
  { q: 'When should a company consider Site Reliability Consulting in Noida?', a: 'Site Reliability Consulting in Noida is valuable for companies experiencing recurring incidents, unpredictable infrastructure costs, deployment issues, performance bottlenecks, or growing operational complexity. Consultants examine how applications are deployed, monitored, maintained, and recovered, and why certain incidents keep recurring.' },
  { q: 'What is included in Cloud Reliability Engineering Services in Noida?', a: 'Cloud Reliability Engineering Services in Noida can include infrastructure monitoring, resource utilization analysis, cloud architecture, automated recovery, deployment reliability, observability, and capacity planning, along with identifying inefficient configurations that affect performance or operational costs.' },
  { q: 'How do DevOps and SRE Services in Noida make releases safer?', a: 'DevOps and SRE Services in Noida combine continuous integration, continuous delivery, infrastructure automation, observability, testing, and incident management. Automated testing and deployment workflows reduce manual errors, while monitoring provides visibility into application behavior after each release.' },
  { q: 'Does the 99.9% Availability Focus guarantee 99.9% uptime?', a: 'No. The 99.9% Availability Focus represents an availability-oriented engineering approach rather than a promise that every individual system will achieve a specific uptime percentage. Actual availability depends on architecture, application design, dependencies, maintenance requirements, and the agreed service scope.' },
];

const TOC_ITEMS = [
  { href: '#why-sre-noida', label: 'Why SRE Services in Noida Matter', prefix: '01' },
  { href: '#how-xamops-improves', label: 'How XamOps Improves Reliability', prefix: '02' },
  { href: '#sre-consulting-noida', label: 'SRE Consulting Services in Noida', prefix: '03' },
  { href: '#site-reliability-consulting-noida', label: 'Site Reliability Consulting in Noida', prefix: '04' },
  { href: '#cloud-reliability-noida', label: 'Cloud Reliability Engineering in Noida', prefix: '05' },
  { href: '#devops-sre-noida', label: 'DevOps and SRE Services in Noida', prefix: '06' },
  { href: '#monitoring-incidents', label: '24/7 Monitoring & Incident Management', prefix: '07' },
  { href: '#certified-engineers', label: 'Technical Support by Certified Engineers', prefix: '08' },
  { href: '#measuring-reliability', label: 'Measuring Reliability', prefix: '09' },
  { href: '#why-choose-xamops', label: 'Why Businesses Choose XamOps', prefix: '10' },
  { href: '#reliable-digital-future', label: 'A More Reliable Digital Future', prefix: '11' },
  { href: '#reviews', label: 'What engineering teams say', prefix: null },
  { href: '#faq', label: 'Frequently asked questions', prefix: null },
];

export default function SiteReliabilityEngineeringServicesInNoidaPage() {
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
            <span style={{ color: ACCENT }}>SRE</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>September 29, 2026</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>9 min read</span>
          </div>

          <h1 className="serif text-[clamp(28px,4.2vw,54px)] leading-[1.1] tracking-tight max-w-[30ch]" style={{ color: '#ffffff' }}>
            Site Reliability Engineering Services in Noida:{' '}
            <span style={{ color: ACCENT }}>24/7 Monitoring, 99.9% Availability Focus &amp; 100% Technical Support</span>
          </h1>

          <p className="mt-5 text-[17px] leading-[1.7] max-w-[62ch]" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Site Reliability Engineering Services in Noida from XamOps are designed to help
            businesses build dependable, scalable, and resilient digital infrastructure with 24/7
            Infrastructure Monitoring, 99.9% Availability Focus, Technical Support by Certified
            Engineers, and 100% technical support.
          </p>

          <div className="mt-7 flex items-center gap-3">
            <div className="live-dot" />
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Aditya Mehta · Co-founder, XamOps</span>
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
                <h2 className="serif text-[clamp(22px,3.2vw,32px)] leading-[1.15] tracking-tight mb-5">
                  Site Reliability Engineering Services in Noida for Reliable, Scalable &amp; High-Performance IT Infrastructure
                </h2>
                <p className="text-[17px] leading-[1.78] mb-5" style={{ color: 'var(--ink-2)' }}>
                  As applications become more cloud-driven and customer expectations continue to
                  rise, organizations need reliable systems that can perform consistently while
                  responding quickly to incidents, traffic changes, and infrastructure challenges.
                </p>
                <p className="text-[17px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  Modern businesses cannot afford frequent application failures, slow deployments,
                  unexpected downtime, or inefficient infrastructure management. XamOps combines
                  engineering practices, automation, observability, cloud technologies, and DevOps
                  principles to create an operational environment where reliability becomes an
                  ongoing engineering priority rather than a reactive activity, backed by our{' '}
                  <Link to="/platform/sre" style={{ color: ACCENT, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                    SRE automation platform
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
                    Move from reactive infrastructure management to{' '}
                    <span style={{ color: ACCENT }}>proactive reliability engineering.</span>
                  </h2>
                  <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                    Whether you are establishing your first SRE practices or improving an existing
                    reliability program, XamOps can help make your infrastructure more measurable,
                    manageable, and resilient.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => setOpen(true)} className="btn-primary">
                      Book a demo <Icon.Arrow width="14" height="14" />
                    </button>
                    <Link to="/solutions/sre" className="btn-ghost">
                      Explore SRE solutions
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* Reviews */}
              <Reveal id="reviews" className="mb-14" style={{ scrollMarginTop: '100px' }}>
                <div className="eyebrow mb-3">Reviews</div>
                <h2 className="serif text-[clamp(22px,3.5vw,34px)] leading-[1.1] tracking-tight mb-6">
                  What engineering teams say about XamOps
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {REVIEWS.map(({ quote, name, role, company }) => (
                    <figure
                      key={name}
                      className="rounded-xl p-5 flex flex-col justify-between"
                      style={{ background: 'var(--ivory)', border: '1px solid var(--rule-dark)' }}
                    >
                      <div>
                        <div className="mb-3 text-[13px] tracking-[0.15em]" style={{ color: ACCENT }} aria-label="Rated 5 out of 5">★★★★★</div>
                        <blockquote className="text-[14px] leading-[1.7]" style={{ color: 'var(--ink-2)' }}>
                          &ldquo;{quote}&rdquo;
                        </blockquote>
                      </div>
                      <figcaption className="mt-4 pt-4" style={{ borderTop: '1px solid var(--rule-dark)' }}>
                        <div className="text-[13px]" style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}>{name}</div>
                        <div className="text-[12px] mt-0.5" style={{ color: 'var(--olive)' }}>{role}, {company}</div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <Link to="/customers" className="inline-block mt-4 text-[13px]" style={{ color: ACCENT, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  Read more customer stories
                </Link>
              </Reveal>

              {/* Related reading */}
              <Reveal className="mb-14">
                <div className="eyebrow mb-4">Related reading</div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Link
                    to="/blog/site-reliability-engineering-services-in-gurgaon"
                    className="ring-soft rounded-xl p-4 block transition-transform hover:-translate-y-0.5"
                    style={{ background: 'var(--ivory)', textDecoration: 'none' }}
                  >
                    <div className="text-[14px] mb-1" style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}>
                      Site Reliability Engineering Services in Gurgaon
                    </div>
                    <div className="text-[13px]" style={{ color: 'var(--olive)' }}>Observability, incident response, and availability for Gurgaon teams.</div>
                  </Link>
                  <Link
                    to="/blog/sre-automation-platform-noida"
                    className="ring-soft rounded-xl p-4 block transition-transform hover:-translate-y-0.5"
                    style={{ background: 'var(--ivory)', textDecoration: 'none' }}
                  >
                    <div className="text-[14px] mb-1" style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}>
                      SRE Automation Platform in Noida
                    </div>
                    <div className="text-[13px]" style={{ color: 'var(--olive)' }}>How automation keeps Noida cloud infrastructure reliable.</div>
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
                      className="rounded-xl overflow-hidden transition-colors hover:border-[var(--viz-2)]"
                      style={{ border: '1px solid var(--rule-dark)', background: 'var(--ivory)' }}
                    >
                      <div className="px-5 py-4" style={{ borderBottom: '1px solid var(--rule-dark)', background: 'var(--parchment)' }}>
                        <h3 className="text-[14px] leading-[1.55]" style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}>
                          {i + 1}. {q}
                        </h3>
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
                      { label: 'Published', value: 'September 29, 2026', accent: false },
                      { label: 'Read time', value: '9 minutes', accent: false },
                      { label: 'Category', value: 'SRE', accent: true },
                      { label: 'Author', value: 'Aditya Mehta', accent: false },
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
                      Reliability you can measure.
                    </div>
                    <p className="text-[12.5px] leading-[1.6] mb-4" style={{ color: 'var(--olive)' }}>
                      <Xam /> turns SLIs, SLOs, and 24/7 monitoring into one operational view for
                      your engineering team.
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
        heading="Dependable, scalable technology operations in Noida."
        sub="24/7 infrastructure monitoring, a 99.9% availability focus, and certified engineering support from XamOps."
      />
    </>
  );
}
