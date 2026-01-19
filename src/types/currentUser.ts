export type CurrentUser = {
  id: string;
  name: string;
  email: string;
  role: "CLIENT" | "BARBER" | "ADMIN";
};