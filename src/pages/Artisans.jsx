import { artisans } from '../data/catalog';
import ArtisanCard from '../components/ArtisanCard';

export default function Artisans() {
  return (
    <main className="px-4 pb-20 pt-28 md:px-6">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.5em] text-bronze">Artisans</p>
          <h1 className="mt-4 font-display text-5xl text-walnut md:text-7xl">Portrait-led profiles for master makers.</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-walnut/70">
            The layout reads like a refined exhibition catalog with award context, discipline, and process all visible at a glance.
          </p>
        </div>
        <div className="grid gap-6">
          {artisans.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>
      </div>
    </main>
  );
}
