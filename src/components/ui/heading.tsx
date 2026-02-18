import { TitleAs } from "@/types/ui/titleAs";
import { TitleSizes } from "@/types/ui/titleSizes";

type HeadingProps = {
  as?: TitleAs;
  size?: TitleSizes;
  fontFamily?: "font-body" | "font-details" | "font-title";
  children: React.ReactNode;
  className?: string;
};

const sizeClasses = {
  xs: "font-semibold text-xs",
  sm: "font-semibold text-sm sm:text-base",
  base: "font-semibold text-base",
  lg: "font-semibold text-base md:text-lg",
  xl: "font-semibold text-lg md:text-xl",
  xxl: "font-semibold text-xl lg:text-xxl",
  xxxl: "font-semibold text-xl md:text-xxl lg:text-xxxl"
};

const Heading = ({as: Component = "h1", size = "xl", fontFamily, children, className}: HeadingProps) => {
  return <Component className={`${fontFamily ?? "font-subtitle"} ${sizeClasses[size]} ${className}`}>{children}</Component>;
};

export default Heading;
