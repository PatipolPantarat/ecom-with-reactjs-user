interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
}
export const Button = ({
  children,
  className,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`text-white hover:bg-white px-4 py-2 rounded-lg cursor-pointer ${className}
      bg-${variant} hover:text-${variant} border-2 border-${variant} duration-150
      `}
    >
      {children}
    </button>
  );
};
