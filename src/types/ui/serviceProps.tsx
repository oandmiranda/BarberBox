export type ServiceUiProps = {
  imageUrl: string;
  imageAlt: string;
  name: string;
  description?: string;
  durationMinutes: number;
  price: string;
  tag?: "premium";
  onClick?: () => void;
};

export type ServiceUiWithID = ServiceUiProps & {
    id: string;
}