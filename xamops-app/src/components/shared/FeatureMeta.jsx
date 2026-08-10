import { PROVIDER_LABEL, STATUS_LABEL, STATUS_BADGE } from '../../lib/platform';

/**
 * Cloud coverage + release status for one capability.
 * Renders nothing when a capability is provider-agnostic and generally available.
 */
export default function FeatureMeta({ providers, status, className = '' }) {
  if (!providers?.length && !status) return null;
  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      {providers?.map((p) => (
        <span key={p} className="badge badge--muted">{PROVIDER_LABEL[p]}</span>
      ))}
      {status && (
        <span className={`badge ${STATUS_BADGE[status]}`}>{STATUS_LABEL[status]}</span>
      )}
    </div>
  );
}
