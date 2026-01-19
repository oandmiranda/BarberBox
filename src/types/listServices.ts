// type apenas de retorno
export type Service = {
  id: string; // UUID
  name: string;
  description: string | null;
  duration_minutes: number;
  price: number;
  is_active?: boolean;
  image_url?: string | null;
  created_at?: Date;
};
