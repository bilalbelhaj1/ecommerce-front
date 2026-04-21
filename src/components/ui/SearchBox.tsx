import {Search} from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";
interface SearchProps extends ComponentPropsWithoutRef<'input'>{
    search: string;
};
const SearchBox = ({search, onChange}: SearchProps) => {
    return (
        <div className="flex items-center gap-2 px-3 w-full sm:w-80">
          <Search size={18} className="text-gray-400" />
          <input
            className="bg-transparent outline-none w-full text-sm py-2"
            placeholder="Search by name..."
            value={search}
            onChange={onChange}
          />
        </div>
    )
}

export default SearchBox;