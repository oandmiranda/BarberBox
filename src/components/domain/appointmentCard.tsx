import { CalendarCheck, Check, Clock, Target, User } from "lucide-react";
import Heading from "../ui/heading";
import Text from "../ui/text";
import Image from "next/image";

type AppointmentCardProps = {
  icon?: string;
  heading?: string;
  date?: string;
  time?: string;
  serviceName?: string;
  description?: string | null;
  barberName?: string;
  children: React.ReactNode;
};

export default function AppointmentCard({
  icon,
  heading,
  date,
  time,
  serviceName,
  description,
  barberName,
  children,
}: AppointmentCardProps) {
  const dataStyles = "flex items-center gap-2 font-default";

  return (
    <div
      className={`relative flex flex-col justify-around items-center gap-4 bg-surface text-text rounded-xl min-w-0 w-full h-auto p-5 sm:gap-7 sm:min-h-[250px]`}
    >
      {icon && (
        <div className="absolute -top-[47px] w-[90px] h-[90px]">
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

            {serviceName && (
              <div className={dataStyles}>
                <Target />
                <Text>
                  Serviço agendado: <strong className="text-brandPrimary">{serviceName}</strong>
                </Text>
              </div>
            )}

            {description && (
              <div className={dataStyles}>
                <Check />
                <p style={{ fontStyle: "italic", fontSize: "12px" }}>{description}</p>
              </div>
            )}

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
