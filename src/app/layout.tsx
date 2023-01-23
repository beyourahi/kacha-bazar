import { LayoutProps } from "types";
import "./globals.css";

const RootLayout = ({ children }: LayoutProps) => (
    <html lang="en">
        <head />
        <body>{children}</body>
    </html>
);

export default RootLayout;
