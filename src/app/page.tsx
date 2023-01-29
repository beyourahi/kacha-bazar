import {
    Navbar,
    Hero,
    ProductCategories,
    DiscountBanner,
    Features,
    FAQ,
    Contact,
    Footer,
} from "./Components";

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
