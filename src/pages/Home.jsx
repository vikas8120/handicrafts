import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { collections, gallery, materials, processStages, recognition, artisans, showcasePanels } from '../data/catalog';
import MagneticButton from '../components/MagneticButton';
import MaterialShowcase from '../components/MaterialShowcase';
import ArtisanCard from '../components/ArtisanCard';
import heroVideo from '../assets/videos/hero-artisan.mp4';

function SectionTitle({ eyebrow, title, copy }) {
  return (
    <div className="max-w-3xl" data-reveal>
      <p className="text-xs uppercase tracking-[0.5em] text-bronze">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-none text-walnut md:text-6xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-walnut/70 md:text-base">{copy}</p>
    </div>
  );
}

function ImageMosaic({ panels, eyebrow, title, copy }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
      <div className="space-y-8" data-reveal>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.5em] text-bronze">{eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl leading-none text-walnut md:text-6xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-walnut/70 md:text-base">{copy}</p>
        </div>
        <div className="rounded-[2rem] border border-walnut/10 bg-white/65 p-5 shadow-luxury">
          <p className="text-xs uppercase tracking-[0.35em] text-bronze">ExclusiveLane sourced imagery</p>
          <p className="mt-2 text-sm leading-7 text-walnut/75">These images are stored locally in the project and reused across all image-heavy sections.</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <motion.div whileHover={{ y: -6 }} className="overflow-hidden rounded-[2rem] border border-walnut/10 bg-white/60 shadow-luxury sm:row-span-2">
          <img src={panels[0].image} alt={panels[0].title} className="h-full w-full object-cover" />
          <div className="p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-bronze">{panels[0].title}</p>
            <p className="mt-2 text-sm leading-6 text-walnut/70">{panels[0].note}</p>
          </div>
        </motion.div>
        {panels.slice(1, 3).map((panel) => (
          <motion.div key={panel.title} whileHover={{ y: -6 }} className="overflow-hidden rounded-[2rem] border border-walnut/10 bg-white/60 shadow-luxury">
            <img src={panel.image} alt={panel.title} className="h-[250px] w-full object-cover" />
            <div className="p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-bronze">{panel.title}</p>
              <p className="mt-2 text-sm leading-6 text-walnut/70">{panel.note}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [material, setMaterial] = useState(materials[0].name);
  const selectedMaterial = useMemo(() => materials.find((m) => m.name === material) || materials[0], [material]);

  return (
    <main>
      <section className="relative isolate overflow-hidden px-4 pb-20 pt-28 md:px-6 md:pt-32">
        <div className="pointer-events-none absolute inset-0 z-0">
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="relative z-20 mx-auto grid min-h-[82svh] max-w-7xl items-center lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl space-y-8 py-12">
            <div className="inline-flex items-center gap-3 rounded-full border border-bronze/15 bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.35em] text-bronze shadow-luxury backdrop-blur">
              Luxury artisan gallery
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.5em] text-charcoal/65">KRISCEL HANDICRAFT</p>
              <h1 className="font-display text-6xl leading-[0.94] text-charcoal md:text-8xl">
                Handcrafted
                <span className="block text-[#1f140d]">Beyond Ordinary</span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-charcoal/85 md:text-lg">
                A cinematic digital house for master artisans, where every object is introduced like a museum-grade artifact and every section unfolds like a private exhibition.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <MagneticButton href="/collections">Explore Collection</MagneticButton>
              <MagneticButton href="/gallery" variant="light">View Gallery</MagneticButton>
            </div>
            <div className="grid gap-4 border-t border-walnut/10 pt-6 sm:grid-cols-3">
              {recognition.slice(0, 3).map((item) => (
                <div key={item.label}>
                  <p className="text-3xl font-semibold text-charcoal" data-count={item.value.replace('+', '')} data-suffix={item.value.includes('+') ? '+' : ''}>
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-charcoal/55">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr_0.9fr] lg:items-start">
          <div className="space-y-8" data-reveal>
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.5em] text-bronze">Master Craftsmanship</p>
              <h2 className="mt-4 font-display text-4xl leading-none text-walnut md:text-6xl">The hand remains visible in every surface.</h2>
              <p className="mt-4 text-sm leading-7 text-walnut/70 md:text-base">
                Each object is staged like an exhibit note, with the making process, the materials, and the final form all sharing the same visual authority.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-walnut/10 bg-white/70 p-5 shadow-luxury">
                <p className="text-xs uppercase tracking-[0.35em] text-bronze">Visible process</p>
                <p className="mt-3 text-sm leading-7 text-walnut/75">From sketch to finish, the human touch stays in view rather than being hidden behind polish.</p>
              </div>
              <div className="rounded-[1.6rem] border border-walnut/10 bg-white/70 p-5 shadow-luxury">
                <p className="text-xs uppercase tracking-[0.35em] text-bronze">Editorial pacing</p>
                <p className="mt-3 text-sm leading-7 text-walnut/75">Layout, spacing, and image scale are tuned to feel like a magazine spread, not a catalogue grid.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <MagneticButton href="/gallery">Open Gallery</MagneticButton>
              <MagneticButton href="/contact" variant="light">Request a Commission</MagneticButton>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <motion.div whileHover={{ y: -6 }} className="overflow-hidden rounded-[2rem] border border-walnut/10 bg-white/60 shadow-luxury sm:row-span-2">
              <img src={showcasePanels[0].image} alt={showcasePanels[0].title} className="h-[620px] w-full object-cover" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-bronze">{showcasePanels[0].title}</p>
                <p className="mt-2 text-sm leading-6 text-walnut/70">{showcasePanels[0].note}</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -6 }} className="overflow-hidden rounded-[2rem] border border-walnut/10 bg-white/60 shadow-luxury">
              <img src={showcasePanels[1].image} alt={showcasePanels[1].title} className="h-[280px] w-full object-cover" />
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-bronze">{showcasePanels[1].title}</p>
                <p className="mt-2 text-sm leading-6 text-walnut/70">{showcasePanels[1].note}</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -6 }} className="overflow-hidden rounded-[2rem] border border-walnut/10 bg-white/60 shadow-luxury">
              <img src={showcasePanels[2].image} alt={showcasePanels[2].title} className="h-[280px] w-full object-cover" />
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-bronze">{showcasePanels[2].title}</p>
                <p className="mt-2 text-sm leading-6 text-walnut/70">{showcasePanels[2].note}</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -6 }} className="overflow-hidden rounded-[2rem] border border-walnut/10 bg-white/60 shadow-luxury sm:col-span-2">
              <img src={showcasePanels[3].image} alt={showcasePanels[3].title} className="h-[220px] w-full object-cover" />
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-bronze">{showcasePanels[3].title}</p>
                <p className="mt-2 text-sm leading-6 text-walnut/70">{showcasePanels[3].note}</p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-4" data-reveal>
            <div className="rounded-[2rem] border border-walnut/10 bg-white/70 p-5 shadow-luxury">
              <p className="text-xs uppercase tracking-[0.35em] text-bronze">Process sequence</p>
              <p className="mt-2 text-sm leading-7 text-walnut/70">A tighter visual timeline keeps the section from feeling empty and makes the making process feel intentional.</p>
            </div>
            <div className="space-y-4 rounded-[2rem] border border-walnut/10 bg-white/65 p-5 shadow-luxury">
              {processStages.slice(0, 4).map((step, index) => (
                <div key={step.step} className="flex gap-4 border-b border-walnut/8 pb-4 last:border-b-0 last:pb-0">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bronze/12 text-sm font-semibold text-bronze">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-bronze">{step.step}</p>
                    <p className="mt-1 text-sm leading-7 text-walnut/75">{step.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-[2rem] bg-walnut p-5 text-ivory shadow-luxury">
              <p className="text-xs uppercase tracking-[0.35em] text-beige">Why it works</p>
              <p className="mt-3 text-sm leading-7 text-ivory/80">
                The section now has a stronger rhythm: intro, image story, and process proof. That removes the visual dead space you were seeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3ece1] px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Featured Collections"
            title="A horizontal gallery of objects, not a grid."
            copy="Scroll through museum-like object bays with large editorial framing and soft spatial transitions."
          />
          <div className="mt-10 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            {collections.map((item, index) => (
              <motion.article
                key={item.id}
                className="min-w-[82vw] snap-center overflow-hidden rounded-[2.5rem] border border-walnut/10 bg-white/65 shadow-luxury md:min-w-[56vw] lg:min-w-[38vw]"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <img src={item.image} alt={item.title} className="h-[560px] w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-bronze">{item.category}</p>
                  <h3 className="mt-2 font-display text-3xl text-walnut">{item.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl space-y-8">
          <SectionTitle
            eyebrow="Meet The Artisans"
            title="Portraits, awards, and a quiet sense of mastery."
            copy="Each profile is treated like a full-screen exhibition panel with enough breathing room to feel expensive and human."
          />
          <div className="grid gap-6">
            {artisans.map((artisan) => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3ece1] px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl space-y-8">
          <SectionTitle
            eyebrow="Materials Showcase"
            title="Touch, tone, grain, and density."
            copy="Select a material to change the mood of the panel and reveal its tactile character."
          />
          <MaterialShowcase materials={materials} selected={material} onSelect={setMaterial} />
          <div className="rounded-[2rem] border border-walnut/10 bg-white/70 p-8 shadow-luxury">
            <p className="text-xs uppercase tracking-[0.35em] text-bronze">Selected material</p>
            <h3 className="mt-3 font-display text-4xl text-walnut">{selectedMaterial.name}</h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-walnut/75">{selectedMaterial.description}</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <SectionTitle
              eyebrow="Craft Process"
              title="A quiet sequence from concept to packaging."
              copy="Every stage uses visual storytelling, premium spacing, and smooth motion to keep the experience cinematic."
            />
            <div className="space-y-4">
              {processStages.map((stage, index) => (
                <motion.div
                  key={stage.step}
                  className="rounded-[1.5rem] border border-walnut/10 bg-white/65 p-5 shadow-luxury"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-bronze">{String(index + 1).padStart(2, '0')} {stage.step}</p>
                  <p className="mt-2 font-display text-2xl text-walnut">{stage.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem] border border-walnut/10 bg-white/65 shadow-luxury md:row-span-2">
                <img src={showcasePanels[4].image} alt={showcasePanels[4].title} className="h-full w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-walnut/10 bg-white/65 shadow-luxury">
                <img src={showcasePanels[3].image} alt={showcasePanels[3].title} className="h-[240px] w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-walnut/10 bg-white/65 shadow-luxury">
                <img src={showcasePanels[5].image} alt={showcasePanels[5].title} className="h-[240px] w-full object-cover" />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[2rem] bg-walnut p-6 text-ivory">
                <p className="text-xs uppercase tracking-[0.35em] text-beige">Workflow note</p>
                <p className="mt-3 text-sm leading-7 text-ivory/80">The page intentionally moves like a magazine feature instead of a typical product walkthrough.</p>
              </div>
              <div className="rounded-[2rem] border border-walnut/10 bg-white/70 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-bronze">Motion system</p>
                <p className="mt-3 text-sm leading-7 text-walnut/75">Scroll-triggered reveals, soft parallax, and a calm transition rhythm reinforce the gallery mood.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3ece1] px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl space-y-8">
          <SectionTitle
            eyebrow="Luxury Gallery Preview"
            title="Large image reveals with polished hover depth."
            copy="The preview is designed to feel like an elegant exhibition teaser rather than a standard masonry layout."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {gallery.map((item) => (
              <motion.div key={item.id} whileHover={{ scale: 0.99 }} className="group overflow-hidden rounded-[2rem] border border-walnut/10 bg-white/60 shadow-luxury">
                <div className="overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl text-walnut">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-walnut/70">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-walnut px-6 py-14 text-ivory shadow-luxury md:px-10">
          <SectionTitle
            eyebrow="Global Recognition"
            title="Exhibitions, awards, and collector trust."
            copy="These counters and credentials anchor the brand in a premium, internationally credible world."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recognition.map((item, index) => (
              <div key={item.label} className="rounded-[1.6rem] border border-white/10 bg-white/8 p-5">
                <p className="text-4xl font-semibold" data-count={Number(item.value.replace(/[^0-9]/g, ''))} data-suffix={item.value.includes('+') ? '+' : ''}>
                  {item.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-beige/80">{item.label}</p>
                <p className="mt-4 text-sm leading-6 text-ivory/75">
                  {index === 0 && 'Decades of object-led practice have refined the visual language.'}
                  {index === 1 && 'Presented in luxury design showcases across multiple continents.'}
                  {index === 2 && 'A small but highly specialized group of makers powers the studio.'}
                  {index === 3 && 'Limited pieces crafted as collectible editions for discerning buyers.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-8 md:px-6">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-walnut/10 bg-[linear-gradient(135deg,#fffdf9_0%,#f1e7db_100%)] p-8 shadow-luxury md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-bronze">Contact CTA</p>
              <h2 className="mt-4 font-display text-5xl text-walnut md:text-7xl">Bring a masterpiece into your space.</h2>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <MagneticButton href="/contact">Start a Commission</MagneticButton>
              <MagneticButton href="/gallery" variant="light">Open Gallery</MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
