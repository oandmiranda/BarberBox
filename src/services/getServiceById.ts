import { sql } from "@/lib/db";
import { Service } from "@/types/listServices";

export async function getServiceById(id: string): Promise<Service | null> {
  const dbResult = await sql`
    SELECT
      id,
      name,
      description,
      price,
      duration_minutes
    FROM services
    WHERE id = ${id} AND is_active = true
    LIMIT 1
  `;

  if (dbResult.length === 0) {
    return null;
  }

  // Primeira linha retornada pelo banco
  const data = dbResult[0];

  // Mapeia o resultado do banco
  const service: Service = {
    id: data.id,
    name: data.name,
    description: data.description,
    price: data.price,
    duration_minutes: data.duration_minutes,
  };

  return service;
}
