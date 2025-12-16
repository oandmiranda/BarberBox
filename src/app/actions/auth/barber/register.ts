"use server"

import bcrypt from "bcrypt"
import { sql } from "@/lib/db"
import { RegisterInput } from "@/types/registerInput"

export async function registerBarber(data: RegisterInput) {
  const { name, email, password } = data

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
    VALUES (${name}, ${email}, ${hashedPassword}, 'barber')
  `

  return { success: true }
}