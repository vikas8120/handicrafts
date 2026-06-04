import { motion } from 'framer-motion';

export default function CollectionCard({ item, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
      className="group relative overflow-hidden rounded-[2rem] border border-walnut/10 bg-white/60 p-4 text-left shadow-luxury backdrop-blur-sm"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem]">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.35em] text-bronze">{item.category}</p>
      <h3 className="mt-2 font-display text-2xl text-walnut">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-walnut/70">{item.note}</p>
    </motion.button>
  );
}
