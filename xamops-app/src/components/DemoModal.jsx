import { useEffect } from 'react';
import { Icon } from './Icons';
import { useDemoModal } from '../lib/demoModal';

export default function DemoModal() {
  const { open, setOpen } = useDemoModal();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6"
      style={{ background: 'rgba(6,8,12,0.72)', backdropFilter: 'blur(6px)' }}
      onClick={() => setOpen(false)}
    >
      <div
        className="demo-modal-panel relative w-full max-w-[920px] max-h-[92vh] sm:max-h-[95vh] overflow-y-auto rounded-t-2xl sm:rounded-xl md:rounded-2xl ring-soft"
        style={{ background: 'var(--parchment)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full"
          style={{ background: 'var(--ivory)', color: 'var(--olive)' }}
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Left — info */}
          <div className="p-6 md:p-8 lg:p-10 border-b md:border-b-0 md:border-r" style={{ borderColor: 'var(--rule)' }}>
            <div className="eyebrow mb-4">Book a demo</div>
            <h2 className="serif text-[clamp(28px,4vw,44px)] leading-[1.06] tracking-tight">
              30 minutes.{' '}
              <span style={{ color: 'var(--terracotta)' }}>See your cloud automated live.</span>
            </h2>
            <p className="mt-5 text-[15px] leading-[1.6]" style={{ color: 'var(--olive)' }}>
              We connect to a sandbox account and show real spot conversions, disk rightsizing recommendations
              and cost savings — on infrastructure that looks like yours. No slideware.
            </p>
            <ul className="mt-6 space-y-3 text-[14px]">
              {[
                ['Read-only by default',    'We only get the access you grant. Revoke anytime.'],
                ['Bring your own scenario', 'Show us a real workload and we\'ll map savings.'],
                ['Engineers in the room',   'Your call is with the people who built this.'],
                ['SOC 2 Type II',           'Full evidence pack available pre-call.'],
              ].map(([k, v]) => (
                <li key={k} className="flex items-start gap-3">
                  <Icon.Check width="15" height="15" style={{ color: 'var(--moss)', marginTop: 3, flexShrink: 0 }} />
                  <div>
                    <div className="font-medium">{k}</div>
                    <div className="text-[12px] mt-0.5" style={{ color: 'var(--olive)' }}>{v}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className="p-6 md:p-8 lg:p-10">
            <div className="serif text-[20px] mb-5">Tell us about your stack</div>
            <form onSubmit={(e) => {
              e.preventDefault();
              setOpen(false);
              alert('Demo request received — we\'ll email you within 1 business day.');
            }}>
              {[
                ['Full name',  'Aarya Patel',   'text'],
                ['Work email', 'you@company.com','email'],
                ['Company',    'Acme Cloud',     'text'],
                ['Team size',  '20',             'number'],
              ].map(([l, p, t]) => (
                <label key={l} className="block mb-3">
                  <div className="text-[12px] mb-1" style={{ color: 'var(--olive)' }}>{l}</div>
                  <input
                    required type={t}
                    className="w-full rounded-[12px] px-3.5 py-2.5 text-[14px] outline-none"
                    style={{ background: 'var(--ivory)', boxShadow: '0 0 0 1px var(--rule)', color: 'var(--ink)' }}
                    placeholder={p}
                  />
                </label>
              ))}

              <div className="text-[12px] mb-1 mt-2" style={{ color: 'var(--olive)' }}>Cloud providers</div>
              <div className="flex flex-wrap gap-2 mb-4">
                {['AWS', 'GCP', 'Azure', 'On-prem'].map((c) => (
                  <label key={c} className="chip cursor-pointer">
                    <input type="checkbox" className="accent-[var(--terracotta)]" /> {c}
                  </label>
                ))}
              </div>

              <label className="block mb-5">
                <div className="text-[12px] mb-1" style={{ color: 'var(--olive)' }}>What would you like to see?</div>
                <textarea
                  rows="3"
                  className="w-full rounded-[12px] px-3.5 py-2.5 text-[14px] outline-none resize-none"
                  style={{ background: 'var(--ivory)', boxShadow: '0 0 0 1px var(--rule)', color: 'var(--ink)' }}
                  placeholder="Spot conversion on prod-api ASG, disk rightsizing across staging…"
                />
              </label>

              <button type="submit" className="btn-primary w-full justify-center">
                Request demo <Icon.Arrow width="14" height="14" />
              </button>
              <div className="mono text-[11px] mt-3 text-center" style={{ color: 'var(--olive)' }}>
                or email demo@xamops.com
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
