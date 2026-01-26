"use server";

import { redirect } from "next/navigation";
import { getCurrentUser } from "@/domain/auth/getCurrentUser";
import { sql } from "@/lib/db";

function parseDateTime(date: string, time: string): Date | null {
  const [day, month, year] = date.split("/");
  const [hour, minute] = time.split(":");

  if (!day || !month || !year || !hour || !minute) {
    return null;
  }

  const parsedDate = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
    0,
    0,
  );

  if (isNaN(parsedDate.getTime())) {
    return null;
  }

  return parsedDate;
}


export async function createAppointment(formData: FormData) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login");
  }

  const serviceId = formData.get("serviceId") as string;
  const date = formData.get("date") as string;
  const time = formData.get("time") as string;
  const barberId = formData.get("barberId") as string;

  if (!serviceId || !date || !time || !barberId) {
    redirect(`/schedule/date?serviceId=${serviceId}`);
  }

  if (typeof date !== "string" || typeof time !== "string" || !date || !time) {
    redirect("/schedule/date?error=invalid_datetime");
  }

  const startTime = parseDateTime(date, time);

  if (!startTime) {
    redirect("/schedule/date?error=invalid_datetime");
  }

  const endTime = new Date(startTime.getTime() + 30 * 60 * 1000);

  if (!barberId) {
    redirect("/schedule/date?error=no_barbers_available");
  }

  await sql`
    INSERT INTO appointments (
      client_id,
      barber_id,
      service_id,
      start_time,
      end_time,
      status
    ) VALUES (
      ${currentUser.id},
      ${barberId},
      ${serviceId},
      ${startTime},
      ${endTime},
      'SCHEDULED'
    )
  `;

  redirect("/schedule/success");
}
