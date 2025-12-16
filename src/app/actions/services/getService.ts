"use server";

import { sql } from "@/lib/db";

export async function getServices() {
  const services = await sql`
    SELECT *
    FROM services
    ORDER BY created_at DESC
  `;

  return services;
}