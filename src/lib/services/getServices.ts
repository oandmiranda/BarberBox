import { sql } from "@/lib/db";
import { Service } from "@/types/listServices";

export async function getActiveServices(): Promise<Service[]> {
  const services = (await sql`
    SELECT
      id,
      name,
      description,
      duration_minutes,
      price,
      is_active,
      image_url,
      created_at
    FROM services
    WHERE is_active = true
    ORDER BY created_at DESC
  `) as Service[];

  return services;
}