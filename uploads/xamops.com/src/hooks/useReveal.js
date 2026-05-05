import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Reveals .reveal-line > span (translateY 110% → 0) and [data-fade] (y+opacity)
 * inside `ref` when the section enters the viewport.
 */
export function useReveal(ref, opts = {}) {
  useLayoutEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const lines = ref.current.querySelectorAll('.reveal-line > span');
      if (lines.length) {
        gsap.fromTo(lines, { y: '110%' }, {
          y: '0%', duration: 1.05, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: ref.current, start: opts.start || 'top 80%', invalidateOnRefresh: true },
        });
      }
      const fades = ref.current.querySelectorAll('[data-fade]');
      if (fades.length) {
        gsap.fromTo(fades, { y: 24, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: ref.current, start: opts.start || 'top 80%', invalidateOnRefresh: true },
        });
      }
    }, ref);
    return () => ctx.revert();
  }, []);
}
