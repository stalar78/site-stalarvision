import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { footerContactMethods, footerSocialLinks } from '@/data/contacts';
import { footerData } from '@/data/site';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-indigo-500" />
              <span className="text-xl font-bold text-white tracking-tight">
                {footerData.brandName}
              </span>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-400 sm:text-base">
              {footerData.description}
            </p>
            <div className="mb-6 space-y-1 text-sm text-slate-500">
              <p>{footerData.legalName}</p>
              <p>{footerData.taxIdLabel}</p>
            </div>
            <div className="flex flex-wrap gap-3">
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
            <ul className="space-y-3">
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
              <ul className="space-y-3">
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
            <ul className="space-y-3">
              {footerContactMethods.map((method) => (
                <li key={method.label} className="flex items-start space-x-3 text-slate-400">
                  <method.icon size={18} className="mt-1 flex-shrink-0 text-indigo-500" />
                  {method.href ? (
                    <a
                      href={method.href}
                      className="break-all hover:text-indigo-400 transition-colors sm:break-normal"
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

        <div className="flex flex-col items-start justify-between gap-2 border-t border-slate-900 pt-8 text-sm text-slate-500 md:flex-row md:items-center">
          <p>© {currentYear} {footerData.brandName}. {footerData.rightsLabel}</p>
          <p>{footerData.signature}</p>
        </div>
      </div>
    </footer>
  );
};
