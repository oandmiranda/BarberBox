import { ServiceEntity } from "@/types/serviceEntity";
import { ServiceUiWithID } from "@/types/ui/serviceProps";

export const mapServiceToUI = (service: ServiceEntity): ServiceUiWithID => ({
  id: service.id,
  imageUrl: service.image_url,
  imageAlt: service.name,
  name: service.name,
  description: service.description ?? undefined,
  details: service.details ?? undefined,
  durationMinutes: service.duration_minutes,
  price: service.price,
  tag: service.tag ?? undefined,
});