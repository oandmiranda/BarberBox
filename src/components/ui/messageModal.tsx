import Image from "next/image";
import Text from "./text";

type MessageModalProps = {
  message: string;
  backgroundColor: "bg-yellow-600" | "bg-green-600";
  icon: string;
}

export default function MessageModal({message, backgroundColor, icon}: MessageModalProps) {
  return (
    <div className="fixed inset-0 z-[50] flex items-center justify-center pointer-events-none">
      <div className={`flex items-center justify-center gap-2 ${backgroundColor} text-white shadow-xl rounded-lg p-5 border border-border`}>
        <Image
          src={icon}
          alt="icone de check"
          width={20}
          height={20}
        />
        <Text>{message}</Text>
      </div>
    </div>
  );
}
