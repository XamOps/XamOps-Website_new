import ProductPage from '../../components/shared/ProductPage';
import SecOpsVisual from '../../components/visuals/SecOpsVisual';

export default function SecOpsPage() {
  return <ProductPage
    eyebrow="Platform · SecOps"
    title={[{ text: 'Security automation' }, { text: 'that ships with', accent: true }, { text: 'your code.' }]}
    body="Continuous CIS posture checks, drift detection and automated remediation alongside CI/CD."
    Visual={SecOpsVisual}
    features={[
      ['CIS benchmarks',    'AWS, GCP, Azure baseline coverage. Continuous evaluation.'],
      ['Auto-remediation',  'Scoped playbooks fix common violations with audit trail.'],
      ['IAM hygiene',       'Stale keys, over-permissive roles, unused credentials.'],
      ['Network exposure',  'Open security groups, public buckets, orphan endpoints.'],
      ['Policy as code',    'Version-controlled with PR-based review.'],
      ['Compliance reports','SOC 2, ISO, HIPAA evidence collected automatically.'],
    ]}
    clouds={['aws.guardduty · config', 'gcp.scc', 'azure.defender', 'cis · soc2 · iso27001']}
    cta="Drift catches you. Or XamOps does first." />;
}
