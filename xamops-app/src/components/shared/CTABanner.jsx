import { Link } from 'react-router-dom';
import { Icon } from '../Icons';

export default function CTABanner({
  heading = 'Ready to operate smarter?',
  sub = '30-minute demo. We connect to a sandbox and show your cloud automated live.'
}) {
  return (
    <section className="sec-light py-16">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="rounded-[32px] p-10 md:p-14 ring-soft relative overflow-hidden" style={{ background: 'var(--ivory)' }}>
          <div className="absolute -right-20 -bottom-20 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(closest-side, rgba(201,100,66,0.18), transparent 70%)' }} />
          <div className="grid md:grid-cols-12 gap-8 relative items-center">
            <div className="md:col-span-8">
              <h2 className="serif text-[clamp(36px,5vw,64px)] leading-[1.04] tracking-tight max-w-[20ch]">{heading}</h2>
              <p className="mt-4 text-[16px] max-w-[60ch]" style={{ color: 'var(--olive)' }}>{sub}</p>
            </div>
            <div className="md:col-span-4 flex flex-wrap gap-3 md:justify-end">
              <Link to="/demo" className="btn-primary">Book a demo <Icon.Arrow width="14" height="14" /></Link>
              <Link to="/pricing" className="btn-ghost">Pricing</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
