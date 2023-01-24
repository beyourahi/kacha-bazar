import { FiSearch } from "react-icons/fi";

export const SearchBar = () => (
    <form className="flex justify-center items-center space-x-2 rounded-xl shadow-md shadow-gray-300 w-full relative">
        <input
            type="text"
            className="px-6 py-3 outline-none w-full rounded-xl focus:outline-emerald-500 text-lg placeholder-gray-500"
            placeholder="Search for products"
        />

        <button type="submit" className="cursor-pointer absolute right-4">
            <FiSearch className="h-7 w-7 text-emerald-500" />
        </button>
    </form>
);
