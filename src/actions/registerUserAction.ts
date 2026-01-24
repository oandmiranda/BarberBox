"use server";

import { registerUser } from "@/auth/registerUser";
import { RegisterUserForm } from "@/types/registerUserForm";

export async function registerUserAction (data: RegisterUserForm): Promise<{ success: true } | { success: false; error: string }> {
  try {
    await registerUser(data);
    return { success: true };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Email ou senha inválidos";
    return {
      success: false,
      error: errorMessage,
    };
  }
}
