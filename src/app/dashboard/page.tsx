import { getCurrentUser } from "@/domain/auth/getCurrentUser"
import { redirect } from "next/navigation"
import BarberDashboard from "../barberDashboard/page"
import ClientDashboard from "../clientDashboard/page"

export default async function Dashboard() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/home")
  }

  if (user.role === "BARBER" || user.role === "ADMIN") {
    return <BarberDashboard />
  }

  return <ClientDashboard />
}