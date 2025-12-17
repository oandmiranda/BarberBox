import Link from "next/link";

export default function BarberDashboard() {
  return (
    <>
      <div>barber dashboard here after login</div>
      <Link href={"/services"} className="bg-red-500 p-2">Serviços</Link>
    </>
  );
}
