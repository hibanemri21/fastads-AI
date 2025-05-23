import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"
import { rateLimit } from "@/lib/rate-limit"

// Create a new rate limiter that allows 100 requests per minute
const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500, // Max 500 users per interval
})

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Apply rate limiting to API routes
  if (path.startsWith("/api/") && !path.startsWith("/api/auth")) {
    try {
      const ip = request.ip ?? "anonymous"
      await limiter.check(10, ip) // 10 requests per minute per IP
    } catch {
      return NextResponse.json({ error: "Too Many Requests" }, { status: 429 })
    }
  }

  const token = await getToken({ req: request })
  const isAuthenticated = !!token

  // Get the pathname of the request
  const pathname = request.nextUrl.pathname

  // Paths that are accessible to the public
  const publicPaths = ["/login", "/signup", "/"]
  const isPublicPath = publicPaths.some(
    (publicPath) => pathname === publicPath || pathname.startsWith(publicPath + "/"),
  )

  // Paths that require admin role
  const adminPaths = ["/admin"]
  const isAdminPath = adminPaths.some((adminPath) => pathname === adminPath || pathname.startsWith(adminPath + "/"))

  // Paths that require client role
  const clientPaths = ["/dashboard"]
  const isClientPath = clientPaths.some(
    (clientPath) => pathname === clientPath || pathname.startsWith(clientPath + "/"),
  )

  // If the path is public, allow access
  if (isPublicPath) {
    // If user is already logged in and tries to access login/signup, redirect to appropriate dashboard
    if (isAuthenticated) {
      if (token.role === "admin") {
        return NextResponse.redirect(new URL("/admin", request.url))
      } else {
        return NextResponse.redirect(new URL("/dashboard", request.url))
      }
    }
    return NextResponse.next()
  }

  // If user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Check role-based access
  if (isAdminPath && token.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  if (isClientPath && token.role !== "client") {
    return NextResponse.redirect(new URL("/admin", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
}
