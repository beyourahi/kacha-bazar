import { Contact } from "@src/app/Components/Contact/Contact";
import { DiscountBanner } from "@src/app/Components/Discount_Banner.tsx/DiscountBanner";
import { FAQ } from "@src/app/Components/FAQ/FAQ";
import { Features } from "@src/app/Components/Features/Features";
import { Hero } from "@src/app/Components/Hero/Hero";
import { About } from "@src/app/Components/About/About";
import { ProductCategories } from "@src/app/Components/ProductCategories/ProductCategories";
import { Navbar } from "@src/app/Components/Navbar/Navbar";
import { Footer } from "@src/app/Components/Footer/Footer";

const Home = () => (
    <>
        <Navbar />
        <main className="flex flex-col items-center">
            <Hero />
            <ProductCategories />
            <DiscountBanner />
            <Features />
            <FAQ />
            {/* <About /> */}
            <Contact />
        </main>
        <Footer />
    </>
);

export default Home;
