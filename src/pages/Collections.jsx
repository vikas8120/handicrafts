import { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { collections } from '../data/catalog';
import CollectionCard from '../components/CollectionCard';
import GalleryModal from '../components/GalleryModal';

const categories = ['All', ...new Set(collections.map((item) => item.category))];

export default function Collections() {
  const [category, setCategory] = useState(localStorage.getItem('kriscel:collectionCategory') || 'All');
  const [query, setQuery] = useState(localStorage.getItem('kriscel:collectionQuery') || '');
  const [active, setActive] = useState(null);

  useEffect(() => {
    localStorage.setItem('kriscel:collectionCategory', category);
  }, [category]);

  useEffect(() => {
    localStorage.setItem('kriscel:collectionQuery', query);
  }, [query]);

  const filtered = useMemo(() => {
    return collections.filter((item) => {
      const matchesCategory = category === 'All' || item.category === category;
      const matchesQuery = `${item.title} ${item.note} ${item.category}`.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <main className="px-4 pb-20 pt-28 md:px-6">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.5em] text-bronze">Collections</p>
          <h1 className="mt-4 font-display text-5xl text-walnut md:text-7xl">A curated house of handcrafted objects.</h1>
        </div>
        <div className="flex flex-col gap-4 rounded-[2rem] border border-walnut/10 bg-white/65 p-4 shadow-luxury md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-2 text-sm transition ${category === item ? 'bg-walnut text-ivory' : 'bg-white text-walnut'}`}
              >
                {item}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-3 rounded-full border border-walnut/10 bg-white px-4 py-3 text-walnut/60 md:w-96">
            <Search size={16} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search collections" className="w-full bg-transparent text-sm outline-none" />
          </label>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <CollectionCard key={item.id} item={item} onOpen={() => setActive(item)} />
          ))}
        </div>
      </div>
      <GalleryModal item={active} onClose={() => setActive(null)} />
    </main>
  );
}
