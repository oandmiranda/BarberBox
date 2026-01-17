import Link from "next/link";

const  Navbar = () => {
  return (
    <nav className="flex justify-center gap-10 pb-5">
        <ul className="flex gap-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Serviços</Link></li>
            <li><Link href="/barbers">Barbeiros</Link></li>
            <li><Link href="/about">Quem somos</Link></li>
            <li><Link href="/contact">Contato</Link></li>
        </ul>
        <div className="flex gap-6">
            <button>Sign up</button>
            <button>Log in</button>
        </div>
    </nav>
  );
}

export default Navbar;