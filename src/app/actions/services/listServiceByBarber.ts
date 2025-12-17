"use server";

import { sql } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { Service } from "@/types/listServices";

export async function listServicesByBarber(): Promise<Service[]> {
  const user = await getCurrentUser();

  // Se não houver usuário, ou se o role não for BARBER e não for ADMIN, bloqueia.
  if (!user || (user.role !== "BARBER" && user.role !== "ADMIN")) {
    throw new Error("Forbidden");
  }

  const services = (await sql`
    SELECT
      id,
      name,
      description,
      duration_minutes,
      price,
      is_active,
      created_at
    FROM services
    WHERE is_active = true
    ORDER BY created_at DESC
  `) as Service[];

  return services;
}
