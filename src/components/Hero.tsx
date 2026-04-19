import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { heroSection } from '@/data/site';

const codeTokenPattern =
  /\b(?:const|return|new|true|false|null)\b|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`|\d+(?:\.\d+)?|[A-Za-z_$][\w$]*|[{}[\]().,:;]/g;

function getTokenClass(token: string, source: string, startIndex: number) {
  if (/^(const|return|new|true|false|null)$/.test(token)) {
    return 'text-fuchsia-300';
  }

  if (/^["'`]/.test(token)) {
    return 'text-emerald-300';
  }

  if (/^\d/.test(token)) {
    return 'text-amber-300';
  }

  if (/^[{}[\]().,:;]$/.test(token)) {
    return 'text-cyan-300/90';
  }

  if (/^[A-Za-z_$][\w$]*$/.test(token)) {
    const trailing = source.slice(startIndex + token.length);

    if (/^\s*\(/.test(trailing)) {
      return 'text-amber-300';
    }

    if (/^\s*:/.test(trailing)) {
      return 'text-sky-300';
    }

    return 'text-violet-200';
  }

  return 'text-slate-100';
}

function renderColorizedSnippet(source: string) {
  const parts: JSX.Element[] = [];
  let lastIndex = 0;
  let tokenIndex = 0;

  for (const match of source.matchAll(codeTokenPattern)) {
    const token = match[0];
    const startIndex = match.index ?? 0;

    if (startIndex > lastIndex) {
      parts.push(
        <span key={`plain-${lastIndex}`} className="text-slate-100/95">
          {source.slice(lastIndex, startIndex)}
        </span>,
      );
    }

    parts.push(
      <span key={`token-${tokenIndex}`} className={getTokenClass(token, source, startIndex)}>
        {token}
      </span>,
    );

    lastIndex = startIndex + token.length;
    tokenIndex += 1;
  }

  if (lastIndex < source.length) {
    parts.push(
      <span key={`tail-${lastIndex}`} className="text-slate-100/95">
        {source.slice(lastIndex)}
      </span>,
    );
  }

  return parts;
}

export function Hero() {
  const codeSnippet = heroSection.codeSnippet.trimEnd();
  const [visibleChars, setVisibleChars] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!codeSnippet) return;

    const isTyping = visibleChars < codeSnippet.length;
    const timeout = window.setTimeout(() => {
      if (isTyping) {
        setVisibleChars((prev) => Math.min(prev + 1, codeSnippet.length));
        return;
      }

      setVisibleChars(0);
    }, isTyping ? 16 : 1700);

    return () => window.clearTimeout(timeout);
  }, [codeSnippet, visibleChars]);

  const animatedSnippet = codeSnippet.slice(0, visibleChars);
  const visibleLineCount = Math.max(1, animatedSnippet.split('\n').length);
  const typingProgress = codeSnippet.length > 0 ? animatedSnippet.length / codeSnippet.length : 0;
  const dynamicCodeHeight = 205 + visibleLineCount * 11 + typingProgress * 180;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pt-20 pb-14 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute top-0 right-0 h-[540px] w-[540px] -translate-y-1/4 translate-x-1/4 rounded-full bg-indigo-600/12 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[340px] w-[340px] translate-y-1/4 -translate-x-1/4 rounded-full bg-purple-600/8 blur-[120px]" />
      <motion.div
        aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(148,163,184,0.055) 1px, transparent 1px)',
          backgroundSize: '100% 46px',
        }}
        animate={shouldReduceMotion ? undefined : { backgroundPositionY: ['0px', '46px'] }}
        transition={shouldReduceMotion ? undefined : { repeat: Infinity, duration: 18, ease: 'linear' }}
        className="pointer-events-none absolute inset-0 opacity-25 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
      />
      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { x: [0, 16, 0], y: [-6, 8, -6], opacity: [0.16, 0.24, 0.16] }}
        transition={shouldReduceMotion ? undefined : { repeat: Infinity, duration: 15, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[6%] top-[42%] hidden h-[430px] w-[430px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[130px] lg:block xl:h-[500px] xl:w-[500px]"
      />

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

              <h1 className="mb-5 text-pretty text-4xl font-bold tracking-[-0.05em] leading-[0.97] text-slate-50 sm:mb-6 sm:text-[3.05rem] md:text-[3.28rem] md:leading-[0.99] lg:text-[3.38rem] xl:text-[3.78rem]">
                <span className="block text-slate-50">{heroSection.title.lead}</span>
                <span className="mt-1 block bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {heroSection.title.accent}
                </span>
                <span className="mt-1 block text-slate-100">
                  {heroSection.title.tail}
                </span>
              </h1>

              <p className="mb-7 max-w-[36rem] text-pretty text-[1.01rem] leading-7 text-slate-300/88 sm:mb-8 sm:text-[1.05rem] sm:leading-8 xl:max-w-[38rem] xl:text-[1.07rem]">
                {heroSection.description}
              </p>

              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href={heroSection.actions.primary.href}
                  className="relative flex w-full items-center justify-center gap-2 rounded-2xl border border-indigo-400/40 bg-indigo-600 px-6 py-4 font-semibold text-white shadow-[0_20px_42px_-22px_rgba(79,70,229,0.95)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-[0_24px_44px_-20px_rgba(79,70,229,0.82)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70 sm:w-auto sm:px-8"
                >
                  {heroSection.actions.primary.label}
                  <ArrowRight size={18} />
                </a>
                <a
                  href={heroSection.actions.secondary.href}
                  className="flex w-full items-center justify-center rounded-2xl border border-slate-800/90 bg-slate-900/65 px-6 py-4 font-semibold text-slate-200 transition-all duration-200 hover:border-slate-700 hover:bg-slate-900/80 hover:text-white sm:w-auto sm:px-8"
                >
                  {heroSection.actions.secondary.label}
                </a>
              </div>

              <p className="mb-8 max-w-[34rem] text-sm leading-6 text-slate-400/95 sm:mb-9">
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
                <pre
                  style={{ height: `${dynamicCodeHeight}px` }}
                  className="relative overflow-hidden p-5 font-mono text-[13px] leading-relaxed transition-[height] duration-300 ease-out min-h-[220px] max-h-[400px] xl:min-h-[235px] xl:max-h-[435px] xl:p-6 xl:text-[15px] 2xl:min-h-[250px] 2xl:max-h-[455px]"
                >
                  <code className="block whitespace-pre-wrap break-words text-slate-100 [text-shadow:0_0_12px_rgba(56,189,248,0.18)]">
                    {renderColorizedSnippet(animatedSnippet)}
                    <span
                      aria-hidden="true"
                      className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[2px] animate-pulse bg-cyan-300"
                    />
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
