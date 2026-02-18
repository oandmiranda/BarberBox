"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Text from "./text";
import Image from "next/image";

const SignupSuccessModal = () => {
  const pathname = usePathname();

  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const raw = sessionStorage.getItem("signupSuccess");
    if (!raw) return;

    const data = JSON.parse(raw);

    if (Date.now() > data.expires) {
      sessionStorage.removeItem("signupSuccess");
      return;
    }

    setMessage(data.message);
    setVisible(true);

    const timeout = setTimeout(() => {
      setVisible(false);
      sessionStorage.removeItem("signupSuccess");
    }, data.expires - Date.now());

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[50] flex items-center justify-center pointer-events-none">
      <div className="flex items-center justify-center gap-2 bg-green-600 text-white shadow-xl rounded-lg p-5 border border-border">
        <Image
          src={"/assets/icons/check.svg"}
          alt="icone de check"
          width={20}
          height={20}
        />
        <Text>{message}</Text>
      </div>
    </div>
  );
};

export default SignupSuccessModal;
