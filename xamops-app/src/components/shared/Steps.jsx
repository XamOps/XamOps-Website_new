export default function Steps({ steps, dark }) {
  return (
    <section className={`py-16 ${dark ? 'sec-dark' : 'sec-light'}`}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className={`sec-label ${dark ? 'dark' : ''} mb-6`}>How it works</div>
        <div className="grid md:grid-cols-4 gap-px ring-soft rounded-2xl overflow-hidden" style={{ background: dark ? 'var(--rule-dark)' : 'var(--rule)' }}>
          {steps.map((s, i) => (
            <div key={s[0]} className="p-7" style={{ background: 'var(--ivory)' }}>
              <div className="mono text-[11px]" style={{ color: dark ? 'var(--olive-2)' : 'var(--olive)' }}>0{i + 1}</div>
              <div className="serif text-[22px] mt-6">{s[0]}</div>
              <div className="text-[14px] mt-2" style={{ color: dark ? 'var(--olive-2)' : 'var(--olive)' }}>{s[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
