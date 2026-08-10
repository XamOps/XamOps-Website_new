import PageHero from '../../components/shared/PageHero';
import CopySection from '../../components/shared/CopySection';
import FeatureGrid from '../../components/shared/FeatureGrid';
import FAQList from '../../components/shared/FAQList';
import CTABanner from '../../components/shared/CTABanner';
import SREVisual from '../../components/visuals/SREVisual';

const FAQS = [
  { q: 'What is an SRE Automation Platform?', a: 'An SRE Automation Platform helps organizations automate operational tasks, monitor infrastructure, improve reliability, and reduce downtime using intelligent workflows and AI-powered insights.' },
  { q: 'How does Xamops improve cloud reliability?', a: 'Xamops continuously monitors cloud infrastructure, automates incident response, optimizes workloads, and provides AI-driven recommendations to improve system reliability.' },
  { q: 'Can Xamops automate cloud operations?', a: 'Yes. Xamops automates infrastructure provisioning, monitoring, scaling, incident management, and operational workflows across multi-cloud environments.' },
  { q: 'Does Xamops support enterprise cloud management?', a: 'Yes. Xamops is designed for enterprise cloud management with centralized governance, compliance monitoring, automation, and cloud infrastructure optimization.' },
  { q: 'How does Xamops help with cloud cost optimization?', a: 'The platform identifies underutilized resources, optimizes workloads, and provides intelligent recommendations to reduce cloud spending while maintaining performance.' },
  { q: 'Which teams benefit from the Xamops SRE Automation Platform?', a: 'Site Reliability Engineers, DevOps teams, Cloud Operations teams, Infrastructure Engineers, IT Operations, and FinOps teams all benefit from the platform.' },
  { q: 'Is Xamops suitable for multi-cloud environments?', a: 'Absolutely. Xamops provides centralized visibility and automation for AWS, Azure, Google Cloud, and hybrid cloud infrastructures.' },
  { q: 'Why should businesses choose Xamops?', a: 'Xamops combines an AI Cloud Operations Platform, Cloud Automation Platform, Cloud Monitoring Platform, Enterprise Cloud Management, and Infrastructure Automation into one intelligent solution.' },
];

export default function SREPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · SRE Automation"
        title={[{ text: 'SRE Automation for' }, { text: 'Intelligent Reliability', accent: true }]}
        body="Ensuring application reliability, system performance, and operational efficiency is critical for business success. The Xamops SRE Automation Platform improves system availability while reducing manual operational tasks."
      />
      <section className="sec-light pb-10">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10"><SREVisual /></div>
      </section>
      <CopySection
        paragraphs={[
          'Built for modern enterprises, DevOps teams, and Site Reliability Engineers (SREs), Xamops combines the capabilities of a Cloud Automation Platform, Cloud Monitoring Platform, and AI Cloud Operations Platform to simplify cloud infrastructure management while improving service reliability.',
        ]}
        wide
      />
      <CopySection
        dark
        heading="Enhance Reliability with AI-Powered Cloud Automation"
        paragraphs={[
          'Managing cloud infrastructure manually can increase operational complexity and slow incident response. The Xamops SRE Automation Platform uses AI-powered cloud automation to monitor workloads, detect performance issues, automate remediation, and improve overall system health.',
          'By leveraging intelligent automation, organizations can reduce downtime, optimize cloud infrastructure, and ensure seamless application performance without increasing operational costs.',
        ]}
        wide
      />
      <FeatureGrid
        title="Key features of the Xamops SRE Automation Platform"
        items={[
          ['Automated Cloud Operations', 'Automate provisioning, monitoring, scaling, and operational tasks across cloud environments.'],
          ['AI Cloud Operations Platform', 'AI-driven analytics predict issues, identify anomalies, and automate incident resolution.'],
          ['Real-Time Cloud Monitoring', 'Monitor infrastructure, applications, containers, and cloud services from a centralized dashboard.'],
          ['Cloud Infrastructure Automation', 'Reduce manual intervention by automating deployment, configuration management, and patching.'],
          ['Cloud Cost Optimization', 'Improve operational efficiency while controlling expenses through intelligent cost management.'],
          ['Enterprise Cloud Management', 'Manage hybrid and multi-cloud environments with centralized governance and compliance monitoring.'],
        ]}
      />
      <CopySection
        heading="Why Choose Xamops for SRE Automation?"
        paragraphs={['Xamops provides an integrated platform combining Cloud Infrastructure Management, Infrastructure Automation, DevOps Automation, and SRE Automation into one intelligent solution. Organizations choose Xamops because it helps them:']}
        checklist={[
          'Improve application reliability and uptime', 'Automate repetitive operational tasks', 'Accelerate incident detection and response',
          'Increase cloud infrastructure efficiency', 'Reduce operational complexity', 'Improve cloud resource utilization',
          'Enhance cloud security and governance', 'Support enterprise-scale cloud operations', 'Optimize cloud performance using AI-driven recommendations',
        ]}
        wide
      />
      <CopySection
        dark
        heading="Benefits of the Xamops SRE Automation Platform"
        checklist={[
          'Increase system reliability and uptime', 'Automate cloud infrastructure management', 'Improve cloud performance monitoring',
          'Reduce Mean Time to Detect (MTTD)', 'Minimize Mean Time to Resolve (MTTR)', 'Strengthen cloud governance and compliance',
          'Improve operational efficiency', 'Reduce manual operational workloads', 'Enhance cloud cost optimization',
          'Deliver better customer experiences with highly available applications',
        ]}
        wide
      />
      <FAQList faqs={FAQS} />
      <CTABanner heading="Faster RCAs. Quieter pagers." />
    </>
  );
}
