"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { faqs } from "data";
import Image from "next/image";

export const FAQ = () => (
    <section
        id="faq"
        className="flex w-full flex-col items-center py-32 text-center"
    >
        <div className="container mx-auto">
            {/*//!  Headings  */}
            <div>
                {/*//!  Sub Heading  */}
                <h2 className="mb-3 text-xl font-bold text-emerald-500">
                    Got a quick question?
                </h2>

                {/*//! Heading  */}
                <h1 className="mb-20 text-[2.9rem] font-bold">
                    <span className="underline decoration-emerald-500 underline-offset-[10px]">
                        F
                    </span>
                    requently{" "}
                    <span className="underline decoration-emerald-500 underline-offset-[10px]">
                        A
                    </span>
                    sked{" "}
                    <span className="underline decoration-emerald-500 underline-offset-[10px]">
                        Q
                    </span>
                    uestions
                </h1>
            </div>

            {/*//! FAQ Section  */}
            <div className="flex h-full w-full justify-between space-x-12">
                <Image
                    width={200}
                    height={200}
                    src="/images/faq_image.svg"
                    alt="FAQ Image"
                    className="w-[40%]"
                />

                {/*//! FAQs  */}
                <div className="mx-auto w-[55%] space-y-4 divide-y-2 divide-gray-200 p-2">
                    {faqs.map((faq) => (
                        <Disclosure
                            key={faq.question}
                            as="div"
                            className="text-black"
                        >
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between px-8 py-6 text-left text-lg font-medium text-black transition-all">
                                        <span className="font-bold">
                                            {faq.question}
                                        </span>
                                        <div className="rounded-full bg-emerald-100 p-1">
                                            <ChevronDownIcon
                                                className={`${
                                                    open
                                                        ? "rotate-180 transform transition-all duration-300"
                                                        : ""
                                                } h-7 w-7 text-emerald-600 transition-all duration-300`}
                                            />
                                        </div>
                                    </Disclosure.Button>

                                    <Transition
                                        enter="transition duration-400 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-400 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Disclosure.Panel className="px-8 py-3 text-left text-base">
                                            {faq.answer}
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
