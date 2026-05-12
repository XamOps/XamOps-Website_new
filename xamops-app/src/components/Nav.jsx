import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Icon } from './Icons';

export default function Nav() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); setOpen(null); }, [pathname]);

  const platform = [
    ['Spot Automation',   '/platform/spot-automation',  'AutoSpotting across AWS, GCP, Azure'],
    ['Disk Rightsizing',  '/platform/disk-rightsizing', 'The only automated disk rightsizing'],
    ['DBOps',             '/platform/dbops',            'Database operations on autopilot'],
    ['SecOps',            '/platform/secops',           'Continuous posture and remediation'],
    ['Cost Analytics',    '/platform/cost-analytics',   'Real-time savings dashboards'],
    ['SRE Investigation', '/platform/sre',              'AI-assisted incident intelligence'],
  ];
  const solutions = [
    ['For DevOps Engineers', '/solutions/devops', "Ship, don't babysit"],
    ['For FinOps Teams',     '/solutions/finops', 'Cut waste, prove savings'],
    ['For SRE Teams',        '/solutions/sre',    'From alert to root cause, faster'],
  ];
  const navLinks = [
    ['Platform',  '/platform'],
    ['Solutions', '/solutions'],
    ['Pricing',   '/pricing'],
    ['About',     '/about'],
    ['Blog',      '/blog'],
  ];

  const isActive = (base) => pathname === base || pathname.startsWith(base + '/');

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 nav-blur transition-colors"
        style={{
          background: scrolled || mobileOpen ? 'rgba(11,13,18,0.95)' : 'rgba(11,13,18,0.4)',
          boxShadow: scrolled ? '0 1px 0 #1f2430' : 'none',
        }}
        onMouseLeave={() => setOpen(null)}
      >
        <div className="max-w-[1240px] mx-auto px-5 md:px-10 h-[64px] flex items-center justify-between">
          <Link to="/"><Logo /></Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 text-[14px]" style={{color:'var(--ink)'}}>
            {[['Platform','/platform',platform],['Solutions','/solutions',solutions]].map(([label, base, items]) => (
              <div key={base} className="relative" onMouseEnter={() => setOpen(base)}>
                <Link to={base} className={`px-3 py-2 rounded-md hover:bg-[var(--ivory)] flex items-center gap-1 ${isActive(base) ? 'font-medium' : ''}`}>
                  {label}
                  <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 3.5L5 6.5l3-3" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round"/></svg>
                </Link>
                {open === base && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="ring-soft rounded-xl p-2 w-[400px]" style={{background:'var(--ivory)'}}>
                      {items.map(([n, to, d]) => (
                        <Link key={n} to={to} onClick={() => setOpen(null)} className="block px-3 py-2.5 rounded-lg hover:bg-[var(--parchment)]">
                          <div className="text-[14px]">{n}</div>
                          <div className="text-[12px]" style={{color:'var(--olive)'}}>{d}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link to="/pricing" className={`px-3 py-2 rounded-md hover:bg-[var(--ivory)] ${isActive('/pricing') ? 'font-medium' : ''}`}>Pricing</Link>
            <Link to="/about"   className={`px-3 py-2 rounded-md hover:bg-[var(--ivory)] ${isActive('/about')   ? 'font-medium' : ''}`}>About</Link>
            <Link to="/blog"    className={`px-3 py-2 rounded-md hover:bg-[var(--ivory)] ${isActive('/blog')    ? 'font-medium' : ''}`}>Blog</Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/demo" className="hidden sm:inline-flex btn-primary text-[13px] px-4 py-2.5">Book Demo</Link>
            <Link to="/demo" className="hidden sm:inline-flex btn-dark text-[13px] px-4 py-2.5">Sign Up <Icon.Arrow width="13" height="13"/></Link>
            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-md"
              style={{background:'rgba(255,255,255,0.04)', boxShadow:'0 0 0 1px var(--rule-dark)'}}
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span className="block w-5 h-px transition-all duration-300" style={{
                background:'var(--ink)',
                transform: mobileOpen ? 'rotate(45deg) translate(4px,4px)' : 'none',
              }}/>
              <span className="block w-5 h-px transition-all duration-300" style={{
                background:'var(--ink)',
                opacity: mobileOpen ? 0 : 1,
              }}/>
              <span className="block w-5 h-px transition-all duration-300" style={{
                background:'var(--ink)',
                transform: mobileOpen ? 'rotate(-45deg) translate(4px,-4px)' : 'none',
              }}/>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 pt-[64px] overflow-y-auto" style={{background:'var(--parchment)'}}>
          <div className="px-5 py-6 space-y-1">
            {/* Platform group */}
            <div className="text-[11px] eyebrow mb-2 mt-2">Platform</div>
            {platform.map(([n, to, d]) => (
              <Link key={n} to={to} className="block py-3 border-b" style={{borderColor:'var(--rule)'}}>
                <div className="text-[16px]" style={{color:'var(--ink)'}}>{n}</div>
                <div className="text-[13px] mt-0.5" style={{color:'var(--olive)'}}>{d}</div>
              </Link>
            ))}

            <div className="text-[11px] eyebrow mb-2 mt-5">Solutions</div>
            {solutions.map(([n, to, d]) => (
              <Link key={n} to={to} className="block py-3 border-b" style={{borderColor:'var(--rule)'}}>
                <div className="text-[16px]" style={{color:'var(--ink)'}}>{n}</div>
                <div className="text-[13px] mt-0.5" style={{color:'var(--olive)'}}>{d}</div>
              </Link>
            ))}

            <div className="pt-4 space-y-1">
              {[['Pricing','/pricing'],['About','/about'],['Blog','/blog']].map(([n,to]) => (
                <Link key={n} to={to} className="block py-3 text-[16px] border-b" style={{color:'var(--ink)', borderColor:'var(--rule)'}}>{n}</Link>
              ))}
            </div>

            <div className="pt-6 flex flex-col gap-3">
              <Link to="/demo" className="btn-primary justify-center">Book Demo</Link>
              <Link to="/demo" className="btn-dark justify-center">Sign Up <Icon.Arrow width="14" height="14"/></Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
