import ProductPage from '../../components/shared/ProductPage';
import SpotVisual from '../../components/visuals/SpotVisual';

export default function SpotPage() {
  return <ProductPage
    eyebrow="Platform · Spot Automation"
    title={[{ text: 'Cut your compute bill' }, { text: 'by up to 70%.', accent: true }, { text: 'Automatically.' }]}
    body="AutoSpotting safely replaces on-demand instances with spot capacity across AWS Auto Scaling Groups, GCP Managed Instance Groups and Azure VMSS."
    Visual={SpotVisual} dark
    steps={[
      ['Validate', 'Inspect ASG/MIG/VMSS configuration, capacity strategy and workload tolerances.'],
      ['Convert',  'Stage replacements one instance at a time, watching health checks and signals.'],
      ['Scale',    'Maintain a minimum of regular VMs and a target spot ratio per group.'],
      ['Verify',   'Drain, terminate, and verify before continuing the loop.'],
    ]}
    clouds={['aws.autoscaling', 'gcp.mig.preemptible', 'azure.vmss', 'spot fleet · mixed instance']}
    features={[
      ['Per-instance SKU rules', 'Define which instance types are eligible per ASG, with preferred fallbacks.'],
      ['Spot ratio targets',     'Hold a configurable spot percentage per group.'],
      ['Min regular VMs',        'Always keep N on-demand instances for stability-critical capacity.'],
      ['Eviction handling',      'Pre-emption signals trigger graceful drain and replacement.'],
      ['Multi-cloud capacity',   'AWS, GCP and Azure spot pools blended in one policy.'],
      ['Audit trail',            'Every conversion logged with reason, savings and replacement target.'],
    ]}
    cta="See spot savings on your account in 30 minutes." />;
}
