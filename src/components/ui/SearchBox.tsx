import {Search} from "lucide-react";
import type React from "react";
type SearchProps ={
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>
};
const SearchBox = ({search, setSearch}: SearchProps) => {
    return (
        <div className="flex items-center gap-2 px-3 w-full sm:w-80">
          <Search size={18} className="text-gray-400" />
          <input
            className="bg-transparent outline-none w-full text-sm py-2"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); }}
          />
        </div>
    )
}

export default SearchBox;