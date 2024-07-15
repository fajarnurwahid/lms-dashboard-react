import { Link } from "react-router-dom";
import { Card } from "../ui/Card";
import { Star, User2, ShoppingCart, Heart } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/Tooltip";
import { useSearchCourse } from "./SearchCourse";
import { twMerge } from "tailwind-merge";

type SearchCourseItemProps = {
    image: string;
    link: string;
    author: {
        name: string;
        link: string;
    };
    rating: number;
    title: string;
    price: {
        current: number;
        old?: number;
    };
    learners: number;
};

export default function SearchCourseItem({
    image,
    link,
    author,
    rating,
    title,
    price,
    learners,
}: SearchCourseItemProps) {
    const { type } = useSearchCourse();

    return (
        <Card
            className={twMerge("overflow-hidden", type === "list" && "sm:flex")}
        >
            <Link
                to={link}
                className={twMerge(type === "list" && "flex-shrink-0")}
            >
                <img
                    src={image}
                    alt={`Course: ${title}`}
                    className={twMerge(
                        "w-full h-48 object-cover",
                        type === "list" && "sm:w-48 sm:h-44"
                    )}
                />
            </Link>
            <div className="p-4 flex flex-col w-full">
                <div className="flex items-center justify-between mb-1">
                    <Link
                        to={author.link}
                        className="text-sm font-medium text-indigo-600 dark:text-indigo-400"
                    >
                        {author.name}
                    </Link>
                    <div className="flex items-center space-x-1">
                        <p className="font-semibold text-xs text-orange-600 dark:text-orange-400">
                            {rating}
                        </p>
                        <Star
                            size={12}
                            className="fill-orange-400 text-orange-400"
                        />
                    </div>
                </div>
                <p className="leading-tight line-clamp-2 mb-2">
                    <Link to={link} className="font-semibold leading-tight">
                        {title}
                    </Link>
                </p>
                <div className="flex items-center space-x-2 mb-1">
                    <p className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                        ${price.current}
                    </p>
                    {price.old && (
                        <p className="text-xs text-neutral-500 line-through">
                            $234
                        </p>
                    )}
                </div>
                <div className="flex items-center justify-between space-x-2 mt-auto">
                    <div className="flex items-center space-x-1 text-neutral-500 text-xs">
                        <User2 size={12} />
                        <span>{learners}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    type="button"
                                    className="h-9 w-9 flex items-center justify-center bg-neutral-600/10 dark:bg-neutral-400/10 border border-neutral-600/10 dark:border-neutral-400/10 text-neutral-500 text-sm font-medium rounded-full hover:bg-indigo-500 hover:border-indigo-500 dark:hover:bg-indigo-500 dark:hover:border-indigo-500 hover:text-neutral-100 dark:hover:text-neutral-100 transition-colors"
                                >
                                    <Heart size={16} />
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Add to whislist</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    type="button"
                                    className="h-9 w-9 flex items-center justify-center bg-indigo-600/20 dark:bg-indigo-400/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium rounded-full hover:bg-indigo-500 dark:hover:bg-indigo-500 hover:text-neutral-100 dark:hover:text-neutral-100 transition-colors"
                                >
                                    <ShoppingCart size={16} />
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Add to cart</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </Card>
    );
}
