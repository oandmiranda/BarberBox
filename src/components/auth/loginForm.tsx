"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { loginUserAction } from "@/actions/loginUserAction";
import Text from "../ui/text";
import { LoginUserForm } from "@/types/loginUserForm";
import Input from "../ui/input";
import Heading from "../ui/heading";
import Button from "../ui/button";
import { X } from "lucide-react";
import Spinner from "../ui/spinner";

export type LoginFormProps = {
  hasSignupButtonForm?: boolean;
  onSuccess?: () => void;
  onClose: () => void;
};

const LoginForm = ({
  hasSignupButtonForm,
  onSuccess,
  onClose,
}: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserForm>();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentUrl =
    pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

  const errorClassStyle = "text-red-500 font-details";

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

      router.refresh(); // força re-render de server state (navbar etc)
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="relative flex flex-col items-center bg-surface text-text font-details p-5 gap-4 w-full rounded-lg">
        <Heading className="mb-2">Faça login para continuar</Heading>

        <X
          onClick={onClose}
          className="absolute top-2 right-2 cursor-pointer w-6 h-6 transition-transform duration-200 hover:rotate-[90deg]"
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

        <div className="flex items-center gap-3 justify-around">
          <Button variant="primary" type="submit" disabled={loading}>
            Entrar
          </Button>

          {loading && <Spinner />}

          {hasSignupButtonForm && (
            <>
              <Text size="xs">ou</Text>

              <Button
                variant="link"
                href={`/signup?redirect=${encodeURIComponent(currentUrl)}`}
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
