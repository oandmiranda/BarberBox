import { loginUser } from "@/actions/login";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <ul>
        <li>descrição da barbearia</li>
        <li>serviços oferecidos</li>
        <li>endereço / contato</li>
        <li>botão “Agendar horário”</li>
        <form action={loginUser} className="text-black">
          <input name="email" placeholder="email" />
          <input name="password" type="password" placeholder="password" />
          <button type="submit" className="text-white bg-orange-300">
            Login
          </button>
        </form>
        Ainda não tem conta?
        <Link href="/register/client">Criar conta</Link>
      </ul>
      <Link href={"/schedule/choose-service"}>Ver serviços</Link>
    </>
  );
}
