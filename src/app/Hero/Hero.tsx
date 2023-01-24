import { HeroImage } from "./HeroImage";
import { Credibility } from "./Credibility";
import { SearchBar } from "./SearchBar";
import { Heading } from "./Heading";

export const Hero = () => (
    <div className="flex items-center justify-between mt-12 space-x-14">
        <div className="flex flex-col space-y-11 w-[40%]">
            <Heading />
            <SearchBar />
            <Credibility />
        </div>
        <HeroImage />
    </div>
);
