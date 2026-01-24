import { getCurrentUser } from "@/auth/getCurrentUser";
import { getActiveServices } from "@/queries/getActiveServices";
import { Service } from "@/types/listServices";

export async function getServicesToBarber(): Promise<Service[]> {
  const user = await getCurrentUser();

  // Se não houver usuário, ou se o role não for BARBER e não for ADMIN, bloqueia.
  if (!user || (user.role !== "BARBER" && user.role !== "ADMIN")) {
    throw new Error("Forbidden");
  }

  const services = await getActiveServices();
  return services;
}
