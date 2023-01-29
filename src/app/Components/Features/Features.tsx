import { Button } from "@src/app/Components";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

export const Features = () => (
    <section
        id="features"
        className="container flex flex-col w-full py-32 mx-auto space-y-8"
    >
        {/*//!  Headings  */}
        <div className="text-center">
            {/*//!  Sub Heading  */}
            <h2 className="mb-3 text-xl font-bold text-emerald-500">
                What we provide
            </h2>

            {/*//! Heading  */}
            <h1 className="mb-8 text-[2.9rem] font-bold">
                <span className="underline underline-offset-8 decoration-emerald-500">
                    F
                </span>
                eatures
            </h1>
        </div>

        {/*//!  Features List  */}
        <div className="flex flex-col space-y-32">
            <div className="flex items-center justify-between space-x-24 px-28">
                <div className="flex flex-col items-start space-y-6">
                    <h1 className="text-[2.5rem] font-bold leading-snug">
                        Affordable groceries delivered directly to your door
                    </h1>
                    <p className="text-2xl text-gray-600">
                        We offer the highest quality groceries at the best
                        value.
                    </p>
                    <Button
                        target="/shop"
                        styles="bg-emerald-500 hover:bg-emerald-600 text-white"
                        icon={<FiShoppingCart />}
                    >
                        Explore Now
                    </Button>
                </div>
                <Image
                    width={200}
                    height={200}
                    src="/images/savings.svg"
                    alt="FAQ Image"
                    className="w-[40%]"
                />
            </div>

            <div className="flex items-center justify-between space-x-24 px-28">
                <Image
                    width={200}
                    height={200}
                    src="/images/shopping.svg"
                    alt="FAQ Image"
                    className="w-[40%]"
                />
                <div className="flex flex-col items-start space-y-6">
                    <h1 className="text-[2.5rem] font-bold leading-snug">
                        Find Favorites And Discover New Ones
                    </h1>
                    <p className="text-2xl text-gray-600">
                        Taste thoughtfully curated and delicious foods.
                    </p>
                    <Button
                        target="/shop"
                        styles="bg-white hover:bg-emerald-500 text-emerald-500 hover:text-white border-emerald-500 border-2"
                        icon={<FiShoppingCart />}
                    >
                        Explore Now
                    </Button>
                </div>
            </div>

            <div className="flex items-center justify-between space-x-24 px-28">
                <div className="flex flex-col items-start space-y-6">
                    <h1 className="text-[2.5rem] font-bold leading-snug">
                        Free Delivery. No Fees.
                    </h1>
                    <p className="text-2xl text-gray-600">
                        Enjoy no subscription fees and a low minimum order.
                    </p>
                    <Button
                        target="/shop"
                        styles="bg-emerald-500 hover:bg-emerald-600 text-white"
                        icon={<FiShoppingCart />}
                    >
                        Explore Now
                    </Button>
                </div>
                <Image
                    width={200}
                    height={200}
                    src="/images/delivery.svg"
                    alt="FAQ Image"
                    className="w-[40%]"
                />
            </div>
        </div>
    </section>
);
