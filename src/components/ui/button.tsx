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
      hasSmallFontSize?: boolean;
    }
  | {
      variant: "link";
      href: string;
      children: React.ReactNode;
      widthFull?: boolean;
      hasSmallFontSize?: boolean;
    };

const Button = (props: ButtonProps) => {
  
  const baseClasses = `bg-brandPrimary text-white flex items-center justify-center rounded-full p-3 ${props.hasSmallFontSize ? "text-xs" : "text-base"} hover:bg-brandSecondary transition-colors`;

  if (props.variant === "link") {
    return (
      <Link
        href={props.href}
        className={`${baseClasses} ${props.widthFull ? "w-full" : "w-[120px]"}`}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${baseClasses} ${props.widthFull ? "w-full" : "w-[120px]"}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
