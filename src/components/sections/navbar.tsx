import Link from "next/link";
import Button from "../ui/button";
import { getCurrentUser } from "@/auth/getCurrentUser";

const  Navbar = async () => {
const currentUser = await getCurrentUser();

  return (
    <nav className="flex justify-center items-center gap-10 pb-5">
        <ul className="flex gap-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Serviços</Link></li>
            <li><Link href="/barbers">Barbeiros</Link></li>
            <li><Link href="/about">Quem somos</Link></li>
            <li><Link href="/contact">Contato</Link></li>
        </ul>

        {!currentUser ? (
        <div className="flex gap-6">
          <Button variant="link" href="/login">Entrar</Button>
          <Button variant="link" href="/register/client">Cadastre-se</Button>
        </div>
      ) : (
        <div className="flex gap-6">
          <Button variant="link" href="/profile">
            {`Olá ${currentUser.name}`}
          </Button>
        </div>
      )}
        
    </nav>
  );
}

export default Navbar;