import PageHero from '../../components/shared/PageHero';
import CopySection from '../../components/shared/CopySection';
import FeatureGrid from '../../components/shared/FeatureGrid';
import FAQList from '../../components/shared/FAQList';
import CTABanner from '../../components/shared/CTABanner';

const FAQS = [
  { q: 'What is a FinOps Platform?', a: 'A FinOps Platform helps organizations monitor, manage, and optimize cloud spending by bringing engineering, finance, and operations teams together for better financial accountability.' },
  { q: 'How does Xamops help reduce cloud costs?', a: 'Xamops identifies underutilized resources, monitors cloud usage, automates optimization, and provides recommendations to reduce unnecessary cloud expenses.' },
  { q: 'Can Xamops support multi-cloud environments?', a: 'Yes. Xamops is designed to manage cloud infrastructure across multiple cloud providers through centralized monitoring, automation, and cost management.' },
  { q: 'Does Xamops automate cloud operations?', a: 'Yes. Xamops automates infrastructure management, workload optimization, cloud monitoring, and operational workflows to improve efficiency.' },
  { q: 'Which teams benefit from Xamops FinOps?', a: 'Engineering, DevOps, FinOps, IT Operations, Finance, Cloud Operations, and Infrastructure teams all benefit from improved visibility and automation.' },
  { q: 'How does Xamops improve cloud efficiency?', a: 'By optimizing resource utilization, automating operational tasks, and providing actionable insights, Xamops helps organizations improve cloud performance while controlling costs.' },
  { q: 'Is Xamops suitable for enterprise businesses?', a: 'Yes. Xamops supports startups, mid-sized businesses, and enterprises with scalable cloud cost management, enterprise cloud automation, and governance capabilities.' },
  { q: 'Why choose Xamops for cloud cost optimization?', a: 'Xamops combines Cloud Cost Optimization, Cloud Management, Enterprise Cloud Automation, Cloud Monitoring, Infrastructure Automation, and FinOps Automation into a single platform that helps organizations maximize the value of their cloud investments while maintaining operational efficiency.' },
];

export default function FinOpsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions · FinOps"
        title={[{ text: 'FinOps for Smarter' }, { text: 'Cloud Cost Management', accent: true }]}
        body="Cloud adoption has transformed the way businesses build and scale applications, but it has also made managing cloud expenses more challenging. Xamops FinOps helps businesses take control of cloud spending by combining financial accountability with intelligent cloud operations."
      />
      <CopySection
        paragraphs={[
          "Xamops FinOps helps businesses take control of cloud spending by combining financial accountability with intelligent cloud operations. Our platform enables engineering, finance, and operations teams to work together, helping organizations improve cloud efficiency, optimize infrastructure, and make informed decisions based on real-time cost insights. FinOps practices focus on bringing engineering, finance, and business teams together to maximize the value of cloud investments through visibility, accountability, and continuous optimization.",
          "Whether you're a growing startup or a large enterprise in Delhi, Noida, Jaipur, Gurugram, Bengaluru, Hyderabad, Mumbai, or Pune, or serving customers worldwide, Xamops provides a reliable FinOps Platform that helps you manage cloud costs without affecting performance.",
        ]}
        wide
      />
      <CopySection
        dark
        heading="Gain Complete Visibility into Your Cloud Spending"
        paragraphs={[
          'Understanding where your cloud budget is being spent is the first step toward reducing unnecessary costs. The Xamops Cloud Cost Management Platform provides a centralized view of your cloud resources, allowing teams to identify idle infrastructure, optimize workloads, and improve budget planning.',
          'Instead of relying on multiple dashboards and manual reporting, Xamops brings cloud usage, infrastructure performance, and cost insights together in one place. This helps businesses make faster decisions while maintaining operational efficiency.',
        ]}
        wide
      />
      <CopySection
        heading="Why Choose Xamops FinOps?"
        paragraphs={["The Xamops FinOps Automation Platform goes beyond cost reporting. It helps organizations continuously improve cloud operations by combining automation, monitoring, and infrastructure optimization. With Xamops, you can:"]}
        checklist={[
          'Improve cloud cost visibility',
          'Reduce unnecessary cloud spending',
          'Automate cloud resource optimization',
          'Increase infrastructure efficiency',
          'Monitor cloud usage in real time',
          'Improve financial accountability across teams',
          'Simplify cloud governance',
          'Support multi-cloud environments',
          'Enhance operational performance',
          'Make data-driven cloud investment decisions',
        ]}
        wide
      />
      <FeatureGrid
        title="Key features of the Xamops FinOps Platform"
        items={[
          ['Cloud Cost Optimization', 'Identify unused resources, oversized workloads, and unnecessary cloud expenses with actionable recommendations that help reduce monthly cloud bills.'],
          ['Cloud Cost Management', 'Track cloud spending across departments, projects, and business units with centralized reporting and budget visibility.'],
          ['Cloud Automation Platform', 'Automate routine cloud operations, resource scheduling, infrastructure provisioning, and workload optimization to reduce manual effort.'],
          ['AI-Powered Cloud Optimization', 'Receive intelligent recommendations that help improve resource utilization, optimize infrastructure performance, and increase operational efficiency.'],
          ['Cloud Infrastructure Management', 'Manage cloud resources from a unified dashboard while maintaining governance, compliance, and operational consistency.'],
          ['Cloud Monitoring Platform', 'Monitor infrastructure performance, application health, and cloud resource utilization with real-time visibility and proactive alerts.'],
        ]}
        dark
      />
      <CopySection
        heading="Built for Modern Cloud Teams"
        paragraphs={['The Xamops platform supports collaboration across technical and business teams.']}
        bullets={[
          'Engineering Teams — optimize infrastructure and automate repetitive tasks',
          'DevOps Teams — accelerate deployments with continuous operational visibility',
          'FinOps Teams — control budgets, forecasting, and cost optimization',
          'IT Operations — improve reliability while reducing complexity',
          'Business Leaders — make confident investment decisions',
        ]}
        wide
      />
      <CopySection
        dark
        heading="Industries We Serve"
        paragraphs={['The Xamops Cloud Optimization Platform supports organizations across multiple industries, from technology startups in Jaipur to enterprise businesses in Delhi, Noida, Bengaluru, Mumbai, Hyderabad, and Pune.']}
        bullets={[
          'Information Technology', 'SaaS Companies', 'Banking & Financial Services', 'Healthcare',
          'Retail & E-commerce', 'Manufacturing', 'Telecommunications', 'Education', 'Logistics', 'Government Organizations',
        ]}
        wide
      />
      <CopySection
        heading="Why Businesses Choose Xamops"
        paragraphs={[
          'Managing cloud costs is not just about reducing expenses—it\'s about making every cloud investment deliver greater value. Xamops combines the capabilities of a Cloud Automation Platform, Cloud Management Platform, Cloud Infrastructure Management Platform, Cloud Monitoring Platform, DevOps Automation Platform, and FinOps Platform into one integrated solution.',
          'With intelligent automation, detailed cost visibility, and continuous optimization, Xamops enables organizations to improve operational efficiency, strengthen financial accountability, and build scalable cloud environments that support future growth.',
        ]}
        wide
      />
      <FAQList faqs={FAQS} />
      <CTABanner />
    </>
  );
}
