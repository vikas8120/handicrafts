import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = () => setVisible(true);
    const out = () => setVisible(false);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerenter', over);
    window.addEventListener('pointerleave', out);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerenter', over);
      window.removeEventListener('pointerleave', out);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-10 w-10 rounded-full border border-bronze/40 bg-bronze/10 mix-blend-multiply backdrop-blur md:block"
      animate={{ x: pos.x - 20, y: pos.y - 20, opacity: visible ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 180, damping: 18, mass: 0.2 }}
    />
  );
}
