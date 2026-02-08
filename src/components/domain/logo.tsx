import Image from "next/image";
import Heading from "../ui/heading";
import Link from "next/link";

export default function LogoIcon() {
  return (
      <Link href={"/"} className="flex items-center">
        <Image
          src={"/assets/images/barbershop/brand_logo.webp"}
          alt="logo"
          width={85}
          height={85}
        />
        <Heading className="font-brand">BarberShop</Heading>
      </Link>
  );
}
