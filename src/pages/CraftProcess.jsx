import { processStages } from '../data/catalog';

export default function CraftProcess() {
  return (
    <main className="px-4 pb-20 pt-28 md:px-6">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.5em] text-bronze">Craft Process</p>
          <h1 className="mt-4 font-display text-5xl text-walnut md:text-7xl">A slow, cinematic journey from idea to object.</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-walnut/70">
            This page is intentionally paced like a magazine feature, with each stage receiving its own visual weight.
          </p>
        </div>
        <div className="grid gap-4">
          {processStages.map((stage, index) => (
            <section key={stage.step} className="grid gap-4 rounded-[2rem] border border-walnut/10 bg-white/65 p-6 shadow-luxury md:grid-cols-[160px_1fr] md:items-center">
              <div className="font-display text-4xl text-bronze">{String(index + 1).padStart(2, '0')}</div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-bronze">{stage.step}</p>
                <h2 className="mt-2 font-display text-3xl text-walnut">{stage.title}</h2>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
