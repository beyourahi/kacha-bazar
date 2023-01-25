import { Contact } from "./Contact/Contact";
import { DiscountBanner } from "./Discount_Banner.tsx/DiscountBanner";
import { FAQ } from "./FAQ/FAQ";
import { Features } from "./Features/Features";
import { Hero } from "./Hero/Hero";
import { ProductCategories } from "./ProductCategories/ProductCategories";

const Home = () => (
    <main className="container flex flex-col items-center mx-auto just">
        <Hero />
        <ProductCategories />
        <DiscountBanner />
        <Features />
        <FAQ />
        <Contact />
    </main>
);

export default Home;
