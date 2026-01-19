import SignupForm from "@/components/auth/signupForm";

export default function RegisterBarberPage() {
  return (
    <>
      <div>
        Barbeiro vem para cá se registrar (URL não fica disponível a partir da
        home, somente será cedida internamente)
      </div>
      <div>
          <SignupForm role="BARBER"/>
      </div>
    </>
  );
}
