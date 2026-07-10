import PageHero from '../../components/shared/PageHero';
import CopySection from '../../components/shared/CopySection';
import FeatureGrid from '../../components/shared/FeatureGrid';
import FAQList from '../../components/shared/FAQList';
import CTABanner from '../../components/shared/CTABanner';
import DBVisual from '../../components/visuals/DBVisual';

const FAQS = [
  { q: 'What is a SecOps Platform?', a: 'The SecOps Platform brings together the process of security and operations to enable automation in threat detection, monitoring, compliance, and incident response within cloud environments.' },
  { q: 'How does Xamops improve cloud security?', a: 'Xamops leverages automation using artificial intelligence, continuous monitoring, intelligent policy enforcement, and automated remediation for better cloud security.' },
  { q: 'Can Xamops automate cloud operations?', a: 'Yes. Xamops automates cloud infrastructure management, security operations, compliance, monitoring, and cloud optimization.' },
  { q: 'Does Xamops support multi-cloud environments?', a: 'Yes. Xamops is created with a view to managing and securing workloads in multi-cloud environments via automation and central visibility.' },
  { q: 'How does Xamops help reduce cloud costs?', a: 'By automating cloud cost optimization, resource monitoring, workload analysis, and automated recommendations which reduce unnecessary cloud costs.' },
  { q: 'Is Xamops suitable for enterprise businesses?', a: 'Yes. Xamops is tailored for use by startups, medium-sized organizations, and big enterprises.' },
  { q: 'Which teams can benefit from Xamops?', a: 'DevOps, SecOps, FinOps, IT Operations, SRE, Cloud Engineering, and Infrastructure Management teams all benefit from the platform.' },
  { q: 'Why choose Xamops over traditional cloud management tools?', a: 'Xamops combines cloud automation, AI-powered cloud operations, cloud monitoring, cost optimization, security automation, and enterprise cloud management in a single intelligent platform.' },
];

export default function DBOpsPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · DBOps"
        title={[{ text: 'Intelligent Cloud Security &' }, { text: 'Automated Operations', accent: true }]}
        body="Cloud-based ecosystems today need constant monitoring, early identification of threats, and automation of operations. Xamops makes cloud security easier for businesses by integrating cloud automation, AI-powered automation, and intelligent policy management into one platform."
      />
      <section className="sec-light pb-16">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10"><DBVisual /></div>
      </section>
      <CopySection
        paragraphs={[
          'No matter whether you manage your multi-cloud infrastructure, optimize your cloud spend, or secure your enterprise workloads, with Xamops you will be able to automate your security operations and increase efficiency, compliance, and operational visibility. Developed for enterprises, startups, and growing companies, our platform integrates seamlessly into your existing cloud ecosystem, saving time and resources.',
        ]}
        wide
      />
      <CopySection
        dark
        heading="Secure Your Cloud Infrastructure with AI-Powered Automation"
        paragraphs={[
          'Security becomes more complicated as organizations grow their cloud footprint. With the Xamops AI Cloud Operations Platform, cloud environments are constantly monitored, potential threats are identified, workflows are automated, and compliance with industry standards is maintained.',
          'The Cloud Management Platform allows efficient collaboration among DevOps, SecOps, FinOps, and SRE teams with full control over cloud resources.',
        ]}
        wide
      />
      <FeatureGrid
        title="Key features of the Xamops platform"
        items={[
          ['AI-Powered Security Automation', 'AI-based workflows that detect vulnerabilities, monitor configurations, and automate incident response.'],
          ['Continuous Cloud Monitoring', 'Real-time visibility into your cloud environment helps detect anomalies before they affect your business.'],
          ['Cloud Infrastructure Automation', 'Provisioning, policy enforcement, and resource management become easier with automated workflows.'],
          ['Enterprise Cloud Management', 'Control multiple cloud environments from a single dashboard.'],
          ['Cloud Cost Optimization', 'Detect unused resources, optimize workloads, and stop unwanted cloud spending.'],
          ['Compliance & Governance', 'Ensure compliance with industry standards through configuration monitoring, reporting, and policy enforcement.'],
        ]}
      />
      <CopySection
        heading="Why Choose Xamops for Cloud Security Automation?"
        paragraphs={['Xamops combines the capabilities of a Cloud Automation Platform, DevOps Automation Platform, FinOps Platform, and SRE Automation Platform to deliver intelligent cloud operations from a single interface. Organizations benefit from:']}
        checklist={[
          'AI-powered threat detection', 'Automated incident response', 'Continuous compliance monitoring',
          'Intelligent cloud resource optimization', 'Infrastructure automation', 'Enterprise-grade security controls',
          'Multi-cloud visibility', 'Real-time performance monitoring', 'Simplified cloud governance', 'Scalable automation workflows',
        ]}
        wide
      />
      <CopySection
        dark
        heading="Benefits of Implementing Xamops"
        checklist={[
          'Improve cloud security posture', 'Automate cloud operations', 'Reduce operational costs', 'Enhance cloud infrastructure management',
          'Strengthen compliance and governance', 'Increase cloud efficiency', 'Minimize manual security tasks', 'Accelerate incident response',
          'Optimize cloud resource utilization', 'Support enterprise-scale cloud environments',
        ]}
        wide
      />
      <FAQList faqs={FAQS} />
      <CTABanner heading="Stop paging your DBA at 3am." />
    </>
  );
}
