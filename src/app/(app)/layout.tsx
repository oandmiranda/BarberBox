import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/navbar";
import { getCurrentUser } from "@/domain/auth/getCurrentUser";

type Props = {
  children: React.ReactNode;
};

export default async function AppLayout({ children }: Props) {
  const currentUser = await getCurrentUser();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentUser={currentUser} />
      <main className="items-center justify-center flex flex-col flex-1">{children}</main>
      <Footer />
    </div>
  );
}
