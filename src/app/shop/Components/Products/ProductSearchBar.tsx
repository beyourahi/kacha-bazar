import { FiSearch } from "react-icons/fi";

export const ProductSearchBar = () => (
    <form className="relative flex items-center justify-center w-full space-x-2 rounded-xl">
        <input
            type="text"
            className="w-full px-6 py-4 text-lg placeholder-gray-500 transition-all duration-300 ease-in-out bg-gray-100 outline-none rounded-xl focus:outline-2 focus:outline-emerald-500 focus:outline-offset-0"
            placeholder="Search for products"
        />

        <button
            type="submit"
            className="absolute right-0 h-full cursor-pointer bg-emerald-500 w-[8%] rounded-tr-xl rounded-br-xl flex items-center justify-center"
        >
            <FiSearch className="text-white h-7 w-7" />
        </button>
    </form>
);
