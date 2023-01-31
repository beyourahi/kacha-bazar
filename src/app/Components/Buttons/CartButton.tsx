import { BsBag } from "react-icons/bs";
import { Button } from "./Button";

export const CartButton = ({ items }: { items: number }) => {
    return (
        <Button
            target="#"
            styles={`text-gray-800 relative ${
                items > 0
                    ? "bg-gray-100 hover:bg-gray-200"
                    : "bg-white hover:bg-gray-200"
            }`}
            icon={<BsBag />}
        >
            <span>Cart</span>
            {items > 0 && (
                <span className="absolute -top-[20%] -right-[10%] ml-2 rounded-full border-4 border-white bg-emerald-500 px-2.5 py-[3px] text-white">
                    {items}
                </span>
            )}
        </Button>
    );
};
