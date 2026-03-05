export const dynamic = "force-dynamic";

import { getCurrentUser } from "@/domain/auth/getCurrentUser";
import NavbarClient from "./navbarClient";

export default async function Navbar() {
  const currentUser = await getCurrentUser();

  return <NavbarClient currentUser={currentUser} />;
}