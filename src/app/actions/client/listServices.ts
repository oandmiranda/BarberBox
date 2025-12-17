"use server";

import { getActiveServices } from "@/lib/services/getServices";
import { Service } from "@/types/listServices";

export async function listServicesForClient(): Promise<Service[]> {
  return getActiveServices();
}