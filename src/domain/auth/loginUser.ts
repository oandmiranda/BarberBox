import bcrypt from "bcryptjs";
import { sql } from "@/lib/db";
import { signToken } from "@/lib/jwt";
import { LoginUserForm } from "@/types/loginUserForm";

export async function loginUser({ email, password }: LoginUserForm) {
  if (!email || !password) {
    throw new Error("Email ou senha inválidos");
  }

  const users = await sql`
    SELECT id, email, password_hash, role
    FROM users
    WHERE email = ${email}
    LIMIT 1
  `;

  if (users.length === 0) {
    throw new Error("E-mail ou senha inválidos");
  }

  const user = users[0];

  const validPassword = await bcrypt.compare(
    password,
    user.password_hash
  );

  if (!validPassword) {
    throw new Error("E-mail ou senha inválidos");
  }

  const token = await signToken({
    userId: user.id,
    role: user.role,
  });

  return { token };
}