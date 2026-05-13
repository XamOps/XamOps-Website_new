import { Link } from 'react-router-dom';
import { Icon } from '../Icons';

export default function PageHero({ eyebrow, title, body, cta = true }) {
  return (
    <section className="sec-light pt-[140px] pb-20 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, rgba(201,100,66,0.14), transparent 70%)' }} />
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative">
        <div className="eyebrow mb-5">{eyebrow}</div>
        <h1 className="serif text-[clamp(52px,7.5vw,108px)] leading-[1.02] tracking-tight max-w-[18ch]">
          {title.map((t, i) => (
            <span key={i} style={t.accent ? { color: 'var(--terracotta)' } : null}>
              {t.text}{i < title.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>
        {body && <p className="mt-6 text-[18px] leading-[1.6] max-w-[60ch]" style={{ color: 'var(--olive)' }}>{body}</p>}
        {cta && (
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/demo" className="btn-primary">Book a demo <Icon.Arrow width="14" height="14" /></Link>
            <Link to="/platform" className="btn-ghost">Explore the platform</Link>
          </div>
        )}
      </div>
    </section>
  );
}
