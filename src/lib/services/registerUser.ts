// regra de negócio reutilizável
import bcrypt from "bcrypt";
import { sql } from "@/lib/db";
import { RegisterUserInput } from "@/types/registerInput";

export async function registerUser({
  name,
  email,
  password,
  role,
}: RegisterUserInput) {
  if (!name || !email || !password) {
    throw new Error("Invalid data");
  }

  const existingUser = await sql`
    SELECT id FROM users WHERE email = ${email} LIMIT 1
  `;

  if (existingUser.length > 0) {
    throw new Error("User already exists");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  return {
    name,
    email,
    passwordHash,
    role,
  };
}