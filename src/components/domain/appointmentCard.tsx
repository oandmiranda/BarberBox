import { CalendarCheck, Clock, Target, UserStar } from "lucide-react";
import Heading from "../ui/heading";
import Text from "../ui/text";

type AppointmentCardProps = {
  heading?: string;
  date?: string;
  time?: string;
  serviceName?: string;
  barberName?: string;
  children: React.ReactNode;
};

export default function AppointmentCard({
  heading,
  date,
  time,
  serviceName,
  barberName,
  children,
}: AppointmentCardProps) {
  const dataStyles = "flex items-center gap-2";

  return (
    <div className="flex flex-col justify-center items-center gap-6 p-7 bg-black/50 rounded-xl h-[500px]">

      {heading && (
        <>
          <Heading>{heading}</Heading>

          <div className="flex flex-col gap-5">
            <div className={dataStyles}>
              <CalendarCheck />
              <Text>Data: {date}</Text>
            </div>

            <div className={dataStyles}>
              <Clock />
              <Text>Horário: {time}</Text>
            </div>

            <div className={dataStyles}>
              <Target />
              <Text>Serviço: {serviceName}</Text>
            </div>

            <div className={dataStyles}>
              <UserStar />
              <Text>Barbeiro: {barberName}</Text>
            </div>
          </div>
        </>
      )}

      {children}
    </div>
  );
}