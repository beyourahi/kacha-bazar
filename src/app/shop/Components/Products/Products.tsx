import { Product } from "types";
import { ProductNavbar } from "./ProductNavbar";
import { ProductsList } from "./ProductsList";
import { SortBy } from "./SortBy";

export const ProductList: Product[] = [
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
    {
        id: 0,
        name: "Meat",
        image: "https://media.discordapp.net/attachments/1062439575508746423/1068540245294985277/meat.jpg",
        actualPrice: 298.0,
        discountedPrice: 198.0,
        stockStatus: true,
    },
];

export const Products = () => (
    <section className="w-full overflow-y-scroll">
        <ProductNavbar />

        <div className="flex flex-col px-10 mx-10 bg-gray-100 space-y-14 py-11 rounded-2xl">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">All Products</h1>
                <SortBy />
            </div>
            <ProductsList />
        </div>
    </section>
);
