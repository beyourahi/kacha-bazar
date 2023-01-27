import React from "react";

export interface Children {
    children: React.ReactNode;
}

export interface LayoutProps extends Children {}

export interface ButtonProps extends Children {
    target?: string;
    styles?: string;
    icon?: JSX.Element;
}

interface Product {
    id: number;
    name: string;
    image: string;
    actualPrice: number;
    discountedPrice: number;
    stockStatus: boolean;
}

export interface ProductCardProps {
    product: Product;
}
