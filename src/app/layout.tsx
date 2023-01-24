import { LayoutProps } from "types";
import "./globals.css";
import { Navbar } from "./Navbar/Navbar";
import { Raleway } from "@next/font/google";
import { Footer } from "./Footer/Footer";

//! If loading a variable font, you don't need to specify the font weight
const raleway = Raleway({
    subsets: ["latin"],
});

const RootLayout = ({ children }: LayoutProps) => (
    <html lang="en">
        <head />
        <body className={`${raleway.className}`}>
            <Navbar />
            {children}
            <Footer />
        </body>
    </html>
);

export default RootLayout;
