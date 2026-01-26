"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Calendar from "@/components/sections/calendar";
import TimeSlots from "@/components/sections/timeSlot";
import Button from "@/components/ui/button";
import { getAvailableBarbersByDate } from "@/actions/getAvailableBarbersByDate";
import { getAvailableBarbersByDateTime } from "@/actions/getAvailableBarbers";
import { buildDateTime } from "@/domain/buildDateTime";
import BarberSelector from "@/components/domain/barberSelector";
import { Barber } from "@/types/barber";

type Props = {
  serviceId: string;
  unavailableDays: Date[];
};

export default function ScheduleDateClient({
  serviceId,
  unavailableDays,
}: Props) {
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableBarbers, setAvailableBarbers] = useState<Barber[] | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [availability, setAvailability] = useState<Record<
    string,
    string[]
  > | null>(null);


  // quando a data muda → busca horários e reseta dependências
  useEffect(() => {
    if (!selectedDate) return;

    const date = selectedDate;

    setSelectedTime(null);
    setAvailability(null);
    setAvailableBarbers(null);
    setSelectedBarber(null);

    async function fetchAvailableTimeSlots() {
      setLoadingSlots(true);
      const data = await getAvailableBarbersByDate(date);
      setAvailability(data);
      setLoadingSlots(false);
    }

    fetchAvailableTimeSlots();
  }, [selectedDate]);

  // quando o horário muda → busca barbeiros disponíveis
  useEffect(() => {
    if (!selectedDate || !selectedTime) return;

    const date = selectedDate;
    const time = selectedTime;

    async function fetchAvailableBarbers() {
      const dateTime = buildDateTime(date, time);
      const barbers = await getAvailableBarbersByDateTime(dateTime);

      setSelectedBarber(null);
      setAvailableBarbers(barbers);
    }

    fetchAvailableBarbers();
  }, [selectedDate, selectedTime]);

  // quando o serviço muda → reset geral
  useEffect(() => {
    setSelectedDate(null);
    setSelectedTime(null);
    setAvailability(null);
    setAvailableBarbers(null);
    setSelectedBarber(null);
  }, [serviceId]);


  function handleGoToSummary() {
    if (!selectedDate || !selectedTime || !selectedBarber) return;

    const day = String(selectedDate.getDate()).padStart(2, "0");
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const year = selectedDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    router.push(
      `/schedule/summary?serviceId=${serviceId}&date=${formattedDate}&time=${selectedTime}&barberId=${selectedBarber}`,
    );
  }

  return (
    <>
      {serviceId && (
        <Calendar
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
          unavailableDays={unavailableDays}
        />
      )}

      {selectedDate && (
        <TimeSlots
          availability={availability}
          selectedTime={selectedTime}
          onSelectTime={setSelectedTime}
          loading={loadingSlots}
        />
      )}

      {selectedDate && selectedTime && availableBarbers && (
        <BarberSelector
          barbers={availableBarbers}
          selectedBarber={selectedBarber}
          onSelectBarber={setSelectedBarber}
        />
      )}

      {selectedDate && selectedTime && selectedBarber && (
        <Button variant="primary" type="button" onClick={handleGoToSummary}>
          Agendar
        </Button>
      )}
    </>
  );
}
