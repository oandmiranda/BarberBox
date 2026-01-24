import SideBar from "@/components/sections/sideBar";
import Navbar from "@/components/sections/navbar";
import Container from "@/components/ui/container";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="px-5 min-h-screen">
      <SideBar />
      <Navbar />

      <main className="ml-72 pt-[110px]">
        <Container>{children}</Container>
      </main>
    </section>
  );
};

export default AppLayout;
