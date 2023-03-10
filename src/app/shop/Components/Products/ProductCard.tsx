import { Button } from "@src/app/Components";
import Image from "next/image";
import { BsBag } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { ProductCardProps } from "types";

export const ProductCard = ({ product }: ProductCardProps) => (
    <div
        key={product.id}
        className="group flex cursor-pointer flex-col space-y-4 rounded-2xl bg-white p-5 drop-shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-3.5"
    >
        {/*//! Image  */}
        <div className="h-full w-full overflow-hidden rounded-xl bg-gray-200 object-cover object-center">
            <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="w-full transition-all duration-300 ease-in-out group-hover:scale-110"
            />
        </div>

        <div className="flex items-start justify-between">
            {/*//! Name */}
            <div className="flex flex-col justify-between">
                <h3 className="text-3xl font-bold">{product.name}</h3>
                <h3 className="text-base text-gray-500">500 gm</h3>
            </div>

            {/*//! Prices  */}
            <div className="flex items-center space-x-3">
                <p className="text-[1.6rem] font-bold text-red-500">
                    ৳{product.discountedPrice}
                </p>
                <p className="text-lg text-gray-500 line-through">
                    ৳{product.actualPrice}
                </p>
            </div>
        </div>

        <div className="flex flex-col space-y-3">
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
    </div>
);
