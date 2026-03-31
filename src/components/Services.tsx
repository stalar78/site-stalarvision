import { motion } from 'framer-motion';
import { servicesSection } from '@/data/services';

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {servicesSection.title.lead}{' '}
            <span className="text-indigo-500">{servicesSection.title.accent}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            {servicesSection.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesSection.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden bg-gradient-to-br ${service.color}`}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-indigo-600/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500 uppercase tracking-wider font-semibold">Подходит, если:</span>
                    <span className="text-slate-300">{service.forWhom}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500 uppercase tracking-wider font-semibold">На выходе:</span>
                    <span className="text-indigo-400 font-medium">{service.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
