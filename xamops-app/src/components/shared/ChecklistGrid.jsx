import { Icon } from '../Icons';

export default function ChecklistGrid({ items, dark }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 text-[14px] leading-[1.55]"
          style={{ color: dark ? 'var(--olive-2)' : 'var(--olive)' }}
        >
          <Icon.Check width="14" height="14" style={{ marginTop: 4, color: 'var(--moss)', flexShrink: 0 }} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
