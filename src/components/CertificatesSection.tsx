import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { certificates } from '@/data/certificates';
import type { Certificate } from '@/data/certificates';

export function CertificatesSection() {
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const openerButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const activeCertificateIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!activeCertificate) {
      return;
    }

    activeCertificateIdRef.current = activeCertificate.id;
    const previousBodyOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveCertificate(null);
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      const openerButton = activeCertificateIdRef.current
        ? openerButtonRefs.current[activeCertificateIdRef.current]
        : null;

      openerButton?.focus();
      activeCertificateIdRef.current = null;
    };
  }, [activeCertificate]);

  return (
    <section id="certificates" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 max-w-3xl sm:mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Подтверждённые компетенции
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            Часть технических навыков дополнительно подтверждена внешней системой оценки и
            дополняет практический опыт в проектах.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3 sm:gap-6">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 transition-colors hover:border-indigo-500/35"
            >
              <button
                type="button"
                ref={(element) => {
                  openerButtonRefs.current[certificate.id] = element;
                }}
                onClick={() => setActiveCertificate(certificate)}
                className="relative block aspect-[4/3] overflow-hidden border-b border-slate-800 bg-slate-950 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-300/70"
                aria-label={`Открыть сертификат ${certificate.title}`}
              >
                <img
                  src={certificate.image}
                  alt={certificate.alt}
                  loading="lazy"
                  className="h-full w-full object-contain p-3 transition duration-300 group-hover:opacity-95"
                />
                <span className="absolute bottom-3 right-3 rounded-lg border border-white/10 bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
                  Открыть
                </span>
              </button>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-white">{certificate.title}</h3>
                  <span className="rounded-lg border border-indigo-400/20 bg-indigo-500/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-indigo-200">
                    {certificate.level}
                  </span>
                </div>

                <dl className="mt-auto grid gap-3 text-sm">
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                      Тип подтверждения
                    </dt>
                    <dd className="mt-1 text-slate-300">{certificate.scope}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                      Дата подтверждения
                    </dt>
                    <dd className="mt-1 text-slate-300">{certificate.confirmedAt}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                      ID сертификата
                    </dt>
                    <dd className="mt-1 font-mono text-xs text-slate-400">{certificate.certificateId}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                      Действителен до
                    </dt>
                    <dd className="mt-1 text-slate-300">{certificate.validUntil}</dd>
                  </div>
                </dl>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {activeCertificate ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 py-6 backdrop-blur-sm sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-dialog-title"
          onMouseDown={() => setActiveCertificate(null)}
        >
          <div
            className="relative max-h-full w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-800 px-4 py-3 sm:px-5">
              <div>
                <h3 id="certificate-dialog-title" className="text-base font-semibold text-white sm:text-lg">
                  {activeCertificate.title}
                </h3>
                <p className="text-xs text-slate-400 sm:text-sm">
                  {activeCertificate.scope} · {activeCertificate.level}
                </p>
              </div>
              <button
                type="button"
                ref={closeButtonRef}
                onClick={() => setActiveCertificate(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-700 text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                aria-label="Закрыть увеличенное изображение сертификата"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-[calc(100vh-9rem)] overflow-auto bg-slate-900/40 p-3 sm:p-4">
              <img
                src={activeCertificate.image}
                alt={activeCertificate.alt}
                loading="lazy"
                className="mx-auto max-h-[calc(100vh-11rem)] w-auto max-w-full rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
