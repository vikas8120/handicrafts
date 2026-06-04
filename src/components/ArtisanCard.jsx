import { motion } from 'framer-motion';

export default function ArtisanCard({ artisan }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="grid overflow-hidden rounded-[2rem] border border-walnut/10 bg-white/60 shadow-luxury backdrop-blur-sm md:grid-cols-[0.9fr_1.1fr]"
    >
      <div className="min-h-[320px]">
        {artisan.portfolio?.length ? (
          <div className="grid h-full grid-cols-2 gap-2 p-2">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img src={artisan.portfolio[0]} alt={`${artisan.name} artwork 1`} className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-[1.5rem]">
              <img src={artisan.portfolio[1] || artisan.portfolio[0]} alt={`${artisan.name} artwork 2`} className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-[1.5rem]">
              <img src={artisan.portfolio[2] || artisan.portfolio[0]} alt={`${artisan.name} artwork 3`} className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-[1.5rem]">
              <img src={artisan.portfolio[3] || artisan.portfolio[0]} alt={`${artisan.name} artwork 4`} className="h-full w-full object-cover" />
            </div>
          </div>
        ) : (
          <img src={artisan.portrait} alt={artisan.name} className="h-full w-full object-cover" />
        )}
      </div>
      <div className="flex flex-col justify-between p-6 md:p-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-bronze">{artisan.specialty}</p>
          <h3 className="mt-3 font-display text-4xl text-walnut">{artisan.name}</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-walnut/75">{artisan.story}</p>
        </div>
        <div className="mt-6 border-t border-walnut/10 pt-4 text-sm text-walnut/70">
          <p className="uppercase tracking-[0.22em] text-walnut/50">Recognition</p>
          <p className="mt-2">{artisan.award}</p>
        </div>
      </div>
    </motion.article>
  );
}
