interface CardProps {
  children: React.ReactNode;
  className?: string;
}
export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div>
      <div
        {...props}
        className={`p-5 bg-white shadow-md rounded-md h-[320px] w-[240px] duration-150 cursor-pointer hover:shadow-xl ${className}`}
      >
        {children}
      </div>
    </div>
  );
};
