import { ShopNowButton } from "../utils/ShopNowButton";

export const DiscountBanner = () => (
    <section
        className="flex flex-col items-center justify-center w-full py-32 my-12 space-y-12"
        style={{
            backgroundImage: "url(/images/discount_bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    >
        <h1 className="text-5xl font-bold">
            Get 50% off on your first 2 orders!{" "}
        </h1>
        <ShopNowButton />
    </section>
);
