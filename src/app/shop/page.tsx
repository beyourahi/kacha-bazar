import { Products } from "./Components/Products/Products";
import { Sidebar } from "./Components/Sidebar/Sidebar";

const Shop = () => (
    <main className="container relative mx-auto flex h-screen w-screen text-black">
        <Sidebar />
        <Products />
    </main>
);

export default Shop;
