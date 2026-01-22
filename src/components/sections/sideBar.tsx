import Heading from "../ui/heading";
import { getActiveServices } from "@/services/getActiveServices";
import SideBarClient from "./sideBarClient";

const SideBar = async () => {
  const services = await getActiveServices();

  return (
    <aside className="fixed left-0 top-[110px] px-4 w-72 h-[calc(100vh-72px)] bg-surface rounded-t-xl">
      <div className="flex flex-col items-center gap-2 h-full my-6">
        <Heading size="lg">Serviços</Heading>
        <SideBarClient services={services} />
      </div>
    </aside>
  );
};

export default SideBar;
