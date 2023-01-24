import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { nav_menu } from "data";

export const Navbar = () => (
    <div className="sticky top-0 backdrop-blur-xl bg-transparent z-50">
        <div className="container flex items-center justify-between py-6 mx-auto">
            {/*//! Logo  */}
            <Link href="/">
                <h1 className="text-[1.7rem] font-extrabold text-emerald-500">
                    Kacha{" "}
                    <span className="underline underline-offset-[10px]">
                        Baz
                    </span>
                    ar
                </h1>
            </Link>

            {/*//! Nav Menu  */}
            <ul className="flex justify-between space-x-12">
                {nav_menu.map((item) => (
                    <li
                        key={item.name}
                        className="text-base font-semibold transition-all text-gray-700 hover:-translate-y-1 hover:text-emerald-500 hover:underline hover:underline-offset-[10px]"
                    >
                        <Link href={item.link}>{item.name}</Link>
                    </li>
                ))}
            </ul>

            <div className="flex space-x-4">
                {/*//! Cart Button */}
                <Link
                    href="/cart"
                    className="flex justify-between items-center space-x-3 px-6 py-3 text-base font-bold tracking-wider text-center transition-all ease-in rounded-lg cursor-pointer text-gray-800 bg-gray-100 hover:bg-gray-300"
                >
                    <span className="text-xl">
                        <BsBag />
                    </span>
                    <span>Cart</span>
                </Link>

                {/*//! Visit Shop Button  */}
                <Link
                    href="/shop"
                    className="flex justify-between items-center space-x-3 px-6 py-3 text-base font-bold tracking-wider text-center transition-all ease-in rounded-lg cursor-pointer text-white bg-emerald-500 hover:bg-emerald-600"
                >
                    <span className="text-xl">
                        <FiShoppingCart />
                    </span>
                    <span>Visit Shop</span>
                </Link>
            </div>
        </div>
    </div>
);
