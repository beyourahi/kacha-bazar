"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const sort_list = [
    { name: "Relevance" },
    { name: "Price Low to High" },
    { name: "Price High to Low" },
    { name: "Best Selling" },
    { name: "New Arrivals" },
];

export const SortBy = () => {
    const [selected, setSelected] = useState(sort_list[0]);

    return (
        <div className="z-40 w-[15%]">
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full py-2 pl-6 pr-10 text-base text-left bg-white border cursor-default rounded-xl drop-shadow-xl">
                        <span className="block truncate">{selected.name}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <ChevronUpDownIcon
                                className="w-5 h-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute w-full py-1 mt-2 overflow-auto text-base bg-white shadow-lg rounded-xl max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {sort_list.map((item, index) => (
                                <Listbox.Option
                                    key={index}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-6 pr-4 ${
                                            active
                                                ? "bg-emerald-500 text-white"
                                                : "text-gray-900"
                                        }`
                                    }
                                    value={item}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    selected
                                                        ? "font-medium"
                                                        : "font-normal"
                                                }`}
                                            >
                                                {item.name}
                                            </span>
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};
