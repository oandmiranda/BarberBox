import Link from "next/link";
import Button from "../ui/button";
import { getCurrentUser } from "@/domain/auth/getCurrentUser";
import Logo from "../domain/logo";

const Navbar = async () => {
const currentUser = await getCurrentUser();

  return (
    <nav className="bg-secondary fixed top-0 left-0 w-full py-4 px-4 flex justify-between items-center z-10">
        <Logo />
        <ul className="flex gap-6">
            <li><Link href="/">Home</Link></li>
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