import Link from "next/link";
import { ButtonProps } from "types";

export const Button = ({ target, styles, icon, children }: ButtonProps) => (
    <Link
        href={target}
        className={`${styles} flex justify-between items-center space-x-3 px-8 py-4 text-base font-bold tracking-wider text-center transition-all ease-in rounded-lg cursor-pointer`}
    >
        <span className="text-xl">{icon}</span>
        <span>{children}</span>
    </Link>
);
