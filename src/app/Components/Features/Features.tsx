import Image from "next/image";

export const Features = () => (
    <section
        id="features"
        className="container flex flex-col w-full py-32 mx-auto my-24 space-y-8"
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
            <div className="flex items-center justify-between space-x-16 px-28">
                <div className="flex flex-col space-y-6">
                    <h1 className="text-5xl font-bold leading-snug">
                        Affordable groceries delivered directly to your door
                    </h1>
                    <p className="text-2xl text-gray-600">
                        We offer the highest quality groceries at the best
                        value.
                    </p>
                </div>
                <Image
                    width={200}
                    height={200}
                    src="/images/savings.svg"
                    alt="FAQ Image"
                    className="w-[40%]"
                />
            </div>

            <div className="flex items-center justify-between space-x-16 px-28">
                <Image
                    width={200}
                    height={200}
                    src="/images/shopping.svg"
                    alt="FAQ Image"
                    className="w-[40%]"
                />
                <div className="flex flex-col space-y-6">
                    <h1 className="text-5xl font-bold leading-snug">
                        Exciting items you won&apos;t find elsewhere
                    </h1>
                    <p className="text-2xl text-gray-600">
                        Taste thoughtfully curated and delicious foods.
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between space-x-16 px-28">
                <div className="flex flex-col space-y-6">
                    <h1 className="text-5xl font-bold leading-snug">
                        Free Delivery. No Fees.
                    </h1>
                    <p className="text-2xl text-gray-600">
                        Enjoy no subscription fees and a low minimum order.
                    </p>
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
