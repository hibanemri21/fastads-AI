export interface RateLimitOptions {
  interval: number
  uniqueTokenPerInterval: number
}

export interface RateLimiter {
  check: (limit: number, token: string) => Promise<void>
}

interface TokenBucket {
  tokens: Map<string, number>
  lastRefilled: number
}

export function rateLimit(options: RateLimitOptions): RateLimiter {
  const tokenBuckets = new Map<string, TokenBucket>()

  return {
    check: async (limit: number, token: string): Promise<void> => {
      const now = Date.now()
      const key = `${token}:${Math.floor(now / options.interval)}`

      let bucket = tokenBuckets.get(key)

      if (!bucket) {
        bucket = {
          tokens: new Map(),
          lastRefilled: now,
        }
        tokenBuckets.set(key, bucket)
      }

      // Refill tokens if needed
      const timeSinceLastRefill = now - bucket.lastRefilled
      if (timeSinceLastRefill > 0) {
        bucket.lastRefilled = now
      }

      // Get current count for this token
      const currentCount = bucket.tokens.get(token) || 0

      // Check if limit is exceeded
      if (currentCount >= limit) {
        throw new Error("Rate limit exceeded")
      }

      // Increment count
      bucket.tokens.set(token, currentCount + 1)

      // Clean up old entries
      const oldKeys = Array.from(tokenBuckets.keys()).filter((k) => {
        const keyTime = Number.parseInt(k.split(":")[1]) * options.interval
        return now - keyTime > options.interval
      })

      for (const oldKey of oldKeys) {
        tokenBuckets.delete(oldKey)
      }
    },
  }
}
