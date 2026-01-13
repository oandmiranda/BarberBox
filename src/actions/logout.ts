"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function logoutUser() {
  cookies().delete("auth_token")
   redirect("/home")
}