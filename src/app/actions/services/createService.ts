"use server";

import { sql } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function createService(formData: FormData) {
  const user = await getCurrentUser();

  if (!user || user.role !== "ADMIN") {
    throw new Error("Forbidden");
  }

  const name = formData.get("name") as string | null;

  const descriptionRaw = formData.get("description") as string | null;
  // // normaliza string vazia para null (description é opcional)
  const description =
    descriptionRaw && descriptionRaw.trim() !== "" ? descriptionRaw : null;

  const duration = Number(formData.get("duration"));

  const priceRaw = formData.get("price");
  const price = Number(priceRaw)

  const image_url = formData.get("image_url") as string | null;

  if (!name || Number.isNaN(duration) || duration <= 0) {
    throw new Error("Invalid data");
  }

   if (Number.isNaN(price) || price <= 0) {
    throw new Error("Invalid price");
  }

  await sql`
    INSERT INTO services (
      name,
      description,
      duration_minutes,
      price,
      is_active,
      image_url
    )
    VALUES (
      ${name},
      ${description},
      ${duration},
      ${price},
      true,
      ${image_url}
    )
  `;

  redirect("/dashboard");
}
