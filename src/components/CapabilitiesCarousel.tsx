import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent, type PointerEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { capabilitiesCarouselSection } from '@/data/capabilitiesCarousel';

type SlotProfile = {
  x: number;
  y: number;
  scale: number;
  rotateY: number;
  rotateZ: number;
  opacity: number;
  zIndex: number;
};

type CardMode = 'full' | 'balanced' | 'title' | 'silhouette' | 'hidden';

const cardCount = capabilitiesCarouselSection.items.length;
const autoplayDelayMs = 6000;
const resumeDelayMs = 9000;
const swipeThresholdPx = 52;

const desktopSlots: SlotProfile[] = [
  { x: 0, y: 92, scale: 1, rotateY: 0, rotateZ: 0, opacity: 1, zIndex: 80 },
  { x: 310, y: 34, scale: 0.88, rotateY: -26, rotateZ: -2, opacity: 0.82, zIndex: 60 },
  { x: 470, y: -14, scale: 0.72, rotateY: -54, rotateZ: -4, opacity: 0.54, zIndex: 44 },
  { x: 334, y: -126, scale: 0.58, rotateY: -68, rotateZ: -6, opacity: 0.34, zIndex: 24 },
  { x: 0, y: -176, scale: 0.5, rotateY: 0, rotateZ: 0, opacity: 0.2, zIndex: 12 },
  { x: -334, y: -126, scale: 0.58, rotateY: 68, rotateZ: 6, opacity: 0.34, zIndex: 24 },
  { x: -470, y: -14, scale: 0.72, rotateY: 54, rotateZ: 4, opacity: 0.54, zIndex: 44 },
  { x: -310, y: 34, scale: 0.88, rotateY: 26, rotateZ: 2, opacity: 0.82, zIndex: 60 },
];

const mobileSlots: SlotProfile[] = [
  { x: 0, y: 70, scale: 1, rotateY: 0, rotateZ: 0, opacity: 1, zIndex: 80 },
  { x: 122, y: 30, scale: 0.86, rotateY: -14, rotateZ: -1, opacity: 0.48, zIndex: 60 },
  { x: 176, y: -12, scale: 0.72, rotateY: -24, rotateZ: -2, opacity: 0.18, zIndex: 42 },
  { x: 126, y: -92, scale: 0.6, rotateY: -34, rotateZ: -2, opacity: 0.08, zIndex: 24 },
  { x: 0, y: -124, scale: 0.54, rotateY: 0, rotateZ: 0, opacity: 0.04, zIndex: 12 },
  { x: -126, y: -92, scale: 0.6, rotateY: 34, rotateZ: 2, opacity: 0.08, zIndex: 24 },
  { x: -176, y: -12, scale: 0.72, rotateY: 24, rotateZ: 2, opacity: 0.18, zIndex: 42 },
  { x: -122, y: 30, scale: 0.86, rotateY: 14, rotateZ: 1, opacity: 0.48, zIndex: 60 },
];

function normalizeIndex(index: number, count: number) {
  return ((index % count) + count) % count;
}

function getCircularOffset(index: number, activeIndex: number, count: number) {
  let offset = index - activeIndex;

  if (offset > count / 2) {
    offset -= count;
  }

  if (offset < -count / 2) {
    offset += count;
  }

  return offset;
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);

    update();
    media.addEventListener('change', update);

    return () => media.removeEventListener('change', update);
  }, [query]);

  return matches;
}

function getCardMode(isDesktop: boolean, offset: number): CardMode {
  const distance = Math.abs(offset);

  if (distance === 0) {
    return 'full';
  }

  if (isDesktop) {
    if (distance === 1) {
      return 'balanced';
    }

    if (distance === 2) {
      return 'title';
    }

    if (distance === 3) {
      return 'silhouette';
    }

    return 'hidden';
  }

  if (distance === 1) {
    return 'title';
  }

  if (distance === 2) {
    return 'silhouette';
  }

  return 'hidden';
}

export function CapabilitiesCarousel() {
  const reducedMotion = useReducedMotion() ?? false;
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isFocusedWithin, setIsFocusedWithin] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const pauseTimeoutRef = useRef<number | null>(null);
  const pointerStateRef = useRef({
    startX: 0,
    startY: 0,
    didSwipe: false,
  });

  const slots = isDesktop ? desktopSlots : mobileSlots;
  const activeItem = capabilitiesCarouselSection.items[activeIndex];
  const shouldAutoplay =
    !reducedMotion && !isHovering && !isFocusedWithin && !isDragging && !isPointerDown && !isAutoPaused;

  const pauseAutoplayTemporarily = () => {
    setIsAutoPaused(true);

    if (pauseTimeoutRef.current) {
      window.clearTimeout(pauseTimeoutRef.current);
    }

    pauseTimeoutRef.current = window.setTimeout(() => {
      setIsAutoPaused(false);
      pauseTimeoutRef.current = null;
    }, resumeDelayMs);
  };

  const goToIndex = (index: number) => {
    setActiveIndex(normalizeIndex(index, cardCount));
    pauseAutoplayTemporarily();
  };

  const goToStep = (step: number) => {
    setActiveIndex((current) => normalizeIndex(current + step, cardCount));
    pauseAutoplayTemporarily();
  };

  useEffect(() => {
    if (!shouldAutoplay) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => normalizeIndex(current + 1, cardCount));
    }, autoplayDelayMs);

    return () => window.clearInterval(timer);
  }, [shouldAutoplay]);

  useEffect(
    () => () => {
      if (pauseTimeoutRef.current) {
        window.clearTimeout(pauseTimeoutRef.current);
      }
    },
    [],
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToStep(-1);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goToStep(1);
    }

    if (event.key === 'Home') {
      event.preventDefault();
      goToIndex(0);
    }

    if (event.key === 'End') {
      event.preventDefault();
      goToIndex(cardCount - 1);
    }
  };

  const handleFocusCapture = () => {
    setIsFocusedWithin(true);
    pauseAutoplayTemporarily();
  };

  const handleBlurCapture = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsFocusedWithin(false);
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) {
      return;
    }

    pointerStateRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      didSwipe: false,
    };
    setIsPointerDown(true);
    setIsDragging(false);
    pauseAutoplayTemporarily();

    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Pointer capture is not guaranteed in all environments.
    }
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown) {
      return;
    }

    const deltaX = event.clientX - pointerStateRef.current.startX;
    const deltaY = event.clientY - pointerStateRef.current.startY;

    if (!isDragging && (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10)) {
      setIsDragging(true);
    }

    if (Math.abs(deltaX) > swipeThresholdPx && Math.abs(deltaX) > Math.abs(deltaY)) {
      pointerStateRef.current.didSwipe = true;
    }
  };

  const finishPointerGesture = (event: PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown) {
      return;
    }

    const deltaX = event.clientX - pointerStateRef.current.startX;
    const deltaY = event.clientY - pointerStateRef.current.startY;

    if (Math.abs(deltaX) > swipeThresholdPx && Math.abs(deltaX) > Math.abs(deltaY)) {
      pointerStateRef.current.didSwipe = true;
      goToStep(deltaX < 0 ? 1 : -1);
    }

    setIsPointerDown(false);
    setIsDragging(false);

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // Ignore unsupported pointer capture paths.
    }
  };

  const handlePointerCancel = () => {
    setIsPointerDown(false);
    setIsDragging(false);
  };

  return (
    <section id="capabilities" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.2),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_38%)]" />
      <div className="absolute left-1/2 top-0 h-72 w-[90vw] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-indigo-200"
          >
            <Sparkles size={14} />
            {capabilitiesCarouselSection.eyebrow}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            {capabilitiesCarouselSection.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-3xl text-[1.01rem] leading-relaxed text-slate-400 sm:text-[1.06rem]"
          >
            {capabilitiesCarouselSection.description}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="rounded-[2.25rem] border border-white/8 bg-slate-900/40 p-4 shadow-2xl shadow-indigo-950/20 sm:p-5"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                <span>{String(activeIndex + 1).padStart(2, '0')}</span>
                <span>/</span>
                <span>{String(cardCount).padStart(2, '0')}</span>
              </div>
              <div className="hidden text-sm leading-relaxed text-slate-400 lg:block">
                Переключайте возможности
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goToStep(-1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/80 text-slate-200 transition-colors hover:border-indigo-400/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                aria-label="Предыдущая возможность"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => goToStep(1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/80 text-slate-200 transition-colors hover:border-indigo-400/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                aria-label="Следующая возможность"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[2rem] border border-slate-800/70 bg-slate-950/60"
            style={{
              perspective: reducedMotion ? '900px' : '1500px',
            }}
          >
            <div className="pointer-events-none absolute inset-x-4 top-1/2 h-[18rem] -translate-y-1/2 rounded-[50%] border border-indigo-400/12 sm:inset-x-10 sm:h-[24rem] lg:inset-x-24 lg:h-[28rem]" />
            <div className="pointer-events-none absolute inset-x-10 top-1/2 h-[12rem] -translate-y-1/2 rounded-[50%] border border-slate-700/40 blur-[0.5px] lg:inset-x-20 lg:h-[18rem]" />
            <div className="pointer-events-none absolute left-1/2 top-[56%] h-32 w-72 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

            <div
              role="region"
              aria-roledescription="carousel"
              aria-label="Карусель цифровых возможностей"
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onFocusCapture={handleFocusCapture}
              onBlurCapture={handleBlurCapture}
              onMouseEnter={() => {
                setIsHovering(true);
                pauseAutoplayTemporarily();
              }}
              onMouseLeave={() => setIsHovering(false)}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={finishPointerGesture}
              onPointerCancel={handlePointerCancel}
              className="relative h-[480px] touch-pan-y overflow-hidden outline-none sm:h-[560px] lg:h-[640px]"
            >
              {capabilitiesCarouselSection.items.map((item, index) => {
                const offset = getCircularOffset(index, activeIndex, cardCount);
                const absOffset = Math.abs(offset);
                const slot = slots[normalizeIndex(offset, cardCount)];
                const Icon = item.icon;
                const mode = getCardMode(isDesktop, offset);
                const isActive = mode === 'full';
                const isInteractive = isDesktop || absOffset <= 2;
                const transition = reducedMotion
                  ? { duration: 0.18, ease: 'easeOut' }
                  : { type: 'spring', stiffness: 170, damping: 24, mass: 0.85 };

                const iconShellClass = isActive
                  ? 'border-indigo-400/25 bg-indigo-500/15 text-indigo-100 shadow-[0_10px_30px_-16px_rgba(79,70,229,0.75)]'
                  : mode === 'balanced'
                    ? 'border-indigo-400/18 bg-indigo-500/10 text-indigo-100/95'
                    : mode === 'title'
                      ? 'border-indigo-400/12 bg-indigo-500/8 text-indigo-100/85'
                      : 'border-white/10 bg-slate-950/60 text-slate-300/70';

                const titleToneClass = isActive
                  ? 'text-white'
                  : mode === 'balanced'
                    ? 'text-slate-100/90'
                    : mode === 'title'
                      ? 'text-slate-200/85'
                      : 'text-slate-400/65';

                const descriptionToneClass = isActive
                  ? 'text-slate-300'
                  : 'text-slate-400/75';

                return (
                  <div
                    key={item.title}
                    className={`absolute left-1/2 top-1/2 w-[min(82vw,21rem)] -translate-x-1/2 -translate-y-1/2 sm:w-[20rem] lg:w-[22rem] ${
                      isInteractive ? '' : 'pointer-events-none'
                    }`}
                    style={{ zIndex: slot.zIndex }}
                  >
                    <motion.button
                      type="button"
                      tabIndex={isActive ? 0 : -1}
                      aria-current={isActive ? 'true' : undefined}
                      aria-label={`${item.title}, карточка ${index + 1} из ${cardCount}`}
                      onClick={() => {
                        if (pointerStateRef.current.didSwipe) {
                          pointerStateRef.current.didSwipe = false;
                          return;
                        }

                        goToIndex(index);
                      }}
                      initial={false}
                      animate={{
                        x: slot.x,
                        y: slot.y,
                        scale: reducedMotion && !isActive ? Math.max(0.9, slot.scale - 0.03) : slot.scale,
                        rotateY: reducedMotion ? 0 : slot.rotateY,
                        rotateZ: reducedMotion ? 0 : slot.rotateZ,
                        opacity: slot.opacity,
                      }}
                      transition={transition}
                      style={{
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                      }}
                      className="relative block h-[20.5rem] w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70 sm:h-[21.5rem] lg:h-[23.5rem]"
                    >
                      <div
                        className={`relative h-full overflow-hidden rounded-3xl border backdrop-blur-sm transition-colors ${
                          isActive
                            ? 'border-indigo-400/35 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/30 shadow-[0_28px_90px_-42px_rgba(79,70,229,0.76)]'
                            : mode === 'balanced'
                              ? 'border-white/10 bg-slate-900/52'
                              : mode === 'title'
                                ? 'border-white/8 bg-slate-900/40'
                                : 'border-white/6 bg-slate-950/20'
                        }`}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_42%)]" />
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                        {isActive ? (
                          <div className="pointer-events-none absolute inset-x-8 bottom-5 h-14 rounded-full bg-indigo-500/20 blur-2xl" />
                        ) : null}

                        <div className="relative z-10 flex h-full flex-col p-5 sm:p-6">
                          <div className="mb-4 flex items-start justify-between gap-3">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${iconShellClass}`}>
                              <Icon size={22} />
                            </div>
                            <div
                              className={`rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-300 ${
                                isActive ? 'opacity-100' : mode === 'balanced' ? 'opacity-85' : 'opacity-70'
                              }`}
                            >
                              {String(index + 1).padStart(2, '0')}
                            </div>
                          </div>

                          {(mode !== 'hidden') ? (
                            <h3 className={`text-xl font-bold leading-snug sm:text-2xl ${titleToneClass}`}>
                              {item.title}
                            </h3>
                          ) : null}

                          {mode === 'full' || mode === 'balanced' ? (
                            <p
                              className={`mt-3 text-sm leading-relaxed sm:text-[0.96rem] ${
                                isActive ? descriptionToneClass : 'text-slate-300/70'
                              }`}
                            >
                              {item.description}
                            </p>
                          ) : null}

                          {mode === 'full' ? (
                            <div className="mt-auto border-t border-white/5 pt-4">
                              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
                                Stack
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {item.stack.split(' · ').map((stackItem) => (
                                  <span
                                    key={stackItem}
                                    className="rounded-full border border-slate-700/80 bg-slate-950/70 px-2.5 py-1 text-[11px] font-medium text-slate-200"
                                  >
                                    {stackItem}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </motion.button>
                  </div>
                );
              })}
            </div>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="mt-7 rounded-3xl border border-white/8 bg-slate-900/45 p-5 sm:mt-8 sm:p-6"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-200">
                {capabilitiesCarouselSection.cta.eyebrow}
              </div>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl">
                {capabilitiesCarouselSection.cta.title}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
                {capabilitiesCarouselSection.cta.description}
              </p>
            </div>

            <a
              href={capabilitiesCarouselSection.cta.href}
              className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70 sm:text-base"
            >
              {capabilitiesCarouselSection.cta.label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
