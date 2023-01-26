import { FiSearch } from "react-icons/fi";

export const SearchBar = () => (
    <form className="relative flex items-center justify-center w-full space-x-2 drop-shadow-2xl rounded-xl">
        <input
            type="text"
            className="w-full px-6 py-3 text-lg placeholder-gray-700 outline-none rounded-xl focus:outline-2 focus:outline-emerald-500"
            placeholder="Search for products"
        />

        <button type="submit" className="absolute cursor-pointer right-4">
            <FiSearch className="h-7 w-7 text-emerald-500" />
        </button>
    </form>
);
