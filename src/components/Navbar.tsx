import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { mobileMenuSocialLinks, navbarSocialLinks } from '@/data/contacts';
import { navbarData } from '@/data/site';
import { scrollToCurrentHashWithRetry } from '@/lib/hashScroll';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMobileMenuNavigation = (href: string) => {
    setIsOpen(false);

    const isHashLink = href.startsWith('/#') || href.startsWith('#');
    if (!isHashLink) {
      return;
    }

    window.setTimeout(() => {
      scrollToCurrentHashWithRetry({ behavior: 'smooth' });
    }, 220);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled
          ? 'py-2.5 sm:py-3.5 glass border-b border-white/10 shadow-[0_12px_30px_-24px_rgba(2,6,23,0.9)]'
          : 'py-4 sm:py-5 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-12 items-center justify-between sm:min-h-14">
            <motion.a
              href={navbarData.brand.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={shouldReduceMotion ? undefined : { y: -1 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="group flex min-w-0 items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
            >
              <motion.span
                whileHover={shouldReduceMotion ? undefined : { rotate: 12, y: -1, scale: 1.02 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative flex h-9 w-9 shrink-0 items-center justify-center sm:h-10 sm:w-10"
              >
                <motion.span
                  aria-hidden="true"
                  animate={shouldReduceMotion ? undefined : { opacity: [0.14, 0.28, 0.14], scale: [0.95, 1.08, 0.95] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                  style={shouldReduceMotion ? { opacity: 0.16 } : undefined}
                  className="pointer-events-none absolute inset-[34%] rounded-full bg-cyan-300/35 blur-[6px]"
                />
                <img
                  src="/brand/logo-compass.png"
                  alt="Stalar Vision Logo"
                  className="relative z-10 h-9 w-9 object-contain drop-shadow-[0_4px_10px_rgba(15,23,42,0.4)] transition-transform duration-300 group-hover:scale-[1.03] sm:h-10 sm:w-10"
                />
              </motion.span>
              <span className="truncate text-[1.04rem] font-semibold tracking-tight text-white sm:text-[1.12rem]">
                {navbarData.brand.name}
                <span className="text-indigo-500">{navbarData.brand.accent}</span>
              </span>
            </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navbarData.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-lg px-2 py-1 text-sm font-medium text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
              >
                {link.name}
              </a>
            ))}
            <div className="h-5 w-px bg-slate-800" />
            <div className="flex items-center gap-3">
              {navbarSocialLinks.map((link) => (
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-transparent text-slate-400 transition-colors hover:border-slate-700 hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                    aria-label={`Открыть ${link.label}`}
                  >
                    <link.icon size={18} />
                  </a>
                ) : (
                  <span
                    key={link.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500"
                    aria-label={link.label}
                  >
                    <link.icon size={18} />
                  </span>
                )
              ))}
              <a
                href={navbarData.desktopCta.href}
                className="rounded-xl border border-indigo-400/30 bg-indigo-600/95 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
              >
                {navbarData.desktopCta.label}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-lg border border-slate-800 bg-slate-900/70 p-2 text-slate-300 transition-colors hover:border-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-b border-white/10 glass"
          >
            <div className="space-y-3 px-4 pb-5 pt-3">
              {navbarData.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleMobileMenuNavigation(link.href)}
                  className="block rounded-xl px-3 py-2 text-[0.98rem] font-medium text-slate-200 transition-colors hover:bg-slate-900/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 border-t border-white/5 pt-4">
                <a
                  href={navbarData.mobileCta.href}
                  onClick={() => handleMobileMenuNavigation(navbarData.mobileCta.href)}
                  className="w-full rounded-xl border border-indigo-400/30 bg-indigo-600/95 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                >
                  {navbarData.mobileCta.label}
                </a>
                <div className="flex justify-center gap-3 py-1">
                  {mobileMenuSocialLinks.map((link) => (
                    link.href ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-slate-400 transition-colors hover:border-slate-700 hover:text-white"
                        aria-label={`Открыть ${link.label}`}
                      >
                        <link.icon size={20} />
                      </a>
                    ) : (
                      <span
                        key={link.label}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-slate-500"
                        aria-label={link.label}
                      >
                        <link.icon size={20} />
                      </span>
                    )
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </header>
  );
}
