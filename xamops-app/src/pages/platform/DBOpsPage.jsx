import PageHero from '../../components/shared/PageHero';
import CopySection from '../../components/shared/CopySection';
import FeatureGrid from '../../components/shared/FeatureGrid';
import FAQList from '../../components/shared/FAQList';
import CTABanner from '../../components/shared/CTABanner';
import DBVisual from '../../components/visuals/DBVisual';

const FAQS = [
  { q: 'What is DBOps?', a: 'DBOps applies operations automation to managed databases: keeping an inventory of every database instance, surfacing cost savings opportunities, collecting query statistics, and capturing health snapshots so routine database work does not depend on a specialist being on call.' },
  { q: 'Which databases does Xamops DBOps support?', a: 'DBOps covers managed database services across AWS, GCP, and Azure, including Amazon RDS, Google Cloud SQL, and Azure database services. The Kubernetes in-cluster agent additionally gathers Postgres, MongoDB, and Redis diagnostics.' },
  { q: 'How does DBOps reduce database costs?', a: 'DBOps identifies oversized and idle database instances, highlights savings opportunities against observed utilization, and reports them alongside the rest of your cloud spend so database waste is visible next to compute and storage waste.' },
  { q: 'Can DBOps help diagnose slow queries?', a: 'Yes. DBOps collects query statistics and health snapshots, and the Kubernetes agent adds Postgres query stats, index usage, vacuum activity, and wait events so you can see which queries are causing latency.' },
];

export default function DBOpsPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · DBOps"
        title={[{ text: 'DBOps Platform for' }, { text: 'Automated Database Operations', accent: true }]}
        body="Automate managed database operations with Xamops DBOps. Track database inventory, surface savings opportunities, review query statistics, and monitor health snapshots across AWS RDS, Cloud SQL, and Azure databases."
      />
      <section className="sec-light pb-10">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10"><DBVisual /></div>
      </section>
      <CopySection
        paragraphs={[
          'Database maintenance is toil that quietly eats an engineer\'s week: checking which instances are still in use, chasing down oversized volumes, and digging through slow-query logs after something has already paged someone. The DBOps Platform keeps a live inventory of every managed database, flags savings opportunities against real utilization, and surfaces query statistics and health snapshots so that work happens continuously instead of during an incident.',
        ]}
        wide
      />
      <CopySection
        dark
        heading="One Inventory Across RDS, Cloud SQL, and Azure Databases"
        paragraphs={[
          'DBOps brings managed database services across AWS, GCP, and Azure into a single inventory: Amazon RDS, Google Cloud SQL, and Azure database services, with instance-level savings opportunities reported alongside the rest of your cloud spend.',
          'The in-cluster Kubernetes agent extends DBOps further, collecting Postgres query stats, index usage, vacuum activity, and wait events, plus MongoDB and Redis health, without any manual instrumentation.',
        ]}
        wide
      />
      <FeatureGrid
        title="Key features of the Xamops DBOps Platform"
        items={[
          ['Managed Database Inventory', 'A live, searchable inventory of every RDS, Cloud SQL, and Azure database instance across accounts.'],
          ['Database Savings Opportunities', 'Oversized and idle instances flagged against observed utilization, reported next to compute and storage waste.'],
          ['Query Statistics', 'Query-level statistics collected continuously so slow queries surface before they page anyone.'],
          ['Health Snapshots', 'Point-in-time health snapshots for every tracked database instance.'],
          ['Kubernetes Database Diagnostics', 'Postgres query stats, index usage, vacuum activity, and wait events, plus MongoDB and Redis health, via the in-cluster agent.'],
          ['Multi-Cloud DB Support', 'One DBOps view spanning AWS, GCP, and Azure managed database services.'],
        ]}
      />
      <CopySection
        heading="Why Choose Xamops DBOps?"
        paragraphs={['DBOps is one capability inside the Xamops cloud automation platform, so database inventory, savings, and health data sit next to the rest of your FinOps, DevOps, and SRE view instead of living in a separate tool. Organizations benefit from:']}
        checklist={[
          'Continuous managed database inventory', 'Automated savings-opportunity detection', 'Query statistics without manual instrumentation',
          'Point-in-time health snapshots', 'Kubernetes-native database diagnostics', 'Multi-cloud database visibility',
          'Reduced DBA on-call toil', 'Database waste reported alongside compute and storage', 'Postgres, MongoDB, and Redis coverage', 'One platform for FinOps, DevOps, and SRE teams',
        ]}
        wide
      />
      <CopySection
        dark
        heading="Benefits of Implementing DBOps"
        checklist={[
          'Cut database-related cloud spend', 'Eliminate manual inventory tracking', 'Catch slow queries earlier',
          'Reduce weekend database maintenance', 'Improve database health visibility', 'Support multi-cloud database estates',
          'Free up DBA time for higher-value work', 'Standardize database operations across teams',
        ]}
        wide
      />
      <FAQList faqs={FAQS} />
      <CTABanner heading="Stop paging your DBA at 3am." />
    </>
  );
}
