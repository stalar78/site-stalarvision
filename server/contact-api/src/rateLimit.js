export function getClientKey(request, { trustProxy = false } = {}) {
  if (trustProxy) {
    const forwardedFor = request.headers['x-forwarded-for'];
    const firstForwardedIp = Array.isArray(forwardedFor)
      ? forwardedFor[0]
      : forwardedFor?.split(',')[0]?.trim();

    if (firstForwardedIp) {
      return firstForwardedIp;
    }
  }

  return request.socket.remoteAddress || 'unknown';
}

export function createRateLimiter({ limit = 5, windowMs = 15 * 60 * 1000, now = () => Date.now() } = {}) {
  const buckets = new Map();

  return {
    consume(clientKey) {
      const currentTime = now();
      const existing = buckets.get(clientKey);
      const bucket = existing && existing.resetAt > currentTime
        ? existing
        : { count: 0, resetAt: currentTime + windowMs };

      if (bucket.count >= limit) {
        buckets.set(clientKey, bucket);
        return {
          allowed: false,
          retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - currentTime) / 1000)),
        };
      }

      bucket.count += 1;
      buckets.set(clientKey, bucket);

      return {
        allowed: true,
        remaining: Math.max(0, limit - bucket.count),
      };
    },
    reset() {
      buckets.clear();
    },
  };
}
