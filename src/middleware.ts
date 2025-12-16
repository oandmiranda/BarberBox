import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyToken } from "@/lib/jwt"

const PUBLIC_ROUTES = ["/login", "/register/client", "/register/barber"]

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Rotas públicas não exigem auth
  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next()
  }

  const token = req.cookies.get("auth_token")?.value

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  try {
    verifyToken(token)
    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL("/login", req.url))
  }
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
}