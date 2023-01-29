import { Products } from "./Components/Products/Products";
import { Sidebar } from "./Components/Sidebar/Sidebar";

const Shop = () => (
    <main className="container relative flex w-screen h-screen mx-auto text-black">
        <Sidebar />
        <Products />
    </main>
);

export default Shop;
