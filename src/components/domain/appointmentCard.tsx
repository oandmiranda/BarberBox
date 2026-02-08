import { CalendarCheck, Clock, Target, User } from "lucide-react";
import Heading from "../ui/heading";
import Text from "../ui/text";
import Image from "next/image";

type AppointmentCardProps = {
  icon?: string;
  heading?: string;
  date?: string;
  time?: string;
  serviceName?: string;
  barberName?: string;
  children: React.ReactNode;
};

export default function AppointmentCard({
  icon,
  heading,
  date,
  time,
  serviceName,
  barberName,
  children,
}: AppointmentCardProps) {
  const dataStyles = "flex items-center gap-2 font-default";

  return (
    <div className="relative font-details flex flex-col justify-center items-center gap-7 p-7 bg-black/90 rounded-xl w-[380px] h-[500px]">
      {icon && (
        <div className="absolute -top-[40px] w-[90px] h-[90px]">
          <Image src={icon} alt="icone" fill />
        </div>
      )}

      {heading && (
        <>
          <Heading>{heading}</Heading>

          <div className="flex flex-col gap-5">
            <div className={dataStyles}>
              <CalendarCheck />
              <Text>
                Data: <strong>{date}</strong>
              </Text>
            </div>

            <div className={dataStyles}>
              <Clock />
              <Text>
                Horário: <strong>{time}</strong>
              </Text>
            </div>

            <div className={dataStyles}>
              <Target />
              <Text>
                Serviço: <strong>{serviceName}</strong>
              </Text>
            </div>
            {barberName && (
              <div className={dataStyles}>
                <User />
                <Text>
                  Barbeiro: <strong>{barberName}</strong>
                </Text>
              </div>
            )}
          </div>
        </>
      )}

      {children}
    </div>
  );
}
