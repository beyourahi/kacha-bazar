import { Button } from "../Buttons/Button";

export const ContactForm = () => (
    <div className="w-[50%]">
        <form className="flex flex-col h-full space-y-4 text-center">
            <input
                type="text"
                placeholder="Name"
                name="name"
                required
                className="p-4 text-base font-normal text-black transition-all ease-in bg-gray-100 rounded-lg outline-none md:text-lg focus:outline-emerald-500 focus:outline-offset-0 focus:outline-2 focus:rounded-lg placeholder:text-gray-800"
            />

            <input
                type="email"
                placeholder="Email"
                name="email"
                className="p-4 text-base font-normal text-black transition-all ease-in bg-gray-100 border-none rounded-lg outline-none md:text-lg focus:outline-emerald-500 focus:outline-offset-0 focus:outline-2 focus:rounded-lg placeholder:text-gray-800"
            />

            <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="p-4 text-base font-normal text-black transition-all ease-in bg-gray-100 border-none rounded-lg outline-none md:text-lg focus:outline-emerald-500 focus:outline-offset-0 focus:outline-2 focus:rounded-lg placeholder:text-gray-800"
            />

            <textarea
                rows={5}
                placeholder="Write your message..."
                name="message"
                required
                className="col-span-2 row-span-3 p-4 text-base font-normal text-black transition-all ease-in bg-gray-100 border-none rounded-lg outline-none resize-none font-ps md:text-lg focus:outline-emerald-500 focus:outline-offset-0 focus:outline-2 focus:rounded-lg placeholder:text-gray-800"
            />

            <Button styles="bg-emerald-500 hover:bg-emerald-600 text-white">
                Submit
            </Button>
        </form>
    </div>
);
