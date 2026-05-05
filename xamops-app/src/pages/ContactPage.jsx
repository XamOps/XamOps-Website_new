import { Icon } from '../components/Icons';

export default function ContactPage() {
  return (
    <section className="sec-light pt-[140px] pb-24">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="eyebrow mb-5">Contact</div>
          <h1 className="serif text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight">Talk to us.</h1>
          <p className="mt-5 text-[17px] leading-[1.6]" style={{ color: 'var(--olive)' }}>
            General enquiries, partnerships, press, or just to say hello — we read everything.
          </p>
          <div className="mt-8 space-y-4 text-[15px]">
            <div><div className="eyebrow mb-1">Email</div><a href="mailto:support@xammer.in" className="ulink">support@xammer.in</a></div>
            <div><div className="eyebrow mb-1">Sales</div><a href="mailto:demo@xamops.com" className="ulink">demo@xamops.com</a></div>
            <div><div className="eyebrow mb-1">Office</div>Xammer Technologies · New Delhi, India</div>
          </div>
        </div>
        <div className="md:col-span-7">
          <form className="ring-soft rounded-2xl p-7" style={{ background: 'var(--ivory)' }}
            onSubmit={(e) => { e.preventDefault(); alert('Message sent — we\'ll get back within 1 business day.'); }}>
            {[['Name','Aarya Patel','text'],['Email','you@company.com','email']].map(([l, p, t]) => (
              <label key={l} className="block mb-3">
                <div className="text-[12px] mb-1" style={{ color: 'var(--olive)' }}>{l}</div>
                <input required type={t} className="w-full rounded-[12px] px-3.5 py-3 text-[14px] outline-none"
                  style={{ background: 'var(--parchment)', boxShadow: '0 0 0 1px var(--rule)', color: 'var(--ink)' }} placeholder={p} />
              </label>
            ))}
            <label className="block mb-4">
              <div className="text-[12px] mb-1" style={{ color: 'var(--olive)' }}>Message</div>
              <textarea required rows="6" className="w-full rounded-[12px] px-3.5 py-3 text-[14px] outline-none"
                style={{ background: 'var(--parchment)', boxShadow: '0 0 0 1px var(--rule)', color: 'var(--ink)' }}
                placeholder="What can we help with?"></textarea>
            </label>
            <button type="submit" className="btn-primary">Send message <Icon.Arrow width="14" height="14" /></button>
          </form>
        </div>
      </div>
    </section>
  );
}
