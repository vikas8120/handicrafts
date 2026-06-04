import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import MagneticButton from './MagneticButton';

const links = [
  ['Collections', '/collections'],
  ['Artisans', '/artisans'],
  ['Process', '/craft-process'],
  ['Gallery', '/gallery'],
  ['Contact', '/contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 py-3 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center gap-4 rounded-[1.75rem] border border-white/55 bg-white/80 px-4 py-3 shadow-[0_18px_50px_rgba(75,52,37,0.12)] backdrop-blur-2xl md:px-6">
        <Link to="/" className="flex shrink-0 flex-col leading-none text-walnut">
          <span className="font-display text-[0.95rem] tracking-[0.24em] md:text-[1.05rem]">KRISCEL</span>
          <span className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.42em] text-walnut/65">Handicraft</span>
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium text-walnut/70 md:flex">
          {links.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) => `${isActive ? 'text-walnut' : ''} transition hover:text-walnut`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden shrink-0 md:block">
          <MagneticButton href="/collections">Explore Collection</MagneticButton>
        </div>
        <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-walnut/10 bg-ivory text-walnut md:hidden">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/92 p-5 shadow-[0_18px_50px_rgba(75,52,37,0.12)] backdrop-blur-2xl md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4">
              {links.map(([label, href]) => (
                <NavLink key={href} to={href} onClick={() => setOpen(false)} className="text-lg text-walnut">
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
