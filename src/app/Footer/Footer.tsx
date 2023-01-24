import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

export const Footer = () => (
    <footer className="text-gray-600 body-font mt-40 bg-gray-200">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <Link href="/">
                    <h1 className="text-2xl font-bold text-emerald-500">
                        Kacha{" "}
                        <span className="underline underline-offset-[10px]">
                            Baz
                        </span>
                        ar
                    </h1>
                </Link>
                <p className="mt-2 text-sm text-gray-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quibusdam, saepe.
                </p>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                        CATEGORIES
                    </h2>
                    <nav className="list-none mb-10">
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">
                                First Link
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">
                                Second Link
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">
                                Third Link
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">
                                Fourth Link
                            </a>
                        </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                        CATEGORIES
                    </h2>
                    <nav className="list-none mb-10">
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">
                                First Link
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">
                                Second Link
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">
                                Third Link
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">
                                Fourth Link
                            </a>
                        </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                        CATEGORIES
                    </h2>
                    <nav className="list-none mb-10">
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">
                                First Link
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">
                                Second Link
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">
                                Third Link
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">
                                Fourth Link
                            </a>
                        </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                        CATEGORIES
                    </h2>
                    <nav className="list-none mb-10">
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">
                                First Link
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">
                                Second Link
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">
                                Third Link
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">
                                Fourth Link
                            </a>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
        <div className="bg-gray-200">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <div className="flex justify-center items-center space-x-4">
                    <p className="text-gray-500 text-sm text-center flex justify-center items-center sm:text-left">
                        © 2023 Copyright —{" "}
                    </p>
                    <Link href="/">
                        <h1 className="text-2xl font-bold text-emerald-500">
                            Kacha{" "}
                            <span className="underline underline-offset-[10px]">
                                Baz
                            </span>
                            ar
                        </h1>
                    </Link>
                </div>

                <span className="inline-flex space-x-4 sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <FaFacebookF className="text-xl text-gray-500" />
                    <AiOutlineTwitter className="text-xl text-gray-500" />
                    <FaLinkedinIn className="text-xl text-gray-500" />
                    <AiFillInstagram className="text-xl text-gray-500" />
                </span>
            </div>
        </div>
    </footer>
);
