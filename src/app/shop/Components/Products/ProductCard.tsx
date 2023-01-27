import { Button } from "@src/app/Utils/Button";
import Image from "next/image";
import { BsBag } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { ProductCardProps } from "types";

export const ProductCard = ({ product }: ProductCardProps) => (
    <div
        key={product.id}
        className="flex flex-col p-6 space-y-4 transition-all duration-300 ease-in-out bg-white group rounded-2xl drop-shadow-2xl hover:-translate-y-3.5"
    >
        {/*//! Image  */}
        <div className="object-cover object-center w-full h-full overflow-hidden bg-gray-200 rounded-xl">
            <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="w-full transition-all duration-300 ease-in-out group-hover:scale-110"
            />
        </div>

        {/*//! Name */}
        <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold">{product.name}</h3>
            <h3 className="text-lg">500 gm</h3>
        </div>

        {/*//! Prices  */}
        <div className="flex items-center space-x-3">
            <p className="text-[1.6rem] font-bold text-red-500">
                ৳{product.discountedPrice}
            </p>
            <p className="text-lg text-gray-600 line-through">
                ৳{product.actualPrice}
            </p>
        </div>

        {/*//! More Info Button */}
        <Button
            icon={<AiOutlineInfoCircle />}
            styles="border-2 border-emerald-500 hover:bg-emerald-600 hover:text-white text-emerald-600 text-base"
        >
            More Info
        </Button>

        {/*//! Add to Cart Button */}
        <Button
            icon={<BsBag />}
            styles="bg-emerald-500 hover:bg-emerald-600 text-white text-base"
        >
            Add to cart
        </Button>
    </div>
);
