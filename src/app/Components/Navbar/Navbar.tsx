import { CartButton } from "@src/app/Utils/CartButton";
import { ShopNowButton } from "@src/app/Utils/ShopNowButton";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";

export const Navbar = () => (
    <div className="sticky top-0 z-50 bg-white/10 backdrop-blur-2xl">
        <div className="container flex items-center justify-between py-4 mx-auto">
            {/*//! Logo  */}
            <Logo />

            {/*//! Nav Menu  */}
            <NavMenu />

            <div className="flex space-x-4">
                {/*//! Cart Button */}
                <CartButton />

                {/*//! Visit Shop Button  */}
                <ShopNowButton />
            </div>
        </div>
    </div>
);
