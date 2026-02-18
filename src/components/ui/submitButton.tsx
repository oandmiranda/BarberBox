"use client";

import { useFormStatus } from "react-dom";
import Button from "@/components/ui/button";
import Spinner from "./spinner";
import { CalendarCheck } from "lucide-react";

const SubmitButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending && <Spinner />}
      <Button type="submit" variant="primary" icon={<CalendarCheck  size={15}/>} disabled={pending} widthFull>
        {children}
      </Button>
    </>
  );
};

export default SubmitButton;
