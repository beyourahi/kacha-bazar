"use client";

import { useScrollPosition } from "@src/app/Hooks";
import { ShopNowButton } from "../Buttons/ShopNowButton";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";

export const Navbar = () => {
    const pos = useScrollPosition();

    return (
        <div
            className={`sticky top-0 z-50 bg-white transition-all duration-500 ${
                pos > 0 ? "shadow-2xl py-4" : "py-10"
            }`}
        >
            <div className="container flex items-center justify-between mx-auto">
                {/*//! Logo  */}
                <Logo />

                {/*//! Nav Menu  */}
                <NavMenu />

                {/*//! Visit Shop Button  */}
                <ShopNowButton />
            </div>
        </div>
    );
};
