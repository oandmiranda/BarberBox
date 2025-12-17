// pega usuário autenticado

import { cookies } from "next/headers"
import { verifyToken } from "@/lib/jwt"

export async function getCurrentUser() {
  const token = cookies().get("auth_token")?.value
  if (!token) return null

  try {
    const payload = await verifyToken(token)
    return {
      id: payload.userId as string,
      role: payload.role as "CLIENT" | "BARBER" | "ADMIN",
    }
  } catch {
    return null
  }
}