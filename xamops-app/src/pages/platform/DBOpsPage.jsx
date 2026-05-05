import ProductPage from '../../components/shared/ProductPage';
import DBVisual from '../../components/visuals/DBVisual';

export default function DBOpsPage() {
  return <ProductPage
    eyebrow="Platform · DBOps"
    title={[{ text: 'Database operations' }, { text: 'on autopilot.', accent: true }]}
    body="Automated scaling, backup verification, performance optimization, and minor-version patching for RDS, Cloud SQL, Cosmos DB and beyond."
    Visual={DBVisual} dark
    features={[
      ['Auto-scaling',        'Reactive and predictive scaling for read replicas and storage.'],
      ['Backup verification', 'Restore-test backups on a schedule.'],
      ['Performance tuning',  'Index suggestions, slow-query analysis, connection-pool tuning.'],
      ['Patch windows',       'Minor-version patches applied during low-traffic windows.'],
      ['Failover drills',     'Game-day exercises run automatically.'],
      ['Multi-cloud',         'RDS, Aurora, Cloud SQL, Cosmos, Memorystore, ElastiCache.'],
    ]}
    clouds={['aws.rds · aurora', 'gcp.cloudsql', 'azure.cosmos', 'self-managed · postgres · mysql']}
    cta="Stop paging your DBA at 3am." />;
}
