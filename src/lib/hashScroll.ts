type ScrollHashOptions = {
  behavior?: ScrollBehavior;
};

type RetryHashScrollOptions = ScrollHashOptions & {
  attempts?: number;
  delayMs?: number;
};

function getTargetByHash(hash: string): HTMLElement | null {
  if (!hash || !hash.startsWith('#')) {
    return null;
  }

  const id = decodeURIComponent(hash.slice(1));
  if (!id) {
    return null;
  }

  return document.getElementById(id);
}

export function scrollToHash(hash: string, options: ScrollHashOptions = {}): boolean {
  const target = getTargetByHash(hash);

  if (!target) {
    return false;
  }

  target.scrollIntoView({
    behavior: options.behavior ?? 'smooth',
    block: 'start',
  });

  return true;
}

export function scrollToCurrentHashWithRetry(options: RetryHashScrollOptions = {}): void {
  const hash = window.location.hash;
  if (!hash) {
    return;
  }

  const attempts = options.attempts ?? 20;
  const delayMs = options.delayMs ?? 80;
  let attempt = 0;

  const run = () => {
    attempt += 1;

    const isScrolled = scrollToHash(hash, {
      behavior: options.behavior ?? 'auto',
    });

    if (isScrolled || attempt >= attempts) {
      return;
    }

    window.setTimeout(run, delayMs);
  };

  window.requestAnimationFrame(run);
}
