export type RegisterUserForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role?: "CLIENT" | "BARBER" | "ADMIN";
};