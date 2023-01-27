import { Products } from "./Components/Products/Products";
import { Sidebar } from "./Components/Sidebar/Sidebar";

const Shop = () => (
    <main className="relative flex w-screen h-screen text-black">
        <Sidebar />
        <Products />
    </main>
);

export default Shop;
