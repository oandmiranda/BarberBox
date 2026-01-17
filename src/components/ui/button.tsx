import Link from "next/link";

// concept Discriminated Union
type ButtonProps =
  | {
    variant: "primary";
    onClick: () => void;
    // disabled?: boolean
    children: React.ReactNode
  }
  | {
    variant: "link",
    href: string;
    children: React.ReactNode
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
      <Link href={props.href} className={`${baseClasses} ${variants.link}`}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={props.onClick}
      // disabled={props.disabled}
      className={`${baseClasses} ${variants.primary}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
