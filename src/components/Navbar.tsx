import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Github, Send } from 'lucide-react';

const navLinks = [
  { name: 'Услуги', href: '#services' },
  { name: 'Обо мне', href: '#about' },
  { name: 'Портфолио', href: '#portfolio' },
  { name: 'Этапы', href: '#process' },
  { name: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-indigo-500/20">
              <Terminal size={24} />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Alex<span className="text-indigo-500">.dev</span>
            </span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a 
                href="#contact" 
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20"
              >
                Связаться
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
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-slate-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 bg-indigo-600 text-white text-center font-bold rounded-xl"
                >
                  Обсудить проект
                </a>
                <div className="flex justify-center gap-6 py-2">
                  <a href="#" className="text-slate-400"><Github size={24} /></a>
                  <a href="#" className="text-slate-400"><Send size={24} /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
