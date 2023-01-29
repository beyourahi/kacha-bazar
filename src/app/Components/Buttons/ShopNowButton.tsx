import { FiShoppingCart } from "react-icons/fi";
import { Button } from "./Button";

export const ShopNowButton = () => (
    <Button
        target="/shop"
        styles="text-white bg-emerald-500 hover:bg-emerald-600"
        icon={<FiShoppingCart />}
    >
        Shop Now
    </Button>
);
