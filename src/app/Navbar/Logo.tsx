import Link from "next/link";

export const Logo = () => (
    <Link href="/">
        <h1 className="text-[1.7rem] font-extrabold text-emerald-500">
            Kacha <span className="underline underline-offset-[10px]">Baz</span>
            ar
        </h1>
    </Link>
);
