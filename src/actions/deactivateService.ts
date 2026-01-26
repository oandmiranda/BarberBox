"use server";

import { sql } from "@/lib/db";
import { getCurrentUser } from "@/domain/auth/getCurrentUser";
import { redirect } from "next/navigation";

export async function deactivateService(serviceId: string) {
  const user = await getCurrentUser();

  if (!user || user.role !== "ADMIN") {
    throw new Error("Forbidden");
  }

  await sql`
    UPDATE services
    SET is_active = false
    WHERE id = ${serviceId}
  `;

  redirect("/services");
}