import Image from "next/image";
import Link from "next/link";

export default function LogoIcon({className}: {className?: string;}) {
  return (
      <Link href={"/"} className={`${className}`}>
        <Image
          src={"/assets/images/barbershop/brand_logo.webp"}
          alt="logo"
          width={85}
          height={85}
        />
      </Link>
  );
}
