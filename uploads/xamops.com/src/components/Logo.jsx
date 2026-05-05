import React from 'react';

export default function Logo({ dark = false, size = 22 }) {
  const fg = dark ? '#faf9f5' : '#141413';
  const accent = '#c96442';
  return (
    <div className="flex items-center gap-2">
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M3 4l6 8-6 8" stroke={fg} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 4l-6 8 6 8" stroke={fg} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2" fill={accent} />
      </svg>
      <span className="serif text-[18px] tracking-tight" style={{ color: fg }}>XamOps</span>
    </div>
  );
}
