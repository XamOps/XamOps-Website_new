export default function FAQList({ title = 'Frequently asked questions', faqs }) {
  return (
    <section className="sec-light py-10 md:py-16">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="sec-label mb-6">{title}</div>
        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
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
  );
}
