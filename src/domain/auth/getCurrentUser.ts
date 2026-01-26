import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import { sql } from "@/lib/db";
import { CurrentUser } from "@/types/currentUser";

export async function getCurrentUser(): Promise<CurrentUser | null> {
  const token = cookies().get("auth_token")?.value;
  if (!token) return null;

  try {
    const payload = await verifyToken(token);

    const rows = await sql`
      SELECT id, name, email, role
      FROM users
      WHERE id = ${payload.userId}
      LIMIT 1
    `;

    if (rows.length === 0) return null;

    const user: CurrentUser = {
      id: rows[0].id,
      name: rows[0].name,
      email: rows[0].email,
      role: rows[0].role,
    };

    return user;
  } catch {
    return null;
  }
}