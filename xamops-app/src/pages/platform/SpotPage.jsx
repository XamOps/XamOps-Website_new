import PageHero from '../../components/shared/PageHero';
import CopySection from '../../components/shared/CopySection';
import FeatureGrid from '../../components/shared/FeatureGrid';
import FAQList from '../../components/shared/FAQList';
import CTABanner from '../../components/shared/CTABanner';
import SpotVisual from '../../components/visuals/SpotVisual';

const FAQS = [
  { q: 'What is Spot Automation?', a: 'Spot Automation automatically manages spot instances by launching, monitoring, replacing, and optimizing workloads to reduce cloud costs while maintaining application availability.' },
  { q: 'How does Xamops reduce cloud costs?', a: 'Xamops continuously analyzes cloud resources, automates spot instance allocation, optimizes workloads, and eliminates unnecessary infrastructure spending.' },
  { q: 'Can Xamops automate cloud infrastructure?', a: 'Yes. Xamops automates infrastructure provisioning, scaling, monitoring, workload management, and resource optimization across cloud environments.' },
  { q: 'Is Xamops suitable for enterprise cloud environments?', a: 'Yes. The platform supports enterprise cloud automation with centralized management, governance, monitoring, and cost optimization.' },
  { q: 'Which cloud platforms are supported?', a: 'Xamops is designed to work with leading cloud environments and supports multi-cloud and hybrid cloud operations.' },
  { q: 'How does Spot Automation improve workload reliability?', a: 'The platform automatically detects spot interruptions, replaces instances, balances workloads, and maintains application performance with minimal disruption.' },
  { q: 'Which teams benefit from Xamops Spot Automation?', a: 'DevOps, FinOps, Cloud Operations, Infrastructure Engineering, Platform Engineering, and Site Reliability Engineering (SRE) teams all benefit from automated cloud operations.' },
  { q: 'Why choose Xamops for cloud automation?', a: 'Xamops combines a Cloud Automation Platform, Cloud Management Platform, Cloud Cost Optimization Platform, AI Cloud Operations Platform, Cloud Monitoring Platform, and Enterprise Cloud Management into one unified solution.' },
];

export default function SpotPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Spot Automation"
        title={[{ text: 'Spot Automation for' }, { text: 'Smarter Cost Optimization', accent: true }]}
        body="Managing cloud infrastructure efficiently while keeping operational costs under control is a challenge for modern businesses. Xamops Spot Automation automates spot instance management without compromising reliability."
      />
      <section className="sec-light pb-16">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10"><SpotVisual /></div>
      </section>
      <CopySection
        paragraphs={[
          "Built for enterprises, startups, DevOps teams, and cloud engineers, Xamops combines intelligent automation with real-time cloud insights to simplify infrastructure management. Whether you're running workloads on AWS, Azure, or a hybrid cloud environment, Xamops enables you to optimize resources, automate operations, and improve cloud efficiency through a single platform.",
        ]}
        wide
      />
      <CopySection
        dark
        heading="Optimize Cloud Resources Without Compromising Performance"
        paragraphs={[
          'Spot instances offer significant cost savings, but managing interruptions and workload availability can be complex. The Xamops Cloud Automation Platform automates the lifecycle of spot instances, ensuring applications continue to run smoothly while maximizing infrastructure utilization.',
          'With intelligent scheduling, automated failover, and continuous monitoring, businesses can take advantage of lower cloud pricing without affecting critical workloads.',
        ]}
        wide
      />
      <FeatureGrid
        title="Key features of the Xamops Spot Automation Platform"
        items={[
          ['Automated Spot Instance Management', 'Automatically launch, replace, and manage spot instances based on workload demand and pricing changes.'],
          ['Cloud Cost Optimization', 'Reduce unnecessary cloud spending with intelligent workload placement and automated resource scaling.'],
          ['AI-Powered Cloud Automation', 'Continuously evaluate cloud resources and adjust workloads based on business requirements.'],
          ['Cloud Infrastructure Automation', 'Automate provisioning, scaling, deployment, and resource allocation across your cloud environment.'],
          ['Cloud Monitoring Platform', 'Track infrastructure performance, workload health, and cloud resource utilization with real-time alerts.'],
          ['Enterprise Cloud Management', 'Manage multiple cloud environments from one platform while maintaining governance and visibility.'],
        ]}
      />
      <CopySection
        heading="Why Choose Xamops for Spot Automation?"
        paragraphs={['Modern cloud environments require more than basic automation. With Xamops, your organization can:']}
        checklist={[
          'Automate spot instance deployment', 'Improve infrastructure utilization', 'Reduce cloud operational costs',
          'Increase workload availability', 'Automate cloud operations', 'Optimize cloud infrastructure performance',
          'Improve resource allocation', 'Enhance operational visibility', 'Simplify cloud governance', 'Support enterprise-scale infrastructure',
        ]}
        wide
      />
      <CopySection
        dark
        heading="Business Benefits of Spot Automation"
        checklist={[
          'Lower cloud costs by maximizing spot instance usage', 'Improve cloud efficiency through intelligent automation',
          'Enhance infrastructure reliability by replacing interrupted spot instances', 'Increase operational productivity',
          'Simplify cloud management from a centralized dashboard',
        ]}
        wide
      />
      <FAQList faqs={FAQS} />
      <CTABanner heading="See spot savings on your account in 30 minutes." />
    </>
  );
}
