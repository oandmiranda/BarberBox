export type Barber = {
  id: string; // UUID
  name: string;
  email?: string | null;
  role: "BARBER";
  imageUrl?: string | null;
};
