import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Serviços</Link></li>
            <li><Link href="/barbers">Barbeiros</Link></li>
            <li><Link href="/barbers">Quem somos</Link></li>
            <li><Link href="/contact">Contato</Link></li>
            <li><Link href="/schedule/choose-service">Meus agendamentos</Link></li>
        </ul>
        <div>
            <button>Sign up</button>
            <button>Log in</button>
        </div>
    </nav>
  );
}