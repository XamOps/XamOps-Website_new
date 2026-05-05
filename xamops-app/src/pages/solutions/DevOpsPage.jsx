import SolutionPage from '../../components/shared/SolutionPage';

export default function DevOpsPage() {
  return <SolutionPage
    eyebrow="Solutions · For DevOps Engineers"
    title={[{ text: 'You manage 3 clouds.' }, { text: 'Toil never ends.', accent: true }]}
    body="XamOps automates the operations layer so platform engineers ship platforms — not babysit instances, disks and patch windows."
    before={[
      'Manual ASG/MIG capacity tuning across regions.',
      'Disk usage tickets queued every Monday.',
      'Out-of-band DB patching on Friday nights.',
      'Drift detection runs… some of the time.',
    ]}
    after={[
      'Spot conversions and capacity rules run themselves.',
      'Disk rightsizing scheduled with snapshot-rollback.',
      'DB minor patches applied automatically.',
      'Drift caught and remediated before a PR closes.',
    ]}
    relevant={[
      ['Spot Automation',  'Cut compute up to 70% with safe staged conversions.'],
      ['Disk Rightsizing', 'Continuous resize with filesystem expansion.'],
      ['DBOps',            'Automate scaling, backups and patch windows.'],
    ]} />;
}
