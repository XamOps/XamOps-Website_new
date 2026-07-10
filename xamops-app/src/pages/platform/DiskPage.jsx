import PageHero from '../../components/shared/PageHero';
import CopySection from '../../components/shared/CopySection';
import FeatureGrid from '../../components/shared/FeatureGrid';
import FAQList from '../../components/shared/FAQList';
import CTABanner from '../../components/shared/CTABanner';
import DiskVisual from '../../components/visuals/DiskVisual';

const SUPPORTED_CLOUDS = ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)'];
const IDEAL_FOR = [
  'Cloud Engineers', 'DevOps Teams', 'FinOps Teams', 'Cloud Architects', 'IT Operations Teams',
  'Infrastructure Operators', 'Enterprise IT Teams', 'Organizations with AWS, Azure, Google Cloud, or hybrid cloud environments',
];
const OUTCOME_LIST = [
  'Reduce cloud storage costs', 'Improve storage utilization', 'Optimize cloud infrastructure', 'Eliminate oversized disks',
  'Increase operational efficiency', 'Strengthen FinOps initiatives', 'Improve cloud cost visibility',
  'Support long-term cloud optimization strategies',
];

const FAQS = [
  { q: 'What is Disk Rightsizing?', a: 'Disk Rightsizing is the process of reviewing cloud storage usage and suggesting the correct disk size according to real utilization. It cuts avoidable storage costs without sacrificing application performance.' },
  { q: 'How does Xamops Disk Rightsizing reduce cloud costs?', a: 'Xamops constantly monitors cloud storage usage and identifies oversized or underutilized disks, recommending the optimum storage configuration based on usage patterns.' },
  { q: 'Why is Disk Rightsizing important?', a: 'Overprovisioned storage increases cloud costs without providing additional value. Disk Rightsizing tunes cloud disks to workload requirements, boosting storage efficiency and minimizing waste.' },
  { q: 'Which cloud platforms does Xamops support?', a: `Xamops supports Disk Rightsizing across major cloud providers, including ${SUPPORTED_CLOUDS.join(', ')}, enabling organizations to manage storage optimization across multi-cloud environments from one platform.` },
  { q: 'Does Disk Rightsizing affect application performance?', a: 'No. Xamops recommendations are based on real storage utilization and performance metrics, enabling organizations to optimize storage while maintaining application reliability and performance.' },
  { q: 'How often should cloud storage be rightsized?', a: 'The cloud environment is ever-changing, with applications and workloads in flux. Continuous monitoring and regular rightsizing keeps storage resources optimized and aligned with business requirements.' },
  { q: 'Can Xamops identify unused cloud storage?', a: 'Yes. Xamops detects underutilized and oversized storage volumes, allowing organizations to reclaim unused capacity and reduce unnecessary cloud storage costs.' },
  { q: 'Who should use Xamops Disk Rightsizing?', a: `Xamops Disk Rightsizing is ideal for: ${IDEAL_FOR.join(', ')}.` },
  { q: 'How does Disk Rightsizing support FinOps?', a: 'Disk Rightsizing improves cloud financial management by reducing storage waste, increasing cost visibility, optimizing resource allocation, and helping finance and engineering teams make informed cloud investment decisions.' },
  { q: 'What are the benefits of using Xamops Disk Rightsizing?', a: `Organizations using Xamops Disk Rightsizing can: ${OUTCOME_LIST.join(', ')}.` },
];

export default function DiskPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Disk Rightsizing"
        title={[{ text: 'Disk Rightsizing for' }, { text: 'Smarter Storage', accent: true }]}
        body="Over-provisioned disks and underutilized storage volumes quietly increase cloud costs over time. Xamops Disk Rightsizing analyzes usage and recommends the right storage configuration."
      />
      <section className="sec-light pb-16">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10"><DiskVisual /></div>
      </section>
      <CopySection
        paragraphs={[
          "Many organizations continue to pay for storage they don't fully use because identifying oversized disks across multiple cloud environments is time-consuming and complex. Xamops tracks real-time storage performance and capacity, enabling businesses to optimize cloud storage without sacrificing application reliability or performance.",
          'Xamops helps you optimize storage utilization and cut down on unnecessary cloud costs whether you are running on AWS, Microsoft Azure, Google Cloud, or a hybrid cloud environment.',
        ]}
        wide
      />
      <CopySection
        dark
        heading="Optimize Cloud Storage Without Affecting Performance"
        paragraphs={[
          'Storage requirements change as applications grow, workloads evolve, and business demands shift. Storage volumes are often left unchanged long after their original requirements, resulting in higher cloud bills and inefficient resource utilization.',
          'Xamops Disk Rightsizing continuously evaluates your cloud storage usage to ensure every disk is appropriately sized for its workload. With Xamops, you can:',
        ]}
        checklist={[
          'Identify oversized cloud disks', 'Detect underutilized storage volumes', 'Monitor storage utilization in real time',
          'Reduce unnecessary cloud storage costs', 'Improve storage performance visibility', 'Optimize cloud infrastructure efficiently',
          'Support long-term cloud cost optimization',
        ]}
        wide
      />
      <FeatureGrid
        title="Key features of Xamops Disk Rightsizing"
        items={[
          ['Intelligent Disk Utilization Analysis', 'Analyze storage capacity, disk usage, and performance metrics to identify optimization opportunities.'],
          ['Automated Rightsizing Recommendations', 'Data-driven recommendations for resizing cloud disks based on actual workload requirements.'],
          ['Multi-Cloud Storage Visibility', 'Monitor storage utilization across AWS, Microsoft Azure, and Google Cloud through a single dashboard.'],
          ['Continuous Storage Monitoring', 'Track storage performance, capacity, and utilization trends continuously.'],
          ['Cloud Cost Optimization', 'Reduce cloud storage expenses by identifying oversized volumes and unused disks without affecting application availability.'],
          ['Detailed Reporting and Insights', 'Generate comprehensive storage reports for cloud engineers, DevOps teams, and FinOps teams.'],
        ]}
      />
      <CopySection
        heading="Benefits of Xamops Disk Rightsizing"
        paragraphs={['Optimizing cloud storage is about more than reducing costs — it helps improve infrastructure efficiency and supports better cloud resource management. With Xamops Disk Rightsizing, organizations can:']}
        checklist={[
          'Reduce unnecessary cloud storage costs', 'Improve cloud resource utilization', 'Increase storage efficiency',
          'Eliminate oversized cloud disks', 'Support FinOps and cloud governance initiatives', 'Improve infrastructure planning',
          'Enhance cloud cost visibility', 'Simplify cloud storage management', 'Optimize cloud performance', 'Scale storage resources with confidence',
        ]}
        wide
      />
      <FAQList faqs={FAQS} />
      <CTABanner heading="Disk costs you can finally cut." />
    </>
  );
}
