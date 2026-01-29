import { getCurrentUser } from "@/domain/auth/getCurrentUser";
import { getActiveServices } from "@/domain/getActiveServices";
import { ServiceEntity } from "@/types/serviceEntity";

export async function getServicesToBarber(): Promise<ServiceEntity[]> {
  const user = await getCurrentUser();

  // Se não houver usuário, ou se o role não for BARBER e não for ADMIN, bloqueia.
  if (!user || (user.role !== "BARBER" && user.role !== "ADMIN")) {
    throw new Error("Forbidden");
  }

  const services = await getActiveServices();
  return services;
}
