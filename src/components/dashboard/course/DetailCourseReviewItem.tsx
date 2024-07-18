import { Star, ThumbsDown, ThumbsUp } from "lucide-react";

type DetailCourseReviewItemProps = {
    image: string;
    user: string;
    rating: number;
    created: string;
    review: string;
};

export default function DetailCourseReviewItem({
    image,
    user,
    rating,
    created,
    review,
}: DetailCourseReviewItemProps) {
    return (
        <div className="py-4">
            <div className="flex items-center space-x-3 mb-4">
                <img
                    src={image}
                    alt=""
                    className="w-10 h-10 rounded-full flex-shrink-0"
                />
                <div className="min-w-0">
                    <p className="font-semibold mb-1">{user}</p>
                    <div className="flex items-center space-x-2 min-w-0">
                        <div className="flex items-center space-x-1">
                            <span className="text-xs font-semibold">
                                {rating}
                            </span>
                            <Star
                                size={14}
                                className="text-orange-400 fill-orange-400"
                            />
                        </div>
                        <p className="text-neutral-500 text-xs min-w-0 truncate">
                            ({created})
                        </p>
                    </div>
                </div>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4">
                {review}
            </p>
            <div className="flex items-center space-x-2">
                <p className="text-neutral-500 text-xs">Helpful?</p>
                <button
                    type="button"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                    <ThumbsUp size={14} />
                </button>
                <button
                    type="button"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                    <ThumbsDown size={14} />
                </button>
            </div>
        </div>
    );
}
