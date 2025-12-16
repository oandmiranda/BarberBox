import Link from "next/link"
import { loginUser } from "@/app/actions/auth/login"

export default function LoginPage() {
  return (
    <>
      <form action={loginUser} className="text-black">
        <input name="email" placeholder="email" />
        <input name="password" type="password" placeholder="password" />
        <button type="submit" className="text-white bg-orange-300">
          Login
        </button>
      </form>

      <p>
        Ainda não tem conta?{" "}
        <Link href="/register/client">
          Criar conta
        </Link>
      </p>
    </>
  )
}