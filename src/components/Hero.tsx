import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { heroSection } from '@/data/site';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pt-20 pb-12 sm:pt-24 sm:pb-16">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 sm:mb-6 sm:text-sm">
              <heroSection.badge.icon size={14} className="fill-indigo-400" />
              <span>{heroSection.badge.text}</span>
            </div>

            <h1 className="mb-5 break-words text-4xl font-extrabold leading-[1.05] text-white sm:mb-6 sm:text-5xl sm:leading-tight md:text-7xl">
              {heroSection.title.lead}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {heroSection.title.accent}
              </span>{' '}
              {heroSection.title.tail}
            </h1>

            <p className="mb-8 max-w-2xl break-words text-base leading-relaxed text-slate-400 sm:mb-10 sm:max-w-xl sm:text-lg md:text-xl">
              {heroSection.description}
            </p>

            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={heroSection.actions.primary.href}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-4 font-bold text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all hover:bg-indigo-700 hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] sm:w-auto sm:px-8"
              >
                {heroSection.actions.primary.label}
                <ArrowRight size={20} />
              </a>
              <a
                href={heroSection.actions.secondary.href}
                className="flex w-full items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 px-6 py-4 font-bold text-white transition-all hover:border-slate-700 sm:w-auto sm:px-8"
              >
                {heroSection.actions.secondary.label}
              </a>
            </div>

            <p className="mb-10 max-w-xl text-sm leading-relaxed text-slate-500 sm:mb-12">
              {heroSection.actions.note}
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              {heroSection.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-slate-400 sm:items-center">
                  <item.icon size={18} className="mt-0.5 shrink-0 text-indigo-500 sm:mt-0" />
                  <span className="text-sm font-medium leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 bg-slate-900/50 backdrop-blur-2xl border border-slate-800 p-4 rounded-3xl shadow-2xl">
              <div className="flex items-center gap-2 mb-4 px-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-2 px-3 py-1 rounded-md bg-slate-800 text-slate-500 text-[10px] font-mono">
                  {heroSection.codeWindowLabel}
                </div>
              </div>
              <pre className="p-4 rounded-xl bg-slate-950 font-mono text-sm leading-relaxed overflow-hidden">
                <code className="text-indigo-400">
                  {heroSection.codeSnippet}
                </code>
              </pre>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-10 -right-10 p-6 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest">
                    {heroSection.floatingCards.conversion.label}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {heroSection.floatingCards.conversion.value}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              className="absolute -bottom-6 -left-10 p-6 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-500">
                  <heroSection.floatingCards.launch.icon size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest">
                    {heroSection.floatingCards.launch.label}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {heroSection.floatingCards.launch.value}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
