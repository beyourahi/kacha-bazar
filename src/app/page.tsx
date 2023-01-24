import { FAQ } from "./FAQ/FAQ";
import { Hero } from "./Hero/Hero";
import { ProductCategories } from "./ProductCategories/ProductCategories";
import { ShopNowButton } from "./utils/ShopNowButton";

const Home = () => (
    <main className="container flex flex-col items-center mx-auto just">
        <Hero />
        <ProductCategories />
        <ShopNowButton />
        <FAQ />
    </main>
);

export default Home;
