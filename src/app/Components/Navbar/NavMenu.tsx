import { nav_menu } from "data";

export const NavMenu = () => (
    <ul className="flex justify-between space-x-12">
        {nav_menu.map((item) => (
            <li
                key={item.name}
                className="text-base font-semibold text-gray-700 transition-all hover:-translate-y-1 hover:text-emerald-500 hover:underline hover:underline-offset-[10px]"
            >
                <a href={item.link}>{item.name}</a>
            </li>
        ))}
    </ul>
);
