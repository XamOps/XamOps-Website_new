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
              <a href="/contact" className="btn-ghost-dark">Contact</a>
            </div>
          </div>
          {[
            ['Platform',  ['Spot Automation','Disk Rightsizing','DBOps','SecOps','Cost Analytics','SRE Investigation']],
            ['Solutions', ['For DevOps','For FinOps','For SRE','Pricing','Customers']],
            ['Company',   ['About','Blog','Careers','Contact','Security']],
          ].map(([h, items]) => (
            <div key={h} className="col-span-4 md:col-span-2">
              <div className="eyebrow mb-3 md:mb-4" style={{color:'var(--ink)'}}>{h}</div>
              <ul className="space-y-2 md:space-y-2.5 text-[13px] md:text-[14px]">
                {items.map(i => <li key={i}><a href="#" className="ulink" style={{color:'var(--ink-2)'}}>{i}</a></li>)}
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
