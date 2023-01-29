import { ProductCard } from "./ProductCard";
import { ProductList } from "./Products";

export const ProductsList = () => (
    <div className="grid grid-cols-4 gap-10">
        {ProductList.map((product) => (
            <ProductCard product={product} key={product.id} />
        ))}
    </div>
);
