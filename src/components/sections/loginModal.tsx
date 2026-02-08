import LoginForm, { LoginFormProps } from "../auth/loginForm";

type LoginModalProps = LoginFormProps;

export default function LoginModal({ onClose, onSuccess, hasSignupButtonForm }: LoginModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="p-1 rounded-xl w-[500px] bg-brandPrimary">
        <LoginForm onClose={onClose} onSuccess={onSuccess} hasSignupButtonForm={hasSignupButtonForm}/>
      </div>
    </div>
  );
}
