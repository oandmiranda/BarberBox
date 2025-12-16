"use server" // declara que é um server action

import { sql } from "@/lib/db"

type CreateServiceInput = {
  name: string
  description?: string
  durationMinutes: number
  price: number
  barberId?: string
}

export async function createService(input: CreateServiceInput) {
  const { name, description, durationMinutes, price } = input
  const barberId = "48367dfe-6489-4b52-83bd-45482dce6b7e";

  const [service] = await sql`
    INSERT INTO services (
      id,
      name,
      description,
      duration_minutes,
      price,
      is_active,
      barber_id,
      created_at
    )
    VALUES (
      gen_random_uuid(),
      ${name},
      ${description ?? null},
      ${durationMinutes},
      ${price},
      true,
      ${barberId},
      now()
    )
    RETURNING *
  `

  return service
}