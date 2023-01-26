import { ShopNowButton } from "@src/app/Utils/ShopNowButton";

export const DiscountBanner = () => (
    <section className="flex flex-col items-center justify-center w-full space-y-12 py-52 py bg-[url('/images/discount_bg.png')] bg-no-repeat bg-cover bg-center container mx-auto rounded-[3rem]">
        <h1 className="text-5xl font-bold">
            Get 50% off on your first 2 orders!{" "}
        </h1>
        <ShopNowButton />
    </section>
);
