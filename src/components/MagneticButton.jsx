import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function MagneticButton({ children, className = '', href, onClick, variant = 'dark' }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18 });
  const springY = useSpring(y, { stiffness: 260, damping: 18 });
  const rotateX = useTransform(springY, [-16, 16], [8, -8]);
  const rotateY = useTransform(springX, [-16, 16], [-8, 8]);

  const content = (
    <motion.span
      style={{ x: springX, y: springY, rotateX, rotateY }}
      className={`inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-transform will-change-transform ${
        variant === 'light'
          ? 'border-walnut/10 bg-white/85 text-walnut shadow-[0_8px_24px_rgba(91,69,54,0.08)] backdrop-blur-md hover:bg-white'
          : 'border-walnut/15 bg-walnut text-ivory hover:bg-charcoal'
      } ${className}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) / 5);
        y.set((e.clientY - rect.top - rect.height / 2) / 5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
