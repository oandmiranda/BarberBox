import Link from "next/link";

type ButtonStyle = "default" | "transparent" | "white";

type SharedProps = {
  icon?: React.ReactNode;
  children: React.ReactNode;
  style?: ButtonStyle;
  widthFull?: boolean;
  autoWidth?: boolean;
};
// concept Discriminated Union (controle de semântica)
type ButtonProps =
  | (SharedProps & {
      variant: "primary";
      type?: "button" | "submit";
      onClick?: () => void;
      disabled?: boolean;
    })
  | (SharedProps & {
      variant: "link";
      href: string;
    });

const Button = (props: ButtonProps) => {
  const baseClasses = `  
  flex items-center justify-center 
  text-xs
  p-3 transition-all duration-200 ease-in-out
  hover:shadow-md
  hover:translate-y-[1px]
  active:scale-[0.98]
  `;

  const widthClass = props.widthFull
    ? "w-full"
    : props.autoWidth
      ? "w-auto"
      : "w-[120px]";

      // with optional icon
  const content = (
    <>
      {props.icon && (
        <span className="flex items-center mr-1">{props.icon}</span>
      )}
      <span>{props.children}</span>
    </>
  );

  const styleClasses: Record<ButtonStyle, string> = {
    default:
      "bg-brandPrimary hover:bg-brandPrimary/90 focus:outline-none focus:ring-2 focus:ring-brandPrimary/40 text-white rounded-full",
    transparent:
      "bg-transparent text-text border border-black/20 hover:bg-black/10 rounded-full",
    white: "bg-gray-300 text-blue hover:bg-gray-200 rounded-md",
  };

  // default style
  const visual = styleClasses[props.style ?? "default"];

  if (props.variant === "link") {
    return (
      <Link href={props.href} className={`${baseClasses} ${widthClass} ${visual}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${baseClasses} ${widthClass} ${visual}`}
    >
      {content}
    </button>
  );
};

export default Button;
