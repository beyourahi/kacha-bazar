import { Logo } from "@src/app/Components/Navbar/Logo";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaPhone,
    FaEnvelope,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const year = new Date().getFullYear();

export const Footer = () => (
    <footer className="bg-gray-100 mt-60">
        <div className="container mx-auto divide-y-2 divide-gray-300">
            <div className="flex py-28 justify-center space-x-24">
                {/*//! Branding  */}
                <div className="flex flex-col space-y-8">
                    <Logo />
                    <div className="flex flex-col space-y-4">
                        <p className="text-lg w-[50%]">
                            Fresh groceries delivered straight to your door,
                            shop now and save time!
                        </p>
                        <div className="flex space-x-6">
                            <FaFacebookSquare
                                size={40}
                                className="text-emerald-500 hover:text-emerald-600 transition-all duration-300"
                            />
                            <FaInstagramSquare
                                size={40}
                                className="text-emerald-500 hover:text-emerald-600 transition-all duration-300"
                            />
                            <FaTwitterSquare
                                size={40}
                                className="text-emerald-500 hover:text-emerald-600 transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>

                {/*//! Contact Info  */}
                <div className="flex flex-col space-y-8">
                    <h1 className="text-2xl font-bold text-gray-700">
                        <span className="underline underline-offset-8 decoration-emerald-500">
                            Co
                        </span>
                        ntact Info
                    </h1>
                    <div className="flex flex-col space-y-2">
                        <p className="flex space-x-4 text-lg">
                            <FaPhone size={20} className="text-emerald-500" />{" "}
                            <span>+880 123 456 789</span>
                        </p>
                        <p className="flex space-x-4 text-lg">
                            <FaEnvelope
                                size={20}
                                className="text-emerald-500"
                            />
                            <span>kachabazar@gmail.com</span>
                        </p>
                        <p className="flex space-x-4 text-lg">
                            <MdLocationOn
                                size={20}
                                className="text-emerald-500"
                            />{" "}
                            <span>Dhaka, Bangladesh</span>
                        </p>
                    </div>
                </div>

                {/*//! Company */}
                <div className="flex flex-col space-y-8">
                    <h1 className="text-2xl font-bold text-gray-700">
                        <span className="underline underline-offset-8 decoration-emerald-500">
                            Co
                        </span>
                        mpany
                    </h1>
                    <div className="flex flex-col space-y-2">
                        <p>About Us</p>
                        <p>All Products</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy & Policy</p>
                    </div>
                </div>

                {/*//! Quick Links*/}
                <div className="flex flex-col space-y-8">
                    <h1 className="text-2xl font-bold text-gray-700">
                        <span className="underline underline-offset-8 decoration-emerald-500">
                            Qu
                        </span>
                        ick Links
                    </h1>
                    <div className="flex flex-col space-y-2">
                        <a href="#categories">Categories</a>
                        <a href="#faq">FAQ</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>

            <div className="text-center py-6">
                <h4 className="text-sm font-semibold">
                    All Rights Reserved &copy; Kacha Bazer {year}
                </h4>
            </div>
        </div>
    </footer>
);
