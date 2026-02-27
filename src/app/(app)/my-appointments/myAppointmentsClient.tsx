import Text from "@/components/ui/text";
import { formatDateTime } from "@/lib/formatDataTime";
import { AppointmentView } from "@/types/appointments";

type MyAppointmentsClientProps = {
  appointments: AppointmentView[];
};

export default function MyAppointmentsClient({
  appointments,
}: MyAppointmentsClientProps) {

   const statusLabel = {
    SCHEDULE: "Agendado",
    CANCELED: "Cancelado",
    COMPLETED: "Finalizado",
  }

  return (
    <section className="py-[100px] h-full px-4 flex">
      <div>
        {appointments.map((appointment) => (
          <div key={appointment.id} className="py-4">
            <Text>Start Time: {formatDateTime(appointment.start_time)}</Text>
            <Text>Status: {statusLabel[appointment.status]}</Text>
            <Text>Barbeiro: {appointment.barber_name}</Text>
            <img src={"/assets/images/barbers/"}/>
            <Text>Serviço: {appointment.service_name}</Text>
          </div>
        ))}
      </div>
    </section>
  );
}
