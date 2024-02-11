interface BoxProps {
  children: React.ReactNode;
  className?: string;
}
export const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={`bg-white rounded-md border border-dark-300 p-5 flex items-center shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};
