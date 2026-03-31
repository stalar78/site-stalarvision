import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { footerContactMethods, footerSocialLinks } from '@/data/contacts';
import { footerData } from '@/data/site';

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
              <span className="text-xl font-bold text-white tracking-tight">
                {footerData.brandName}
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              {footerData.description}
            </p>
            <div className="mb-6 space-y-1 text-sm text-slate-500">
              <p>{footerData.legalName}</p>
              <p>{footerData.taxIdLabel}</p>
            </div>
            <div className="flex space-x-4">
              {footerSocialLinks.map((link) => (
                link.href ? (
                  <motion.a
                    key={link.label}
                    whileHover={{ y: -2 }}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </motion.a>
                ) : (
                  <span
                    key={link.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 text-slate-500"
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </span>
                )
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              {footerData.navigationTitle}
            </h4>
            <ul className="space-y-4">
              {footerData.navigationLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-indigo-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h5 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
                {footerData.documentsTitle}
              </h5>
              <ul className="space-y-4">
                {footerData.documentLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-indigo-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              {footerData.contactTitle}
            </h4>
            <ul className="space-y-4">
              {footerContactMethods.map((method) => (
                <li key={method.label} className="flex items-start space-x-3 text-slate-400">
                  <method.icon size={18} className="mt-1 flex-shrink-0 text-indigo-500" />
                  {method.href ? (
                    <a
                      href={method.href}
                      className="hover:text-indigo-400 transition-colors"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span>{method.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {currentYear} {footerData.brandName}. {footerData.rightsLabel}</p>
          <p className="mt-4 md:mt-0">{footerData.signature}</p>
        </div>
      </div>
    </footer>
  );
};
