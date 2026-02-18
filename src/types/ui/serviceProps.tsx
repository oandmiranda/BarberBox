export type ServiceUiProps = {
  name: string;
  description?: string | null;
  durationMinutes: number;
  price: string;
  details?: string | null;
  imageUrl: string;
  imageAlt: string;
  tag?: string;
  onClick?: () => void;
};

export type ServiceUiWithID = ServiceUiProps & {
    id: string;
}
