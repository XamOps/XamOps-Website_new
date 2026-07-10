import PageHero from '../../components/shared/PageHero';
import CopySection from '../../components/shared/CopySection';
import FeatureGrid from '../../components/shared/FeatureGrid';
import FAQList from '../../components/shared/FAQList';
import CTABanner from '../../components/shared/CTABanner';
import CostVisual from '../../components/visuals/CostVisual';

const IDEAL_FOR = [
  'DevOps Teams', 'Cloud Engineers', 'FinOps Teams', 'Finance Departments', 'IT Operations Teams',
  'Engineering Managers', 'CTOs and CIOs', 'Enterprises managing AWS, Azure, Google Cloud, or hybrid cloud environments',
];

const FAQS = [
  { q: 'What is a Cost Analytics Platform?', a: 'A Cost Analytics Platform helps businesses monitor, analyze, and optimize cloud spending by providing complete visibility into resource usage, cost allocation, budgeting, and cloud financial performance.' },
  { q: 'How does Xamops Cost Analytics help reduce cloud costs?', a: 'Xamops continuously analyzes cloud usage and spending patterns to identify idle resources, underutilized infrastructure, and unexpected cost increases.' },
  { q: 'Can Xamops monitor AWS, Azure, and Google Cloud costs together?', a: 'Yes. Xamops supports multi-cloud environments by bringing together cost data from AWS, Microsoft Azure, and Google Cloud into a single dashboard.' },
  { q: 'How does Xamops improve cloud cost visibility?', a: 'Xamops provides detailed insights into cloud spending by service, application, department, project, workload, and cloud resource.' },
  { q: 'What is cloud cost allocation?', a: 'Cloud cost allocation is the process of assigning cloud expenses to specific teams, departments, applications, or projects. Xamops simplifies this using customizable tags and reporting.' },
  { q: 'Is Xamops suitable for FinOps teams?', a: 'Absolutely. Xamops helps finance, engineering, and operations teams collaborate using real-time cloud cost analytics, budgeting, reporting, and forecasting.' },
  { q: 'How can cloud cost analytics improve budgeting?', a: 'Cloud cost analytics provides historical spending trends, real-time usage insights, and future cost forecasts, helping organizations create more accurate budgets.' },
  { q: 'Why is cloud cost visibility important?', a: 'Without clear cost visibility, businesses may continue paying for unused resources, oversized infrastructure, or inefficient workloads.' },
  { q: 'Who should use Xamops Cost Analytics?', a: `Xamops Cost Analytics is designed for: ${IDEAL_FOR.join(', ')}.` },
  { q: 'How does Xamops help with cloud financial management?', a: 'Xamops combines cloud cost analytics, budget tracking, cost allocation, forecasting, reporting, and optimization into one platform.' },
  { q: 'Can Xamops identify unnecessary cloud spending?', a: 'Yes. Xamops helps identify idle resources, unused storage, oversized virtual machines, and other areas where cloud spending can be optimized.' },
  { q: 'Why should businesses choose Xamops Cost Analytics?', a: 'Xamops provides a single platform for cloud cost visibility, cost optimization, budget monitoring, multi-cloud reporting, and FinOps management.' },
];

export default function CostPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Cost Analytics"
        title={[{ text: 'Cost Analytics for Better' }, { text: 'Cloud Cost Visibility', accent: true }]}
        body="As businesses expand across AWS, Microsoft Azure, and Google Cloud, tracking cloud expenses becomes increasingly difficult. Xamops Cost Analytics gives you complete visibility into cloud spending."
      />
      <section className="sec-light pb-16">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10"><CostVisual /></div>
      </section>
      <CopySection
        paragraphs={[
          'Multiple teams, services, and workloads often lead to rising costs without a clear understanding of where the money is being spent. Instead of relying on complex billing reports, businesses can understand spending patterns, identify cost-saving opportunities, and make informed financial decisions.',
          "Whether you're managing a single cloud environment or a multi-cloud infrastructure, Xamops provides the insights needed to improve cloud cost management while supporting your FinOps strategy.",
        ]}
        wide
      />
      <CopySection
        dark
        heading="Understand Where Every Cloud Dollar Goes"
        paragraphs={['Cloud costs can increase quickly when resources are left running, workloads are oversized, or infrastructure grows without regular monitoring. With Xamops Cost Analytics, you can:']}
        checklist={[
          'Monitor cloud spending from one centralized dashboard', 'Track AWS, Azure, and Google Cloud costs',
          'Analyze cloud usage by service, application, project, or team', 'View historical spending trends',
          'Allocate costs across departments or business units', 'Monitor cloud budgets with greater accuracy',
          'Generate detailed cloud cost reports for business stakeholders',
        ]}
        wide
      />
      <FeatureGrid
        title="Key features of Xamops Cost Analytics"
        items={[
          ['Unified Multi-Cloud Dashboard', 'Monitor cloud costs across AWS, Microsoft Azure, and Google Cloud from one easy-to-use dashboard.'],
          ['Real-Time Cloud Cost Analytics', 'Track cloud spending as it happens and quickly identify unusual spending patterns.'],
          ['Intelligent Cost Allocation', 'Allocate cloud expenses to projects, applications, departments, or business units using customizable tags.'],
          ['Resource-Level Cost Analysis', 'Understand which virtual machines, storage services, or Kubernetes clusters contribute the most to your cloud bill.'],
          ['Budget Monitoring and Forecasting', 'Monitor current spending against planned budgets while forecasting future cloud expenses.'],
          ['Detailed Cost Reporting', 'Generate customized reports for finance teams, DevOps engineers, and business leaders.'],
        ]}
      />
      <CopySection
        heading="Why Businesses Choose Xamops Cost Analytics"
        paragraphs={['Every organization wants to maximize the value of its cloud investment. Xamops helps organizations:']}
        checklist={[
          'Improve cloud cost visibility', 'Reduce unnecessary cloud spending', 'Support FinOps initiatives',
          'Optimize cloud resource utilization', 'Improve budgeting accuracy', 'Monitor multi-cloud environments',
          'Simplify cloud financial reporting', 'Increase operational efficiency', 'Make informed cloud investment decisions',
        ]}
        wide
      />
      <FAQList faqs={FAQS} />
      <CTABanner heading="Retire the cost spreadsheet." />
    </>
  );
}
