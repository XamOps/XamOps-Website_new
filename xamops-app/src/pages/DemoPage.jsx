import { Icon } from '../components/Icons';

export default function DemoPage() {
  return (
    <section className="sec-light pt-24 md:pt-[140px] pb-16 md:pb-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 grid md:grid-cols-12 gap-6 md:gap-10">
        <div className="md:col-span-6">
          <div className="eyebrow mb-5">Book a demo</div>
          <h1 className="serif text-[clamp(40px,6vw,72px)] leading-[1.02] tracking-tight">
            30 minutes. <span style={{ color: 'var(--terracotta)' }}>See your cloud automated live.</span>
          </h1>
          <p className="mt-6 text-[17px] leading-[1.6] max-w-[52ch]" style={{ color: 'var(--olive)' }}>
            We connect to a sandbox account and show real spot conversions, disk rightsizing recommendations and cost savings on infrastructure that looks like yours. No slideware.
          </p>
          <ul className="mt-8 space-y-3 text-[15px]">
            {[
              ['Read-only by default',   'We only get the access you grant. Revoke anytime.'],
              ['Bring your own scenario','Show us a real workload and we\'ll map savings.'],
              ['Engineers in the room',  'Your call is with the people who built this.'],
              ['SOC 2 Type II',          'Full evidence pack available pre-call.'],
            ].map(([k, v]) => (
              <li key={k} className="flex items-start gap-3">
                <Icon.Check width="16" height="16" style={{ color: 'var(--moss)', marginTop: 3 }} />
                <div><div className="font-medium">{k}</div><div className="text-[13px]" style={{ color: 'var(--olive)' }}>{v}</div></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-6">
          <form className="ring-soft rounded-2xl p-7" style={{ background: 'var(--ivory)' }}
            onSubmit={(e) => { e.preventDefault(); alert('Demo request received. We\'ll email you within 1 business day.'); }}>
            <div className="serif text-[clamp(18px,5vw,24px)] mb-5">Tell us about your stack</div>
            {[
              ['Full name',  'demo-name',    'name',      'name',         'Aarya Patel',    'text'],
              ['Work email', 'demo-email',   'email',     'email',        'you@company.com','email'],
              ['Company',    'demo-company', 'company',   'organization', 'Acme Cloud',     'text'],
              ['Team size',  'demo-size',    'team_size', 'off',          '20',             'number'],
            ].map(([l, id, name, autoComplete, p, t]) => (
              <label key={id} htmlFor={id} className="block mb-3">
                <div className="text-[12px] mb-1" style={{ color: 'var(--olive)' }}>{l}</div>
                <input id={id} name={name} autoComplete={autoComplete} required type={t}
                  className="w-full rounded-[12px] px-3.5 py-3.5 text-[14px] outline-none"
                  style={{ background: 'var(--parchment)', boxShadow: '0 0 0 1px var(--rule)', color: 'var(--ink)' }} placeholder={p} />
              </label>
            ))}
            <div className="text-[12px] mb-1 mt-2" style={{ color: 'var(--olive)' }}>Cloud providers</div>
            <div className="flex flex-wrap gap-2 mb-4">
              {['AWS','GCP','Azure','On-prem'].map((c) => (
                <label key={c} className="chip cursor-pointer">
                  <input type="checkbox" id={`demo-provider-${c.toLowerCase()}`} name="providers" value={c} className="accent-[var(--terracotta)]" /> {c}
                </label>
              ))}
            </div>
            <label htmlFor="demo-message" className="block mb-4">
              <div className="text-[12px] mb-1" style={{ color: 'var(--olive)' }}>What would you like to see?</div>
              <textarea id="demo-message" name="message" autoComplete="off" rows="3"
                className="w-full rounded-[12px] px-3.5 py-3 text-[14px] outline-none"
                style={{ background: 'var(--parchment)', boxShadow: '0 0 0 1px var(--rule)', color: 'var(--ink)' }}
                placeholder="Spot conversion on prod-api ASG, disk rightsizing across staging…"></textarea>
            </label>
            <button type="submit" className="btn-primary w-full justify-center">Request demo <Icon.Arrow width="14" height="14" /></button>
            <div className="mono text-[11px] mt-3 text-center" style={{ color: 'var(--olive)' }}>or email demo@xamops.com</div>
          </form>
        </div>
      </div>
    </section>
  );
}
