export default function FeatureGrid({ title, items, dark }) {
  return (
    <section className={`py-16 ${dark ? 'sec-dark' : 'sec-light'}`}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        {title && <h2 className="serif text-[clamp(28px,3.6vw,42px)] leading-[1.05] mb-10 max-w-[24ch]">{title}</h2>}
        <div className="grid md:grid-cols-3 gap-px ring-soft rounded-2xl overflow-hidden" style={{ background: dark ? 'var(--rule-dark)' : 'var(--rule)' }}>
          {items.map(([k, v], i) => (
            <div key={k} className="p-6" style={{ background: 'var(--ivory)' }}>
              <div className="mono text-[11px] mb-4" style={{ color: dark ? 'var(--olive-2)' : 'var(--olive)' }}>0{i + 1}</div>
              <div className="serif text-[20px]">{k}</div>
              <div className="text-[14px] mt-2" style={{ color: dark ? 'var(--olive-2)' : 'var(--olive)' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
