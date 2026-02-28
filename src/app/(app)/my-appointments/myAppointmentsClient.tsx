"use client";

import { cancelAppointment } from "@/actions/cancelAppointment";
import Button from "@/components/ui/button";
import Card from "@/components/ui/Card";
import FilterButton from "@/components/ui/filterButton";
import Heading from "@/components/ui/heading";
import MessageModal from "@/components/ui/messageModal";
import Spinner from "@/components/ui/spinner";
import Text from "@/components/ui/text";
import { canCancelAppointment } from "@/lib/appointments/can_cancel";
import { formatDateTime } from "@/lib/formatDataTime";
import { AppointmentView } from "@/types/appointments";
import { Check, Clock, User, X } from "lucide-react";
import { useEffect, useState } from "react";

type MyAppointmentsClientProps = {
  appointments: AppointmentView[];
};

export default function MyAppointmentsClient({
  appointments,
}: MyAppointmentsClientProps) {
  // Estado local que começa com os dados vindos do servidor
  const [appointmentsState, setAppointmentsState] = useState(appointments);
  const [showCancelMessageSuccess, setShowCancelMessageSuccess] = useState(false);
  const [activeCategory, setActiveCategory] = useState<"SCHEDULED" | "CANCELED" | "COMPLETED" | null>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const filteredCategory = activeCategory
    ? appointmentsState.filter(
        (appointment) => appointment.status === activeCategory,
      )
    : appointmentsState;

  // mappers
  const statusLabel: Record<string, string> = {
    SCHEDULED: "Agendado",
    CANCELED: "Cancelado",
    COMPLETED: "Finalizado",
  };

  const statusClass: Record<string, string> = {
    SCHEDULED:
      "flex items-center gap-1 bg-blue-200 text-blue-700 py-1 px-2 rounded-md",
    COMPLETED:
      "flex items-center gap-1 bg-green-200 text-green-700 py-1 px-2 rounded-md",
    CANCELED:
      "flex items-center gap-1 bg-red-200 text-red-700 py-1 px-2 rounded-md",
  };

  const statusIcon: Record<string, React.ReactNode> = {
    SCHEDULED: <Clock size={16} />,
    COMPLETED: <Check size={16} />,
    CANCELED: <X size={20} />,
  };

  useEffect(() => {
    if (!showCancelMessageSuccess) return;

    const timer = setTimeout(() => {
      setShowCancelMessageSuccess(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showCancelMessageSuccess]);

  return (
    <section className="py-[100px] w-full flex flex-col items-center justify-center gap-6 px-2 sm:px-4 text-center">
      <div className="flex flex-col gap-4">
        <Heading>{`Meus Agendamentos`}</Heading>
        <Text>{`Você tem ${appointmentsState.length} agendamento(s) no seu histórico.`}</Text>
        <Text size="xs">
          Se você tiver agendamentos marcados, você pode cancelar até{" "}
          <strong className="text-red-500">
            4 horas antes do horário agendado.
          </strong>
        </Text>
      </div>

      {!appointmentsState.length && (
        <div className="flex flex-col gap-5">
          <Text size="lg">Que tal agendar um serviço?</Text>
          <Button variant="link" href="/#services" widthFull>
            Conhecer serviços
          </Button>
        </div>
      )}

      {appointmentsState.length > 0 && (
        <>
          <div className="flex gap-2">
            <FilterButton
              label="Todos"
              onClick={() => {
                setActiveCategory(null);
              }}
            />
            <FilterButton
              color="scheduled"
              label="Agendados"
              onClick={() =>
                setActiveCategory((prev) =>
                  prev === "SCHEDULED" ? null : "SCHEDULED",
                )
              }
            />
            <FilterButton
              color="completed"
              label="Finalizados"
              onClick={() =>
                setActiveCategory((prev) =>
                  prev === "COMPLETED" ? null : "COMPLETED",
                )
              }
            />
            <FilterButton
              color="canceled"
              label="Cancelados"
              onClick={() =>
                setActiveCategory((prev) =>
                  prev === "CANCELED" ? null : "CANCELED",
                )
              }
            />
          </div>
        </>
      )}

      <div className="mx-auto max-w-[1200px] min-w-0 w-full grid grid-cols-1 gap-x-4 gap-y-5 md:px-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredCategory.map((appointment) => {
          const now = new Date();
          const startTime = new Date(appointment.start_time);

          const canCancel =
            appointment.status === "SCHEDULED" &&
            canCancelAppointment(appointment.status, startTime, now);

          // Função responsável por cancelar e atualizar o estado local
          const handleCancel = async (appointment: AppointmentView) => {
            try {
              setLoadingId(appointment.id);

              await cancelAppointment(appointment.id, appointment.client_id);

              // Atualiza apenas o item cancelado para status "CANCELED"
              setAppointmentsState((prev) =>
                prev.map((item) =>
                  item.id === appointment.id
                    ? { ...item, status: "CANCELED" }
                    : item,
                ),
              );

              setShowCancelMessageSuccess(true);
            } finally {
              setLoadingId(null);
            }
          };

          return (
            <Card
              key={appointment.id}
              backgroundColor={appointment.status}
              title={appointment.service_name}
              subtitle={formatDateTime(appointment.start_time)}
              metadata={{
                label: statusLabel[appointment.status],
                className: statusClass[appointment.status],
                icon: statusIcon[appointment.status],
              }}
              details={{
                label: `Barbeiro: ${appointment.barber_name}`,
                icon: <User size={18} />,
              }}
              imageUrl={appointment.service_image_url}
              imageAlt="barbeiro uniformizado"
              action={
                appointment.status === "SCHEDULED"
                  ? {
                      onClick: () => handleCancel(appointment),
                      label: "Cancelar",
                      className: canCancel
                        ? "text-white p-2 rounded-full transition-all duration-300 bg-red-600 hover:bg-red-500"
                        : "bg-zinc-600 p-2 rounded-full cursor-not-allowed opacity-30 text-white",
                      disabled: !canCancel,
                    }
                  : undefined
              }
            />
          );
        })}
        {loadingId && <Spinner />}
        {showCancelMessageSuccess && (
          <MessageModal
            message="Agendamento cancelado com sucesso!"
            backgroundColor="bg-green-600"
            icon="/assets/icons/check.svg"
          />
        )}
      </div>
    </section>
  );
}
