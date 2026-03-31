import { motion } from 'framer-motion';
import { trustSection } from '@/data/site';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-4">
            {trustSection.eyebrow}
          </h2>
          <h3 className="text-4xl font-bold text-white tracking-tight">
            {trustSection.title}
          </h3>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto mt-6">
            {trustSection.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trustSection.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl relative group hover:border-indigo-500/50 transition-all"
            >
              <item.icon className="absolute top-6 right-8 text-indigo-500/10 group-hover:text-indigo-500/20 transition-colors" size={60} />

              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                <item.icon size={24} />
              </div>

              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-slate-300 mb-8 leading-relaxed">{item.description}</p>
              <div className="pt-4 border-t border-slate-800 text-xs uppercase tracking-wider font-medium text-slate-500">
                {item.note}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 max-w-4xl mx-auto p-6 rounded-3xl border border-slate-800 bg-slate-900/40 text-center text-slate-300 leading-relaxed">
          {trustSection.summary}
        </div>
      </div>
    </section>
  );
}
