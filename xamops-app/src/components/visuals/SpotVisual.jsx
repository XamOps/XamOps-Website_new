import { Icon } from '../Icons';
import useInView from '../../hooks/useInView';

export default function SpotVisual() {
  const [ref, inView] = useInView(0.2);

  return (
    <div ref={ref} className="ring-soft rounded-3xl p-6" style={{background:'var(--ivory)'}}>
      <div className="flex items-center justify-between">
        <div className="eyebrow">Replacement loop</div>
        <span className="mono text-[11px]" style={{color:'var(--olive)'}}>autospotting v3.2</span>
      </div>

      {/* Step circles animate in staggered */}
      <div className="mt-6 grid grid-cols-5 gap-2">
        {['Validate','Convert','Scale','Verify','Replace'].map((s, i) => (
          <div key={s} className="text-center" style={{
            opacity: inView ? 1 : 0,
            animation: inView ? `scaleIn 0.4s ease ${i * 0.1}s both` : 'none',
          }}>
            <div className="mx-auto w-9 h-9 rounded-full flex items-center justify-center"
                 style={{background: i < 4 ? 'var(--terracotta)' : 'var(--parchment)', color: i < 4 ? '#fff' : 'var(--ink)', boxShadow: i >= 4 ? '0 0 0 1px var(--rule)' : 'none'}}>
              {i < 4 ? <Icon.Check width="14" height="14"/> : <Icon.Dot width="10" height="10"/>}
            </div>
            <div className="text-[12px] mt-2">{s}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 ring-soft rounded-xl overflow-hidden">
        <div className="px-4 py-2 flex items-center justify-between" style={{background:'var(--parchment)', borderBottom:'1px solid var(--rule)'}}>
          <div className="mono text-[12px]" style={{color:'var(--olive)'}}>asg-prod-api · 64 instances</div>
          <div className="flex items-center gap-1.5 text-[12px]"><span className="live-dot"/>converting</div>
        </div>
        {/* Instance grid cells animate in with stagger */}
        <div className="grid gap-1 p-4" style={{gridTemplateColumns:'repeat(16, minmax(0,1fr))'}}>
          {Array.from({length: 64}).map((_, i) => {
            const conv = i < 44;
            const targetOpacity = conv ? (0.5 + (i % 6) / 12) : 0.7;
            return (
              <div key={i} className="aspect-square rounded-sm" style={{
                background: conv ? 'var(--terracotta)' : '#e3d6c4',
                opacity: inView ? targetOpacity : 0,
                transform: inView ? 'scale(1)' : 'scale(0.4)',
                transition: `opacity 0.25s ease ${0.3 + i * 0.012}s, transform 0.25s ease ${0.3 + i * 0.012}s`,
              }}/>
            );
          })}
        </div>
      </div>

      {/* Stat cards fade up */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[['Spot ratio','86%'],['Eviction','0.34%'],['Min regular','4']].map(([k,v], i) => (
          <div key={k} className="rounded-lg p-3 ring-soft hcard" style={{
            background:'var(--parchment)',
            opacity: inView ? 1 : 0,
            animation: inView ? `fadeSlideUp 0.5s ease ${0.8 + i * 0.1}s both` : 'none',
          }}>
            <div className="eyebrow">{k}</div>
            <div className="serif text-[22px] mt-0.5">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
