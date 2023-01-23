import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = () => (
    <div className="container flex items-center justify-between py-8 mx-auto">
        {/*//! Logo  */}
        <Link href="/">
            <h1 className="text-2xl font-bold text-emerald-500">
                Kacha Bazar
            </h1>
        </Link>

        {/*//! Nav Menu  */}
        <ul className="flex justify-between space-x-10">
            <li>
                <Link href="/">Home</Link>
            </li>

            <li>
                <a href="/">Product Categories</a>
            </li>

            <li>
                <Link href="/offers">Offers</Link>
            </li>

            <li>
                <Link href="/about">About Us</Link>
            </li>

            <li>
                <Link href="/contact">Contact Us</Link>
            </li>
        </ul>

        {/*//! Buttons */}
        <Link href="/cart" className="flex items-center space-x-3">
            <span className="text-2xl text-emerald-500">
                <FaShoppingCart />
            </span>
            <span>Cart</span>
        </Link>
    </div>
);
