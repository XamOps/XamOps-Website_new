import SolutionPage from '../../components/shared/SolutionPage';

export default function FinOpsPage() {
  return <SolutionPage
    eyebrow="Solutions · For FinOps Teams"
    title={[{ text: 'Cloud bills grow.' }, { text: 'Visibility is a spreadsheet.', accent: true }]}
    body="Real-time cost dashboards, automated rightsizing, and reservation coverage that doesn't leak."
    before={[
      'Monthly bill arrives with surprises.',
      'CUDs and RIs underused; commitments leak.',
      'No per-team showback.',
      'Forecasts are best-effort guesses.',
    ]}
    after={[
      'Live spend dashboards per team and service.',
      'Optimal RI/CUD/SP plan with break-even.',
      'Showback automated; chargeback finance accepts.',
      'Forecasts within ±2% at 30 days.',
    ]}
    relevant={[
      ['Cost Analytics',   'Live dashboards, anomalies, forecasts.'],
      ['Disk Rightsizing', '38% average storage spend reduction.'],
      ['Spot Automation',  'Up to 70% off compute, automated.'],
    ]} />;
}
