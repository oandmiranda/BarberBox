import { sql } from "@/lib/db";
import { User } from "@/types/user";

export async function getBarberById(id: string): Promise<User | null> {
  const dbResult = await sql`
    SELECT
      id,
      name,
      email,
      role
    FROM users
    WHERE id = ${id} AND role = 'BARBER'
    LIMIT 1
  `;

  if (dbResult.length === 0) {
    return null;
  }

  const data = dbResult[0];

  const barber: User = {
    id: data.id,
    name: data.name,
    email: data.email,
    role: data.role,
  };

  return barber;
}
