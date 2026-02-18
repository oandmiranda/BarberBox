import LoginForm, { LoginFormProps } from "../auth/loginForm";

type LoginModalProps = LoginFormProps;

export default function LoginModal({ onClose, onSuccess, onOpenSignup, hasSignupButtonForm }: LoginModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 px-2 flex items-center justify-center z-50">
      <div className="p-1 rounded-xl min-w-0 w-[500px] bg-brandPrimary mt-9 sm:mt-0">
        <LoginForm onClose={onClose} onSuccess={onSuccess} onOpenSignup={onOpenSignup} hasSignupButtonForm={hasSignupButtonForm}/>
      </div>
    </div>
  );
}
