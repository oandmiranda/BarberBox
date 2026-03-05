import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/navbar";

type Props = {
  children: React.ReactNode;
};

export default async function AppLayout({ children }: Props) {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="items-center justify-center flex flex-col flex-1">{children}</main>
      <Footer />
    </div>
  );
}
