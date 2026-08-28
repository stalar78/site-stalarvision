import { useEffect, useRef, type CSSProperties } from 'react';
import { useReducedMotion } from 'framer-motion';

type CursorPoint = {
  x: number;
  y: number;
};

const lerpFactor = 0.16;
const opacityLerpFactor = 0.14;
const settleThreshold = 0.35;
const opacityThreshold = 0.01;

const initialPoint = (): CursorPoint => {
  if (typeof window === 'undefined') {
    return { x: 0, y: 0 };
  }

  return {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };
};

export function AmbientCursorGlow() {
  const layerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const currentRef = useRef<{ point: CursorPoint; opacity: number }>({
    point: { x: 0, y: 0 },
    opacity: 0,
  });
  const targetRef = useRef<{ point: CursorPoint; opacity: number }>({
    point: { x: 0, y: 0 },
    opacity: 0,
  });
  const initializedRef = useRef(false);
  const reducedMotion = useReducedMotion() ?? false;

  useEffect(() => {
    if (reducedMotion) {
      return undefined;
    }

    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return undefined;
    }

    const finePointerMedia = window.matchMedia('(pointer: fine)');
    const hoverMedia = window.matchMedia('(hover: hover)');

    if (!finePointerMedia.matches || !hoverMedia.matches) {
      return undefined;
    }

    const layer = layerRef.current;

    if (!layer) {
      return undefined;
    }

    currentRef.current = {
      point: initialPoint(),
      opacity: 0,
    };
    targetRef.current = {
      point: initialPoint(),
      opacity: 0,
    };
    initializedRef.current = false;

    const applyStyles = () => {
      layer.style.setProperty('--cursor-glow-x', `${currentRef.current.point.x}px`);
      layer.style.setProperty('--cursor-glow-y', `${currentRef.current.point.y}px`);
      layer.style.setProperty('--cursor-glow-opacity', currentRef.current.opacity.toFixed(3));
    };

    const stopAnimation = () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };

    const step = () => {
      animationFrameRef.current = null;

      currentRef.current.point.x += (targetRef.current.point.x - currentRef.current.point.x) * lerpFactor;
      currentRef.current.point.y += (targetRef.current.point.y - currentRef.current.point.y) * lerpFactor;
      currentRef.current.opacity += (targetRef.current.opacity - currentRef.current.opacity) * opacityLerpFactor;
      applyStyles();

      const isSettled =
        Math.abs(targetRef.current.point.x - currentRef.current.point.x) < settleThreshold &&
        Math.abs(targetRef.current.point.y - currentRef.current.point.y) < settleThreshold &&
        Math.abs(targetRef.current.opacity - currentRef.current.opacity) < opacityThreshold;

      if (!isSettled) {
        animationFrameRef.current = window.requestAnimationFrame(step);
      }
    };

    const startAnimation = () => {
      if (animationFrameRef.current === null) {
        animationFrameRef.current = window.requestAnimationFrame(step);
      }
    };

    const updateTarget = (x: number, y: number, opacity: number) => {
      if (!initializedRef.current) {
        currentRef.current.point.x = x;
        currentRef.current.point.y = y;
        currentRef.current.opacity = 0;
        initializedRef.current = true;
      }

      targetRef.current.point.x = x;
      targetRef.current.point.y = y;
      targetRef.current.opacity = opacity;
      startAnimation();
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') {
        return;
      }

      updateTarget(event.clientX, event.clientY, 1);
    };

    const handlePointerLeave = () => {
      targetRef.current.opacity = 0;
      startAnimation();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState !== 'visible') {
        handlePointerLeave();
      }
    };

    applyStyles();
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('blur', handlePointerLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopAnimation();
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('blur', handlePointerLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [reducedMotion]);

  return (
    <div
      aria-hidden="true"
      ref={layerRef}
      className="ambient-cursor-glow"
      style={
        {
          '--cursor-glow-x': '50vw',
          '--cursor-glow-y': '50vh',
          '--cursor-glow-opacity': '0',
        } as CSSProperties
      }
    />
  );
}
