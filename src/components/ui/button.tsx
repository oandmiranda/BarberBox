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
    }
  | {
      variant: "link";
      href: string;
      children: React.ReactNode;
      widthFull?: boolean;
    };

const baseClasses =
  "bg-brandPrimary text-white flex items-center justify-center rounded-full";

const variants = {
  primary:
    "px-4 py-2",
  link: "p-3",
};

const Button = (props: ButtonProps) => {
  if (props.variant === "link") {
    return (
      <Link href={props.href} className={`${baseClasses} ${variants.link} ${props.widthFull ? 'w-full' : ''}`}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${baseClasses} ${variants.primary}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
