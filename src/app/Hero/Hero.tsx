import Image from "next/image";
import hero from "../../../public/images/hero.webp";

export const Hero = () => (
    <div className="py-28">
        <div className="container flex items-center mx-auto space-x-12">
            <div className="flex flex-col space-y-8">
                {/*//! Tagline  */}
                <h1 className="text-5xl font-semibold leading-tight">
                    Fresh groceries delivered straight to your door, shop now
                    and save time!
                </h1>

                {/*//! Search Bar  */}
                <div>
                    <input
                        type="text"
                        placeholder="Search for products"
                        className="w-full px-6 py-4 text-base text-black bg-white border border-black rounded-lg focus:outline-none focus:border-emerald-500"
                    />
                </div>
            </div>

            {/*//! Hero Image */}
            <div>
                <Image src={hero} alt="Hero Background" />
            </div>
        </div>
    </div>
);
