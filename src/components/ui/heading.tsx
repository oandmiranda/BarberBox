import { TitleAs } from "@/types/ui/titleAs";
import { TitleSizes } from "@/types/ui/titleSizes";

type HeadingProps = {
  as?: TitleAs;
  size?: TitleSizes;
  children: React.ReactNode;
  className?: string;
};

const sizeClasses = {
  xs: "text-xs font-semibold",
  sm: "text-sm font-semibold",
  base: "text-base font-semibold",
  lg: "text-lg font-semibold",
  xl: "text-xl font-semibold",
  xxl: "text-xxl font-semibold",
};

const Heading = ({as: Component = "h1", size = "xl", children, className}: HeadingProps) => {
  return <Component className={`${sizeClasses[size]} ${className}`}>{children}</Component>;
};

export default Heading;
