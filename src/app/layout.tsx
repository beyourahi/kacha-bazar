import "./globals.css";
import { LayoutProps } from "types";
import { Raleway } from "@next/font/google";

//! If loading a variable font, you don't need to specify the font weight
const raleway = Raleway({
    subsets: ["latin"],
});

const RootLayout = ({ children }: LayoutProps) => (
    <html lang="en">
        <head />
        <body className={`${raleway.className}`}>{children}</body>
    </html>
);

export default RootLayout;
