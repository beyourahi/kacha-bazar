import Image from "next/image";
import hero from "../../../public/images/hero.webp";
import { BsCheckCircleFill } from "react-icons/bs";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { creds, food_categories } from "data";

export const Hero = () => (
    <div className="flex flex-col items-center container mx-auto space-y-28 mt-12">
        <div className="flex justify-between items-center space-x-14">
            {/*//!  Masthead  */}
            <div className="flex flex-col space-y-14 w-[40%]">
                {/*//! Heading */}
                <h1 className="text-[2.8rem] font-extrabold leading-tight">
                    Fresh <span className="text-emerald-500">groceries</span>{" "}
                    delivered straight to your door, shop now and{" "}
                    <span className="text-emerald-500">save time!</span>
                </h1>

                {/*//! Search Bar  */}
                <form className="flex justify-center items-center space-x-2 rounded-xl shadow-md shadow-gray-300 w-full relative">
                    <input
                        type="text"
                        className="px-6 py-3 outline-none w-full rounded-xl focus:outline-emerald-500 text-lg placeholder-gray-500"
                        placeholder="Search for products"
                    />

                    <button
                        type="submit"
                        className="cursor-pointer absolute right-4"
                    >
                        <FiSearch className="h-7 w-7 text-emerald-500" />
                    </button>
                </form>

                {/*//! Credibility  */}
                <div className="grid grid-cols-2 gap-2">
                    {creds.map((cred) => (
                        <div className="flex items-center space-x-4" key={cred}>
                            <span className="text-emerald-500 text-xl">
                                <BsCheckCircleFill />
                            </span>
                            <p className="text-lg font-medium text-gray-500">
                                {cred}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/*//! Hero Image */}
            <div className="w-[60%]">
                <Image src={hero} alt="Hero Background" />
            </div>
        </div>

        {/*//! Product Categories  */}
        <div className="flex justify-between items-center">
            {food_categories.map((category) => (
                <div key={category.name} className="space-y-6 px-8">
                    <Image src={category.image} alt={category.name} />

                    <div className="space-y-2">
                        <h1 className="text-lg font-bold">{category.name}</h1>
                        <p className="text-base">{category.description}</p>
                    </div>
                </div>
            ))}
        </div>

        {/*//! Visit Shop Button  */}
        <Link
            href="/shop"
            className="flex justify-between items-center space-x-3 px-8 py-4 text-base font-bold tracking-wider text-center transition-all ease-in rounded-lg cursor-pointer text-white bg-emerald-500 hover:bg-emerald-600"
        >
            <span className="text-xl">
                <FiShoppingCart />
            </span>
            <span>Visit Shop</span>
        </Link>
    </div>
);
