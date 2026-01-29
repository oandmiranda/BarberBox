import Navbar from "@/components/sections/navbar";
import { getCurrentUser } from "@/domain/auth/getCurrentUser";

type Props = {
  children: React.ReactNode;
};

export default async function AppLayout({ children }: Props) {
  const currentUser = await getCurrentUser();

  return (
    <>
      <Navbar currentUser={currentUser} />
      {children}
    </>
  );
}