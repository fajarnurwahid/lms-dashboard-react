import { Star } from "lucide-react";

type DetailCourseRatingItemProps = {
    progress: string;
    star: number;
    total: number;
};

export default function DetailCourseRatingItem({
    progress,
    star,
    total,
}: DetailCourseRatingItemProps) {
    return (
        <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 flex-shrink-0">
                <span className="text-xs font-semibold">{star}</span>
                <Star
                    size={12}
                    className="text-neutral-900 fill-neutral-900 dark:text-neutral-100 dark:fill-neutral-100"
                />
            </div>
            <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-800">
                <div
                    className="h-full bg-neutral-500"
                    style={{
                        width: progress,
                    }}
                ></div>
            </div>
            <p className="flex-shrink-0 text-neutral-500 text-xs w-12 text-right">
                ({total.toLocaleString()})
            </p>
        </div>
    );
}
