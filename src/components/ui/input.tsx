import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

// forwardRef aceita todas as props de um input HTML padrão
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={`p-3 rounded-md w-full ${className ?? ""}`}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
