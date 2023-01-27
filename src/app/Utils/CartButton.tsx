import { BsBag } from "react-icons/bs";
import { Button } from "./Button";

const items = 5;

const buttonStyles = `text-gray-800 ${
    items > 0 ? "bg-gray-100 hover:bg-gray-200" : "bg-white hover:bg-gray-200"
}`;

export const CartButton = () => (
    <Button target="#" styles={`${buttonStyles} relative`} icon={<BsBag />}>
        <span>Cart</span>
        {items > 0 && (
            <span className="px-2.5 py-[3px] ml-2 text-white rounded-full bg-emerald-500 absolute -top-[30%] -right-[10%] border-4 border-white">
                {items}
            </span>
        )}
    </Button>
);
