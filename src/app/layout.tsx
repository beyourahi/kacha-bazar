import "./globals.css";
import { LayoutProps } from "types";
import { Raleway } from "@next/font/google";
import { Navbar } from "@src/app/Components/Navbar/Navbar";
import { Footer } from "@src/app/Components/Footer/Footer";

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
