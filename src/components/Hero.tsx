import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { heroSection } from '@/data/site';
import { DigitalRainBackground } from '@/components/DigitalRainBackground';

type TerminalCommand = (typeof heroSection.terminal.commands)[number];

type TerminalWindowProps = {
  compact?: boolean;
  helpChars: number;
  visibleCommandCount: number;
  selectedCommand: TerminalCommand | undefined;
  selectedCommandChars: number;
  visibleOutputCount: number;
  shouldReduceMotion: boolean;
  onCommandSelect: (commandId: string) => void;
};

function TerminalPrompt({ children }: { children: ReactNode }) {
  return (
    <span>
      <span className="text-cyan-300">{heroSection.terminal.prompt}</span>{' '}
      <span className="text-slate-100">{children}</span>
    </span>
  );
}

function TerminalWindow({
  compact = false,
  helpChars,
  visibleCommandCount,
  selectedCommand,
  selectedCommandChars,
  visibleOutputCount,
  shouldReduceMotion,
  onCommandSelect,
}: TerminalWindowProps) {
  const terminal = heroSection.terminal;
  const helpCommand = terminal.initialCommand.slice(0, helpChars);
  const selectedText = selectedCommand?.command.slice(0, selectedCommandChars) ?? '';
  const visibleCommands = terminal.commands.slice(0, visibleCommandCount);
  const output = selectedCommand?.output ?? [];
  const outputLines = shouldReduceMotion ? output : output.slice(0, visibleOutputCount);
  const bottomCommand = selectedCommand
    ? selectedCommandChars >= selectedCommand.command.length
      ? ''
      : selectedText
    : helpChars >= terminal.initialCommand.length
      ? ''
      : helpCommand;
  const contentPadding = compact ? 'p-3' : 'p-5 xl:p-6';

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-cyan-500/15 bg-slate-950/92 ${
        compact ? '' : 'shadow-[0_18px_50px_rgba(2,6,23,0.35)]'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.17),transparent_34%),radial-gradient(circle_at_center_right,rgba(168,85,247,0.14),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.13),transparent_45%)]" />
      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { y: ['-120%', '480%'] }}
        transition={shouldReduceMotion ? undefined : { repeat: Infinity, duration: 5.5, ease: 'linear' }}
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-cyan-300/10 via-cyan-300/5 to-transparent blur-xl"
      />

      <div className={`relative ${contentPadding} font-mono ${compact ? 'text-[11px] leading-relaxed' : 'text-[13px] leading-relaxed xl:text-[14px]'}`}>
        <div className="mb-4 flex items-center gap-2 text-[10px]">
          <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          <div className="h-2 w-2 rounded-full bg-slate-700" />
          <div className="h-2 w-2 rounded-full bg-slate-600" />
          <div className="ml-2 rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-slate-500">
            {terminal.label}
          </div>
          <div className="ml-auto rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-200">
            ● {terminal.status}
          </div>
        </div>

        <div className="relative min-h-[245px] overflow-hidden sm:min-h-[265px] lg:min-h-[335px]">
          <div className="mb-3">
            <TerminalPrompt>{helpCommand}</TerminalPrompt>
            <span aria-hidden="true" className="ml-1 inline-block h-[1.05em] w-[2px] translate-y-[2px] animate-pulse bg-cyan-300" />
          </div>

          {helpChars >= terminal.initialCommand.length ? (
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-3"
            >
              <div className="mb-2 text-slate-300">{terminal.helpTitle}</div>
              <div className={`grid gap-1.5 ${compact ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 sm:gap-x-5'}`}>
                {visibleCommands.map((command) => (
                  <motion.button
                    key={command.id}
                    type="button"
                    initial={shouldReduceMotion ? false : { opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => onCommandSelect(command.id)}
                    className={`group min-h-8 rounded-md px-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 ${
                      selectedCommand?.id === command.id
                        ? 'bg-cyan-400/10 text-cyan-200'
                        : 'text-violet-200 hover:bg-violet-400/10 hover:text-cyan-200'
                    }`}
                  >
                    <span className="mr-2 text-cyan-400 transition-transform group-hover:translate-x-0.5">&gt;</span>
                    {command.command}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : null}

          {selectedCommand ? (
            <div className="mt-4 border-t border-slate-800/70 pt-3">
              <div className="mb-2">
                <TerminalPrompt>{selectedText}</TerminalPrompt>
              </div>
              {selectedCommandChars >= selectedCommand.command.length ? (
                <>
                  <div className="space-y-1 text-slate-300">
                    <div>
                      <span className="text-violet-300">&gt; Сценарий:</span> {selectedCommand.scenario}
                    </div>
                    <div>
                      <span className="text-violet-300">&gt; Старт:</span> {selectedCommand.start}
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="mb-1 text-[10px] uppercase tracking-[0.18em] text-cyan-300/80">OUTPUT</div>
                    <div className="space-y-1 text-slate-200">
                      {outputLines.map((line) => (
                        <motion.div
                          key={line}
                          initial={shouldReduceMotion ? false : { opacity: 0, y: 3 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <span className="text-cyan-400">•</span> {line}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  {selectedCommand.cta ? (
                    <a
                      href={selectedCommand.cta.href}
                      className="mt-3 inline-flex min-h-9 items-center gap-2 rounded-md border border-cyan-400/30 bg-cyan-400/10 px-3 text-[11px] font-semibold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-400/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                    >
                      {selectedCommand.cta.label}
                      <ArrowRight size={13} />
                    </a>
                  ) : null}
                </>
              ) : null}
            </div>
          ) : null}

          <div className="mt-4">
            <TerminalPrompt>{bottomCommand}</TerminalPrompt>
            <span aria-hidden="true" className="ml-1 inline-block h-[1.05em] w-[2px] translate-y-[2px] animate-pulse bg-cyan-300" />
          </div>
        </div>
      </div>

      {!compact ? (
        <div className="relative border-t border-slate-800/70 bg-slate-950/80 px-4 py-4">
          <div className="mb-3 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Session summary</div>
          <div className="grid gap-3 sm:grid-cols-3">
            {heroSection.panelSummary.items.map((item) => (
              <div key={item.label} className="rounded-lg border border-slate-800/80 bg-slate-900/65 px-3 py-2.5">
                <div className="mb-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">{item.label}</div>
                <div className="text-sm font-semibold text-slate-100">{item.value}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate-400">{heroSection.panelSummary.note}</p>
        </div>
      ) : null}
    </div>
  );
}

export function Hero() {
  const [helpChars, setHelpChars] = useState(0);
  const [visibleCommandCount, setVisibleCommandCount] = useState(0);
  const [selectedCommandId, setSelectedCommandId] = useState<string>();
  const [selectedCommandChars, setSelectedCommandChars] = useState(0);
  const [visibleOutputCount, setVisibleOutputCount] = useState(0);
  const shouldReduceMotion = useReducedMotion() ?? false;
  const terminal = heroSection.terminal;
  const selectedCommand = useMemo(
    () => terminal.commands.find((command) => command.id === selectedCommandId),
    [selectedCommandId, terminal.commands],
  );

  useEffect(() => {
    let typingTimer: number | undefined;
    let revealTimer: number | undefined;
    let commandTimer: number | undefined;

    if (shouldReduceMotion) {
      setHelpChars(terminal.initialCommand.length);
      setVisibleCommandCount(terminal.commands.length);
      return undefined;
    }

    setHelpChars(0);
    setVisibleCommandCount(0);
    let currentChars = 0;
    const typeHelp = () => {
      currentChars += 1;
      setHelpChars(currentChars);
      if (currentChars >= terminal.initialCommand.length) {
        window.clearInterval(typingTimer);
        revealTimer = window.setTimeout(() => {
          let currentCommand = 0;
          commandTimer = window.setInterval(() => {
            currentCommand += 1;
            setVisibleCommandCount(currentCommand);
            if (currentCommand >= terminal.commands.length) {
              window.clearInterval(commandTimer);
            }
          }, 90);
        }, 260);
      }
    };

    typingTimer = window.setInterval(typeHelp, 38);

    return () => {
      window.clearInterval(typingTimer);
      window.clearTimeout(revealTimer);
      window.clearInterval(commandTimer);
    };
  }, [shouldReduceMotion, terminal]);

  useEffect(() => {
    if (!selectedCommand) {
      setSelectedCommandChars(0);
      setVisibleOutputCount(0);
      return undefined;
    }

    if (shouldReduceMotion) {
      setSelectedCommandChars(selectedCommand.command.length);
      setVisibleOutputCount(selectedCommand.output.length);
      return undefined;
    }

    setSelectedCommandChars(0);
    setVisibleOutputCount(0);
    let currentChars = 0;
    let typingTimer: number | undefined;
    let outputTimer: number | undefined;
    let outputInterval: number | undefined;

    typingTimer = window.setInterval(() => {
      currentChars += 1;
      setSelectedCommandChars(currentChars);
      if (currentChars >= selectedCommand.command.length) {
        window.clearInterval(typingTimer);
        outputTimer = window.setTimeout(() => {
          let currentLine = 0;
          outputInterval = window.setInterval(() => {
            currentLine += 1;
            setVisibleOutputCount(currentLine);
            if (currentLine >= selectedCommand.output.length) {
              window.clearInterval(outputInterval);
            }
          }, 105);
        }, 180);
      }
    }, 32);

    return () => {
      window.clearInterval(typingTimer);
      window.clearTimeout(outputTimer);
      window.clearInterval(outputInterval);
    };
  }, [selectedCommand, shouldReduceMotion]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pt-20 pb-14 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
      <div className="pointer-events-none absolute top-0 right-0 z-0 h-[540px] w-[540px] -translate-y-1/4 translate-x-1/4 rounded-full bg-indigo-600/12 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-[340px] w-[340px] translate-y-1/4 -translate-x-1/4 rounded-full bg-purple-600/8 blur-[120px]" />
      <DigitalRainBackground />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-[3] hidden w-[47%] bg-gradient-to-r from-slate-950/62 via-slate-950/34 to-transparent lg:block xl:w-[44%]"
      />
      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { x: [0, 16, 0], y: [-6, 8, -6], opacity: [0.16, 0.24, 0.16] }}
        transition={shouldReduceMotion ? undefined : { repeat: Infinity, duration: 15, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[6%] top-[42%] z-0 hidden h-[430px] w-[430px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[130px] lg:block xl:h-[500px] xl:w-[500px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-16 2xl:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="min-w-0 lg:pr-4 xl:pr-6"
          >
            <div className="max-w-[44rem] xl:max-w-[46rem]">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300 sm:mb-6 sm:text-sm">
                <heroSection.badge.icon size={14} className="text-indigo-400" />
                <span>{heroSection.badge.text}</span>
              </div>

              <h1 className="mb-5 text-pretty text-4xl font-bold tracking-[-0.05em] leading-[0.99] text-slate-50 sm:mb-6 sm:text-[2.8rem] md:text-[3rem] md:leading-[1.01] lg:text-[3.05rem] xl:text-[3.35rem]">
                <span className="block text-slate-50">{heroSection.title.lead}</span>
                <span className="mt-1 block bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {heroSection.title.accent}
                </span>
                {heroSection.title.tail ? <span className="mt-1 block text-slate-100">{heroSection.title.tail}</span> : null}
              </h1>

              <p className="mb-7 max-w-[36rem] text-pretty text-[1.01rem] leading-7 text-slate-300/88 sm:mb-8 sm:text-[1.05rem] sm:leading-8 xl:max-w-[38rem] xl:text-[1.07rem]">
                {heroSection.description}
              </p>

              <div className="mb-7 lg:hidden">
                <TerminalWindow
                  compact
                  helpChars={helpChars}
                  visibleCommandCount={visibleCommandCount}
                  selectedCommand={selectedCommand}
                  selectedCommandChars={selectedCommandChars}
                  visibleOutputCount={visibleOutputCount}
                  shouldReduceMotion={shouldReduceMotion}
                  onCommandSelect={setSelectedCommandId}
                />
              </div>

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

              <p className="mb-8 max-w-[34rem] text-sm leading-6 text-slate-400/95 sm:mb-9">{heroSection.actions.note}</p>

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
              <TerminalWindow
                helpChars={helpChars}
                visibleCommandCount={visibleCommandCount}
                selectedCommand={selectedCommand}
                selectedCommandChars={selectedCommandChars}
                visibleOutputCount={visibleOutputCount}
                shouldReduceMotion={shouldReduceMotion}
                onCommandSelect={setSelectedCommandId}
              />
            </div>

            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -12, 0] }}
              transition={shouldReduceMotion ? undefined : { repeat: Infinity, duration: 4.5 }}
              className="absolute right-3 top-3 z-20 rounded-xl border border-cyan-500/15 bg-slate-950/88 px-3.5 py-2.5 shadow-lg backdrop-blur-md xl:right-4"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.14)]">
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-[0.22em] text-slate-500/90">{heroSection.floatingCards.conversion.label}</div>
                  <div className="text-sm font-semibold text-cyan-50 [text-shadow:0_0_14px_rgba(34,211,238,0.22)] xl:text-[15px]">{heroSection.floatingCards.conversion.value}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, 12, 0] }}
              transition={shouldReduceMotion ? undefined : { repeat: Infinity, duration: 5.2, delay: 1 }}
              className="absolute bottom-4 left-4 z-20 rounded-xl border border-indigo-500/15 bg-slate-950/88 px-3.5 py-2.5 shadow-lg backdrop-blur-md"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-300 shadow-[0_0_18px_rgba(129,140,248,0.16)]">
                  <heroSection.floatingCards.launch.icon size={16} />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-[0.22em] text-slate-500/90">{heroSection.floatingCards.launch.label}</div>
                  <div className="text-sm font-semibold text-indigo-50 [text-shadow:0_0_14px_rgba(129,140,248,0.18)] xl:text-[15px]">{heroSection.floatingCards.launch.value}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
