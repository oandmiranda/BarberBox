import { sql } from "@/lib/db";
import { Barber } from "@/types/barber";

export async function getBarberById(id: string): Promise<Barber | null> {
  const dbResult = await sql`
    SELECT
      id,
      name,
      email,
      role,
      image_url AS "imageUrl"
    FROM users
    WHERE id = ${id} AND role = 'BARBER'
    LIMIT 1
  `;

  if (dbResult.length === 0) {
    return null;
  }

  const data = dbResult[0];

  const barber: Barber = {
    id: data.id,
    name: data.name,
    email: data.email,
    role: data.role,
    imageUrl: data.imageUrl,
  };

  return barber;
}
