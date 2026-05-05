import SolutionPage from '../../components/shared/SolutionPage';

export default function SRESolutionPage() {
  return <SolutionPage
    eyebrow="Solutions · For SRE Teams"
    title={[{ text: 'Always firefighting.' }, { text: 'Every incident takes hours.', accent: true }]}
    body="Agentic investigation, anomaly feeds, and log intelligence — so RCAs are minutes, not afternoons."
    before={[
      'Alert storms; correlation by hand.',
      'Log queries copy-pasted between dashboards.',
      'Postmortems take days.',
      'Same incident type keeps recurring.',
    ]}
    after={[
      'Auto-detected incidents group anomalies.',
      'AI-narrated log summaries.',
      'Postmortems drafted with timeline.',
      'Recurring patterns flagged.',
    ]}
    relevant={[
      ['SRE Investigation',    'Metrics, logs, traces in one timeline.'],
      ['SecOps',               'Auto-remediation removes a class of pages.'],
      ['Agentic SRE — soon',   'Autonomous resolution.'],
    ]} />;
}
