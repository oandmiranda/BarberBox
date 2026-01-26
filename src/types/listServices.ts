export type Service = {
  id: string; // UUID
  name: string;
  description: string | null;
  duration_minutes: number;
  price: string;
  is_active?: boolean;
  image_url: string;
  created_at?: Date;
  tag?: string;
};
