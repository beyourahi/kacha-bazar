import { BsBag } from "react-icons/bs";
import { Button } from "./Button";

export const CartButton = () => (
    <Button
        target="/cart"
        styles="text-gray-800 bg-white hover:bg-gray-200"
        icon={<BsBag />}
    >
        Cart
    </Button>
);
