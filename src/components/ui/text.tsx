type TextElement = "p" | "span";

type TextProps = {
  as?: TextElement;
  size?: "xs" | "sm" | "base";
  children: React.ReactNode;
  className?: string;
};

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
};

const Text = ({ as: Component = "p", size = "base", children, className }: TextProps) => {
  return <Component className={`${sizeClasses[size]} ${className}`}>{children}</Component>;
};

export default Text;
