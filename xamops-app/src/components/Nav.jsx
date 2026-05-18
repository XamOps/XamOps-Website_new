import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Icon } from './Icons';
import useTheme from '../hooks/useTheme';
import { useDemoModal } from '../lib/demoModal';

export default function Nav() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setOpen: openDemo } = useDemoModal();
  const { pathname } = useLocation();
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); setOpen(null); }, [pathname]);

  const platform = [
    { I: Icon.Spot,  name: 'Spot Automation',   to: '/platform/spot-automation',  desc: 'AutoSpotting across AWS, GCP, Azure' },
    { I: Icon.Disk,  name: 'Disk Rightsizing',  to: '/platform/disk-rightsizing', desc: 'The only automated disk rightsizing' },
    { I: Icon.DB,    name: 'DBOps',             to: '/platform/dbops',            desc: 'Database operations on autopilot' },
    { I: Icon.Sec,   name: 'SecOps',            to: '/platform/secops',           desc: 'Continuous posture and remediation' },
    { I: Icon.Cost,  name: 'Cost Analytics',    to: '/platform/cost-analytics',   desc: 'Real-time savings dashboards' },
    { I: Icon.SRE,   name: 'SRE Investigation', to: '/platform/sre',              desc: 'AI-assisted incident intelligence' },
  ];
  const solutions = [
    { I: Icon.Spot,  name: 'For DevOps Engineers', to: '/solutions/devops', desc: "Ship infrastructure, not scripts" },
    { I: Icon.Cost,  name: 'For FinOps Teams',     to: '/solutions/finops', desc: 'Cut waste, prove savings' },
    { I: Icon.SRE,   name: 'For SRE Teams',        to: '/solutions/sre',    desc: 'From alert to root cause, faster' },
  ];

  const isActive = (base) => pathname === base || pathname.startsWith(base + '/');

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 nav-blur transition-colors"
        style={{
          background: scrolled || mobileOpen ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg)',
          boxShadow: scrolled ? '0 1px 0 var(--nav-border)' : 'none',
        }}
      >
        <div className="max-w-[1240px] mx-auto px-5 md:px-10 h-[64px] flex items-center justify-between">
          <Link to="/"><Logo /></Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 text-[15px]" style={{color:'var(--ink)'}}>
            {[['Platform','/platform',platform,true],['Solutions','/solutions',solutions,false]].map(([label, base, items, twoCol]) => (
              <div key={base} className="relative" onMouseEnter={() => setOpen(base)} onMouseLeave={() => setOpen(null)}>
                <button
                  onClick={() => setOpen(open === base ? null : base)}
                  className={`px-3 py-2 rounded-md hover:bg-[var(--ivory-2)] flex items-center gap-1.5 ${isActive(base) ? 'font-medium' : ''}`}
                  style={{background:'transparent', border:'none', cursor:'pointer', color:'inherit', font:'inherit'}}
                >
                  {label}
                  <svg width="10" height="10" viewBox="0 0 10 10"
                    style={{transition:'transform 0.2s ease', transform: open===base ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink:0}}>
                    <path d="M2 3.5L5 6.5l3-3" stroke="currentColor" fill="none" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </button>
                <div className={`nav-dd absolute left-0 top-full pt-3 z-50${open===base ? ' nav-dd--open' : ''}`}>
                  <div className={`nav-dd-panel rounded-2xl p-2.5 ${twoCol ? 'w-[560px]' : 'w-[300px]'}`}
                    style={{background:'var(--parchment)', boxShadow:'0 4px 6px -1px rgba(0,0,0,0.1), 0 20px 60px -10px rgba(0,0,0,0.35)'}}>
                    <div className={twoCol ? 'grid grid-cols-2 gap-0.5' : 'flex flex-col gap-0.5'}>
                      {items.map(({ I, name, to, desc }) => (
                        <Link key={to} to={to} onClick={() => setOpen(null)}
                          className="nav-dd-item flex items-start gap-3 px-3 py-3 rounded-xl"
                          style={{textDecoration:'none', color:'inherit'}}
                        >
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{background:'rgba(124,92,255,0.1)'}}>
                            <I width="18" height="18" style={{color:'var(--terracotta)'}}/>
                          </div>
                          <div>
                            <div className="text-[13px] font-semibold leading-snug" style={{color:'var(--terracotta)'}}>{name}</div>
                            <div className="text-[12px] mt-0.5 leading-relaxed" style={{color:'var(--olive)'}}>{desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Link to="/pricing" className={`px-3 py-2 rounded-md hover:bg-[var(--ivory-2)] ${isActive('/pricing') ? 'font-medium' : ''}`}>Pricing</Link>
            <Link to="/about"   className={`px-3 py-2 rounded-md hover:bg-[var(--ivory-2)] ${isActive('/about')   ? 'font-medium' : ''}`}>About</Link>
            <Link to="/blog"    className={`px-3 py-2 rounded-md hover:bg-[var(--ivory-2)] ${isActive('/blog')    ? 'font-medium' : ''}`}>Blog</Link>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+918769254249"
              aria-label="Call us"
              className="hidden md:flex w-8 h-8 items-center justify-center rounded-md transition-colors"
              style={{color:'var(--olive)', background:'transparent'}}
              onMouseEnter={e => e.currentTarget.style.background='var(--ivory)'}
              onMouseLeave={e => e.currentTarget.style.background='transparent'}
            >
              <Icon.Phone width="15" height="15" />
            </a>
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-8 h-8 flex items-center justify-center rounded-md transition-colors"
              style={{color:'var(--olive)', background:'transparent'}}
              onMouseEnter={e => e.currentTarget.style.background='var(--ivory)'}
              onMouseLeave={e => e.currentTarget.style.background='transparent'}
            >
              {theme === 'dark'
                ? <Icon.Sun  width="16" height="16" />
                : <Icon.Moon width="16" height="16" />}
            </button>
            <button onClick={() => openDemo(true)} className="hidden md:inline-flex btn-primary text-[13px] px-4 py-2.5">Book Demo</button>
            <a href="https://live.xamops.com" className="hidden md:inline-flex btn-dark text-[13px] px-4 py-2.5">Sign In <Icon.Arrow width="13" height="13"/></a>
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
            {platform.map(({ I, name, to, desc }) => (
              <Link key={to} to={to} className="flex items-center gap-3 py-3 border-b" style={{borderColor:'var(--rule)'}}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:'rgba(124,92,255,0.1)'}}>
                  <I width="16" height="16" style={{color:'var(--terracotta)'}}/>
                </div>
                <div>
                  <div className="text-[15px]" style={{color:'var(--ink)'}}>{name}</div>
                  <div className="text-[12px] mt-0.5" style={{color:'var(--olive)'}}>{desc}</div>
                </div>
              </Link>
            ))}

            <div className="text-[11px] eyebrow mb-2 mt-5">Solutions</div>
            {solutions.map(({ I, name, to, desc }) => (
              <Link key={to} to={to} className="flex items-center gap-3 py-3 border-b" style={{borderColor:'var(--rule)'}}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:'rgba(124,92,255,0.1)'}}>
                  <I width="16" height="16" style={{color:'var(--terracotta)'}}/>
                </div>
                <div>
                  <div className="text-[15px]" style={{color:'var(--ink)'}}>{name}</div>
                  <div className="text-[12px] mt-0.5" style={{color:'var(--olive)'}}>{desc}</div>
                </div>
              </Link>
            ))}

            <div className="pt-4 space-y-1">
              {[['Pricing','/pricing'],['About','/about'],['Blog','/blog']].map(([n,to]) => (
                <Link key={n} to={to} className="block py-3 text-[16px] border-b" style={{color:'var(--ink)', borderColor:'var(--rule)'}}>{n}</Link>
              ))}
            </div>

            <div className="pt-6 flex flex-col gap-3">
              <button onClick={() => { setMobileOpen(false); openDemo(true); }} className="btn-primary justify-center w-full">Book Demo</button>
              <a href="https://live.xamops.com" className="btn-dark justify-center">Sign In <Icon.Arrow width="14" height="14"/></a>
              <a href="tel:+918769254249" className="flex items-center justify-center gap-2 py-3 text-[14px] rounded-lg" style={{color:'var(--olive)', background:'var(--ivory)'}}>
                <Icon.Phone width="15" height="15"/> +91 87692 54249
              </a>
              <button onClick={toggleTheme} className="flex items-center justify-center gap-2 py-3 text-[14px] rounded-lg" style={{color:'var(--olive)', background:'var(--ivory)'}}>
                {theme === 'dark' ? <><Icon.Sun width="15" height="15"/> Light mode</> : <><Icon.Moon width="15" height="15"/> Dark mode</>}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
