import { FiShoppingCart } from "react-icons/fi";
import { Button } from "./Button";

export const VisitShopButton = () => (
    <Button
        target="/shop"
        styles="text-white bg-emerald-500 hover:bg-emerald-600"
        icon={<FiShoppingCart />}
    >
        Visit Shop
    </Button>
);
