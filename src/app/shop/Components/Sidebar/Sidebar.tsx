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
    <section className="flex flex-col w-[20%] h-full overflow-hidden pl-12 py-8">
        {/*//! Logo */}
        <Logo />

        <div className="flex flex-col w-full py-20 space-y-14">
            <h1 className="text-3xl font-bold">Categories</h1>

            {/*//! Category List */}
            <div className="flex flex-col space-y-2">
                {categories.map((category) => (
                    <a
                        href="#"
                        key={category}
                        className="px-4 py-3 tracking-wide transition-all duration-300 ease-in-out hover:text-white rounded-xl hover:bg-emerald-500"
                    >
                        {category}
                    </a>
                ))}
            </div>
        </div>
    </section>
);
