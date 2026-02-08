import SignupForm from "../auth/signupForm";

type Props = {
  redirect: string;
  onClose?: () => void;
}

export default function SignupModal({ redirect, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="p-1 rounded-xl w-[500px] bg-brandPrimary">
        <SignupForm redirect={redirect} onClose={onClose} role="CLIENT" />
      </div>
    </div>
  );
}