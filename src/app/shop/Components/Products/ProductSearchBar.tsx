import { FiSearch } from "react-icons/fi";

export const ProductSearchBar = () => (
    <form className="relative flex w-full items-center justify-center space-x-2 rounded-xl">
        <input
            type="text"
            className="w-full rounded-xl bg-gray-100 px-6 py-4 text-lg placeholder-gray-500 outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-emerald-500"
            placeholder="Search for products"
        />

        <button
            type="submit"
            className="absolute right-0 flex h-full w-[8%] cursor-pointer items-center justify-center rounded-tr-xl rounded-br-xl bg-emerald-500"
        >
            <FiSearch className="h-7 w-7 text-white" />
        </button>
    </form>
);
