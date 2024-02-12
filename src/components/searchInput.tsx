import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDebouncedCallback } from "use-debounce";

export const SearchInput = ({
  onChange,
}: {
  onChange: (value: string) => void;
}) => {
  const handleSearch = useDebouncedCallback((searchQuery: string) => {
    console.log("searchQuery : ", searchQuery);
    onChange(searchQuery);
  }, 300);
  return (
    <div className="relative grow">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon className="h-6 w-6 text-primary" />
      </div>
      <input
        placeholder="Search..."
        type="search"
        name="search"
        className="pl-11 w-full rounded-md px-3 py-2 ring-1 ring-dark-300 outline-none focus:ring-primary duration-150"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};
