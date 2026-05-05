import ProductPage from '../../components/shared/ProductPage';
import DiskVisual from '../../components/visuals/DiskVisual';

export default function DiskPage() {
  return <ProductPage
    eyebrow="Platform · Disk Rightsizing"
    title={[{ text: 'Stop paying for' }, { text: 'disk you don\'t use.', accent: true }]}
    body="No other platform automates this at scale. Continuous monitoring, recommendations, and safe automated resize across AWS EBS, GCP Persistent Disk and Azure Managed Disks."
    Visual={DiskVisual}
    steps={[
      ['Monitor',   'Continuous IOPS, throughput and free-space telemetry per volume.'],
      ['Recommend', 'Suggest right-sized capacity with confidence intervals and risk score.'],
      ['Schedule',  'Pick a maintenance window with snapshot-and-rollback safety net.'],
      ['Resize',    'Shrink/grow the volume and expand the filesystem in place.'],
    ]}
    clouds={['aws.ebs gp3 · io2', 'gcp.persistent-disk', 'azure.managed-disk', 'lvm · ext4 · xfs · ntfs']}
    features={[
      ['38% avg reduction',   'Real customer averages across 12,400+ volumes managed.'],
      ['Zero downtime',       'Snapshot, resize, expand filesystem — without taking workloads offline.'],
      ['Rollback ready',      'Every action has a defined rollback path.'],
      ['Filesystem aware',    'Handles ext4, xfs, ntfs and LVM volumes natively.'],
      ['Maintenance windows', 'Schedule resize during low-traffic hours per workload.'],
      ['Multi-cloud',         'EBS, Persistent Disk, Managed Disk — single policy.'],
    ]}
    cta="Disk costs you can finally cut." />;
}
