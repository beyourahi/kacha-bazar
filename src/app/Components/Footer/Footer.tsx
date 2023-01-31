import { Logo } from "@src/app/Components/Navbar/Logo";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaPhone,
    FaEnvelope,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { AuthorSignature } from "./AuthorSignature";

const year = new Date().getFullYear();

export const Footer = () => (
    <footer className="mt-44 bg-gray-100">
        <div className="container mx-auto divide-y-2 divide-gray-300">
            <div className="flex justify-center space-x-24 py-32">
                {/*//! Branding  */}
                <div className="flex flex-col space-y-8">
                    <Logo />
                    <div className="flex flex-col space-y-4">
                        <p className="w-[50%] text-lg">
                            Fresh groceries delivered straight to your door,
                            shop now and save time!
                        </p>
                        <div className="flex space-x-6">
                            <FaFacebookSquare
                                size={40}
                                className="text-emerald-500 transition-all duration-300 hover:text-emerald-600"
                            />
                            <FaInstagramSquare
                                size={40}
                                className="text-emerald-500 transition-all duration-300 hover:text-emerald-600"
                            />
                            <FaTwitterSquare
                                size={40}
                                className="text-emerald-500 transition-all duration-300 hover:text-emerald-600"
                            />
                        </div>
                    </div>
                </div>

                {/*//! Contact Info  */}
                <div className="flex flex-col space-y-8">
                    <h1 className="text-2xl font-bold text-gray-700">
                        <span className="underline decoration-emerald-500 underline-offset-8">
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
                        <span className="underline decoration-emerald-500 underline-offset-8">
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
                        <span className="underline decoration-emerald-500 underline-offset-8">
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

            <div className="flex justify-between py-8">
                <h4 className="text-sm font-semibold tracking-wide text-gray-500">
                    All Rights Reserved &copy; Kacha Bazer {year}
                </h4>

                <AuthorSignature />
            </div>
        </div>
    </footer>
);
