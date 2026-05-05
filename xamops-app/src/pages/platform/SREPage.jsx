import ProductPage from '../../components/shared/ProductPage';
import SREVisual from '../../components/visuals/SREVisual';

export default function SREPage() {
  return <ProductPage
    eyebrow="Platform · SRE Investigation"
    title={[{ text: 'From alert to' }, { text: 'root cause.', accent: true }, { text: 'Faster.' }]}
    body="AI-assisted log triage, anomaly detection, and an investigation timeline that stitches metrics, logs and traces."
    Visual={SREVisual}
    features={[
      ['Anomaly detection',      'Per-service baselines that learn seasonality.'],
      ['Log triage',             'AI-narrated summaries ranked by likelihood.'],
      ['Incident timeline',      'Metrics, logs, traces, deploys stitched into one view.'],
      ['XamOps Agents',          'Native explorer, retention, saved searches.'],
      ['Auto-detected incidents','Group related anomalies automatically.'],
      ['Postmortem drafts',      'Pre-filled timelines and action items.'],
    ]}
    cta="Faster RCAs. Quieter pagers." />;
}
