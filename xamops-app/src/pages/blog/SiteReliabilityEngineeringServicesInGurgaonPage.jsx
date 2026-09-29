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

const ACCENT = 'var(--viz-1)';

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
    id: 'why-sre-gurgaon',
    prefix: '01',
    title: 'Why Site Reliability Engineering Services in Gurgaon Matter for Modern Businesses',
    paras: [
      'Gurgaon has developed into a major business and technology hub, with organizations ranging from startups and SaaS companies to enterprises and rapidly growing digital businesses. As these organizations scale their applications, their infrastructure often becomes more complex.',
      <>Cloud platforms, containers, microservices, APIs, databases, CI/CD pipelines, monitoring systems, and distributed applications can create operational challenges when they are not managed systematically. This is where <Mark>SRE Consulting Services in Gurgaon</Mark> can provide valuable technical direction.</>,
      'Site Reliability Engineering combines software engineering principles with IT operations to improve system reliability, scalability, performance, and availability. Instead of responding to every infrastructure problem after it happens, SRE practices emphasize monitoring, automation, observability, incident response, capacity planning, and continuous improvement.',
      'XamOps applies this reliability-focused approach to help businesses understand infrastructure behavior and identify potential issues before they become major operational problems. The goal is to make technology environments more resilient while allowing development teams to continue delivering new features.',
    ],
  },
  {
    id: 'xamops-approach',
    prefix: '02',
    title: 'How XamOps Approaches Site Reliability Engineering',
    paras: [
      "Effective reliability engineering requires more than installing a monitoring tool. It requires an understanding of the application's architecture, business requirements, infrastructure dependencies, expected traffic, failure scenarios, and operational processes.",
      'XamOps works toward creating a structured reliability environment in which infrastructure and application performance can be continuously observed. Monitoring can provide visibility into important signals such as resource utilization, application performance, service health, errors, latency, and availability.',
      <>With <Mark>24/7 Infrastructure Monitoring</Mark>, organizations can maintain continuous visibility into their environments. Monitoring systems can identify abnormal behavior and generate alerts so that technical teams can investigate issues before they have a larger impact.</>,
      'The approach can also include automation wherever repetitive manual tasks create operational overhead. Automated processes can help standardize deployments, recovery procedures, scaling operations, and routine infrastructure management.',
    ],
  },
  {
    id: 'sre-consulting-gurgaon',
    prefix: '03',
    title: 'SRE Consulting for Scalable Infrastructure',
    paras: [
      'Businesses frequently reach a stage where their existing infrastructure works for current workloads but becomes difficult to manage as traffic, users, and applications increase. Scaling without a reliability strategy can create performance bottlenecks and operational complexity.',
      <><Mark>SRE Consulting Services in Gurgaon</Mark> can help organizations assess their current infrastructure and identify opportunities for improving reliability and scalability. This can include reviewing application architecture, deployment processes, monitoring practices, incident management, and infrastructure configuration.</>,
      'XamOps can help organizations establish reliability practices that are appropriate for their environment. The objective is not simply to add more infrastructure but to make the infrastructure more predictable, observable, and manageable.',
      'For growing businesses, this can be particularly important because infrastructure decisions made during early growth stages can influence operational efficiency later. A well-designed reliability strategy can help organizations prepare for increased workloads without unnecessarily increasing operational complexity.',
    ],
  },
  {
    id: 'cloud-reliability-gurgaon',
    prefix: '04',
    title: 'Cloud Reliability Engineering for Modern Workloads',
    paras: [
      'Cloud infrastructure provides flexibility and scalability, but cloud adoption also introduces new management requirements. Organizations may need to manage multiple services, virtual machines, containers, databases, networking components, identity controls, storage systems, and application dependencies.',
      <><Mark>Cloud Reliability Engineering Services in Gurgaon</Mark> can help businesses improve the reliability of these cloud environments through structured monitoring, automation, performance analysis, and operational processes.</>,
      'XamOps can support businesses in creating cloud environments where important infrastructure and application signals are visible to technical teams. This visibility can help organizations understand resource consumption, identify performance trends, and respond to incidents more efficiently.',
      'Cloud reliability also involves planning for failures. Systems should be designed with the understanding that individual components can experience outages or unexpected behavior. Appropriate redundancy, recovery processes, backups, scaling mechanisms, and monitoring can help organizations improve resilience.',
    ],
  },
  {
    id: 'devops-sre-gurgaon',
    prefix: '05',
    title: 'DevOps and SRE Working Together',
    paras: [
      'DevOps and SRE are closely connected because both approaches focus on improving software delivery and operational efficiency. DevOps encourages collaboration between development and operations teams, while SRE applies engineering principles to reliability and operational challenges.',
      <><Mark>DevOps and SRE Services in Gurgaon</Mark> can therefore provide businesses with a more integrated approach to application delivery and infrastructure management.</>,
      'XamOps can help organizations connect development workflows with reliability requirements. CI/CD pipelines, automated testing, deployment automation, infrastructure as code, monitoring, and incident management can work together as part of a broader operational framework.',
      'This approach can help development teams release software while maintaining appropriate reliability controls. Instead of treating reliability as a separate activity after deployment, reliability considerations can become part of the development and deployment lifecycle.',
    ],
  },
  {
    id: 'monitoring-incident-response',
    prefix: '06',
    title: '24/7 Infrastructure Monitoring and Incident Response',
    paras: [
      'Infrastructure problems can happen at any time. An application may experience a sudden increase in traffic, a server may become unavailable, a database may reach capacity, or an application deployment may introduce unexpected errors.',
      <>Continuous monitoring can help technical teams identify these conditions more quickly. XamOps emphasizes <Mark>24/7 Infrastructure Monitoring</Mark> to provide organizations with ongoing visibility into critical systems.</>,
      'Incident response is another important part of reliability engineering. When an incident occurs, teams need a structured process for identifying the problem, containing its impact, restoring services, and understanding the underlying cause.',
      'After an incident, root-cause analysis can help organizations identify what happened and determine how similar problems can be prevented. This transforms incidents from isolated technical failures into opportunities for improving the overall reliability of the environment.',
    ],
  },
  {
    id: 'availability-focus',
    prefix: '07',
    title: '99.9% Availability Focus for Business-Critical Applications',
    paras: [
      'Availability is one of the most important reliability considerations for digital businesses. Customers expect applications and online services to remain accessible when they need them.',
      <>XamOps follows a <Mark>99.9% Availability Focus</Mark> for environments where uptime is a critical business requirement. A 99.9% availability target represents a strong operational focus on minimizing service interruptions, although actual availability depends on architecture, infrastructure, application design, third-party dependencies, and the agreed service requirements.</>,
      'Reliability engineering looks beyond uptime alone. A service can technically be available while still delivering poor performance. Therefore, monitoring can also consider latency, error rates, resource utilization, application response times, and other service-level indicators.',
      'This broader approach gives organizations a more meaningful understanding of system health.',
    ],
  },
  {
    id: 'site-reliability-consulting-gurgaon',
    prefix: '08',
    title: 'Site Reliability Consulting for Performance and Observability',
    paras: [
      <><Mark>Site Reliability Consulting in Gurgaon</Mark> can help businesses develop better visibility into their technology environments. Without appropriate observability, technical teams may know that an application is failing without knowing why it is failing.</>,
      'Observability brings together metrics, logs, traces, alerts, and other operational information to help teams investigate system behavior.',
      'XamOps can help organizations evaluate their existing observability practices and identify areas where better visibility may be required. Effective observability can shorten troubleshooting processes by giving engineers more relevant information about what happened before, during, and after an incident.',
      'Performance optimization is also connected to observability. By tracking application behavior over time, businesses can identify trends and potential bottlenecks before they become serious operational issues.',
    ],
  },
  {
    id: 'certified-engineers',
    prefix: '09',
    title: 'Technical Support by Certified Engineers',
    paras: [
      'Reliability engineering requires technical expertise because modern infrastructure environments can involve complex dependencies. Engineers may need to understand cloud architecture, networking, databases, containers, automation, operating systems, application behavior, and security considerations.',
      <>XamOps emphasizes <Mark>Technical Support by Certified Engineers</Mark> to assist businesses with their infrastructure and reliability requirements. Technical support can be valuable during implementation, troubleshooting, optimization, and incident response.</>,
      <>The focus on <Mark>100% technical support</Mark> is intended to provide businesses with a dependable technical assistance framework rather than leaving teams to manage complex reliability challenges independently.</>,
      'For organizations without a large internal SRE team, external engineering support can complement existing developers and infrastructure professionals. It can also provide specialized expertise during periods of rapid growth or major infrastructure changes.',
    ],
  },
  {
    id: 'proactive-culture',
    prefix: '10',
    title: 'Building a Proactive Reliability Culture',
    paras: [
      'A reliable infrastructure is not created through monitoring alone. Organizations also need processes that encourage proactive identification of risks and continuous improvement.',
      <>This is one of the key principles behind <Mark>SRE Consulting Services in Gurgaon</Mark>. Instead of treating every incident as an isolated event, SRE practices encourage teams to examine recurring patterns, improve automation, strengthen monitoring, and reduce unnecessary operational work.</>,
      'Businesses can also establish service-level objectives based on their actual business requirements. These objectives provide measurable reliability targets and help technical teams understand where reliability improvements should be prioritized.',
      'Over time, this approach can help organizations move from reactive troubleshooting toward proactive infrastructure management.',
    ],
  },
  {
    id: 'why-choose-xamops',
    prefix: '11',
    title: 'Why Choose XamOps for Reliability Engineering?',
    paras: [
      'Choosing an SRE provider involves more than comparing technical services. Businesses need to consider technical expertise, monitoring capabilities, response processes, cloud experience, automation knowledge, and the ability to understand their specific infrastructure.',
      'XamOps brings together reliability engineering, cloud operations, DevOps practices, monitoring, automation, and technical support to create a comprehensive approach to infrastructure reliability.',
      <>Organizations looking for <Mark>Cloud Reliability Engineering Services in Gurgaon</Mark> can work with XamOps to address cloud performance, observability, availability, operational efficiency, and scalability requirements. Similarly, companies searching for <Mark>DevOps and SRE Services in Gurgaon</Mark> can use a combined approach to improve software delivery while keeping reliability requirements integrated into the development lifecycle.</>,
      'The objective is to help businesses operate technology environments that are easier to monitor, troubleshoot, scale, and improve.',
    ],
  },
  {
    id: 'get-started',
    prefix: '12',
    title: 'Get Started with XamOps',
    paras: [
      'Reliable technology infrastructure provides the foundation for modern digital businesses. As applications become more distributed and customer expectations increase, organizations need structured approaches to availability, performance, monitoring, automation, and incident management.',
      <>XamOps provides <Mark>Site Reliability Engineering Services in Gurgaon</Mark> focused on helping businesses improve the operational reliability of their applications and infrastructure. With <Mark>24/7 Infrastructure Monitoring</Mark>, <Mark>99.9% Availability Focus</Mark>, <Mark>Technical Support by Certified Engineers</Mark>, <Mark>100% technical support</Mark>, and reliability-focused engineering practices, XamOps can help organizations build a stronger operational foundation.</>,
      'Whether your organization is scaling a cloud application, modernizing infrastructure, improving DevOps workflows, or experiencing recurring reliability challenges, a structured SRE approach can help identify operational gaps and create measurable improvement opportunities.',
      <>For businesses evaluating <Mark>Site Reliability Consulting in Gurgaon</Mark>, XamOps can provide technical guidance tailored to infrastructure requirements, application architecture, business priorities, and future growth.</>,
      "A proactive reliability strategy can help businesses spend less time reacting to unexpected infrastructure problems and more time improving the systems that support their customers and teams. With the right engineering practices, monitoring capabilities, automation, and technical support, organizations can create infrastructure that is designed not only to operate today but also to support tomorrow's growth.",
    ],
  },
];

const HIGHLIGHTS = ['24/7 Monitoring', '99.9% Availability Focus', 'Certified Support', '100% Technical Support'];

// Verbatim testimonials from CustomersPage.jsx. Mirrored in the Review schema
// for this route in pageMeta.js — keep the two in sync.
const REVIEWS = [
  {
    quote: 'The onboarding was fast. We connected our AWS accounts, tagged our ASGs, and AutoSpotting was running in under an hour. The savings showed up on the next bill.',
    name: 'Deepa Krishnan',
    role: 'DevOps Lead',
    company: 'EdTech Platform',
  },
  {
    quote: 'We had visibility problems across three cloud providers. XamOps gave our FinOps team one dashboard for everything. Budget conversations with leadership are completely different now.',
    name: 'Rahul Desai',
    role: 'VP Engineering',
    company: 'E-commerce Scale-up',
  },
];

// Mirrored in the FAQPage schema for this route in pageMeta.js — keep in sync.
const FAQS = [
  { q: 'What do Site Reliability Engineering Services in Gurgaon include?', a: 'Site Reliability Engineering Services in Gurgaon from XamOps help businesses build, operate, and continuously improve reliable digital infrastructure. They include 24/7 Infrastructure Monitoring, a 99.9% Availability Focus, Technical Support by Certified Engineers, 100% technical support, proactive incident management, and performance-focused operations.' },
  { q: 'How can SRE Consulting Services in Gurgaon help a growing business scale?', a: 'SRE Consulting Services in Gurgaon assess current infrastructure and identify opportunities to improve reliability and scalability by reviewing application architecture, deployment processes, monitoring practices, incident management, and infrastructure configuration, so the environment becomes more predictable, observable, and manageable as workloads grow.' },
  { q: 'Why does observability matter in Site Reliability Consulting in Gurgaon?', a: 'Without observability, technical teams may know that an application is failing without knowing why. Site Reliability Consulting in Gurgaon helps teams bring together metrics, logs, traces, and alerts so engineers have relevant information about what happened before, during, and after an incident, which shortens troubleshooting.' },
  { q: 'How do Cloud Reliability Engineering Services in Gurgaon plan for failures?', a: 'Cloud Reliability Engineering Services in Gurgaon design systems with the understanding that individual components can fail. Appropriate redundancy, recovery processes, backups, scaling mechanisms, and structured monitoring help organizations improve resilience across virtual machines, containers, databases, networking, and storage.' },
  { q: 'What is the benefit of combined DevOps and SRE Services in Gurgaon?', a: 'DevOps and SRE Services in Gurgaon connect development workflows with reliability requirements. CI/CD pipelines, automated testing, deployment automation, infrastructure as code, monitoring, and incident management work together so reliability becomes part of the development and deployment lifecycle rather than an afterthought.' },
  { q: 'What happens after an incident is resolved?', a: 'After an incident, XamOps uses root-cause analysis to identify what happened and determine how similar problems can be prevented. This turns incidents from isolated technical failures into opportunities to improve the overall reliability of the environment.' },
];

const TOC_ITEMS = [
  { href: '#why-sre-gurgaon', label: 'Why SRE Services in Gurgaon Matter', prefix: '01' },
  { href: '#xamops-approach', label: 'How XamOps Approaches SRE', prefix: '02' },
  { href: '#sre-consulting-gurgaon', label: 'SRE Consulting for Scalable Infrastructure', prefix: '03' },
  { href: '#cloud-reliability-gurgaon', label: 'Cloud Reliability Engineering', prefix: '04' },
  { href: '#devops-sre-gurgaon', label: 'DevOps and SRE Working Together', prefix: '05' },
  { href: '#monitoring-incident-response', label: '24/7 Monitoring & Incident Response', prefix: '06' },
  { href: '#availability-focus', label: '99.9% Availability Focus', prefix: '07' },
  { href: '#site-reliability-consulting-gurgaon', label: 'Performance & Observability Consulting', prefix: '08' },
  { href: '#certified-engineers', label: 'Technical Support by Certified Engineers', prefix: '09' },
  { href: '#proactive-culture', label: 'Building a Proactive Reliability Culture', prefix: '10' },
  { href: '#why-choose-xamops', label: 'Why Choose XamOps?', prefix: '11' },
  { href: '#get-started', label: 'Get Started with XamOps', prefix: '12' },
  { href: '#reviews', label: 'What engineering teams say', prefix: null },
  { href: '#faq', label: 'Frequently asked questions', prefix: null },
];

export default function SiteReliabilityEngineeringServicesInGurgaonPage() {
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
            Site Reliability Engineering Services in Gurgaon:{' '}
            <span style={{ color: ACCENT }}>24/7 Monitoring, 99.9% Availability Focus &amp; Certified Support</span>
          </h1>

          <p className="mt-5 text-[17px] leading-[1.7] max-w-[62ch]" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Site Reliability Engineering Services in Gurgaon from XamOps help businesses build,
            operate, and continuously improve reliable digital infrastructure with 24/7
            Infrastructure Monitoring, a 99.9% Availability Focus, Technical Support by Certified
            Engineers, proactive incident management, and performance-focused operations.
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
                  Site Reliability Engineering Services in Gurgaon for 24/7 Infrastructure Monitoring and 99.9% Availability Focus
                </h2>
                <p className="text-[17px] leading-[1.78] mb-5" style={{ color: 'var(--ink-2)' }}>
                  As applications and cloud environments become increasingly important to daily
                  business operations, maintaining stable, secure, and responsive infrastructure is
                  no longer optional.
                </p>
                <p className="text-[17px] leading-[1.78]" style={{ color: 'var(--ink-2)' }}>
                  Modern businesses depend on applications that need to remain available across
                  working hours and beyond. An unexpected outage, slow application response,
                  infrastructure failure, or deployment issue can affect employees, customers,
                  revenue, and business reputation. XamOps provides reliability-focused engineering
                  support, backed by our{' '}
                  <Link to="/platform/sre" style={{ color: ACCENT, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                    SRE automation platform
                  </Link>, to help organizations reduce operational risks and create a more
                  predictable IT environment.
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
                    Infrastructure built for today and{' '}
                    <span style={{ color: ACCENT }}>tomorrow&apos;s growth.</span>
                  </h2>
                  <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                    Spend less time reacting to unexpected infrastructure problems and more time
                    improving the systems that support your customers and teams.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => setOpen(true)} className="btn-primary">
                      Book a demo <Icon.Arrow width="14" height="14" />
                    </button>
                    <Link to="/platform/sre" className="btn-ghost">
                      See SRE Automation Platform
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
                    to="/blog/site-reliability-engineering-services-in-noida"
                    className="ring-soft rounded-xl p-4 block transition-transform hover:-translate-y-0.5"
                    style={{ background: 'var(--ivory)', textDecoration: 'none' }}
                  >
                    <div className="text-[14px] mb-1" style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}>
                      Site Reliability Engineering Services in Noida
                    </div>
                    <div className="text-[13px]" style={{ color: 'var(--olive)' }}>SRE consulting, cloud reliability, and DevOps for Noida businesses.</div>
                  </Link>
                  <Link
                    to="/blog/sre-services-india"
                    className="ring-soft rounded-xl p-4 block transition-transform hover:-translate-y-0.5"
                    style={{ background: 'var(--ivory)', textDecoration: 'none' }}
                  >
                    <div className="text-[14px] mb-1" style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}>
                      Site Reliability Engineering Services in India
                    </div>
                    <div className="text-[13px]" style={{ color: 'var(--olive)' }}>A five-city overview of SRE services across India.</div>
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
                      className="rounded-xl overflow-hidden transition-colors hover:border-[var(--viz-1)]"
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
                      Know why, not just what.
                    </div>
                    <p className="text-[12.5px] leading-[1.6] mb-4" style={{ color: 'var(--olive)' }}>
                      <Xam /> brings metrics, logs, and alerts together so your team finds the
                      root cause faster.
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
        heading="Reliable infrastructure for Gurgaon's digital businesses."
        sub="24/7 monitoring, proactive incident response, and certified engineering support from XamOps."
      />
    </>
  );
}
