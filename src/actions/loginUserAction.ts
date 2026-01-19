"use server";

import { cookies } from "next/headers";
import { loginUser } from "@/auth/loginUser";
import { LoginUserForm } from "@/types/loginUserForm";

export async function loginUserAction(
  data: LoginUserForm
): Promise<{ success: true } | { success: false; error: string }> {
  try {
    const { token } = await loginUser(data);

    cookies().set("auth_token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Email ou senha inválidos",
    };
  }
}