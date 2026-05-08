import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="sec-dark pt-24 pb-10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 pb-16 border-b" style={{borderColor:'var(--rule-dark)'}}>
          <div className="md:col-span-4">
            <Logo size={26}/>
            <p className="mt-5 text-[15px] max-w-[36ch]" style={{color:'var(--olive)'}}>
              The Cognitive Cloud Operating System. Built by Xammer Technologies in Delhi.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="btn-primary">Book demo</a>
              <a href="#" className="btn-ghost-dark">Contact</a>
            </div>
          </div>
          {[
            ['Platform',  ['Spot Automation','Disk Rightsizing','DBOps','SecOps','Cost Analytics','SRE Investigation']],
            ['Solutions', ['For DevOps','For FinOps','For SRE','Pricing','Customers']],
            ['Company',   ['About','Blog','Careers','Contact','Security']],
          ].map(([h, items]) => (
            <div key={h} className="md:col-span-2">
              <div className="eyebrow mb-4" style={{color:'var(--ink-2)'}}>{h}</div>
              <ul className="space-y-2.5 text-[14px]">
                {items.map(i => <li key={i}><a href="#" className="ulink" style={{color:'var(--olive)'}}>{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-[12px] mono" style={{color:'var(--olive)'}}>
          <div>© 2026 Xammer Technologies · xamops.com</div>
          <div className="flex items-center gap-6">
            <a href="#">Terms</a><a href="#">Privacy</a><a href="#">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
