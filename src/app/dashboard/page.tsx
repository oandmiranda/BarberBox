import { getCurrentUser } from "@/lib/auth"
import { redirect } from "next/navigation"
import BarberDashboard from "../barberDashboard/page"
import ClientDashboard from "../barberDashboard/clientDashboard/page"

export default async function Dashboard() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  if (user.role === "barber") {
    return <BarberDashboard />
  }

  return <ClientDashboard />
}