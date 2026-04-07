import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { heroSection } from '@/data/site';

const tokenPattern =
  /(".*?"|'.*?'|`.*?`|\bconst\b|\breturn\b|\bnew\b|\btrue\b|\bfalse\b|\bnull\b|[A-Za-z_$][\w$]*|[{}[\]().,:;])/g;

function getNeighborChar(line: string, index: number, direction: 'prev' | 'next') {
  if (direction === 'prev') {
    for (let i = index - 1; i >= 0; i -= 1) {
      if (!/\s/.test(line[i])) return line[i];
    }
    return '';
  }

  for (let i = index; i < line.length; i += 1) {
    if (!/\s/.test(line[i])) return line[i];
  }

  return '';
}

function getTokenClass(token: string, line: string, index: number) {
  const nextNonSpace = getNeighborChar(line, index + token.length, 'next');
  const prevNonSpace = getNeighborChar(line, index, 'prev');

  if (/^(const|return|new|true|false|null)$/.test(token)) {
    return 'text-fuchsia-300';
  }

  if (/^["'`]/.test(token)) {
    return 'text-emerald-300';
  }

  if (/^[{}[\]().,:;]$/.test(token)) {
    return 'text-cyan-300/90';
  }

  if (nextNonSpace === ':') {
    return 'text-sky-300';
  }

  if (nextNonSpace === '(') {
    return 'text-amber-300';
  }

  if (prevNonSpace === '.') {
    return 'text-violet-300';
  }

  return 'text-slate-100';
}

function renderCodeSnippet(snippet: string) {
  const lines = snippet.split('\n');

  return lines.map((line, lineIndex) => {
    let lastIndex = 0;
    const lineParts = [];

    for (const match of line.matchAll(tokenPattern)) {
      const token = match[0];
      const index = match.index ?? 0;

      if (index > lastIndex) {
        lineParts.push(
          <span key={`text-${lineIndex}-${lastIndex}`} className="text-slate-300/95">
            {line.slice(lastIndex, index)}
          </span>,
        );
      }

      lineParts.push(
        <span key={`token-${lineIndex}-${index}`} className={getTokenClass(token, line, index)}>
          {token}
        </span>,
      );

      lastIndex = index + token.length;
    }

    if (lastIndex < line.length) {
      lineParts.push(
        <span key={`tail-${lineIndex}-${lastIndex}`} className="text-slate-300/95">
          {line.slice(lastIndex)}
        </span>,
      );
    }

    return (
      <div key={`line-${lineIndex}`} className="min-h-[1.35em]">
        {lineParts.length > 0 ? lineParts : <span>&nbsp;</span>}
      </div>
    );
  });
}

export function Hero() {
  const fullSnippet = heroSection.codeSnippet.trimEnd();
  const [visibleLength, setVisibleLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const pauseOnComplete = 1200;
    const pauseOnEmpty = 280;
    const typingSpeed = 18;
    const deletingSpeed = 10;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && visibleLength < fullSnippet.length) {
          setVisibleLength((current) => current + 1);
          return;
        }

        if (!isDeleting && visibleLength === fullSnippet.length) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && visibleLength > 0) {
          setVisibleLength((current) => Math.max(0, current - 2));
          return;
        }

        setIsDeleting(false);
      },
      !isDeleting && visibleLength === fullSnippet.length
        ? pauseOnComplete
        : isDeleting && visibleLength === 0
          ? pauseOnEmpty
          : isDeleting
            ? deletingSpeed
            : typingSpeed,
    );

    return () => window.clearTimeout(timeout);
  }, [fullSnippet, isDeleting, visibleLength]);

  const animatedSnippet = fullSnippet.slice(0, visibleLength);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute top-0 right-0 h-[540px] w-[540px] -translate-y-1/4 translate-x-1/4 rounded-full bg-indigo-600/12 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[340px] w-[340px] translate-y-1/4 -translate-x-1/4 rounded-full bg-purple-600/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-12 xl:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] xl:gap-16 2xl:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="min-w-0 lg:pr-4 xl:pr-6"
          >
            <div className="max-w-[41rem] xl:max-w-[42rem]">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300 sm:mb-6 sm:text-sm">
                <heroSection.badge.icon size={14} className="text-indigo-400" />
                <span>{heroSection.badge.text}</span>
              </div>

              <h1 className="mb-5 max-w-[18.4ch] text-pretty text-4xl font-bold tracking-[-0.05em] leading-[0.97] text-slate-50 sm:mb-6 sm:max-w-[18.8ch] sm:text-[3.05rem] md:max-w-[19.2ch] md:text-[3.28rem] md:leading-[0.99] lg:max-w-[17.3ch] lg:text-[3.38rem] xl:max-w-[18.1ch] xl:text-[3.78rem]">
                <span className="block text-slate-50">{heroSection.title.lead}</span>
                <span className="mt-1 block bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {heroSection.title.accent}
                </span>
                <span className="mt-1 block max-w-[13.5ch] text-slate-100 sm:max-w-[14ch] xl:max-w-[14.4ch]">
                  {heroSection.title.tail}
                </span>
              </h1>

              <p className="mb-8 max-w-[38rem] text-pretty text-[1.02rem] leading-7 text-slate-300/88 sm:mb-9 sm:text-[1.06rem] sm:leading-8 xl:max-w-[39rem] xl:text-[1.08rem]">
                {heroSection.description}
              </p>

              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href={heroSection.actions.primary.href}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-indigo-500/30 bg-indigo-600 px-6 py-4 font-semibold text-white shadow-[0_18px_40px_-22px_rgba(79,70,229,0.9)] transition-all hover:bg-indigo-500 hover:shadow-[0_20px_42px_-22px_rgba(79,70,229,0.85)] sm:w-auto sm:px-8"
                >
                  {heroSection.actions.primary.label}
                  <ArrowRight size={18} />
                </a>
                <a
                  href={heroSection.actions.secondary.href}
                  className="flex w-full items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-4 font-semibold text-white transition-all hover:border-slate-700 hover:bg-slate-900 sm:w-auto sm:px-8"
                >
                  {heroSection.actions.secondary.label}
                </a>
              </div>

              <p className="mb-9 max-w-[36rem] text-sm leading-6 text-slate-500/90 sm:mb-10">
                {heroSection.actions.note}
              </p>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3 xl:gap-5">
                {heroSection.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-400 sm:items-center">
                    <item.icon size={18} className="mt-0.5 shrink-0 text-indigo-500 sm:mt-0" />
                    <span className="text-sm font-medium leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden min-w-0 lg:flex lg:items-center lg:justify-end lg:border-l lg:border-white/5 lg:pl-10 xl:pl-14"
          >
            <div className="relative z-10 w-full max-w-[46rem] rounded-[32px] border border-white/8 bg-slate-900/45 p-5 shadow-[0_30px_70px_rgba(2,6,23,0.52)] backdrop-blur-xl xl:max-w-[49rem] xl:p-6 2xl:max-w-[52rem]">
              <div className="mb-4 flex items-center gap-2 px-2">
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 2.2 }}
                  className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.85)]"
                />
                <div className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                <div className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                <div className="ml-2 rounded-md border border-slate-800 bg-slate-900 px-3 py-1 font-mono text-[10px] text-slate-500">
                  {heroSection.codeWindowLabel}
                </div>
                <div className="ml-auto rounded-full border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.2)]">
                  Live
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-cyan-500/10 bg-slate-950/92 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.65)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_center_right,rgba(168,85,247,0.14),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.16),transparent_45%)]" />
                <motion.div
                  aria-hidden="true"
                  animate={{ y: ['-12%', '100%'] }}
                  transition={{ repeat: Infinity, duration: 4.8, ease: 'linear' }}
                  className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan-400/10 via-cyan-300/5 to-transparent blur-xl"
                />
                <pre className="relative min-h-[360px] overflow-hidden p-5 font-mono text-[13px] leading-relaxed xl:min-h-[390px] xl:p-6 xl:text-[15px]">
                  <code className="block whitespace-pre-wrap break-words [text-shadow:0_0_12px_rgba(56,189,248,0.18)]">
                    {renderCodeSnippet(animatedSnippet)}
                    <motion.span
                      aria-hidden="true"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="ml-0.5 inline-block text-cyan-200 [text-shadow:0_0_14px_rgba(125,211,252,0.9)]"
                    >
                      |
                    </motion.span>
                  </code>
                </pre>
                <div className="border-t border-slate-800/70 bg-slate-950/85 px-4 py-4">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {heroSection.panelSummary.items.map((item) => (
                      <div key={item.label} className="rounded-xl border border-slate-800/80 bg-slate-900/65 px-3 py-3">
                        <div className="mb-1 text-[10px] uppercase tracking-[0.22em] text-slate-500">
                          {item.label}
                        </div>
                        <div className="text-sm font-semibold text-slate-100">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-slate-400">
                    {heroSection.panelSummary.note}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4.5 }}
              className="absolute right-3 top-3 z-20 rounded-xl border border-cyan-500/15 bg-slate-950/88 px-3.5 py-2.5 shadow-lg backdrop-blur-md xl:right-4"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.14)]">
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-[0.22em] text-slate-500/90">
                    {heroSection.floatingCards.conversion.label}
                  </div>
                  <div className="text-sm font-semibold text-cyan-50 [text-shadow:0_0_14px_rgba(34,211,238,0.22)] xl:text-[15px]">
                    {heroSection.floatingCards.conversion.value}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5.2, delay: 1 }}
              className="absolute bottom-4 left-4 z-20 rounded-xl border border-indigo-500/15 bg-slate-950/88 px-3.5 py-2.5 shadow-lg backdrop-blur-md"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-300 shadow-[0_0_18px_rgba(129,140,248,0.16)]">
                  <heroSection.floatingCards.launch.icon size={16} />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-[0.22em] text-slate-500/90">
                    {heroSection.floatingCards.launch.label}
                  </div>
                  <div className="text-sm font-semibold text-indigo-50 [text-shadow:0_0_14px_rgba(129,140,248,0.18)] xl:text-[15px]">
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
