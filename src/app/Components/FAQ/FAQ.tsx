"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { faqs } from "data";
import Image from "next/image";

export const FAQ = () => (
    <section
        id="faq"
        className="flex flex-col items-center w-full py-32 text-center"
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
                    <span className="underline underline-offset-[10px] decoration-emerald-500">
                        F
                    </span>
                    requently{" "}
                    <span className="underline underline-offset-[10px] decoration-emerald-500">
                        A
                    </span>
                    sked{" "}
                    <span className="underline underline-offset-[10px] decoration-emerald-500">
                        Q
                    </span>
                    uestions
                </h1>
            </div>

            {/*//! FAQ Section  */}
            <div className="flex justify-between w-full h-full space-x-12">
                <Image
                    width={200}
                    height={200}
                    src="/images/faq_image.svg"
                    alt="FAQ Image"
                    className="w-[40%]"
                />

                {/*//! FAQs  */}
                <div className="w-[55%] p-2 mx-auto space-y-4 divide-y-2 divide-gray-200">
                    {faqs.map((faq) => (
                        <Disclosure
                            key={faq.question}
                            as="div"
                            className="text-black"
                        >
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex justify-between w-full px-8 py-6 text-lg font-medium text-left text-black transition-all">
                                        <span className="font-bold">
                                            {faq.question}
                                        </span>
                                        <div className="p-1 rounded-full bg-emerald-100">
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
                                        <Disclosure.Panel className="px-8 py-3 text-base text-left">
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
