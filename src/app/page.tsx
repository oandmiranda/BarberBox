import { getCurrentUser } from "@/domain/auth/getCurrentUser";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/home");
  }

  if (user.role === "BARBER" || user.role === "ADMIN") {
    redirect("/dashboard");
  }

  redirect("/home");
}