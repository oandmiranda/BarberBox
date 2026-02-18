import getActiveServicesForUI from "@/application/getActiveServicesForUI";

export default async function getPremiumServicesForUI() {
  const services = await getActiveServicesForUI();

  return services.filter(service => service.tag === "premium");
}