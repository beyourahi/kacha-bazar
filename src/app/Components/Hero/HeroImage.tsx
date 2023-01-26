import Image from "next/image";
import hero from "@public/images/hero.webp";

export const HeroImage = () => (
    <div className="w-[60%]">
        <Image src={hero} alt="Hero Background" />
    </div>
);
