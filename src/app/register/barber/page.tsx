import { Suspense } from "react";
import SignupModal from "@/components/sections/signupModal";

export default function RegisterBarberPage() {
  return (
    <>
      <div>
        Barbeiro vem para cá se registrar (URL não fica disponível a partir da
        home, somente será cedida internamente)
      </div>
      <div>
        <Suspense fallback={null}>
          <SignupModal role="BARBER" />
        </Suspense>
      </div>
    </>
  );
}
