import { Github, Telegram, Mail, Linkedin, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-8 h-8 text-indigo-500" />
              <span className="text-xl font-bold text-white tracking-tight">DevPortfolio</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Разрабатываю современные цифровые решения для бизнеса. 
              Фокус на качестве, производительности и результате, который приносит прибыль.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -2 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <Telegram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="mailto:hello@example.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Навигация</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors">Услуги</a></li>
              <li><a href="#portfolio" className="text-slate-400 hover:text-indigo-400 transition-colors">Портфолио</a></li>
              <li><a href="#process" className="text-slate-400 hover:text-indigo-400 transition-colors">Этапы работы</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-indigo-400 transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Связь</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400">
                <Telegram size={18} className="mt-1 flex-shrink-0 text-indigo-500" />
                <span>@developer_nick</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-400">
                <Mail size={18} className="mt-1 flex-shrink-0 text-indigo-500" />
                <span>hello@example.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {currentYear} DevPortfolio. Все права защищены.</p>
          <p className="mt-4 md:mt-0">Разработано с ❤️ и кодом</p>
        </div>
      </div>
    </footer>
  );
};
