import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/jwt";

const PUBLIC_PREFIXES = [
  "/",
  "/home",
  "/login",
  "/register",
  "/schedule",
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // rotas públicas (prefixo)
  const isPublic = PUBLIC_PREFIXES.some((prefix) =>
    pathname === prefix || pathname.startsWith(prefix + "/")
  );

  if (isPublic) {
    return NextResponse.next();
  }

  const token = req.cookies.get("auth_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    verifyToken(token);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};