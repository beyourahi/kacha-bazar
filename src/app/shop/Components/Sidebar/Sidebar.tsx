import { Logo } from "@src/app/Components/Navbar/Logo";

const categories = [
    "Fruits",
    "Vegetables",
    "Fish & Seafood",
    "Meat",
    "Cooking",
    "Sauces & Pickles",
    "Dairy & Eggs",
    "Candy & Chocolate",
    "Bakery",
    "Beverages",
    "Frozen & Canned",
];

export const Sidebar = () => (
    <section className="flex h-full w-[20%] flex-col overflow-hidden py-8 pr-8">
        {/*//! Logo */}
        <Logo />

        <div className="flex w-full flex-col space-y-14 py-20">
            <h1 className="text-3xl font-bold">Categories</h1>

            {/*//! Category List */}
            <div className="flex flex-col space-y-2">
                {categories.map((category) => (
                    <a
                        href="#"
                        key={category}
                        className="rounded-xl px-4 py-3 tracking-wide transition-all duration-300 ease-in-out hover:bg-emerald-500 hover:font-bold hover:text-white"
                    >
                        {category}
                    </a>
                ))}
            </div>
        </div>
    </section>
);
