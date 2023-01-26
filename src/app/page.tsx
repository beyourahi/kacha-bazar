import { Contact } from "@src/app/Components/Contact/Contact";
import { DiscountBanner } from "@src/app/Components/Discount_Banner.tsx/DiscountBanner";
import { FAQ } from "@src/app/Components/FAQ/FAQ";
import { Features } from "@src/app/Components/Features/Features";
import { Hero } from "@src/app/Components/Hero/Hero";
import { ProductCategories } from "./Components/ProductCategories/ProductCategories";

const Home = () => (
    <main className="flex flex-col items-center">
        <Hero />
        <ProductCategories />
        <DiscountBanner />
        <Features />
        <FAQ />
        <Contact />
    </main>
);

export default Home;
