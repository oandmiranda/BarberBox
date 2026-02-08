import Link from "next/link";

// concept Discriminated Union
type ButtonProps =
  | {
      variant: "primary";
      type?: "button" | "submit";
      onClick?: () => void;
      disabled?: boolean;
      children: React.ReactNode;
      widthFull?: boolean;
      autoWidth?: boolean;
      hasSmallFontSize?: boolean;
    }
  | {
      variant: "link";
      href: string;
      children: React.ReactNode;
      widthFull?: boolean;
      autoWidth?: boolean;
      hasSmallFontSize?: boolean;
    };

const Button = (props: ButtonProps) => {
  const baseClasses = `
  bg-brandPrimary 
  text-white 
  font-details 
  flex items-center justify-center 
  rounded-full 
  p-3 
  ${props.hasSmallFontSize ? "text-xs" : "text-base"} 
  transition-all duration-200 ease-in-out
  hover:bg-brandPrimary/90
  hover:shadow-md
  hover:translate-y-[1px]
  active:scale-[0.98]
  focus:outline-none focus:ring-2 focus:ring-brandPrimary/40
`;

  const widthClass = props.widthFull
    ? "w-full"
    : props.autoWidth
      ? "w-auto"
      : "w-[120px]";

  if (props.variant === "link") {
    return (
      <Link href={props.href} className={`${baseClasses} ${widthClass}`}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${baseClasses} ${widthClass}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
