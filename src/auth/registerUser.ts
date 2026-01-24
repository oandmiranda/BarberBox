import bcrypt from "bcrypt";
import { sql } from "@/lib/db";
import { RegisterUserForm } from "@/types/registerUserForm";

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}
// format validations
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password: string) {
  if (password.length < 8) return false;

  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  return hasLowercase && hasUppercase && hasNumber;
}

export async function registerUser({
  name,
  email,
  password,
  confirmPassword,
  role,
}: RegisterUserForm) {
  if (!name || !email || !password || !confirmPassword) {
    throw new Error("Invalid data");
  }

  const normalizedEmail = normalizeEmail(email);

  if (!isValidEmail(normalizedEmail)) {
    throw new Error("Invalid email");
  }

  if (!isValidPassword(password)) {
    throw new Error("Invalid password");
  }


  if (password !== confirmPassword) {
    throw new Error("Passwords do not match");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  try {
    await sql`
      INSERT INTO users (name, email, password_hash, role)
      VALUES (${name.trim()}, ${normalizedEmail}, ${passwordHash}, ${role})
    `;
  } catch {
    throw new Error("Não foi possível criar a conta. E-mail já cadastrado.");
  }
}