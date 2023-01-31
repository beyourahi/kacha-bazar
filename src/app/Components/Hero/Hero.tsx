import { HeroImage } from "./HeroImage";
import { Credibility } from "./Credibility";
import { SearchBar } from "./SearchBar";
import { Heading } from "./Heading";
import Image from "next/image";
import { Button } from "@src/app/Components";
import { FiShoppingCart } from "react-icons/fi";

export const Hero = () => (
    <section className="container mx-auto mt-4 flex items-center justify-between space-x-14">
        <div className="flex w-[40%] flex-col space-y-14">
            <Heading />
            <div className="relative flex flex-col space-y-6">
                <SearchBar />
                <Image
                    width={30}
                    height={30}
                    src="/images/three-lines.svg"
                    alt="FAQ Image"
                    className="absolute -top-[50%] -right-[5%] rotate-[15deg]"
                />
                <Image
                    width={30}
                    height={30}
                    src="/images/three-lines.svg"
                    alt="FAQ Image"
                    className="absolute -top-[50%] -left-[5%] -rotate-[75deg]"
                />
                <Button
                    target="/shop"
                    styles="text-white bg-emerald-500 hover:bg-emerald-600"
                    icon={<FiShoppingCart />}
                >
                    <span>Visit Store</span>
                </Button>
            </div>
            <Credibility />
        </div>
        <HeroImage />
    </section>
);
