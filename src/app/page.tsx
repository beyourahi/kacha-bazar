import { Hero } from "./Hero/Hero";
import { ProductCategories } from "./ProductCategories/ProductCategories";
import { VisitShopButton } from "./utils/VisitShopButton";

const Home = () => (
    <div className="flex flex-col items-center container mx-auto">
        <Hero />

        <ProductCategories />

        <VisitShopButton />
    </div>
);

export default Home;
