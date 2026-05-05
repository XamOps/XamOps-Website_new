import ProductPage from '../../components/shared/ProductPage';
import CostVisual from '../../components/visuals/CostVisual';

export default function CostPage() {
  return <ProductPage
    eyebrow="Platform · Cost Analytics"
    title={[{ text: 'See exactly' }, { text: 'what you spend.' }, { text: 'Cut the rest.', accent: true }]}
    body="Real-time savings dashboards, daily aggregations, RI/CUD/Savings Plan coverage and forecasting."
    Visual={CostVisual} dark
    features={[
      ['Live dashboards',       'No 24-hour CUR delay.'],
      ['Daily aggregations',    'Roll-ups by team, environment, service, tag, account.'],
      ['Commitment coverage',   'Optimal RI / CUD / SP plan with break-even analysis.'],
      ['Forecasts',             'Per-team forecasts within ±2% accuracy at 30 days.'],
      ['Anomaly alerts',        'Spend spike detection with workload attribution.'],
      ['Showback / chargeback', 'Reports finance will accept.'],
    ]}
    cta="Retire the cost spreadsheet." />;
}
