import { sql } from "@/lib/db";
import { Barber } from "@/types/barber";

export async function allBarbers(): Promise<Barber[]> {
  const result = await sql`
    SELECT id, name, email, role, image_url AS "imageUrl"
    FROM users
    WHERE role = 'BARBER'
  `;

  return result.map(barber => ({
    id: barber.id,
    name: barber.name,
    email: barber.email,
    role: barber.role,
    imageUrl: barber.imageUrl,
  }));
}