import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';

export default function NotFoundPage() {
  return (
    <section className="sec-light pt-[140px] pb-24">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="eyebrow">404</div>
        <h1 className="serif text-[clamp(40px,6vw,84px)] leading-[1.02] mt-3">Page not found.</h1>
        <p className="mt-4 text-[17px]" style={{ color: 'var(--olive)' }}>That URL drifted. Our drift detection has been notified.</p>
        <Link to="/" className="btn-primary mt-8 inline-flex">Back home <Icon.Arrow width="14" height="14"/></Link>
      </div>
    </section>
  );
}
