import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function GalleryModal({ item, onClose }) {
  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/75 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-ivory text-walnut shadow-2xl"
            initial={{ scale: 0.92, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/80" onClick={onClose}>
              <X size={18} />
            </button>
            <div className="grid gap-0 md:grid-cols-2">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              <div className="flex flex-col justify-between p-7 md:p-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-bronze">Collection Preview</p>
                  <h3 className="mt-3 font-display text-4xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-walnut/75">{item.caption}</p>
                </div>
                <p className="mt-8 text-sm uppercase tracking-[0.24em] text-walnut/50">Curated with museum-style presentation</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
