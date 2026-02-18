"use client";

import { useForm } from "react-hook-form";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState } from "react";
import { registerUserAction } from "@/actions/registerUserAction";
import { RegisterUserForm } from "@/types/registerUserForm";
import Text from "@/components/ui/text";
import Input from "../ui/input";
import Button from "../ui/button";
import Heading from "../ui/heading";
import Spinner from "../ui/spinner";
import { Undo2, X } from "lucide-react";

type SignupFormProps = {
  role?: "CLIENT" | "BARBER";
  redirect?: string;
  onClose?: () => void;
  onSuccess?: () => void;
};

const SignupForm = ({ redirect, role, onClose, onSuccess }: SignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<RegisterUserForm>();

  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const password = watch("password");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const errorClassStyle = "text-red-500";

  // destino apenas para casos onde realmente existe fluxo externo (ex: agendamento)
  const redirectFromUrl = params.get("redirect");
  const destination = redirect ?? redirectFromUrl ?? pathname;

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

    reset();
    setLoading(false);

    // avisa o Navbar: cadastro concluído
    onSuccess?.();

    // só navega se realmente for outra rota
    if (destination && destination !== pathname) {
      router.push(destination);
    }
  };

  const showBackButton = !!destination && destination.startsWith("/schedule");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="relative flex flex-col items-center bg-surface text-text p-5 gap-3 w-full rounded-lg">
        <Heading className="mb-1">Cadastre-se</Heading>

        {onClose && (
          <X
            onClick={onClose}
            className="absolute cursor-pointer transition-transform duration-200 hover:rotate-[90deg] top-1 right-1 w-5 h-5 md:w-6 md:h-6 md:top-2 md:right-2"
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

        <div className="w-full flex flex-col justify-center items-center gap-3 sm:flex-row">
          <Button variant="primary" type="submit" disabled={loading}>
            Cadastrar
          </Button>

          {showBackButton && (
            <Button
              variant="link"
              href={destination}
              icon={<Undo2 size={15} />}
            >
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
