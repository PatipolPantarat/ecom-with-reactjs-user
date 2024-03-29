import clsx from "clsx";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

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
      className={clsx(
        `text-white hover:bg-white px-4 py-2 rounded-lg cursor-pointer 
       border-2 duration-150 flex justify-center items-center gap-2 font-medium ${className}
      `,
        {
          "bg-primary border-primary hover:text-primary": variant === "primary",
          "bg-secondary border-secondary hover:text-secondary":
            variant === "secondary",
          "bg-success border-success hover:text-success": variant === "success",
          "bg-danger border-danger hover:text-danger": variant === "danger",
          "bg-warning border-warning hover:text-warning": variant === "warning",
          "bg-info border-info hover:text-info": variant === "info",
        }
      )}
    >
      {children}
    </button>
  );
};

export const FavButton = ({
  isFav,
  onClick,
  className,
}: {
  isFav: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-white p-1 rounded-md ${className}`}
    >
      {isFav ? (
        <HeartSolid className="h-8 w-8 text-rose-500" />
      ) : (
        <HeartOutline className="h-8 w-8 text-rose-500" />
      )}
    </button>
  );
};
