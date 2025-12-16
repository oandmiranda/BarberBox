"use server"

import bcrypt from "bcrypt"
import { sql } from "@/lib/db"
import { cookies } from "next/headers"
import { signToken } from "@/lib/jwt"
import { redirect } from "next/navigation"

export async function loginUser(formData: FormData) {
  const email = formData.get("email") as string | null
  const password = formData.get("password") as string | null

  if (!email || !password) {
    throw new Error("Invalid credentials")
  }

  const users = await sql`
    SELECT id, name, email, password_hash, role
    FROM users
    WHERE email = ${email}
    LIMIT 1
  `

  if (users.length === 0) {
    throw new Error("Invalid credentials")
  }

  const user = users[0]

  const valid = await bcrypt.compare(password, user.password_hash)
  if (!valid) {
    throw new Error("Invalid credentials")
  }

  const token = await signToken({
    userId: user.id,
    role: user.role,
  })

  cookies().set("auth_token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  })

  redirect("/dashboard")
}