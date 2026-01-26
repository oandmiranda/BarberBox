"use server";

import { sql } from "@/lib/db";
import { getCurrentUser } from "@/domain/auth/getCurrentUser";
import { redirect } from "next/navigation";

export async function reactivateService(serviceId: string) {
  const user = await getCurrentUser();

  if (!user || user.role !== "ADMIN") {
    throw new Error("Não permitido");
  }

  await sql`
    UPDATE services
    SET is_active = true
    WHERE id = ${serviceId}
  `;

  redirect("/services");
}