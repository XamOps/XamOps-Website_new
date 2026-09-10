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
    id: 'why-matter',
    prefix: '01',
    title: 'Why Site Reliability Engineering Services in Bangalore Matter for Modern Businesses',
    paras: [
      'Digital businesses operate in an environment where customers expect applications to remain available around the clock. Even a short service interruption can create abandoned transactions, support requests, poor reviews, and loss of customer confidence. SRE introduces engineering-based methods to prevent such issues and create more predictable IT operations.',
      <>Effective <Mark>SRE Consulting Services in Bangalore</Mark> can help organizations define service-level objectives, establish service-level indicators, analyze reliability trends, improve incident response, and automate repetitive operational activities. Instead of reacting to every infrastructure problem manually, businesses can develop systems that identify potential failures earlier and support faster resolution.</>,
      'XamOps combines engineering expertise with operational discipline to help businesses improve application reliability. Our engineers can evaluate existing infrastructure, identify operational bottlenecks, improve monitoring coverage, and recommend practical reliability improvements according to the organization\'s technology environment.',
    ],
  },
  {
    id: 'reliable-infrastructure',
    prefix: '02',
    title: 'How XamOps Builds Reliable IT Infrastructure',
    paras: [
      'A successful reliability strategy begins with visibility. Organizations cannot effectively manage what they cannot observe. XamOps helps businesses establish monitoring and observability across applications, servers, containers, databases, networks, cloud resources, and critical services.',
      <>Through <Mark>Site Reliability Consulting in Bangalore</Mark>, businesses can create structured approaches for monitoring application health, tracking performance metrics, identifying abnormal behavior, and responding to incidents. Monitoring becomes more valuable when it is connected to actionable alerts and clearly defined escalation procedures.</>,
      'Our approach also emphasizes automation. Manual infrastructure operations can consume valuable engineering time and increase the possibility of human error. Automation can support deployments, configuration management, recovery procedures, scaling activities, health checks, and other recurring operational tasks.',
    ],
  },
  {
    id: 'cloud-reliability',
    prefix: '03',
    title: 'Cloud Reliability and Scalable Infrastructure',
    paras: [
      'Cloud platforms provide flexibility and scalability, but cloud environments can also become complex as organizations grow. Multiple services, distributed architectures, containers, databases, APIs, and third-party integrations can create new reliability challenges.',
      <>XamOps provides <Mark>Cloud Reliability Engineering Services in Bangalore</Mark> to help organizations improve the stability and performance of cloud-based applications. Our engineers can work with cloud infrastructure and automation practices to improve resource utilization, availability, scalability, monitoring, and operational consistency.</>,
      'Cloud reliability is not simply about keeping servers online. It involves understanding dependencies, identifying failure points, designing recovery strategies, managing capacity, and ensuring that critical services can continue operating during unexpected events.',
      'With the right reliability architecture, organizations can scale applications more confidently while maintaining predictable performance. XamOps focuses on practical improvements that align reliability engineering with business objectives.',
    ],
  },
  {
    id: 'devops-sre',
    prefix: '04',
    title: 'DevOps and SRE Working Together',
    paras: [
      'DevOps and SRE are closely connected disciplines, but they address reliability from different perspectives. DevOps promotes collaboration, automation, continuous delivery, and faster software lifecycle processes, while SRE applies engineering principles to reliability, availability, performance, and operational risk.',
      <>XamOps offers <Mark>DevOps and SRE Services in Bangalore</Mark> to help organizations create a stronger connection between software development and infrastructure operations. By integrating deployment automation, infrastructure management, monitoring, observability, incident response, and reliability practices, teams can release software efficiently without ignoring operational stability.</>,
      'A mature DevOps and SRE approach can also reduce deployment-related risks. Automated testing, controlled releases, rollback strategies, infrastructure automation, and real-time monitoring can help engineering teams identify problems sooner and respond with greater confidence.',
    ],
  },
  {
    id: 'proactive-monitoring',
    prefix: '05',
    title: 'Proactive Monitoring and Incident Management',
    paras: [
      'Reactive IT management often means discovering problems only after users report them. Modern SRE practices take a proactive approach by continuously observing systems and identifying potential reliability issues before they become major incidents.',
      <>XamOps supports <Mark>Site Reliability Engineering Services in Bangalore</Mark> with continuous monitoring strategies that can help organizations understand infrastructure health and application performance. Monitoring can cover system resources, application metrics, response times, error rates, service dependencies, and other important reliability indicators.</>,
      'Incident management is another critical part of reliability engineering. When an incident occurs, teams need clear processes for detection, communication, diagnosis, resolution, and post-incident analysis. A structured process helps reduce confusion and enables teams to learn from failures.',
      'Post-incident reviews can reveal recurring problems and opportunities for automation or architectural improvements. Instead of treating incidents as isolated events, SRE teams can use them as opportunities to strengthen the overall system.',
    ],
  },
  {
    id: 'availability-performance',
    prefix: '06',
    title: 'Improving Application Availability and Performance',
    paras: [
      'Availability is one of the most important measurements for digital businesses. Customers expect websites, applications, APIs, and online services to work whenever they need them.',
      <>XamOps takes a <Mark>99.9% Availability Focus</Mark> when designing reliability strategies for business-critical environments. The exact availability target depends on application requirements, architecture, service dependencies, and business expectations, but the underlying objective remains consistent: reduce avoidable downtime and improve service continuity.</>,
      'Performance is equally important. An application can technically remain available while still delivering a poor customer experience if response times are high or resources are inefficiently utilized.',
      <>Through <Mark>SRE Consulting Services in Bangalore</Mark>, XamOps can help businesses identify performance bottlenecks, review resource utilization, improve observability, and develop strategies for handling changing workloads. This can help organizations maintain more predictable application behavior as traffic and business requirements evolve.</>,
    ],
  },
  {
    id: 'growing-businesses',
    prefix: '07',
    title: 'Reliability Engineering for Growing Businesses',
    paras: [
      'Startups, mid-sized organizations, and enterprises can all benefit from reliability engineering, but their requirements may differ. A growing startup may need help establishing monitoring and incident processes, while an enterprise may require reliability improvements across large-scale distributed systems.',
      <>XamOps provides <Mark>Site Reliability Consulting in Bangalore</Mark> with a practical focus on the organization's current technology maturity. Instead of applying the same model to every business, reliability strategies can be aligned with infrastructure architecture, development practices, operational challenges, and business priorities.</>,
      <>For organizations expanding their cloud footprint, <Mark>Cloud Reliability Engineering Services in Bangalore</Mark> can provide additional support for managing infrastructure complexity. As environments become more distributed, organizations need stronger observability, automation, capacity planning, and recovery strategies.</>,
    ],
  },
  {
    id: 'security-automation',
    prefix: '08',
    title: 'Security, Automation, and Operational Efficiency',
    paras: [
      'Reliability cannot be separated completely from security and operational discipline. Misconfigurations, outdated components, weak access controls, and unmanaged infrastructure changes can create both security and availability risks.',
      'XamOps integrates automation and engineering best practices into reliability-focused environments. Automated processes can improve consistency and reduce repetitive manual work, while controlled configuration and monitoring can provide better visibility into infrastructure changes.',
      <><Mark>DevOps and SRE Services in Bangalore</Mark> can also help engineering teams establish repeatable processes for deployment, monitoring, infrastructure management, and incident response. The result is an operational environment that can become easier to manage as the organization grows.</>,
      'Automation also allows engineering teams to spend less time handling repetitive tasks and more time working on architecture, optimization, product improvements, and strategic initiatives.',
    ],
  },
  {
    id: 'why-choose',
    prefix: '09',
    title: 'Why Choose XamOps for Reliability Engineering?',
    paras: [
      'Choosing an SRE partner requires more than evaluating technical tools. Organizations should consider engineering experience, monitoring capabilities, response processes, cloud expertise, automation skills, and the ability to understand business-critical workloads.',
      <>XamOps focuses on delivering practical reliability solutions supported by experienced professionals. Our service approach includes <Mark>Technical Support by Certified Engineers</Mark>, proactive monitoring, infrastructure visibility, incident management, automation, cloud reliability, and continuous optimization.</>,
      <>Businesses looking for <Mark>Site Reliability Engineering Services in Bangalore</Mark> can work with XamOps to strengthen operational processes without unnecessarily increasing infrastructure complexity. Our goal is to help organizations achieve more stable applications, faster incident response, improved visibility, and better engineering efficiency.</>,
    ],
  },
  {
    id: 'business-value',
    prefix: '10',
    title: 'The Business Value of Reliable Engineering',
    paras: [
      'Reliability has a direct connection with business performance. Stable applications improve customer confidence, reduce operational disruptions, and allow internal teams to focus on growth instead of repeatedly addressing preventable infrastructure problems.',
      <>Professional <Mark>SRE Consulting Services in Bangalore</Mark> can help organizations create measurable reliability objectives and establish processes for continuous improvement. Reliability becomes an ongoing engineering practice rather than a one-time infrastructure project.</>,
      <>Similarly, <Mark>Site Reliability Consulting in Bangalore</Mark> can support businesses that already have engineering and DevOps teams but need additional expertise to improve their reliability maturity. External expertise can provide a fresh assessment of existing systems and identify opportunities for better automation, monitoring, architecture, and incident response.</>,
      <>For cloud-first businesses, <Mark>Cloud Reliability Engineering Services in Bangalore</Mark> can further support scalable infrastructure and operational resilience. Organizations can establish stronger foundations for growth while reducing unnecessary operational risks.</>,
    ],
  },
  {
    id: 'reliable-future',
    prefix: '11',
    title: 'Build a More Reliable Digital Future with XamOps',
    paras: [
      'Modern businesses need infrastructure that can support continuous growth, changing customer expectations, and increasingly complex applications. Reliability engineering provides the practices, automation, monitoring, and engineering mindset required to build that foundation.',
      <>XamOps delivers <Mark>Site Reliability Engineering Services in Bangalore</Mark> with a focus on proactive operations, cloud reliability, application performance, automation, and measurable availability goals. From <Mark>24/7 Infrastructure Monitoring</Mark> to <Mark>100% technical support</Mark>, our approach is designed to help organizations maintain greater visibility and confidence across their technology environments.</>,
      'Whether your organization is modernizing infrastructure, moving workloads to the cloud, improving DevOps processes, or dealing with recurring application incidents, XamOps can help develop a reliability strategy aligned with your technical and business requirements.',
      <>With <Mark>DevOps and SRE Services in Bangalore</Mark>, organizations can bring development, operations, automation, monitoring, and reliability closer together. The result is a stronger engineering culture where teams can deliver software faster while maintaining the stability customers expect.</>,
      'If your business is ready to improve availability, reduce operational risks, strengthen cloud infrastructure, and create more efficient engineering processes, XamOps can help you move toward a more reliable and scalable technology environment.',
    ],
  },
];

const HIGHLIGHTS = ['24/7 Monitoring', '99.9% Availability Focus', 'Certified Engineering Support', '100% Technical Support'];

const FAQS = [
  { q: 'What are Site Reliability Engineering Services in Bangalore?', a: 'Site Reliability Engineering Services in Bangalore help businesses that depend on cloud applications, APIs, microservices, and always-on infrastructure build reliable, scalable, secure, and performance-focused IT environments, backed by 24/7 Infrastructure Monitoring and certified engineering support.' },
  { q: 'How does XamOps build reliable IT infrastructure?', a: 'XamOps starts with visibility, establishing monitoring and observability across applications, servers, containers, databases, networks, and cloud resources, then layers automation on top to support deployments, recovery procedures, and scaling activities.' },
  { q: 'What is the difference between DevOps and SRE?', a: 'DevOps promotes collaboration, automation, and faster software delivery, while SRE applies engineering principles to reliability, availability, performance, and operational risk. XamOps offers DevOps and SRE Services in Bangalore that bring both disciplines together.' },
  { q: 'What does a 99.9% Availability Focus mean in practice?', a: 'It means XamOps designs reliability strategies for business-critical environments with the underlying objective of reducing avoidable downtime and improving service continuity, while the exact target depends on application architecture and business requirements.' },
  { q: 'Can Cloud Reliability Engineering Services in Bangalore support growing startups?', a: 'Yes. XamOps provides Site Reliability Consulting in Bangalore aligned with the organization\'s current technology maturity, whether that means establishing monitoring and incident processes for a growing startup or reliability improvements across large-scale distributed systems for an enterprise.' },
  { q: 'How does reliability engineering connect to security?', a: 'Reliability cannot be separated completely from security and operational discipline. Misconfigurations, outdated components, and unmanaged infrastructure changes can create both security and availability risks, so XamOps integrates automation and best practices into reliability-focused environments.' },
];

const TOC_ITEMS = [
  { href: '#why-matter', label: 'Why SRE Matters for Modern Businesses', prefix: '01' },
  { href: '#reliable-infrastructure', label: 'How XamOps Builds Reliable Infrastructure', prefix: '02' },
  { href: '#cloud-reliability', label: 'Cloud Reliability & Scalable Infrastructure', prefix: '03' },
  { href: '#devops-sre', label: 'DevOps and SRE Working Together', prefix: '04' },
  { href: '#proactive-monitoring', label: 'Proactive Monitoring & Incident Management', prefix: '05' },
  { href: '#availability-performance', label: 'Improving Availability & Performance', prefix: '06' },
  { href: '#growing-businesses', label: 'Reliability Engineering for Growing Businesses', prefix: '07' },
  { href: '#security-automation', label: 'Security, Automation & Efficiency', prefix: '08' },
  { href: '#why-choose', label: 'Why Choose XamOps for Reliability Engineering?', prefix: '09' },
  { href: '#business-value', label: 'The Business Value of Reliable Engineering', prefix: '10' },
  { href: '#reliable-future', label: 'Build a More Reliable Digital Future', prefix: '11' },
  { href: '#faq', label: 'Frequently asked questions', prefix: null },
];

export default function SiteReliabilityEngineeringServicesInBangalorePage() {
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
            Site Reliability Engineering Services in Bangalore:{' '}
            <span style={{ color: ACCENT }}>24/7 Monitoring, 99.9% Availability &amp; Certified Engineering Support</span>
          </h1>

          <p className="mt-5 text-[17px] leading-[1.7] max-w-[62ch]" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Site Reliability Engineering Services in Bangalore have become increasingly important
            for businesses that depend on cloud applications, digital platforms, APIs,
            microservices, and always-on infrastructure. With 24/7 Infrastructure Monitoring,
            99.9% Availability Focus, Technical Support by Certified Engineers, and 100% technical
            support, XamOps helps organizations build reliable, scalable, secure, and
            performance-focused IT environments.
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
                  In a competitive technology market, application downtime can directly affect
                  customer experience, revenue, productivity, and brand reputation. Modern
                  businesses need more than traditional infrastructure management. They need
                  proactive monitoring, automated incident response, performance optimization,
                  observability, cloud reliability, and continuous improvement. This is where
                  professional SRE practices can make a measurable difference. XamOps delivers
                  Site Reliability Engineering Services in Bangalore designed to connect
                  development, operations, automation,{' '}
                  <Link to="/platform/sre" style={{ color: ACCENT, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                    cloud infrastructure
                  </Link>, monitoring, and business requirements.
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
                    Build a more reliable{' '}
                    <span style={{ color: ACCENT }}>digital future with XamOps.</span>
                  </h2>
                  <p className="text-[15.5px] leading-[1.78] mb-4" style={{ color: 'var(--ink-2)' }}>
                    If your business is ready to improve availability, reduce operational risks,
                    strengthen cloud infrastructure, and create more efficient engineering
                    processes, XamOps can help you move toward a more reliable and scalable
                    technology environment.
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
                    to="/blog/sre-automation-platform-noida"
                    className="ring-soft rounded-xl p-4 block transition-transform hover:-translate-y-0.5"
                    style={{ background: 'var(--ivory)', textDecoration: 'none' }}
                  >
                    <div className="text-[14px] mb-1" style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}>
                      SRE Automation Platform: Building Reliable Cloud Infrastructure
                    </div>
                    <div className="text-[13px]" style={{ color: 'var(--olive)' }}>How SRE automation helps enterprises in Noida.</div>
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
        sub="Real-time monitoring, automated incident response, and certified engineering support for businesses in Bangalore."
      />
    </>
  );
}
