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

type LoginFormProps = {
  onSuccess?: () => void;
};

const LoginForm = ({ onSuccess }: LoginFormProps) => {
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

    const result = await loginUserAction(data);

    if (!result.success) {
      setError(result.error);
      setLoading(false);
      return;
    }

    if(onSuccess) {
      onSuccess();
    } else {
      router.push("/home");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="flex flex-col items-center bg-secondary p-5 gap-2 w-[450px] rounded-lg">
        <Heading className="mb-2">Faça login para continuar</Heading>
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

        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>

        {error && <Text className={errorClassStyle}>{error}</Text>}
      </section>
    </form>
  );
};

export default LoginForm;
