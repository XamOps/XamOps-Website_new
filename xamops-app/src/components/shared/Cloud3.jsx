export default function Cloud3({ items }) {
  return (
    <section className="sec-light py-16 border-t border-b" style={{ borderColor: 'var(--rule)' }}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="eyebrow mb-4">Works on</div>
        <div className="flex flex-wrap gap-3">
          {items.map((s) => <span key={s} className="chip">{s}</span>)}
        </div>
      </div>
    </section>
  );
}
