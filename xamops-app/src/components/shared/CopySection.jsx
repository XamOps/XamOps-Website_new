import ChecklistGrid from './ChecklistGrid';

export default function CopySection({ heading, paragraphs = [], checklist, bullets, dark, wide }) {
  return (
    <section className={`py-7 md:py-11 ${dark ? 'sec-dark' : 'sec-light'}`}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className={wide ? 'max-w-[900px]' : 'max-w-[760px]'}>
          {heading && (
            <h2 className="serif text-[clamp(26px,3.6vw,40px)] leading-[1.08] mb-6">{heading}</h2>
          )}
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[15px] leading-[1.7]"
                style={{ color: dark ? 'var(--olive-2)' : 'var(--olive)' }}
              >
                {p}
              </p>
            ))}
          </div>
          {checklist && (
            <div className="mt-6">
              <ChecklistGrid items={checklist} dark={dark} />
            </div>
          )}
          {bullets && (
            <ul className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="text-[14px] flex items-center gap-2"
                  style={{ color: dark ? 'var(--olive-2)' : 'var(--olive)' }}
                >
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--terracotta)' }} />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
