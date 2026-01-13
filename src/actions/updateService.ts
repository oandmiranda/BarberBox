"use server";

import { sql } from "@/lib/db";
import { getCurrentUser } from "@/auth/getCurrentUser";
import { redirect } from "next/navigation";

export async function updateService(
  serviceId: string,
  formData: FormData
) {
  const user = await getCurrentUser();

  if (!user || user.role !== "ADMIN") {
    throw new Error("Forbidden");
  }

  const name = formData.get("name") as string | null;

  const descriptionRaw = formData.get("description") as string | null;
  const description =
    descriptionRaw && descriptionRaw.trim() !== ""
      ? descriptionRaw
      : null;

  const duration = Number(formData.get("duration"));
  const price = Number(formData.get("price"));
  
  const image_url = formData.get("image_url") as string | null;

  if (
    !name ||
    Number.isNaN(duration) ||
    duration <= 0 ||
    Number.isNaN(price) ||
    price <= 0
  ) {
    throw new Error("Invalid data");
  }

  await sql`
    UPDATE services
    SET
      name = ${name},
      description = ${description},
      duration_minutes = ${duration},
      price = ${price},
      image_url = ${image_url}
    WHERE id = ${serviceId}
  `;

  redirect("/services");
}