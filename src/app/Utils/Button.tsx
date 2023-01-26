import Link from "next/link";
import { ButtonProps } from "types";

export const Button = ({ target, styles, icon, children }: ButtonProps) => (
    <Link
        href={target || "#"}
        className={`${styles} flex justify-center items-center space-x-3 px-6 py-4 text-base font-bold tracking-wider text-center transition-all rounded-xl cursor-pointer active:scale-95 ease-in-out duration-300`}
    >
        {icon && <span className="text-xl">{icon}</span>}
        <span>{children}</span>
    </Link>
);
