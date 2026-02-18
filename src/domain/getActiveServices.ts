import { sql } from "@/lib/db";
import { ServiceEntity } from "@/types/serviceEntity";

export async function getActiveServices(): Promise<ServiceEntity[]> {
  const services = (await sql`
    SELECT
      id,
      name,
      description,
      duration_minutes,
      price,
      is_active,
      image_url,
      tag,
      details,
      created_at
    FROM services
    WHERE is_active = true
    ORDER BY created_at DESC
  `) as ServiceEntity[];

  return services;
}