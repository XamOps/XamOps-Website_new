import PageHero from '../../components/shared/PageHero';
import CopySection from '../../components/shared/CopySection';
import FeatureGrid from '../../components/shared/FeatureGrid';
import FAQList from '../../components/shared/FAQList';
import CTABanner from '../../components/shared/CTABanner';

const IDEAL_FOR = [
  'DevOps Engineers', 'Cloud Engineers', 'IT Operations Teams', 'Software Development Teams',
  'Platform Engineers', 'Cloud Architects', 'Enterprise IT Teams', 'Organizations adopting cloud-native technologies',
];

const FAQS = [
  { q: 'What are DevOps solutions?', a: 'DevOps solutions are tools and practices that help development and operations teams work together to automate software delivery, infrastructure management, testing, monitoring, and deployment. They improve collaboration, reduce manual work, and accelerate application releases.' },
  { q: 'How do Xamops DevOps Solutions improve software delivery?', a: 'Xamops automates CI/CD pipelines, deployment workflows, infrastructure provisioning, and cloud monitoring. This helps organizations release applications faster, reduce deployment errors, and improve overall operational efficiency.' },
  { q: 'Does Xamops support multi-cloud environments?', a: 'Yes. Xamops DevOps Solutions support AWS, Microsoft Azure, Google Cloud, and hybrid cloud environments, enabling organizations to manage deployments and cloud operations from a centralized platform.' },
  { q: 'Why is CI/CD important for DevOps?', a: 'CI/CD automates code integration, testing, and deployments, allowing development teams to deliver updates more frequently while reducing manual effort and deployment risks.' },
  { q: 'How does DevOps help businesses?', a: 'DevOps improves collaboration between development and operations teams, accelerates software delivery, reduces downtime, improves application quality, and helps organizations respond more quickly to changing business needs.' },
  { q: 'Who should use Xamops DevOps Solutions?', a: `Xamops is ideal for: ${IDEAL_FOR.join(', ')}.` },
];

export default function DevOpsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions · DevOps"
        title={[{ text: 'DevOps Solutions to' }, { text: 'Accelerate Software Delivery', accent: true }]}
        body="Modern businesses need to deliver applications faster without compromising quality, security, or reliability. Xamops DevOps Solutions bring development and operations together through automation, CI/CD, infrastructure management, and cloud monitoring."
      />
      <CopySection
        paragraphs={[
          'Managing development, infrastructure, deployments, and operations across multiple cloud environments can become complex as applications scale. Manual processes, inconsistent deployments, and limited collaboration often slow innovation and increase operational costs.',
          "Whether you're running applications on AWS, Microsoft Azure, Google Cloud, or a hybrid infrastructure, Xamops provides the tools and visibility needed to streamline DevOps workflows and support continuous delivery.",
        ]}
        wide
      />
      <CopySection
        dark
        heading="Build Faster, Deploy Smarter"
        paragraphs={[
          'Successful DevOps is more than automating deployments. It creates a culture of collaboration where development, operations, and security teams work together to deliver high-quality applications efficiently.',
          'Xamops helps organizations eliminate repetitive manual tasks by automating deployment pipelines, infrastructure provisioning, monitoring, and operational workflows. This allows teams to spend more time developing new features and less time managing infrastructure. With Xamops DevOps Solutions, your teams can:',
        ]}
        checklist={[
          'Automate application deployment workflows', 'Improve CI/CD pipeline efficiency', 'Monitor infrastructure and application health',
          'Reduce deployment failures', 'Increase release frequency', 'Improve collaboration between development and operations teams',
          'Scale cloud environments with confidence',
        ]}
        wide
      />
      <FeatureGrid
        title="Key features of Xamops DevOps Solutions"
        items={[
          ['CI/CD Pipeline Automation', 'Automate code integration, testing, and deployments to reduce manual effort and speed up software releases.'],
          ['Infrastructure Automation', 'Provision and manage cloud infrastructure using automation instead of manual configuration.'],
          ['Cloud Monitoring and Performance Insights', 'Monitor applications, servers, containers, and cloud resources in real time.'],
          ['Deployment Management', 'Simplify application deployments across development, testing, and production environments.'],
          ['Cloud Resource Optimization', 'Track infrastructure usage and optimize cloud resources to improve performance while reducing unnecessary cloud costs.'],
          ['Centralized Visibility', 'Gain a unified view of your DevOps environment through dashboards for deployment status, infrastructure health, and performance metrics.'],
        ]}
      />
      <CopySection
        heading="Why Choose Xamops DevOps Solutions?"
        paragraphs={['As cloud environments become more dynamic, organizations need a DevOps platform that simplifies operations while supporting business growth. By adopting Xamops DevOps Solutions, organizations can:']}
        checklist={[
          'Accelerate software delivery', 'Improve application reliability', 'Automate repetitive operational tasks',
          'Enhance collaboration across teams', 'Reduce deployment risks', 'Improve infrastructure visibility',
          'Optimize cloud resource utilization', 'Support modern DevOps and Agile practices',
        ]}
        wide
      />
      <CopySection
        dark
        heading="Designed for Modern Cloud-Native Teams"
        paragraphs={[
          "Today's applications are built using containers, microservices, Kubernetes, and cloud-native technologies. Managing these environments requires automation, continuous monitoring, and rapid response to changing business demands.",
          "Whether you're managing enterprise applications, SaaS platforms, or digital transformation initiatives, Xamops helps your teams deliver software faster and operate cloud infrastructure more efficiently.",
        ]}
        wide
      />
      <FAQList faqs={FAQS} />
      <CTABanner />
    </>
  );
}
