"use client";

import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { registerUserAction } from "@/actions/registerUserAction";
import { RegisterUserForm } from "@/types/registerUserForm";
import Text from "@/components/ui/text";
import Input from "../ui/input";
import Button from "../ui/button";
import Heading from "../ui/heading";
import Spinner from "../ui/spinner";
import { X } from "lucide-react";

type SignupFormProps = {
  role: "CLIENT" | "BARBER";
  onClose?: () => void;
  redirect: string;
};

const SignupForm = ({ role, onClose, redirect }: SignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<RegisterUserForm>();
  const router = useRouter();
  const params = useSearchParams();

  const password = watch("password");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const errorClassStyle = "text-red-500 font-details";

  const redirectFromUrl = params.get("redirect");

  const redirectUrl = useMemo(() => {
    const safeRedirect = redirect || redirectFromUrl;
    if (!safeRedirect) return null;

    const url = new URL(safeRedirect, window.location.origin);
    url.searchParams.set("login", "true");

    return url.pathname + url.search;
  }, [redirect, redirectFromUrl]);

  const onSubmit = async (data: RegisterUserForm) => {
    setLoading(true);
    setError("");

    const result = await registerUserAction({
      ...data,
      role,
    });

    if (!result.success) {
      setError(result.error);
      setLoading(false);
      return;
    }

    sessionStorage.setItem(
      "signupSuccess",
      JSON.stringify({
        message: "Registro feito com sucesso",
        expires: Date.now() + 4000,
      }),
    );

    reset();
    setLoading(false);

    router.push(redirectUrl || "/");
  };

const showBackButton =
  redirectUrl?.startsWith("/schedule") ?? false;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="relative flex flex-col items-center bg-surface text-text font-details p-5 gap-4 w-full rounded-lg">
        <Heading className="mb-2">Cadastre-se</Heading>
        {onClose && (
          <X
            onClick={onClose}
            className="absolute top-2 right-2 cursor-pointer w-6 h-6 transition-transform duration-200 hover:rotate-[90deg]"
          />
        )}

        <Input
          type="text"
          {...register("name", {
            required: "Ao menos um nome é obrigatório",
            pattern: {
              value: /^[a-zA-Z\s]+$/,
              message: "Utilize apenas letras e espaçamento.",
            },
          })}
          placeholder="Seu nome"
        />
        {errors.name && (
          <Text className={errorClassStyle}>{errors.name.message}</Text>
        )}
        <Input
          type="email"
          {...register("email", {
            required: "O email é obrigatório.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Insira um email válido.",
            },
          })}
          placeholder="nome@exemplo.com"
        />
        {errors.email && (
          <Text className={errorClassStyle}>{errors.email.message}</Text>
        )}
        <Input
          type="password"
          {...register("password", {
            required: "A senha é obrigatória.",
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
              message:
                "A senha deve ter no mínimo 8 caracteres, com pelo menos uma letra maiúscula e um número.",
            },
          })}
          placeholder="Senha"
        />
        {errors.password && (
          <Text className={errorClassStyle}>{errors.password.message}</Text>
        )}
        <Input
          type="password"
          {...register("confirmPassword", {
            required: "A confirmação de senha é obrigatória.",
            validate: (value) =>
              value === password || "As senhas não coincidem.",
          })}
          placeholder="Confirmar senha"
        />
        {errors.confirmPassword && (
          <Text className={errorClassStyle}>
            {errors.confirmPassword?.message}
          </Text>
        )}
        <div className="flex items-center gap-3">
          <Button variant="primary" type="submit" disabled={loading}>
            Cadastrar
          </Button>
          {showBackButton && (
            <Button variant="link" href={redirectUrl}>
              Voltar
            </Button>
          )}
        </div>

        {loading && <Spinner />}
        {error && <Text className={errorClassStyle}>{error}</Text>}
      </section>
    </form>
  );
};

export default SignupForm;
