export default function Logo({ size = 28 }) {
  return (
    <div className="flex items-center gap-2.5" style={{ color: 'var(--ink)' }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M3 4l6 8-6 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 4l-6 8 6 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="2" fill="#7c5cff"/>
      </svg>
      <span className="serif text-[22px] tracking-tight">XamOps</span>
    </div>
  );
}
