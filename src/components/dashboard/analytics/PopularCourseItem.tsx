import { Td } from "../Table";
import { Link } from "react-router-dom";

type PopularCourseItemProps = {
    to: string;
    title: string;
    trainer: {
        name: string;
        image: string;
    };
    publishedOn: string;
    enrolled: string;
    price: string;
};

export default function PopularCourseItem({
    to,
    title,
    trainer: { name, image },
    publishedOn,
    enrolled,
    price,
}: PopularCourseItemProps) {
    return (
        <tr>
            <Td>
                <Link
                    to={to}
                    className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold hover:underline"
                >
                    {title}
                </Link>
            </Td>
            <Td>
                <Link to="/" className="flex items-center space-x-2">
                    <img
                        src={image}
                        alt=""
                        className="w-6 h-6 object-cover rounded-full flex-shrink-0"
                    />
                    <span className="font-semibold text-sm">{name}</span>
                </Link>
            </Td>
            <Td className="text-right">
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    {publishedOn}
                </span>
            </Td>
            <Td className="text-right">
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    {enrolled}
                </span>
            </Td>
            <Td className="text-right">
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    {price}
                </span>
            </Td>
        </tr>
    );
}
