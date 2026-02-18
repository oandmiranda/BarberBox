import { sql } from "@/lib/db";
import { getCurrentUser } from "@/domain/auth/getCurrentUser";
import { ServiceEntity } from "@/types/serviceEntity";

export async function getInactiveServices(): Promise<ServiceEntity[]> {
  const user = await getCurrentUser();

  if (!user || user.role !== "ADMIN") {
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
    WHERE is_active = false
    ORDER BY created_at DESC
  `) as ServiceEntity[];

  return services;
}