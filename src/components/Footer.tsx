import { motion } from 'framer-motion';
import { footerContactMethods, footerSocialLinks } from '@/data/contacts';
import { footerData } from '@/data/site';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-11 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-9 grid grid-cols-1 gap-10 md:mb-10 md:grid-cols-4 md:gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <img
                src="/brand/logo-compass.png"
                alt="Stalar Vision Logo"
                className="h-10 w-10 shrink-0 object-contain drop-shadow-[0_4px_10px_rgba(15,23,42,0.38)]"
              />
              <span className="text-[1.08rem] font-semibold tracking-tight text-white sm:text-xl">
                {footerData.brandName}
              </span>
            </div>
            <p className="mb-5 max-w-sm text-sm leading-relaxed text-slate-400 sm:text-[1.01rem]">
              {footerData.description}
            </p>
            <div className="mb-5 space-y-1 text-sm text-slate-500">
              <p>{footerData.legalName}</p>
              <p>{footerData.taxIdLabel}</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {footerSocialLinks.map((link) => (
                link.href ? (
                  <motion.a
                    key={link.label}
                    whileHover={{ y: -2 }}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-colors hover:border-slate-700 hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                    aria-label={link.label}
                  >
                    <link.icon size={18} />
                  </motion.a>
                ) : (
                  <span
                    key={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-500"
                    aria-label={link.label}
                  >
                    <link.icon size={18} />
                  </span>
                )
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-white">
              {footerData.navigationTitle}
            </h4>
            <ul className="space-y-2.5">
              {footerData.navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <h5 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white">
                {footerData.documentsTitle}
              </h5>
              <ul className="space-y-2.5">
                {footerData.documentLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 transition-colors hover:text-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-white">
              {footerData.contactTitle}
            </h4>
            <ul className="space-y-3.5">
              {footerContactMethods.map((method) => (
                <li key={method.label} className="flex items-start gap-3 text-slate-400">
                  <method.icon size={17} className="mt-1 shrink-0 text-indigo-500" />
                  <div className="min-w-0">
                    <div className="mb-0.5 text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      {method.label}
                    </div>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="break-all text-sm transition-colors hover:text-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70 sm:break-normal"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="text-sm">{method.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-2 border-t border-slate-800/70 pt-7 text-sm text-slate-500 md:flex-row md:items-center">
          <p>© {currentYear} {footerData.brandName}. {footerData.rightsLabel}</p>
          <p className="text-slate-500/90">{footerData.signature}</p>
        </div>
      </div>
    </footer>
  );
};
