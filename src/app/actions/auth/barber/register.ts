"use server"

import bcrypt from "bcrypt"
import { sql } from "@/lib/db"
import { redirect } from "next/navigation"

export async function registerBarber(formData: FormData) {
const name = formData.get("name") as string | null
const email = formData.get("email") as string | null
const password = formData.get("password") as string | null

  if (!name || !email || !password) {
    throw new Error("Invalid data")
  }

  const existingUser = await sql`
    SELECT id FROM users WHERE email = ${email} LIMIT 1
  `

  if (existingUser.length > 0) {
    throw new Error("User already exists")
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await sql`
    INSERT INTO users (name, email, password_hash, role)
    VALUES (${name}, ${email}, ${hashedPassword}, 'BARBER')
  `

  redirect("/login")
}