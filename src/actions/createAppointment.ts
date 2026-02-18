"use server";

import { fromZonedTime } from "date-fns-tz";
import { getCurrentUser } from "@/domain/auth/getCurrentUser";
import { sql } from "@/lib/db";

type ActionResult =
  | { ok: true }
  | { ok: false; error: string };

function parseDateTime(date: string, time: string): Date | null {
  const [day, month, year] = date.split("/");
  const [hour, minute] = time.split(":");

  if (!day || !month || !year || !hour || !minute) {
    return null;
  }

  const formatted = `${year}-${month}-${day}T${hour}:${minute}:00`;

  const utcDate = fromZonedTime(
    formatted,
    "America/Sao_Paulo"
  );

  return isNaN(utcDate.getTime()) ? null : utcDate;
}

export async function createAppointment(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {

  const user = await getCurrentUser();
  if (!user) {
    return { ok: false, error: "NOT_AUTH" };
  }

  const serviceId = formData.get("serviceId");
  const date = formData.get("date");
  const time = formData.get("time");
  const barberId = formData.get("barberId");

  if (
    typeof serviceId !== "string" ||
    typeof date !== "string" ||
    typeof time !== "string" ||
    typeof barberId !== "string"
  ) {
    return { ok: false, error: "INVALID_INPUT" };
  }

  const startTime = parseDateTime(date, time);
  if (!startTime) {
    return { ok: false, error: "INVALID_DATETIME" };
  }

  const serviceRows = await sql`
    SELECT duration_minutes
    FROM services
    WHERE id = ${serviceId}
  `;

  const service =
    serviceRows[0] as { duration_minutes: number } | undefined;

  if (!service) {
    return { ok: false, error: "SERVICE_NOT_FOUND" };
  }

  const MS_PER_MINUTE = 60000;

  const endTime = new Date(
    startTime.getTime() +
      service.duration_minutes * MS_PER_MINUTE
  );

  try {
    await sql`
      INSERT INTO appointments (
        client_id,
        barber_id,
        service_id,
        start_time,
        end_time,
        status
      ) VALUES (
        ${user.id},
        ${barberId},
        ${serviceId},
        ${startTime},
        ${endTime},
        'SCHEDULED'
      )
    `;

    return { ok: true };

  } catch {
    return {
      ok: false,
      error: "APPOINTMENT_ALREADY_CREATED"
    };
  }
}