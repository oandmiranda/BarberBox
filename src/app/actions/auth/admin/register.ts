"use server";

import { sql } from "@/lib/db";
import { registerUser } from "@/lib/services/registerUser";
import { redirect } from "next/navigation";

export async function registerAdmin(formData: FormData) {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  if (!name || !email || !password) {
    throw new Error("Invalid data");
  }

  const user = await registerUser({
    name,
    email,
    password,
    role: "ADMIN",
  });

  await sql`
    INSERT INTO users (name, email, password_hash, role)
    VALUES (${user.name}, ${user.email}, ${user.passwordHash}, ${user.role})
  `;

  redirect("/login");
}