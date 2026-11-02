interface RateLimitOptions {
  windowMs: number;
  maxRequests: number;
}

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

// In-memory sliding window rate limiter
const rateLimitMap = new Map<string, RateLimitRecord>();

let lastCleanup = Date.now();
function cleanupStaleEntries() {
  const now = Date.now();
  // Clean up at most once every 60 seconds
  if (now - lastCleanup < 60_000) return;
  lastCleanup = now;

  rateLimitMap.forEach((record, key) => {
    if (record.resetTime <= now) {
      rateLimitMap.delete(key);
    }
  });
}

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const firstIp = forwarded.split(",")[0].trim();
    if (firstIp) return firstIp;
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "127.0.0.1";
}

export function checkRateLimit(
  key: string,
  options: RateLimitOptions
): { success: boolean; remaining: number; resetTime: number } {
  cleanupStaleEntries();

  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || record.resetTime <= now) {
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + options.windowMs,
    });
    return {
      success: true,
      remaining: options.maxRequests - 1,
      resetTime: now + options.windowMs,
    };
  }

  if (record.count >= options.maxRequests) {
    return {
      success: false,
      remaining: 0,
      resetTime: record.resetTime,
    };
  }

  record.count += 1;
  return {
    success: true,
    remaining: options.maxRequests - record.count,
    resetTime: record.resetTime,
  };
}
