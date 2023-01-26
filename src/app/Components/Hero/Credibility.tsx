import { creds } from "data";
import { BsCheckCircleFill } from "react-icons/bs";

export const Credibility = () => (
    <div className="grid grid-cols-2 gap-2">
        {creds.map((cred) => (
            <div className="flex items-center space-x-4" key={cred}>
                <span className="text-emerald-500 text-xl">
                    <BsCheckCircleFill />
                </span>
                <p className="text-lg font-medium text-gray-500">{cred}</p>
            </div>
        ))}
    </div>
);
