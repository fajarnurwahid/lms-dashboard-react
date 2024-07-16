import { Link } from "react-router-dom";
import { ChevronRight, Lock } from "lucide-react";

type DetailLessonItemProps = {
    title: string;
    link: string;
    description: string;
    isLocked?: boolean;
};

export default function DetailLessonItem({
    title,
    link,
    description,
    isLocked = true,
}: DetailLessonItemProps) {
    return (
        <div className="flex items-center justify-between space-x-4 py-3">
            <div className="flex items-center space-x-4">
                <img
                    src="https://github.com/shadcn.png"
                    alt=""
                    className="w-16 h-16 object-cover block rounded"
                />
                <div>
                    <Link
                        to={link}
                        className="text-lg leading-tight font-semibold text-indigo-600 hover:underline inline-block mb-1"
                    >
                        {title}
                    </Link>
                    <p className="text-neutral-500 text-sm line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>
            <div className="flex-shrink-0">
                {isLocked ? (
                    <Lock size={16} className="text-neutral-500" />
                ) : (
                    <Link to="/" className="btn btn-primary btn-sm space-x-1">
                        <span>Start</span>
                        <ChevronRight size={14} />
                    </Link>
                )}
            </div>
        </div>
    );
}
