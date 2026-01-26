import Image from "next/image";
import Heading from "../ui/heading";

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative w-8 h-8 flex items-center">
        <Image src={"/assets/images/logo.png"} alt="logo" fill />
      </div>
      <Heading size="xl">BarberShop</Heading>
    </div>
  );
};

export default Logo;
