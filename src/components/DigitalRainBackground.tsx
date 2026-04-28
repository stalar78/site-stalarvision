import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

type Drop = {
  active: boolean;
  bright: boolean;
  y: number;
  speed: number;
  token: string;
};

const TOKENS = ['0', '1', '{}', '<>', '/', '#', '_', '+', '=', 'const', 'fn', 'api', 'dev'] as const;
const COLORS = [
  'rgba(129,140,248,0.46)',
  'rgba(99,102,241,0.42)',
  'rgba(56,189,248,0.38)',
  'rgba(167,139,250,0.44)',
] as const;
const BRIGHT_COLORS = [
  'rgba(129,140,248,0.62)',
  'rgba(99,102,241,0.58)',
  'rgba(56,189,248,0.56)',
  'rgba(167,139,250,0.6)',
] as const;

const pick = <T,>(items: readonly T[]) => items[Math.floor(Math.random() * items.length)];

export function DigitalRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let frameId = 0;
    let disposed = false;
    let width = 0;
    let height = 0;
    let columnWidth = 0;
    let rowHeight = 0;
    let fontSize = 0;
    let isMobileViewport = false;
    let activeRatio = 0.34;
    let brightRatio = 0.1;
    let lastTimestamp = 0;
    let drops: Drop[] = [];

    const getColumnActiveChance = (index: number, columns: number) => {
      const position = columns > 1 ? index / (columns - 1) : 0.5;
      const sideBoost = shouldReduceMotion ? 0 : isMobileViewport ? 0.01 + position * 0.02 : 0.03 + position * 0.07;

      return Math.min(0.66, activeRatio + sideBoost);
    };

    const getColumnBrightChance = (index: number, columns: number) => {
      const position = columns > 1 ? index / (columns - 1) : 0.5;
      const sideBoost = shouldReduceMotion ? 0 : isMobileViewport ? position * 0.01 : position * 0.05;

      return Math.min(0.28, brightRatio + sideBoost);
    };

    const initDrops = (columns: number) => {
      drops = Array.from({ length: columns }, (_, index) => ({
        active: Math.random() < getColumnActiveChance(index, columns),
        bright: Math.random() < getColumnBrightChance(index, columns),
        y: Math.random() * -24,
        speed: 0.16 + Math.random() * 0.24,
        token: pick(TOKENS),
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));

      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      isMobileViewport = width < 768;
      fontSize = isMobileViewport ? 9.5 : 13.5;
      rowHeight = isMobileViewport ? 21 : 30;
      columnWidth = isMobileViewport ? 29 : 40;

      context.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace`;
      context.textBaseline = 'top';

      const columns = Math.max(8, Math.floor(width / columnWidth));
      activeRatio = shouldReduceMotion ? 0.2 : isMobileViewport ? 0.23 : 0.49;
      brightRatio = shouldReduceMotion ? 0.05 : isMobileViewport ? 0.05 : 0.15;
      initDrops(columns);
    };

    const drawStatic = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = 'rgba(2,6,23,0.14)';
      context.fillRect(0, 0, width, height);

      for (let i = 0; i < drops.length; i += 1) {
        const drop = drops[i];
        if (!drop.active || Math.random() > 0.56) continue;

        context.fillStyle = drop.bright ? pick(BRIGHT_COLORS) : pick(COLORS);
        const x = i * columnWidth + 2;
        const y = Math.random() * (height - rowHeight);
        context.fillText(drop.token, x, y);
      }
    };

    const animate = (timestamp: number) => {
      if (disposed) return;

      const frameInterval = width < 768 ? 52 : 40;
      if (timestamp - lastTimestamp < frameInterval) {
        frameId = window.requestAnimationFrame(animate);
        return;
      }
      lastTimestamp = timestamp;

      context.fillStyle = 'rgba(2,6,23,0.11)';
      context.fillRect(0, 0, width, height);

      for (let i = 0; i < drops.length; i += 1) {
        const drop = drops[i];
        if (!drop.active) continue;

        if (Math.random() < 0.16) {
          drop.token = pick(TOKENS);
        }

        const x = i * columnWidth + 2;
        const y = drop.y * rowHeight;

        context.fillStyle = drop.bright ? pick(BRIGHT_COLORS) : pick(COLORS);
        context.fillText(drop.token, x, y);

        drop.y += drop.speed;

        if (y > height + rowHeight * 2) {
          drop.y = -Math.random() * 18;
          drop.speed = 0.16 + Math.random() * 0.24;
          drop.token = pick(TOKENS);
          drop.active = Math.random() < getColumnActiveChance(i, drops.length);
          drop.bright = Math.random() < getColumnBrightChance(i, drops.length);
        }
      }

      frameId = window.requestAnimationFrame(animate);
    };

    resize();

    if (shouldReduceMotion) {
      drawStatic();
    } else {
      context.fillStyle = 'rgba(2,6,23,0.88)';
      context.fillRect(0, 0, width, height);
      frameId = window.requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
    };
  }, [shouldReduceMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden opacity-65 [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_84%,transparent)]"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
