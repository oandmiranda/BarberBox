import { registerClient } from "@/app/actions/auth/client/register";
import { loginUser } from "@/app/actions/auth/login";

export default function RegisterClientPage() {
  return (
    <>
      <div>
        Client vem pra cá registrar
      </div>
      <div>
        <form action={loginUser} className="text-black">
          <input name="email" placeholder="email" />
          <input name="password" type="password" placeholder="password" />
          <button type="submit" className="text-white bg-orange-300">
            Login
          </button>
        </form>

        <h2>cadastro</h2>
        <form action={registerClient} className="text-black">
          <input name="name" placeholder="name" />
          <input name="email" placeholder="email" />
          <input name="password" type="password" placeholder="password" />
          <button type="submit" className="text-white bg-orange-300">
            Criar conta (Client)
          </button>
        </form>
      </div>
    </>
  );
}
