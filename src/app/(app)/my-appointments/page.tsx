import { getUserAppointments } from "@/actions/getUserAppointments";
import MyAppointmentsClient from "./myAppointmentsClient";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/domain/auth/getCurrentUser";

export default async function MyAppointments() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/home");
  }

  try {
    const allAppointments = await getUserAppointments();

    return <MyAppointmentsClient appointments={allAppointments} />;
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.message === "Unauthorized") {
        redirect("/home");
      }

      console.error("Failed to load appointments:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}
