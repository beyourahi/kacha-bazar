import { ContactForm } from "./ContactForm";
import Image from "next/image";

export const Contact = () => (
    <div
        id="contact"
        className="flex flex-col items-center justify-center w-full py-20 text-center"
    >
        {/*//!  Headings  */}
        <div>
            {/*//!  Sub Heading  */}
            <h2 className="mb-3 text-xl font-bold text-emerald-500">
                Wanna get in touch?
            </h2>

            {/*//! Heading  */}
            <h1 className="mb-20 text-[2.9rem] font-bold">Leave a Message</h1>
        </div>

        {/*//! Form  */}
        <div className="flex items-center justify-between space-x-16">
            <Image
                width={200}
                height={200}
                src="/images/contact_image.svg"
                alt="FAQ Image"
                className="w-[50%]"
            />
            <ContactForm />
        </div>
    </div>
);
