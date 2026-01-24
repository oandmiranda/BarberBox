"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerUserAction } from "@/actions/registerUserAction";
import { RegisterUserForm } from "@/types/registerUserForm";
import Text from "@/components/ui/text";

type SignupFormProps = {
  role: "CLIENT" | "BARBER";
};

const SignupForm = ({ role }: SignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<RegisterUserForm>();
  const router = useRouter();
  const password = watch("password");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = async (data: RegisterUserForm) => {
    setLoading(true);
    setError("");
    setSuccess("");

    const result = await registerUserAction({
      ...data,
      role,
    });

    if (!result.success) {
      setError(result.error);
      setLoading(false);
      return;
    }

    setSuccess("Usuário cadastrado com sucesso!");
    reset();

    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
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
      {errors.name && <Text>{errors.name.message}</Text>}
      <input
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
      {errors.email && <Text>{errors.email.message}</Text>}
      <input
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
      {errors.password && <Text>{errors.password.message}</Text>}
      <input
        type="password"
        {...register("confirmPassword", {
          required: "A confirmação de senha é obrigatória.",
          validate: (value) => value === password || "As senhas não coincidem.",
        })}
        placeholder="Confirmar senha"
      />
      {errors.confirmPassword && <Text>{errors.confirmPassword?.message}</Text>}
      <button type="submit" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </form>
  );
};

export default SignupForm;
