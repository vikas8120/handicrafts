import { motion } from 'framer-motion';
import Hero3DObject from './Hero3DObject';

const messages = ['Preparing Masterpieces...', 'Curating Artistry...', 'Crafting Luxury...', 'Opening The Gallery...'];

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ivory px-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 text-center">
        <div className="w-full max-w-2xl">
          <Hero3DObject />
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.5em] text-brown-500 text-walnut/60">KRISCEL HANDICRAFT</p>
          <h1 className="font-display text-4xl tracking-tight text-walnut md:text-6xl">Luxury is assembling.</h1>
          <div className="h-px w-56 overflow-hidden rounded-full bg-walnut/10">
            <motion.div
              className="h-full w-full origin-left bg-gradient-to-r from-bronze via-copper to-beige"
              initial={{ scaleX: 0.08 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.4, ease: 'easeInOut' }}
            />
          </div>
        </div>
        <div className="grid gap-2 text-sm uppercase tracking-[0.3em] text-walnut/55 md:grid-cols-2">
          {messages.map((message, index) => (
            <motion.p
              key={message}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.45, duration: 0.55 }}
            >
              {message}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
