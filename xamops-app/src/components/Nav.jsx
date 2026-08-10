import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Icon } from './Icons';
import { useDemoModal } from '../lib/demoModal';
import { accentFor } from '../lib/moduleAccents';
import { GROUPS, FEATURE_COUNT, STATUS_LABEL, STATUS_BADGE } from '../lib/platform';
import { AnimatedThemeToggler } from './AnimatedThemeToggler';

export default function Nav() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setOpen: openDemo } = useDemoModal();
  const { pathname } = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); setOpen(null); }, [pathname]);

  // Platform menu is generated from the capability catalogue: one column per
  // group, showing the first few capabilities and linking the rest to /platform.
  const platform = GROUPS.map((g) => ({
    ...g,
    I: Icon[g.icon],
    to: `/platform/${g.slug}`,
    desc: g.tagline,
  }));

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
                <div className={`nav-dd absolute top-full pt-3 z-50${open===base ? ' nav-dd--open' : ''}`}
                  style={twoCol ? {left: '50%', transform: 'translateX(-50%)'} : {left: 0}}>
                  {twoCol ? (
                    /* Platform mega panel — one column per capability group */
                    <div className="nav-dd-panel rounded-2xl p-4 w-[920px]"
                      style={{background:'var(--parchment)', boxShadow:'0 4px 6px -1px rgba(0,0,0,0.1), 0 20px 60px -10px rgba(0,0,0,0.35)'}}>
                      <div className="grid grid-cols-4 gap-x-4 gap-y-5">
                        {items.map((g) => {
                          const I = g.I;
                          return (
                            <div key={g.id}>
                              <Link to={g.to} onClick={() => setOpen(null)}
                                className="flex items-center gap-2 mb-2.5"
                                style={{textDecoration:'none', color:'inherit'}}>
                                <I width="15" height="15" style={{color: g.accent}}/>
                                <span className="mono text-[10.5px] uppercase tracking-[0.14em]" style={{color:'var(--ink)'}}>
                                  {g.name}
                                </span>
                                {g.status && (
                                  <span className={`badge ${STATUS_BADGE[g.status]}`} style={{fontSize:9, padding:'1px 6px'}}>
                                    {STATUS_LABEL[g.status]}
                                  </span>
                                )}
                              </Link>
                              <ul className="space-y-0.5" style={{listStyle:'none', margin:0, padding:0}}>
                                {g.features.slice(0, 4).map((f) => (
                                  <li key={f.name}>
                                    <Link to={f.to || g.to} onClick={() => setOpen(null)}
                                      className="nav-dd-item block px-2 py-1.5 rounded-lg text-[12.5px] leading-snug"
                                      style={{textDecoration:'none', color:'var(--olive)'}}>
                                      {f.name}
                                    </Link>
                                  </li>
                                ))}
                                {g.features.length > 4 && (
                                  <li>
                                    <Link to={g.to} onClick={() => setOpen(null)}
                                      className="nav-dd-item block px-2 py-1.5 rounded-lg text-[12px] mono"
                                      style={{textDecoration:'none', color:'var(--olive-2)'}}>
                                      +{g.features.length - 4} more
                                    </Link>
                                  </li>
                                )}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-4 pt-3 flex items-center justify-between border-t" style={{borderColor:'var(--rule)'}}>
                        <span className="mono text-[11px]" style={{color:'var(--olive-2)'}}>
                          {FEATURE_COUNT} capabilities · AWS · GCP · Azure
                        </span>
                        <Link to="/platform" onClick={() => setOpen(null)}
                          className="text-[12.5px] inline-flex items-center gap-1.5 ulink"
                          style={{textDecoration:'none', color:'var(--ink)'}}>
                          Explore the platform <Icon.Arrow width="13" height="13"/>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="nav-dd-panel rounded-2xl p-2.5 w-[300px]"
                      style={{background:'var(--parchment)', boxShadow:'0 4px 6px -1px rgba(0,0,0,0.1), 0 20px 60px -10px rgba(0,0,0,0.35)'}}>
                      <div className="flex flex-col gap-0.5">
                        {items.map(({ I, name, to, desc }) => (
                          <Link key={to} to={to} onClick={() => setOpen(null)}
                            className="nav-dd-item flex items-start gap-3 px-3 py-3 rounded-xl"
                            style={{textDecoration:'none', color:'inherit'}}
                          >
                            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                              style={{background:'var(--ivory-2)'}}>
                              <I width="18" height="18" style={{color: accentFor(to)}}/>
                            </div>
                            <div>
                              <div className="text-[13px] font-semibold leading-snug" style={{color:'var(--terracotta)'}}>{name}</div>
                              <div className="text-[12px] mt-0.5 leading-relaxed" style={{color:'var(--olive)'}}>{desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
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
            <AnimatedThemeToggler
              className="w-8 h-8 flex items-center justify-center rounded-md transition-colors"
              style={{color:'var(--olive)', background:'transparent'}}
              onMouseEnter={e => e.currentTarget.style.background='var(--ivory)'}
              onMouseLeave={e => e.currentTarget.style.background='transparent'}
            />
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
            {platform.map(({ I, id, name, to, desc, features, status, accent }) => (
              <Link key={id} to={to} className="flex items-center gap-3 py-3 border-b" style={{borderColor:'var(--rule)'}}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:'var(--ivory-2)'}}>
                  <I width="16" height="16" style={{color: accent}}/>
                </div>
                <div>
                  <div className="text-[15px] flex items-center gap-2" style={{color:'var(--ink)'}}>
                    {name}
                    {status && <span className={`badge ${STATUS_BADGE[status]}`}>{STATUS_LABEL[status]}</span>}
                  </div>
                  <div className="text-[12px] mt-0.5" style={{color:'var(--olive)'}}>{desc}</div>
                </div>
                <span className="ml-auto mono text-[11px] flex-shrink-0" style={{color:'var(--olive-2)'}}>{features.length}</span>
              </Link>
            ))}
            <Link to="/platform" className="block py-3 text-[14px] mono" style={{color:'var(--olive)'}}>
              All {FEATURE_COUNT} capabilities →
            </Link>

            <div className="text-[11px] eyebrow mb-2 mt-5">Solutions</div>
            {solutions.map(({ I, name, to, desc }) => (
              <Link key={to} to={to} className="flex items-center gap-3 py-3 border-b" style={{borderColor:'var(--rule)'}}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:'var(--ivory-2)'}}>
                  <I width="16" height="16" style={{color: accentFor(to)}}/>
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
              <AnimatedThemeToggler
                className="flex items-center justify-center gap-2 py-3 text-[14px] rounded-lg w-full"
                style={{color:'var(--olive)', background:'var(--ivory)'}}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
