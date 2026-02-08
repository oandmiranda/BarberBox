"use client";

import { useEffect, useState } from "react";
import { getUnavailableDays } from "@/actions/getUnavailableDays";
import Calendar from "./calendar";
import { Barber } from "@/types/barber";
import { getAvailableBarbersByDate } from "@/actions/getAvailableBarbersByDate";
import TimeSlots from "./timeSlot";
import { buildDateTime } from "@/domain/buildDateTime";
import { getAvailableBarbersByDateTime } from "@/actions/getAvailableBarbers";
import BarberSelector from "../domain/barberSelector";
import { useRouter } from "next/navigation";
import Button from "../ui/button";
import Heading from "../ui/heading";
import { X } from "lucide-react";
import Spinner from "../ui/spinner";

type ModalProps = {
  selectedServiceId: string;
  onClose: () => void;
};

export default function Modal({ selectedServiceId, onClose }: ModalProps) {
  const router = useRouter();
  const [unavailableDays, setUnavailableDays] = useState<Date[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableBarbers, setAvailableBarbers] = useState<Barber[] | null>(
    null,
  );
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);
  const [availability, setAvailability] = useState<Record<
    string,
    string[]
  > | null>(null);

  useEffect(() => {
    async function loadUnavailableDays() {
      setLoading(true);

      const startDate = new Date();
      const endDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth() + 1,
        0,
      );

      const days = await getUnavailableDays(startDate, endDate);

      setUnavailableDays(days);
      setLoading(false);
    }

    if (selectedServiceId) {
      loadUnavailableDays();
    }
  }, [selectedServiceId]);

  // quando a data muda → busca horários e reseta dependências
  useEffect(() => {
    if (!selectedDate) return;

    const date = selectedDate;

    setSelectedTime(null);
    setAvailability(null);
    setAvailableBarbers(null);
    setSelectedBarber(null);

    async function fetchAvailableTimeSlots() {
      setLoading(true);
      const data = await getAvailableBarbersByDate(date);
      setAvailability(data);
      setLoading(false);
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

  function handleGoToSummary() {
    if (!selectedDate || !selectedTime || !selectedBarber) return;

    const day = String(selectedDate.getDate()).padStart(2, "0");
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const year = selectedDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    router.push(
      `/schedule/summary?serviceId=${selectedServiceId}&date=${formattedDate}&time=${selectedTime}&barberId=${selectedBarber}`,
    );
  }

  return (
    <>
      {loading && <Spinner />}
      {selectedServiceId && (
        <div className="fixed inset-0 z-30 flex items-center justify-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Modal */}
          <div className="relative z-20 bg-white rounded-lg p-6 transition-all duration-300">
            {!loading && (
              <div
                className={`flex flex-col gap-4 max-h-screen ${
                  selectedDate ? "flex-row" : "flex-col items-center"
                }`}
              >
                <div className="absolute top-2 right-2 cursor-pointer">
                  <X onClick={onClose} className="w-6 h-6 transition-transform duration-200 hover:rotate-[90deg]"/>
                </div>
                {/* Calendar */}
                <div className="flex flex-col items-center gap-2">
                  <Heading size="lg">
                    Qual dia você gostaria de agendar?
                  </Heading>
                  <Calendar
                    selectedDate={selectedDate}
                    onSelectDate={setSelectedDate}
                    unavailableDays={unavailableDays}
                  />
                </div>

                {selectedDate && (
                  <div className="flex flex-col items-center justify-center text-center gap-7">
                    <TimeSlots
                      availability={availability}
                      selectedTime={selectedTime}
                      onSelectTime={setSelectedTime}
                      loading={loading}
                    />

                    {selectedTime && availableBarbers && (
                      <BarberSelector
                        barbers={availableBarbers}
                        selectedBarber={selectedBarber}
                        onSelectBarber={setSelectedBarber}
                      />
                    )}

                    {selectedTime && selectedBarber && (
                      <div>
                        <Button
                          variant="primary"
                          type="button"
                          onClick={handleGoToSummary}
                        >
                          Agendar
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
