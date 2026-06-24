import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useDemoModal } from '../lib/demoModal';

export default function Footer() {
  const { setOpen } = useDemoModal();
  return (
    <footer className="sec-dark pt-12 md:pt-20 pb-8 md:pb-10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-10 pb-10 md:pb-16 border-b" style={{borderColor:'var(--rule-dark)'}}>
          <div className="col-span-12 md:col-span-4">
            <Logo size={26}/>
            <p className="mt-4 text-[14px] md:text-[15px] max-w-[36ch]" style={{color:'var(--olive)'}}>
              The Cognitive Cloud Operating System.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <button onClick={() => setOpen(true)} className="btn-primary">Book demo</button>
              <Link to="/contact" className="btn-ghost-dark">Contact</Link>
            </div>
          </div>
          {[
            ['Platform', [
              ['Spot Automation',   '/platform/spot-automation'],
              ['Disk Rightsizing',  '/platform/disk-rightsizing'],
              ['DBOps',             '/platform/dbops'],
              ['SecOps',            '/platform/secops'],
              ['Cost Analytics',    '/platform/cost-analytics'],
              ['SRE Investigation', '/platform/sre'],
            ]],
            ['Solutions', [
              ['For DevOps',  '/solutions/devops'],
              ['For FinOps',  '/solutions/finops'],
              ['For SRE',     '/solutions/sre'],
              ['Pricing',     '/pricing'],
              ['Customers',   null],
            ]],
            ['Company', [
              ['About',    '/about'],
              ['Blog',     '/blog'],
              ['Careers',  null],
              ['Contact',  '/contact'],
              ['Security', null],
            ]],
          ].map(([h, items]) => (
            <div key={h} className="col-span-4 md:col-span-2">
              <div className="eyebrow mb-3 md:mb-4" style={{color:'var(--ink)'}}>{h}</div>
              <ul className="space-y-2 md:space-y-2.5 text-[13px] md:text-[14px]">
                {items.map(([label, to]) => (
                  <li key={label}>
                    {to
                      ? <Link to={to} className="ulink" style={{color:'var(--ink-2)'}}>{label}</Link>
                      : <span className="ulink" style={{color:'var(--olive)', cursor:'default'}}>{label}</span>
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-6 md:pt-8 flex flex-wrap items-center justify-between gap-3 text-[11px] md:text-[12px] mono" style={{color:'var(--ink-2)'}}>
          <div>© 2026 Xamops · xamops.com</div>
          <div className="flex items-center gap-5 md:gap-6">
            <a href="#">Terms</a><a href="#">Privacy</a><a href="#">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
