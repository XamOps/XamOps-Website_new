import PageHero from './PageHero';
import CTABanner from './CTABanner';
import Steps from './Steps';
import Cloud3 from './Cloud3';
import FeatureGrid from './FeatureGrid';

export default function ProductPage({ eyebrow, title, body, Visual, dark, steps, features, clouds, cta }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} body={body} />
      <section className="sec-light pb-16">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10"><Visual /></div>
      </section>
      {steps && <Steps steps={steps} dark={dark} />}
      {clouds && <Cloud3 items={clouds} />}
      {features && <FeatureGrid items={features} dark={!dark} />}
      <CTABanner heading={cta} />
    </>
  );
}
