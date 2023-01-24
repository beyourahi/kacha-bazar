import { BsBag } from "react-icons/bs";
import { Button } from "./Button";

export const CartButton = () => (
    <Button
        target="/cart"
        styles="text-gray-800 bg-gray-100 hover:bg-gray-300"
        icon={<BsBag />}
    >
        Cart
    </Button>
);
