import { useEffect } from 'react';

export function useGSAPAnimations(pathname) {
  useEffect(() => {
    let cleanup = () => {};
    let mounted = true;

    import('gsap').then(({ gsap }) =>
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        if (!mounted) return;
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          gsap.utils.toArray('[data-reveal]').forEach((el) => {
            gsap.fromTo(
              el,
              { y: 36, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 86%',
                },
              },
            );
          });

          gsap.utils.toArray('[data-parallax]').forEach((el) => {
            gsap.to(el, {
              yPercent: -8,
              ease: 'none',
              scrollTrigger: {
                trigger: el.parentElement || el,
                scrub: true,
              },
            });
          });

          gsap.utils.toArray('[data-count]').forEach((el) => {
            const target = Number(el.getAttribute('data-count'));
            const obj = { value: 0 };
            gsap.to(obj, {
              value: target,
              duration: 1.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                once: true,
              },
              onUpdate: () => {
                el.textContent = `${Math.round(obj.value)}${el.dataset.suffix || ''}`;
              },
            });
          });
        });

        cleanup = () => ctx.revert();
      }),
    );

    return () => {
      mounted = false;
      cleanup();
    };
  }, [pathname]);
}
