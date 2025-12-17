"use server";

import { getCurrentUser } from "@/lib/auth";
import { getActiveServices } from "@/lib/services/getServices";
import { Service } from "@/types/listServices";

export async function listServicesToBarber(): Promise<Service[]> {
  const user = await getCurrentUser();

  // Se não houver usuário, ou se o role não for BARBER e não for ADMIN, bloqueia.
  if (!user || (user.role !== "BARBER" && user.role !== "ADMIN")) {
    throw new Error("Forbidden");
  }

  const services = await getActiveServices();
  return services;
}
