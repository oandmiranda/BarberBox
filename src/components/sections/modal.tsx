"use client";

import { useEffect, useState } from "react";
import { getUnavailableDays } from "@/actions/getUnavailableDays";
import Calendar from "./calendar";
import { getAvailableBarbersByDate } from "@/actions/getAvailableBarbersByDate";
import TimeSlots from "./timeSlot";
import { buildDateTime } from "@/domain/buildDateTime";
import { getBarbersStatusByDateTime } from "@/actions/getBarbersStatusByDateTime";
import BarberSelector from "../domain/barberSelector";
import { useRouter } from "next/navigation";
import Button from "../ui/button";
import { CalendarCheck, X } from "lucide-react";
import Spinner from "../ui/spinner";
import { BarberStatus } from "@/types/barberStatus";

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
  const [availableBarbers, setAvailableBarbers] = useState<BarberStatus[] | null>(
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
      const barbers = await getBarbersStatusByDateTime(dateTime);

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
        <div className="fixed inset-0 min-w-[240px] px-2 z-30 flex items-center justify-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Modal */}
          <div className="overflow-auto w-full relative z-20 bg-white rounded-lg p-6 transition-all duration-300 sm:w-auto">
            {!loading && (
              <div
                className={`flex flex-col gap-2 max-h-screen ${
                  selectedDate ? "flex-row" : "flex-col items-center"
                }`}
              >
                <div className="absolute top-2 right-2 cursor-pointer">
                  <X
                    onClick={onClose}
                    className="w-6 h-6 transition-transform duration-200 hover:rotate-[90deg]"
                  />
                </div>

                  <Calendar
                    selectedDate={selectedDate}
                    onSelectDate={setSelectedDate}
                    unavailableDays={unavailableDays}
                  />

                {selectedDate && (
                  <div className="flex flex-col items-center justify-center text-center gap-4 md:gap-7">
                    <TimeSlots
                      selectedDate={selectedDate}
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
                        <Button
                          variant="primary"
                          type="button"
                          onClick={handleGoToSummary}
                          widthFull
                          icon={<CalendarCheck size={18}/>}
                        >
                          Agendar
                        </Button>
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
