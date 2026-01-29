import { SubTitleSizes } from "@/types/ui/subtitleSizes";

type TextElement = "p" | "span";

type TextProps = {
  as?: TextElement;
  size?: SubTitleSizes;
  children: React.ReactNode;
  className?: string;
};

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
};

const Text = ({ as: Component = "p", size = "base", children, className }: TextProps) => {
  return <Component className={`${sizeClasses[size]} ${className}`}>{children}</Component>;
};

export default Text;
