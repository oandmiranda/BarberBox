"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUserAction } from "@/actions/loginUserAction";
import Text from "../ui/text";
import { LoginUserForm } from "@/types/loginUserForm";
import Input from "../ui/input";
import Heading from "../ui/heading";
import Button from "../ui/button";
import { X } from "lucide-react";
import Spinner from "../ui/spinner";

export type LoginFormProps = {
  title?: string;
  hasSignupButtonForm?: boolean;
  onSuccess?: () => void;
  onClose: () => void;
  onOpenSignup?: () => void;
};

const LoginForm = ({
  title = "Login",
  hasSignupButtonForm,
  onSuccess,
  onClose,
  onOpenSignup
}: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserForm>();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const errorClassStyle = "text-red-500";

  const onSubmit = async (data: LoginUserForm) => {
    setLoading(true);
    setError("");

    try {
      const result = await loginUserAction(data);

      if (!result.success) {
        setError(result.error);
        return;
      }

      onSuccess?.();
      onClose?.();

      // atualiza server components (navbar, summary etc)
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="relative flex flex-col items-center bg-surface text-text p-4 gap-4 w-full rounded-lg">
        <Heading className="mb-1">{title}</Heading>

        <X
          onClick={onClose}
          className="absolute cursor-pointer transition-transform duration-200 hover:rotate-[90deg] top-1 right-1 w-5 h-5 md:w-6 md:h-6 md:top-2 md:right-2"
        />

        <Input
          type="email"
          {...register("email", {
            required: "Insira um email válido",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Insira um email válido.",
            },
          })}
          placeholder="e-mail"
        />
        {errors.email && (
          <Text className={errorClassStyle}>{errors.email.message}</Text>
        )}

        <Input
          type="password"
          {...register("password", {
            required: "A senha é obrigatória.",
          })}
          placeholder="senha"
        />
        {errors.password && (
          <Text className={errorClassStyle}>{errors.password.message}</Text>
        )}

        <div className="flex flex-col text-center items-center gap-3 justify-around sm:flex-row">
          <Button variant="primary" type="submit" disabled={loading}>
            Entrar
          </Button>

          {loading && <Spinner />}

          {hasSignupButtonForm && (
            <>
              <Text size="xs">ou</Text>

              <Button
                variant="primary"
                onClick={onOpenSignup}
              >
                Cadastre-se
              </Button>
            </>
          )}
        </div>

        {error && <Text className={errorClassStyle}>{error}</Text>}
      </section>
    </form>
  );
};

export default LoginForm;