import "server-only"

const WINDOW_MS = 60_000
const MAX_REQUESTS = 5

type Entry = {
  count: number
  resetAt: number
}

const bucket = new Map<string, Entry>()

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for")
  if (forwardedFor) {
    const first = forwardedFor.split(",")[0]?.trim()
    if (first) return first
  }

  const realIp = request.headers.get("x-real-ip")
  if (realIp) return realIp

  return "unknown"
}

export function isRateLimited(key: string): boolean {
  const now = Date.now()
  const current = bucket.get(key)

  if (!current || current.resetAt <= now) {
    bucket.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }

  if (current.count >= MAX_REQUESTS) {
    return true
  }

  current.count += 1
  bucket.set(key, current)
  return false
}
