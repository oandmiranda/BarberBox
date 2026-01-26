export type User = {
  id: string; // UUID
  name: string;
  email: string | null;
  role: "CLIENT" | "BARBER" | "ADMIN";
};
