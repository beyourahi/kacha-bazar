import { food_categories } from "data";
import Image from "next/image";

export const ProductCategories = () => (
    <section id="categories" className="py-32">
        <div className="container flex items-center justify-between mx-auto">
            {food_categories.map((category) => (
                <div key={category.name} className="px-8 space-y-6">
                    <Image src={category.image} alt={category.name} />

                    <div className="space-y-2">
                        <h1 className="text-lg font-bold">{category.name}</h1>
                        <p className="text-base">{category.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);
