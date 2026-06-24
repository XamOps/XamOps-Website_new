import PageHero from '../components/shared/PageHero';
import CTABanner from '../components/shared/CTABanner';

const PRACTICES = [
  {
    title: 'Data Encryption',
    body: 'All data is encrypted in transit using TLS 1.2+ and at rest using AES-256. Encryption keys are managed through cloud-native KMS services with automatic rotation.',
    tag: 'Infrastructure',
  },
  {
    title: 'Least-Privilege Access',
    body: 'XamOps requests only the IAM permissions required to perform its functions. Read-only access for cost and monitoring features. Scoped write access for automation actions, with explicit opt-in per action type.',
    tag: 'Access Control',
  },
  {
    title: 'No Credential Storage',
    body: 'XamOps uses cross-account IAM roles and federated identity — we never store cloud provider credentials or long-lived access keys. Authentication flows through your existing identity provider.',
    tag: 'Credentials',
  },
  {
    title: 'Audit Logging',
    body: 'Every action taken by XamOps in your cloud environment is logged with timestamp, resource ID, action type, and outcome. Logs are available in your own account and exportable on demand.',
    tag: 'Compliance',
  },
  {
    title: 'Network Isolation',
    body: 'XamOps infrastructure runs in isolated VPCs with no inbound public access. All outbound communication to cloud provider APIs is logged and monitored for anomalies.',
    tag: 'Infrastructure',
  },
  {
    title: 'Vulnerability Management',
    body: 'Dependencies are scanned on every build. Critical CVEs are patched within 24 hours. Container images are rebuilt weekly against updated base images regardless of dependency changes.',
    tag: 'AppSec',
  },
];

const COMPLIANCE = [
  { name: 'SOC 2 Type II', status: 'In progress', note: 'Audit scheduled Q3 2026' },
  { name: 'ISO 27001', status: 'Planned', note: 'Roadmap H2 2026' },
  { name: 'GDPR', status: 'Compliant', note: 'Data processing agreements available' },
  { name: 'CCPA', status: 'Compliant', note: 'Privacy controls in place' },
];

const FAQS = [
  {
    q: 'What permissions does XamOps need in my cloud account?',
    a: 'XamOps uses cross-account IAM roles with least-privilege policies. The exact permissions depend on which features you enable. Read-only cost and monitoring features require only describe and list permissions. Automation features require scoped write permissions that you explicitly approve.',
  },
  {
    q: 'Does XamOps store my cloud credentials?',
    a: 'No. XamOps uses IAM role federation and never stores access keys or secrets. Authentication happens through your cloud provider\'s native trust mechanism.',
  },
  {
    q: 'Where is my data stored?',
    a: 'Cost and usage metadata is stored in AWS infrastructure in your chosen region. Customer data is never shared with third parties for advertising or analytics purposes.',
  },
  {
    q: 'Can I audit what XamOps does in my account?',
    a: 'Yes. Every action XamOps takes is logged in Actions History within the platform, and all API calls are visible in your cloud provider\'s native audit trail (CloudTrail, Azure Monitor, Cloud Audit Logs).',
  },
  {
    q: 'How do I report a security vulnerability?',
    a: 'Send details to security@xammer.in. We acknowledge all reports within 24 hours and aim to resolve critical issues within 48 hours.',
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security"
        title={[{ text: 'Security is not' }, { text: 'an afterthought.', accent: true }]}
        body="XamOps operates in your cloud environment. We take that responsibility seriously. Here is exactly how we handle your data, access, and infrastructure."
        cta={false}
      />

      {/* Trust summary */}
      <section className="sec-light pb-12 md:pb-20">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px ring-soft rounded-2xl overflow-hidden"
            style={{ background: 'var(--rule)' }}
          >
            {[
              ['TLS 1.2+', 'in-transit encryption'],
              ['AES-256', 'at-rest encryption'],
              ['Zero keys stored', 'IAM role federation only'],
              ['Full audit log', 'every action, every account'],
            ].map(([n, l]) => (
              <div key={l} className="p-5 md:p-7" style={{ background: 'var(--ivory)' }}>
                <div
                  className="big-num text-[clamp(16px,2.5vw,22px)] leading-tight"
                  style={{ color: 'var(--terracotta)' }}
                >
                  {n}
                </div>
                <div className="eyebrow mt-2" style={{ fontSize: '10px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security practices */}
      <section className="sec-dark py-12 md:py-20">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="sec-label dark mb-5">How we protect your environment</div>
          <h2 className="serif text-[clamp(26px,4vw,48px)] leading-[1.08] mb-10 max-w-[24ch]">
            Built-in security at{' '}
            <span style={{ color: 'var(--terracotta)' }}>every layer.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRACTICES.map(({ title, body, tag }) => (
              <div
                key={title}
                className="rounded-2xl p-6"
                style={{ background: 'var(--ivory)', border: '1px solid var(--rule-dark)' }}
              >
                <div
                  className="eyebrow mb-3"
                  style={{ fontSize: '10px', color: 'var(--terracotta)' }}
                >
                  {tag}
                </div>
                <div
                  className="serif text-[18px] mb-3"
                  style={{ color: 'var(--ink)' }}
                >
                  {title}
                </div>
                <p className="text-[13.5px] leading-[1.68]" style={{ color: 'var(--ink-2)' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="sec-light py-12 md:py-20">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="sec-label mb-6">Compliance</div>
          <h2 className="serif text-[clamp(26px,4vw,48px)] leading-[1.08] mb-8 max-w-[24ch]">
            Where we stand today.
          </h2>
          <div className="space-y-3 mb-14">
            {COMPLIANCE.map(({ name, status, note }) => (
              <div
                key={name}
                className="flex flex-wrap items-center justify-between gap-4 rounded-xl px-5 py-4"
                style={{ background: 'var(--ivory)', border: '1px solid var(--rule-dark)' }}
              >
                <div
                  className="text-[15px]"
                  style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}
                >
                  {name}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[12px]" style={{ color: 'var(--olive)' }}>{note}</span>
                  <span
                    className="eyebrow px-3 py-1 rounded-full text-[10px]"
                    style={{
                      background: status === 'Compliant' ? 'rgba(34,197,94,0.1)' : 'rgba(240,179,65,0.1)',
                      color: status === 'Compliant' ? '#22c55e' : 'var(--ochre)',
                    }}
                  >
                    {status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="sec-label mb-6">Security FAQs</div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{ border: '1px solid var(--rule-dark)', background: 'var(--ivory)' }}
              >
                <div
                  className="px-5 py-4"
                  style={{ borderBottom: '1px solid var(--rule-dark)', background: 'var(--parchment)' }}
                >
                  <p
                    className="text-[14px] leading-[1.55]"
                    style={{ fontFamily: 'var(--font-med)', color: 'var(--ink)' }}
                  >
                    {q}
                  </p>
                </div>
                <div className="px-5 py-4">
                  <p className="text-[14px] leading-[1.65]" style={{ color: 'var(--ink-2)' }}>
                    {a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Questions about security or compliance?"
        sub="Reach our security team at security@xammer.in. We respond within 24 hours."
      />
    </>
  );
}
