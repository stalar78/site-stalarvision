import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { mobileMenuSocialLinks, navbarSocialLinks } from '@/data/contacts';
import { navbarData } from '@/data/site';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 sm:py-4 glass border-b' : 'py-4 sm:py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.a 
            href={navbarData.brand.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex min-w-0 items-center gap-2 group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 transition-transform duration-300 group-hover:rotate-12 sm:h-10 sm:w-10">
              <Terminal size={24} />
            </div>
            <span className="truncate text-lg font-bold tracking-tight text-white sm:text-xl">
              {navbarData.brand.name}
              <span className="text-indigo-500">{navbarData.brand.accent}</span>
            </span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navbarData.links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="h-6 w-px bg-slate-800" />
            <div className="flex items-center gap-4">
              {navbarSocialLinks.map((link) => (
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </a>
                ) : (
                  <span
                    key={link.label}
                    className="text-slate-500"
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </span>
                )
              ))}
              <a 
                href={navbarData.desktopCta.href}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20"
              >
                {navbarData.desktopCta.label}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="md:hidden glass border-b border-white/5 overflow-hidden"
          >
            <div className="space-y-4 px-4 pb-6 pt-4">
              {navbarData.links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-semibold text-slate-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <a 
                  href={navbarData.mobileCta.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 bg-indigo-600 text-white text-center font-bold rounded-xl"
                >
                  {navbarData.mobileCta.label}
                </a>
                <div className="flex justify-center gap-5 py-2">
                  {mobileMenuSocialLinks.map((link) => (
                    link.href ? (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-slate-400"
                        aria-label={link.label}
                      >
                        <link.icon size={24} />
                      </a>
                    ) : (
                      <span
                        key={link.label}
                        className="text-slate-500"
                        aria-label={link.label}
                      >
                        <link.icon size={24} />
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
  );
}
