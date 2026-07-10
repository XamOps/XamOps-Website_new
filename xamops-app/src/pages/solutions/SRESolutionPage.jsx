import PageHero from '../../components/shared/PageHero';
import CopySection from '../../components/shared/CopySection';
import FeatureGrid from '../../components/shared/FeatureGrid';
import FAQList from '../../components/shared/FAQList';
import CTABanner from '../../components/shared/CTABanner';

const FAQS = [
  { q: 'What are SRE Solutions?', a: 'SRE Solutions help organizations improve application reliability through automation, monitoring, incident management, and performance optimization.' },
  { q: 'How does Xamops improve service reliability?', a: 'Xamops continuously monitors cloud infrastructure, detects issues early, automates operational workflows, and helps teams resolve incidents faster.' },
  { q: 'Can Xamops automate cloud operations?', a: 'Yes. Xamops automates infrastructure provisioning, monitoring, scaling, workload optimization, and routine cloud operations.' },
  { q: 'Does Xamops support enterprise cloud environments?', a: 'Yes. Xamops is designed for startups, growing businesses, and enterprises managing hybrid or multi-cloud environments.' },
  { q: 'How does Xamops help reduce cloud costs?', a: 'The platform improves resource utilization, identifies unused infrastructure, and supports continuous cloud cost optimization while maintaining performance.' },
  { q: 'Which teams benefit from Xamops SRE Solutions?', a: 'Site Reliability Engineers, DevOps teams, Cloud Operations teams, Infrastructure Engineers, FinOps teams, and IT Operations teams all benefit from Xamops.' },
  { q: 'Does Xamops support multi-cloud infrastructure?', a: 'Yes. Xamops provides centralized monitoring, cloud infrastructure automation, and operational visibility across multi-cloud environments.' },
  { q: 'Why choose Xamops for SRE?', a: 'Xamops combines Cloud Automation Platform, Cloud Operations Automation, Cloud Monitoring Platform, AI Cloud Operations Platform, Cloud Infrastructure Automation, and Enterprise Cloud Management into a unified platform that helps businesses improve reliability, reduce downtime, optimize cloud costs, and simplify cloud operations.' },
];

export default function SRESolutionPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions · SRE"
        title={[{ text: 'SRE Solutions That Keep' }, { text: 'Your Cloud Always Available', accent: true }]}
        body="Every minute of downtime impacts your customers, business operations, and revenue. Xamops SRE Solutions help organizations simplify cloud operations, improve application reliability, and automate repetitive operational tasks."
      />
      <CopySection
        paragraphs={[
          'Manual monitoring, delayed incident response, and disconnected tools often make it difficult for engineering teams to maintain reliable services. Xamops SRE Solutions combine intelligent monitoring, infrastructure automation, and proactive incident management to help businesses deliver reliable digital experiences while reducing operational complexity. The current Xamops SRE solution focuses on unified metrics, logs, traces, faster investigations, automated incident grouping, and quicker root cause analysis to reduce operational overhead.',
          'Whether your teams operate from Delhi, Noida, Jaipur, Gurugram, Bengaluru, Hyderabad, Mumbai, or Pune, or manage global cloud infrastructure, Xamops provides a scalable platform to strengthen cloud reliability and improve operational efficiency.',
        ]}
        wide
      />
      <CopySection
        dark
        heading="Build Reliable Cloud Infrastructure with Xamops SRE Solutions"
        paragraphs={[
          'Modern businesses depend on applications that are available around the clock. Xamops helps engineering teams monitor infrastructure, detect performance issues early, and automate operational workflows before they affect customers.',
          'The Xamops platform combines the power of a Cloud Automation Platform, Cloud Monitoring Platform, Cloud Infrastructure Management Platform, and AI Cloud Operations Platform to provide complete visibility into cloud environments. Instead of spending valuable time resolving recurring issues manually, your teams can focus on innovation while Xamops automates routine operational processes.',
        ]}
        wide
      />
      <FeatureGrid
        title="Key features of Xamops SRE Solutions"
        items={[
          ['Proactive Infrastructure Monitoring', 'Gain complete visibility into cloud resources, applications, containers, and services through continuous monitoring and intelligent alerts.'],
          ['Cloud Operations Automation', 'Automate repetitive operational tasks such as provisioning, scaling, health checks, and routine maintenance.'],
          ['Cloud Infrastructure Automation', 'Simplify cloud infrastructure management by automating deployments, configuration, workload balancing, and provisioning.'],
          ['AI Cloud Operations Platform', 'Receive actionable recommendations based on real-time infrastructure performance and workload behavior.'],
          ['Incident Detection and Faster Resolution', 'Identify performance bottlenecks quickly with centralized monitoring and streamlined incident investigation.'],
          ['Cloud Cost Optimization', 'Improve cloud performance while controlling infrastructure expenses through intelligent resource allocation.'],
        ]}
      />
      <CopySection
        heading="Why Choose Xamops SRE Solutions?"
        paragraphs={['Xamops brings together cloud reliability, automation, monitoring, and operational intelligence within a single platform. With Xamops, your business can:']}
        checklist={[
          'Improve application uptime', 'Reduce manual operational tasks', 'Automate cloud infrastructure management',
          'Increase cloud efficiency', 'Improve service reliability', 'Strengthen operational visibility',
          'Optimize cloud resource utilization', 'Simplify cloud governance', 'Reduce infrastructure complexity',
          'Scale cloud environments with confidence',
        ]}
        wide
      />
      <CopySection
        dark
        heading="Designed for Modern Engineering Teams"
        bullets={[
          'Site Reliability Engineers — proactive monitoring, alerting, self-healing workflows',
          'DevOps Teams — automated deployments and continuous monitoring',
          'Cloud Operations Teams — governance, scalability, operational efficiency',
          'FinOps Teams — cloud cost optimization without compromising performance',
        ]}
        wide
      />
      <CopySection
        heading="Industries That Benefit from Xamops"
        paragraphs={['From growing startups in Jaipur to enterprise organizations in Delhi, Noida, Bengaluru, Hyderabad, Mumbai, and Pune, Xamops helps businesses achieve operational excellence through intelligent cloud automation.']}
        bullets={[
          'IT & Technology', 'SaaS Platforms', 'Healthcare', 'Banking & Financial Services', 'Manufacturing',
          'Retail & E-commerce', 'Telecommunications', 'Logistics', 'Government Organizations', 'Education',
        ]}
        wide
      />
      <CopySection
        dark
        heading="Benefits of the Xamops SRE Solutions"
        checklist={[
          'Increase system reliability and uptime', 'Automate cloud infrastructure management', 'Improve cloud performance monitoring',
          'Reduce Mean Time to Detect (MTTD)', 'Minimize Mean Time to Resolve (MTTR)', 'Strengthen cloud governance and compliance',
          'Improve operational efficiency', 'Reduce manual operational workloads', 'Enhance cloud cost optimization',
          'Deliver better customer experiences with highly available applications',
        ]}
        wide
      />
      <FAQList faqs={FAQS} />
      <CTABanner />
    </>
  );
}
