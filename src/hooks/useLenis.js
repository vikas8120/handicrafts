import { useEffect } from 'react';

export function useLenis() {
  useEffect(() => {
    let rafId;
    let instance;

    import('lenis').then(({ default: Lenis }) => {
      instance = new Lenis({
        duration: 1.2,
        lerp: 0.08,
        smoothWheel: true,
      });

      const raf = (time) => {
        instance.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (instance) instance.destroy();
    };
  }, []);
}
