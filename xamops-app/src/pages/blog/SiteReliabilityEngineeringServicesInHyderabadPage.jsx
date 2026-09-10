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

const ACCENT = 'var(--viz-5)';

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
    id: 'by-xamops',
    prefix: '01',
    title: 'Site Reliability Engineering Services in Hyderabad by XamOps',
    paras: [
      <>XamOps provides modern reliability engineering solutions designed around the specific technology environment and business requirements of each organization. Our <Mark>Site Reliability Consulting in Hyderabad</Mark> focuses on creating dependable systems without slowing down innovation. We combine engineering expertise with automation and monitoring to help teams detect problems earlier, respond faster, and continuously improve infrastructure performance.</>,
      'The objective of SRE is not simply to keep servers running. It is to create a structured engineering approach to reliability where performance, availability, scalability, security, and operational efficiency can be measured and improved. XamOps works with development and operations teams to introduce practical reliability practices that support both current workloads and future growth.',
      <>Our <Mark>Cloud Reliability Engineering Services in Hyderabad</Mark> can support organizations operating on cloud platforms where infrastructure changes rapidly and application workloads fluctuate throughout the day. Through cloud monitoring, infrastructure automation, resource optimization, incident response, and performance analysis, businesses can establish a more resilient cloud operating model.</>,
    ],
  },
  {
    id: 'why-need',
    prefix: '02',
    title: 'Why Businesses Need SRE and Reliability Engineering',
    paras: [
      'Modern applications are expected to deliver fast and uninterrupted experiences. Customers may access an application at any time, while business teams expect internal systems and APIs to remain responsive throughout the day. A service interruption can result in lost revenue, customer dissatisfaction, operational delays, and damage to brand reputation.',
      <>This is where <Mark>DevOps and SRE Services in Hyderabad</Mark> can provide measurable value. DevOps improves collaboration and delivery processes, while SRE introduces engineering principles for managing reliability at scale. When these approaches work together, organizations can release software faster while maintaining stronger operational controls.</>,
      'XamOps uses SRE Consulting Services in Hyderabad to help businesses define practical reliability objectives based on application requirements. Service Level Indicators, Service Level Objectives, error budgets, incident metrics, and performance measurements can provide teams with clear visibility into whether a service is meeting expected reliability standards.',
    ],
  },
  {
    id: 'monitoring',
    prefix: '03',
    title: '24/7 Infrastructure Monitoring for Proactive Reliability',
    paras: [
      <>Continuous visibility is one of the most important components of modern reliability engineering. XamOps provides <Mark>24/7 Infrastructure Monitoring</Mark> to help organizations identify infrastructure, application, network, and performance anomalies before they become major business-impacting incidents.</>,
      'Our monitoring approach can cover servers, virtual machines, containers, Kubernetes environments, cloud resources, databases, applications, APIs, network components, and critical services. Alerts can be configured around meaningful thresholds and service conditions so engineering teams can focus on important events rather than unnecessary notification noise.',
      <>Through <Mark>Site Reliability Consulting in Hyderabad</Mark>, organizations can also improve their monitoring strategy by identifying critical services, defining meaningful metrics, and establishing appropriate alerting policies. This creates a proactive operating environment where technical teams can investigate unusual behavior before users experience significant disruption.</>,
    ],
  },
  {
    id: 'availability-focus',
    prefix: '04',
    title: '99.9% Availability Focus for Business-Critical Applications',
    paras: [
      <>Availability is a key consideration for organizations operating customer-facing applications and essential internal platforms. XamOps follows a <Mark>99.9% Availability Focus</Mark> when designing reliability strategies, while recognizing that actual availability depends on application architecture, infrastructure, dependencies, maintenance practices, and business requirements.</>,
      <>Our <Mark>Cloud Reliability Engineering Services in Hyderabad</Mark> help organizations identify availability risks across cloud infrastructure and application components. Architecture reviews, redundancy planning, automated recovery, capacity planning, health checks, and monitoring can help reduce the probability and impact of service interruptions.</>,
      'A strong availability strategy also requires understanding dependencies. An application may appear healthy while an external API, database, authentication service, or network component is experiencing problems. XamOps helps organizations build broader observability practices so teams can understand how different components affect overall service health.',
    ],
  },
  {
    id: 'certified-support',
    prefix: '05',
    title: 'Technical Support by Certified Engineers',
    paras: [
      <>Technology environments require continuous technical attention, particularly when businesses operate complex cloud and application architectures. XamOps provides <Mark>Technical Support by Certified Engineers</Mark> to help organizations investigate incidents, troubleshoot performance issues, manage infrastructure challenges, and improve operational processes.</>,
      <>Our <Mark>DevOps and SRE Services in Hyderabad</Mark> bring development, infrastructure, automation, monitoring, and operational practices together. This enables engineering teams to address reliability concerns as part of the complete software lifecycle rather than treating operations as an isolated function.</>,
      'Technical support can also include incident investigation and root cause analysis. Instead of only resolving an immediate issue, reliability engineering looks at why the issue happened and how similar failures can be prevented. This continuous improvement mindset can help businesses reduce recurring incidents and strengthen their technology environment over time.',
    ],
  },
  {
    id: 'automation',
    prefix: '06',
    title: 'Automation for Faster and More Consistent Operations',
    paras: [
      'Manual infrastructure management can create operational risks, especially when environments become larger. Repetitive activities may consume engineering time and increase the possibility of configuration inconsistencies. Automation can help standardize these processes and make infrastructure operations more predictable.',
      <>XamOps incorporates automation into <Mark>SRE Consulting Services in Hyderabad</Mark> based on the organization's requirements. Infrastructure provisioning, deployment workflows, monitoring configuration, recovery processes, scaling operations, and routine maintenance can be automated where appropriate.</>,
      'Automation also supports faster incident response. When repetitive recovery procedures can be triggered consistently, engineers can spend more time analyzing complex problems instead of performing the same manual steps during every incident.',
    ],
  },
  {
    id: 'incident-management',
    prefix: '07',
    title: 'Incident Management and Root Cause Analysis',
    paras: [
      'Even highly reliable systems can experience incidents. Effective SRE practices therefore focus not only on prevention but also on response and recovery. XamOps helps organizations establish structured incident management processes that clarify detection, escalation, communication, investigation, resolution, and post-incident improvement.',
      <>Through <Mark>Site Reliability Consulting in Hyderabad</Mark>, businesses can develop incident response workflows that match their technical and organizational structure. Clear ownership and escalation procedures can reduce confusion during high-pressure situations.</>,
      'After an incident, root cause analysis can reveal weaknesses in architecture, monitoring, deployment procedures, capacity planning, or configuration management. The purpose is not simply to assign responsibility but to identify engineering improvements that can reduce the likelihood of similar incidents in the future.',
    ],
  },
  {
    id: 'cloud-devops-sre',
    prefix: '08',
    title: 'Cloud, DevOps and SRE Working Together',
    paras: [
      'Cloud adoption has changed the way organizations design and operate applications. Infrastructure can now be created dynamically, services can scale automatically, and development teams can deploy changes much more frequently. However, increased speed can also create operational complexity.',
      <>XamOps combines <Mark>Cloud Reliability Engineering Services in Hyderabad</Mark> with DevOps and SRE principles to help businesses balance delivery speed with operational stability. Infrastructure as Code, continuous integration and delivery, automated testing, observability, containerization, and cloud-native architectures can work together as part of a reliability-focused operating model.</>,
      <>With <Mark>DevOps and SRE Services in Hyderabad</Mark>, organizations can establish stronger collaboration between development and operations teams. This can reduce operational silos and make reliability a shared responsibility across the technology lifecycle.</>,
    ],
  },
  {
    id: 'scalability',
    prefix: '09',
    title: 'Scalability and Performance Engineering',
    paras: [
      'Reliability is closely connected with scalability and performance. An application that works efficiently under normal traffic may struggle when customer demand suddenly increases. Performance bottlenecks can appear in databases, application services, network layers, cloud resources, or external dependencies.',
      <>XamOps applies <Mark>SRE Consulting Services in Hyderabad</Mark> to help organizations evaluate performance and scalability requirements. Capacity planning, resource utilization analysis, load testing strategies, application monitoring, and infrastructure optimization can provide valuable information for future growth.</>,
      <>Our <Mark>Site Reliability Consulting in Hyderabad</Mark> approach also considers the relationship between performance and customer experience. Technical metrics are important, but businesses ultimately need their applications to deliver dependable experiences to users.</>,
    ],
  },
  {
    id: 'why-choose',
    prefix: '10',
    title: 'Why Choose XamOps for SRE?',
    paras: [
      <>XamOps focuses on practical, measurable, and business-oriented reliability engineering. Our approach combines <Mark>24/7 Infrastructure Monitoring</Mark>, a <Mark>99.9% Availability Focus</Mark>, <Mark>Technical Support by Certified Engineers</Mark>, and <Mark>100% technical support</Mark> to help businesses manage evolving IT environments with greater confidence.</>,
      'Organizations can work with XamOps when they need stronger monitoring, cloud reliability, DevOps automation, incident management, infrastructure optimization, or a structured SRE strategy. Instead of applying a generic framework, we evaluate the existing environment and identify areas where engineering improvements can deliver meaningful operational benefits.',
      <>Our <Mark>Cloud Reliability Engineering Services in Hyderabad</Mark> are suitable for organizations looking to improve the stability of cloud-native applications, hybrid infrastructure, containers, APIs, databases, and distributed systems. We can also support teams that are transitioning from traditional IT operations toward automated, observable, and engineering-driven infrastructure management.</>,
    ],
  },
  {
    id: 'reliable-future',
    prefix: '11',
    title: 'Building a More Reliable Digital Future with XamOps',
    paras: [
      'Reliable technology is now a business requirement rather than an optional operational advantage. Customers expect applications to work consistently, employees depend on internal systems for daily operations, and businesses need technology platforms that can scale with changing demand.',
      <>XamOps delivers <Mark>Site Reliability Engineering Services in Hyderabad</Mark> with an engineering-first approach focused on availability, observability, automation, performance, and continuous improvement. By combining <Mark>Site Reliability Consulting in Hyderabad</Mark>, <Mark>SRE Consulting Services in Hyderabad</Mark>, <Mark>Cloud Reliability Engineering Services in Hyderabad</Mark>, and <Mark>DevOps and SRE Services in Hyderabad</Mark>, XamOps helps organizations create a stronger foundation for reliable digital operations.</>,
      'Whether a business is modernizing its infrastructure, migrating workloads to the cloud, improving application availability, or building a dedicated reliability practice, the right SRE strategy can make technology operations more predictable and resilient. With continuous monitoring, proactive engineering, automation, expert support, and measurable reliability objectives, organizations can reduce operational risk while creating an environment that supports sustainable growth.',
      'If your organization is looking to improve infrastructure reliability, application performance, cloud operations, and incident response, XamOps can help develop a reliability engineering approach aligned with your business and technology goals. A structured SRE program can transform reactive IT operations into a proactive engineering function built for performance, scalability, and long-term resilience.',
    ],
  },
];

const HIGHLIGHTS = ['24/7 Monitoring', '99.9% Availability Focus', 'Certified Engineers', '100% Technical Support'];

const FAQS = [
  { q: 'What are Site Reliability Engineering Services in Hyderabad?', a: 'Site Reliability Engineering Services in Hyderabad help businesses that depend on always-available applications, cloud infrastructure, APIs, and digital platforms strengthen operational reliability through 24/7 Infrastructure Monitoring, availability focus, and technical support by certified engineers.' },
  { q: 'How does XamOps provide 24/7 Infrastructure Monitoring in Hyderabad?', a: 'XamOps monitors servers, virtual machines, containers, Kubernetes environments, cloud resources, databases, applications, APIs, and network components, with alerts configured around meaningful thresholds so engineering teams focus on important events rather than noise.' },
  { q: 'What does Technical Support by Certified Engineers include?', a: 'It includes helping organizations investigate incidents, troubleshoot performance issues, manage infrastructure challenges, and improve operational processes, as well as incident investigation and root cause analysis to prevent similar failures.' },
  { q: 'How does XamOps handle incident management and root cause analysis?', a: 'XamOps establishes structured incident management processes covering detection, escalation, communication, investigation, resolution, and post-incident improvement, with root cause analysis identifying engineering improvements rather than simply assigning responsibility.' },
  { q: 'How do DevOps and SRE work together at XamOps?', a: 'DevOps and SRE Services in Hyderabad from XamOps bring development, infrastructure, automation, monitoring, and operational practices together, combining faster software delivery with engineering principles for reliability at scale.' },
  { q: 'Is XamOps suitable for organizations migrating to the cloud?', a: 'Yes. Cloud Reliability Engineering Services in Hyderabad are suitable for organizations improving the stability of cloud-native applications, hybrid infrastructure, containers, APIs, databases, and distributed systems, including teams transitioning from traditional IT operations.' },
];

const TOC_ITEMS = [
  { href: '#by-xamops', label: 'SRE Services in Hyderabad by XamOps', prefix: '01' },
  { href: '#why-need', label: 'Why Businesses Need SRE & Reliability Engineering', prefix: '02' },
  { href: '#monitoring', label: '24/7 Infrastructure Monitoring', prefix: '03' },
  { href: '#availability-focus', label: '99.9% Availability Focus', prefix: '04' },
  { href: '#certified-support', label: 'Technical Support by Certified Engineers', prefix: '05' },
  { href: '#automation', label: 'Automation for Consistent Operations', prefix: '06' },
  { href: '#incident-management', label: 'Incident Management & Root Cause Analysis', prefix: '07' },
  { href: '#cloud-devops-sre', label: 'Cloud, DevOps and SRE Working Together', prefix: '08' },
  { href: '#scalability', label: 'Scalability & Performance Engineering', prefix: '09' },
  { href: '#why-choose', label: 'Why Choose XamOps for SRE?', prefix: '10' },
  { href: '#reliable-future', label: 'Building a More Reliable Digital Future', prefix: '11' },
  { href: '#faq', label: 'Frequently asked questions', prefix: null },
];

export default function SiteReliabilityEngineeringServicesInHyderabadPage() {
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
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>September 10, 2026</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>10 min read</span>
          </div>

          <h1 className="serif text-[clamp(28px,4.2vw,54px)] leading-[1.1] tracking-tight max-w-[30ch]" style={{ color: '#ffffff' }}>
            Site Reliability Engineering Services in Hyderabad:{' '}
            <span style={{ color: ACCENT }}>24/7 Monitoring, 99.9% Availability &amp; 100% Technical Support</span>
          </h1>

          <p className="mt-5 text-[17px] leading-[1.7] max-w-[62ch]" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Site Reliability Engineering Services in Hyderabad are becoming essential for
            businesses that depend on always-available applications, cloud infrastructure, APIs,
            and digital platforms. XamOps helps organizations strengthen operational reliability
            through 24/7 Infrastructure Monitoring, 99.9% Availability Focus, Technical Support by
            Certified Engineers, and 100% technical support. Our approach combines automation,
            observability, incident management, cloud operations, and DevOps practices to help
            businesses reduce downtime and maintain consistent application performance.
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
                  As digital businesses expand, infrastructure environments become more complex.
                  Applications may run across public clouds, private data centers, containers,
                  Kubernetes clusters, databases, APIs, and third-party services. Without an
                  effective reliability strategy, even a small configuration issue or
                  infrastructure failure can affect customers and revenue. XamOps delivers SRE
                  Consulting Services in Hyderabad to help organizations identify operational
                  risks, improve system resilience, and establish measurable{' '}
                  <Link to="/platform/sre" style={{ color: ACCENT, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                    reliability practices
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
                    Transform reactive IT operations into{' '}
                    <span style={{ color: ACCENT }}>proactive engineering.</span>
                  </h2>
                  <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                    A structured SRE program can transform reactive IT operations into a
                    proactive engineering function built for performance, scalability, and
                    long-term resilience.
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

              {/* Related reading */}
              <Reveal className="mb-14">
                <div className="eyebrow mb-4">Related reading</div>
                <div className="grid sm:grid-cols-2 gap-3">
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
                  <Link
                    to="/blog/site-reliability-engineering-services-in-bangalore"
                    className="ring-soft rounded-xl p-4 block transition-transform hover:-translate-y-0.5"
                    style={{ background: 'var(--ivory)', textDecoration: 'none' }}
                  >
                    <div className="text-[14px] mb-1" style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}>
                      Site Reliability Engineering Services in Bangalore
                    </div>
                    <div className="text-[13px]" style={{ color: 'var(--olive)' }}>24/7 monitoring and certified engineering support.</div>
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
                      className="rounded-xl overflow-hidden transition-colors hover:border-[var(--viz-5)]"
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
                      { label: 'Category', value: 'SRE', accent: true },
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
                      Reliability, automated.
                    </div>
                    <p className="text-[12.5px] leading-[1.6] mb-4" style={{ color: 'var(--olive)' }}>
                      <Xam /> monitors infrastructure continuously and resolves recurring
                      incidents before they reach your customers.
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
        heading="Build reliable cloud infrastructure with XamOps."
        sub="Real-time monitoring, automated incident response, and certified engineering support for businesses in Hyderabad."
      />
    </>
  );
}
