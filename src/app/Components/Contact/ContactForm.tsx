import { Button } from "../Buttons/Button";

export const ContactForm = () => (
    <div className="w-[50%]">
        <form className="flex h-full flex-col space-y-4 text-center">
            <input
                type="text"
                placeholder="Name"
                name="name"
                required
                className="rounded-lg bg-gray-100 p-4 text-base font-normal text-black outline-none transition-all ease-in placeholder:text-gray-800 focus:rounded-lg focus:outline-2 focus:outline-offset-0 focus:outline-emerald-500 md:text-lg"
            />

            <input
                type="email"
                placeholder="Email"
                name="email"
                className="rounded-lg border-none bg-gray-100 p-4 text-base font-normal text-black outline-none transition-all ease-in placeholder:text-gray-800 focus:rounded-lg focus:outline-2 focus:outline-offset-0 focus:outline-emerald-500 md:text-lg"
            />

            <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="rounded-lg border-none bg-gray-100 p-4 text-base font-normal text-black outline-none transition-all ease-in placeholder:text-gray-800 focus:rounded-lg focus:outline-2 focus:outline-offset-0 focus:outline-emerald-500 md:text-lg"
            />

            <textarea
                rows={5}
                placeholder="Write your message..."
                name="message"
                required
                className="font-ps col-span-2 row-span-3 resize-none rounded-lg border-none bg-gray-100 p-4 text-base font-normal text-black outline-none transition-all ease-in placeholder:text-gray-800 focus:rounded-lg focus:outline-2 focus:outline-offset-0 focus:outline-emerald-500 md:text-lg"
            />

            <Button styles="bg-emerald-500 hover:bg-emerald-600 text-white">
                Submit
            </Button>
        </form>
    </div>
);
