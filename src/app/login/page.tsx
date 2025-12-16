// app/login/page.tsx
import { loginUser } from "@/app/actions/auth/login"

export default function LoginPage() {
  return (
    <form action={loginUser} className="text-black">
      <input name="email" placeholder="email"/>
      <input name="password" type="password" placeholder="password"/>
      <button type="submit" className="text-white">Login</button>
    </form>
  )
}