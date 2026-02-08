import { unstable_noStore } from "next/cache";

import getPremiumServicesForUI from "@/domain/getPremiumServices";
import PremiumServicesPageClient from "./premiumServicesClient";

export default async function PremiumServicesPage() {
    unstable_noStore();

  const services = await getPremiumServicesForUI();
  return (
    <PremiumServicesPageClient services={services}/>
  );
}
