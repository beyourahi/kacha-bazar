import { Button, CartButton } from "@src/app/Components";
import { BsArrowLeftCircle } from "react-icons/bs";
import { ProductSearchBar } from "./ProductSearchBar";

const items = 4;

export const ProductNavbar = () => (
    <nav className="sticky top-0 z-50 flex items-center justify-between space-x-10 bg-white py-6">
        <ProductSearchBar />
        <div className="flex w-[50%] justify-end space-x-6">
            {items > 0 && <CartButton items={items} />}

            <Button
                icon={<BsArrowLeftCircle />}
                styles="bg-emerald-500 text-white hover:bg-emerald-600"
            >
                Back Home
            </Button>
        </div>
    </nav>
);
