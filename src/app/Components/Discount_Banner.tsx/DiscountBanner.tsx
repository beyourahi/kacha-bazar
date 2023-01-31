import { ShopNowButton } from "@src/app/Components";

export const DiscountBanner = () => (
    <section className="py container mx-auto flex w-full flex-col items-center justify-center space-y-12 rounded-[3rem] bg-[url('/images/discount_bg.png')] bg-cover bg-center bg-no-repeat py-52">
        <h1 className="text-5xl font-bold">
            Get 50% off on your first 2 orders!{" "}
        </h1>
        <ShopNowButton />
    </section>
);
