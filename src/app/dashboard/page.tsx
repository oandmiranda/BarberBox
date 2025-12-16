import { getCurrentUser } from "@/lib/auth"
import { redirect } from "next/navigation"
import BarberDashboard from "../barberDashboard/page"
import ClientDashboard from "../clientDashboard/page"

export default async function Dashboard() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  if (user.role === "BARBER") {
    return <BarberDashboard />
  }

  return <ClientDashboard />
}