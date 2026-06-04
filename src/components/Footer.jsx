import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-walnut/10 bg-[#f3ece1] px-4 py-10 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-[0.24em] text-walnut">KRISCEL HANDICRAFT</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-walnut/70">
            A cinematic showcase of handcrafted objects, built to feel like a private gallery.
          </p>
        </div>
        <div className="grid gap-2 text-sm text-walnut/75">
          <Link to="/collections">Collections</Link>
          <Link to="/artisans">Artisans</Link>
          <Link to="/craft-process">Craft Process</Link>
          <Link to="/gallery">Gallery</Link>
        </div>
        <div className="text-sm text-walnut/70">
          <p>Studio Hours</p>
          <p className="mt-2">Mon - Sat, 10:00 - 19:00</p>
          <p className="mt-4">Built as a frontend-only luxury experience.</p>
        </div>
      </div>
    </footer>
  );
}
