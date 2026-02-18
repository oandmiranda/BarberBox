import SignupForm from "../auth/signupForm";

type Props = {
  redirect?: string;
  role: "BARBER" | "CLIENT";
  onClose?: () => void;
  onSuccess?: () => void;
};

export default function SignupModal({ redirect, role, onClose, onSuccess }: Props) {
  return (
    <div className="fixed inset-0 bg-black/60 px-2 flex items-center justify-center z-50">
      <div className="p-1 rounded-xl min-w-0 w-[500px] bg-brandPrimary mt-9 sm:mt-0">
          <SignupForm redirect={redirect} role={role} onClose={onClose} onSuccess={onSuccess}/>
      </div>
    </div>
  );
}
