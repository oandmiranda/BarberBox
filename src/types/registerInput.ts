export type RegisterUserInput = {
  name: string;
  email: string;
  password: string;
  role: "CLIENT" | "BARBER" | "ADMIN";
};