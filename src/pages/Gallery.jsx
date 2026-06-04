import { useState } from 'react';
import { gallery } from '../data/catalog';
import GalleryModal from '../components/GalleryModal';

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <main className="px-4 pb-20 pt-28 md:px-6">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.5em] text-bronze">Gallery</p>
          <h1 className="mt-4 font-display text-5xl text-walnut md:text-7xl">Immersive image reveals with luxury modal transitions.</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {gallery.map((item) => (
            <button key={item.id} type="button" onClick={() => setActive(item)} className="group overflow-hidden rounded-[2rem] border border-walnut/10 bg-white/65 text-left shadow-luxury">
              <img src={item.image} alt={item.title} className="h-[460px] w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="p-6">
                <h2 className="font-display text-3xl text-walnut">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-walnut/70">{item.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <GalleryModal item={active} onClose={() => setActive(null)} />
    </main>
  );
}
