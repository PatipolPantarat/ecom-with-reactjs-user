import { CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
export default function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className={`w-[25px] h-[25px] rounded-md border border-dark-400 flex justify-center items-center ${
        isChecked ? "bg-danger" : "bg-white"
      } duration-150 cursor-pointer`}
      onClick={() => setIsChecked(!isChecked)}
    >
      {isChecked ? (
        <CheckIcon className="w-5 h-5 text-white" />
      ) : (
        <CheckIcon className="w-5 h-5 text-white" />
      )}
    </div>
  );
}
