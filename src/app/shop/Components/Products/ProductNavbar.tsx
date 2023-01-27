import { Button } from "@src/app/Utils/Button";
import { CartButton } from "@src/app/Utils/CartButton";
import { BsArrowLeft, BsArrowLeftCircle } from "react-icons/bs";
import { ProductSearchBar } from "./ProductSearchBar";

export const ProductNavbar = () => (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-8 space-x-10 bg-white">
        <ProductSearchBar />
        <div className="flex justify-end space-x-6 w-[50%]">
            <CartButton />
            <Button
                icon={<BsArrowLeftCircle />}
                styles="bg-emerald-500 text-white hover:bg-emerald-600"
            >
                Back Home
            </Button>
        </div>
    </nav>
);
