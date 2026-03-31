import { motion } from 'framer-motion';
import { trustSection } from '@/data/site';

export function Testimonials() {
  return (
    <section id="testimonials" className="overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-4">
            {trustSection.eyebrow}
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {trustSection.title}
          </h3>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {trustSection.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 sm:gap-8">
          {trustSection.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-indigo-500/50 sm:p-8"
            >
              <item.icon className="absolute top-6 right-8 text-indigo-500/10 group-hover:text-indigo-500/20 transition-colors" size={60} />

              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                <item.icon size={24} />
              </div>

              <h4 className="mb-3 text-lg font-bold text-white sm:text-xl">{item.title}</h4>
              <p className="mb-8 text-sm leading-relaxed text-slate-300 sm:text-base">{item.description}</p>
              <div className="border-t border-slate-800 pt-4 text-[10px] font-medium uppercase tracking-[0.24em] text-slate-500 sm:text-xs">
                {item.note}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-slate-800 bg-slate-900/40 p-5 text-center text-sm leading-relaxed text-slate-300 sm:p-6 sm:text-base">
          {trustSection.summary}
        </div>
      </div>
    </section>
  );
}
