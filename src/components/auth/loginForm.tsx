"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUserAction } from "@/actions/loginUserAction";
import Text from "../ui/text";
import { LoginUserForm } from "@/types/loginUserForm";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserForm>();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: LoginUserForm) => {
    setLoading(true);
    setError("");

    const result = await loginUserAction(data);

    if (!result.success) {
      setError(result.error);
      setLoading(false);
      return;
    }

    router.push("/home");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
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
      {errors.email && <Text>{errors.email.message}</Text>}

      <input
        type="password"
        {...register("password", {
          required: "A senha é obrigatória.",
        })}
        placeholder="senha"
      />
      {errors.password && <Text>{errors.password.message}</Text>}

      <button type="submit" disabled={loading}>
        {loading ? "Entrando..." : "Entrar"}
      </button>

      {error && <Text>{error}</Text>}
    </form>
  );
};

export default LoginForm;