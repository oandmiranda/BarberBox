import Link from "next/link";
import { loginUser } from "@/actions/login";

type Props = {
  searchParams: {
    callbackUrl?: string;
  };
};

export default function LoginPage({ searchParams }: Props) {

const callbackUrl = searchParams.callbackUrl
  ? decodeURIComponent(searchParams.callbackUrl)
  : "/dashboard";
  return (
    <>
      <form action={loginUser} className="text-black">
        <input name="email" placeholder="email" />
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
        <input name="password" type="password" placeholder="password" />
        <button type="submit" className="text-white bg-orange-300">
          Login
        </button>
      </form>

      <p>
        Ainda não tem conta?
        <Link href="/register/client">Criar conta</Link>
      </p>
    </>
  );
}
