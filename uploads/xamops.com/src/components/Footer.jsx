import React from 'react';
import Logo from './Logo.jsx';
import { Link } from '../router.jsx';

export default function Footer() {
  return (
    <footer className="sec-dark pt-24 pb-10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 pb-16 border-b" style={{ borderColor: 'var(--rule-dark)' }}>
          <div className="md:col-span-4">
            <Logo dark size={26} />
            <p className="mt-5 text-[15px] max-w-[36ch]" style={{ color: 'var(--olive-2)' }}>
              The Cognitive Cloud Operating System. Built by Xammer Technologies in Delhi.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link to="/demo" className="btn-primary">Book demo</Link>
              <Link to="/contact" className="btn-ghost-dark">Contact</Link>
            </div>
          </div>
          {[
            ['Platform', [
              ['Spot Automation', '/platform/spot-automation'],
              ['Disk Rightsizing', '/platform/disk-rightsizing'],
              ['DBOps', '/platform/dbops'],
              ['SecOps', '/platform/secops'],
              ['Cost Analytics', '/platform/cost-analytics'],
              ['SRE Investigation', '/platform/sre'],
            ]],
            ['Solutions', [
              ['For DevOps', '/solutions/devops'],
              ['For FinOps', '/solutions/finops'],
              ['For SRE', '/solutions/sre'],
              ['Pricing', '/pricing'],
            ]],
            ['Company', [
              ['About', '/about'],
              ['Blog', '/blog'],
              ['Contact', '/contact'],
              ['Book Demo', '/demo'],
            ]],
          ].map(([h, items]) => (
            <div key={h} className="md:col-span-2">
              <div className="eyebrow eyebrow-dark mb-4">{h}</div>
              <ul className="space-y-2.5 text-[14px]">
                {items.map(([label, to]) => <li key={label}><Link to={to} className="ulink" style={{ color: 'var(--ivory)' }}>{label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-[12px] mono" style={{ color: 'var(--olive-2)' }}>
          <div>© 2026 Xammer Technologies · xamops.com · support@xammer.in</div>
          <div className="flex items-center gap-6">
            <a href="#">Terms</a><a href="#">Privacy</a><a href="#">Status</a>
            <span className="flex items-center gap-2"><span className="live-dot" /> All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
