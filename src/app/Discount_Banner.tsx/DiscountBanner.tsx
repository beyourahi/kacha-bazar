import { ShopNowButton } from "../utils/ShopNowButton";

export const DiscountBanner = () => {
    return (
        <div
            className="flex flex-col items-center justify-center w-full space-y-12 py-36"
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
        </div>
    );
};
