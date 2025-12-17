import { registerBarber } from "@/app/actions/auth/barber/register";
import { loginUser } from "@/app/actions/auth/login";

export default function RegisterBarberPage() {
  return (
    <>
      <div>
        Barbeiro vem para cá se registrar (URL não fica disponível a partir da
        home, somente será cedida internamente)
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
        <form action={registerBarber} className="text-black">
          <input name="name" placeholder="name" />
          <input name="email" placeholder="email" />
          <input name="password" type="password" placeholder="password" />
          <button type="submit" className="text-white bg-orange-300">
            Criar conta (barbeiro)
          </button>
        </form>
      </div>
    </>
  );
}
