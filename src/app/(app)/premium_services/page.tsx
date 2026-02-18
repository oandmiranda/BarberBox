import { unstable_noStore } from "next/cache";

import PremiumServicesPageClient from "./premiumServicesClient";
import getPremiumServicesForUI from "@/application/getPremiumServicesForUI";

export default async function PremiumServicesPage() {
    unstable_noStore();

  const services = await getPremiumServicesForUI();
  return (
    <PremiumServicesPageClient services={services}/>
  );
}
