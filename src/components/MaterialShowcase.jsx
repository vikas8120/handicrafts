import { motion } from 'framer-motion';

export default function MaterialShowcase({ materials, selected, onSelect }) {
  return (
    <div className="grid gap-4 md:grid-cols-5">
      {materials.map((material, index) => {
        const active = selected === material.name;
        return (
          <motion.button
            key={material.name}
            type="button"
            onClick={() => onSelect(material.name)}
            className={`group relative overflow-hidden rounded-[2rem] border p-5 text-left shadow-luxury transition ${active ? 'border-transparent bg-walnut text-ivory' : 'border-walnut/10 bg-white/55 text-walnut'}`}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07, duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="mb-14 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.35em]" style={{ color: active ? '#f8f4ed' : material.color }}>
                {material.name}
              </span>
              <span className="h-3 w-3 rounded-full" style={{ background: material.color }} />
            </div>
            <div className="absolute inset-x-5 bottom-5 top-[60%] rounded-[1.5rem] bg-gradient-to-br from-white/30 to-transparent" style={{ borderColor: material.color }} />
            <p className="relative z-10 mt-8 text-sm leading-6 text-current/80">{material.description}</p>
          </motion.button>
        );
      })}
    </div>
  );
}
