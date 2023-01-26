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
