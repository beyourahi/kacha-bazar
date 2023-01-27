import "./globals.css";
import { LayoutProps } from "types";
import { Roboto } from "@next/font/google";

//! If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

const RootLayout = ({ children }: LayoutProps) => (
    <html lang="en">
        <head />
        <body className={`${roboto.className}`}>{children}</body>
    </html>
);

export default RootLayout;
