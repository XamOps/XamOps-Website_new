import React from 'react';

export default function LogoBar() {
  const items = ['AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Terraform', 'OpenObserve', 'Prometheus', 'PagerDuty', 'Datadog', 'Snowflake', 'Atlassian', 'GitHub'];
  return (
    <section className="sec-light pt-4 pb-12">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="text-center eyebrow mb-6">Trusted by teams running on AWS · GCP · Azure</div>
        <div className="mask-x overflow-hidden">
          <div className="flex gap-12 ticker-track" style={{ width: 'max-content' }}>
            {[...items, ...items, ...items].map((n, i) => (
              <div key={i} className="serif text-[24px] whitespace-nowrap" style={{ color: '#8a8880' }}>{n}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
