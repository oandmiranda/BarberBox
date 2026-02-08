"use client";

import { useFormStatus } from "react-dom";
import Button from "@/components/ui/button";
import Spinner from "./spinner";

const SubmitButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending && <Spinner />}
      <Button type="submit" variant="primary" widthFull disabled={pending}>
        {children}
      </Button>
    </>
  );
};

export default SubmitButton;
