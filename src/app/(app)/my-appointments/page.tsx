import { getUserAppointments } from "@/actions/getUserAppointments";
import MyAppointmentsClient from "./myAppointmentsClient";
import { redirect } from "next/navigation";
import { Heading } from "lucide-react";
import Text from "@/components/ui/text";

export default async function MyAppointments() {
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

    return (
      <section>
        <Heading>{`Algo deu errado :(`}</Heading>
        <Text>Por favor tente novamente.</Text>
      </section>
    );
  }
}
