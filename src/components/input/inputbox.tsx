interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={`w-full rounded-md px-3 py-2 ring-1 ring-dark-300 outline-none focus:ring-primary duration-150 ${className}`}
      {...props}
    />
  );
};

interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export const InputGroup = ({ label, className, ...props }: InputGroupProps) => {
  return (
    <div>
      <label className="block font-medium text-dark" htmlFor={props.id}>
        {label}
      </label>
      <Input className={`mt-2 ${className}`} {...props} />
    </div>
  );
};
