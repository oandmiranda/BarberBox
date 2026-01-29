import { getActiveServices } from "@/domain/getActiveServices";


const getActiveServicesForUI = async () => {
  // chama o domain 
  const servicesEntity = await getActiveServices();

  // Mapeia entities para o tipo correto da UI
    return servicesEntity.map((service) => ({
    id: service.id,
    imageUrl: service.image_url,
    imageAlt: service.name,
    name: service.name,
    durationMinutes: service.duration_minutes,
    price: service.price,
  }));
};

export default getActiveServicesForUI;
