"use server";

import { registerUser } from "@/auth/registerUser";
import { redirect } from "next/navigation";

export async function registerAdmin(formData: FormData) {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;
  const confirmPassword = formData.get("confirmPassword") as string | null;

  if (!name || !email || !password || !confirmPassword) {
    throw new Error("Invalid data");
  }

  await registerUser({
    name,
    email,
    password,
    confirmPassword,
    role: "ADMIN",
  });

  redirect("/home");
}