"use client";

import { useScrollPosition } from "@src/app/Hooks";
import { ShopNowButton } from "../Buttons/ShopNowButton";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";

export const Navbar = () => {
    const pos = useScrollPosition();

    return (
        <div
            className={`sticky top-0 z-50 bg-white transition-all duration-300 ease-in-out ${
                pos > 0 ? "py-4 shadow-2xl" : "py-10"
            }`}
        >
            <div className="container mx-auto flex items-center justify-between">
                {/*//! Logo  */}
                <Logo />

                {/*//! Nav Menu  */}
                <NavMenu />

                <div className="flex space-x-4">
                    {/*//! Visit Shop Button  */}
                    <ShopNowButton />
                </div>
            </div>
        </div>
    );
};
