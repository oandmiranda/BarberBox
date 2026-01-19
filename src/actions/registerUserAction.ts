"use server";

import { registerUser } from "@/auth/registerUser";
import { RegisterUserForm } from "@/types/registerUserForm";

export async function registerUserAction (data: RegisterUserForm): Promise<{ success: true } | { success: false; error: string }> {
  try {
    await registerUser(data);
    return { success: true };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Email ou senha inválidos",
    };
  }
}
