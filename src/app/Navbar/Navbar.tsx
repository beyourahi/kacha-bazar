import { VisitShopButton } from "../utils/VisitShopButton";
import { CartButton } from "../utils/CartButton";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";

export const Navbar = () => (
    <div className="sticky top-0 backdrop-blur-xl bg-transparent z-50">
        <div className="container flex items-center justify-between py-4 mx-auto">
            {/*//! Logo  */}
            <Logo />

            {/*//! Nav Menu  */}
            <NavMenu />

            <div className="flex space-x-4">
                {/*//! Cart Button */}
                <CartButton />

                {/*//! Visit Shop Button  */}
                <VisitShopButton />
            </div>
        </div>
    </div>
);
