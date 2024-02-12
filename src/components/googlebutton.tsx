interface IGoogleButtonProps {
  onClick: () => void;
  text: string;
}

export const GoogleButton = ({ onClick, text }: IGoogleButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-white w-full p-4 rounded-full flex items-center justify-center gap-2 font-medium text-md border border-dark-300 hover:shadow-md duration-150"
      type="button"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
        alt="Google"
        className="h-6 w-6"
      />
      <span>{text}</span>
    </button>
  );
};
