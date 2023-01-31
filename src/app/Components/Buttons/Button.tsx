import Link from "next/link";
import { ButtonProps } from "types";

export const Button = ({ target, styles, icon, children }: ButtonProps) => (
    <Link
        href={target || "#"}
        className={`flex cursor-pointer items-center justify-center space-x-3 rounded-xl px-6 py-4 text-center text-base font-bold tracking-wider transition-all duration-300 ease-in-out active:scale-95 ${styles}`}
    >
        {icon && <span className="text-xl">{icon}</span>}
        <span>{children}</span>
    </Link>
);
