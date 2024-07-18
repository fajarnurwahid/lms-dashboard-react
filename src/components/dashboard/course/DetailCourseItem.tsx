import { ChevronRight, Video, File } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type DetailCourseItemProps = {
    children: React.ReactNode;
};
type DetailCourseItemTriggerProps = {
    label: string;
    duration: string;
    lesson: number;
};
type DetailCourseItemLessonItemProps = {
    type?: "video" | "file";
    title: string;
    duration: string;
    hasPreview?: boolean;
    previewLink?: string;
};

export function DetailCourseItem({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement> & DetailCourseItemProps) {
    return (
        <div
            className={twMerge("group/lesson-section", className)}
            data-lesson-section
            {...props}
        >
            {children}
        </div>
    );
}

export function DetailCourseItemTrigger({
    label,
    duration,
    lesson,
}: DetailCourseItemTriggerProps) {
    function handleTriggerClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        e.currentTarget
            .closest("[data-lesson-section]")
            ?.classList.toggle("active");
    }

    return (
        <button
            type="button"
            className="w-full text-left bg-neutral-50 dark:bg-neutral-950 px-4 md:px-6 flex items-center h-10"
            onClick={handleTriggerClick}
        >
            <ChevronRight
                size={16}
                className="mr-2 flex-shrink-0 group-[.active]/lesson-section:rotate-90"
            />
            <span className="font-semibold min-w-0 truncate mr-2">{label}</span>
            <span className="text-xs text-neutral-700 dark:text-neutral-300 ml-auto">
                {lesson} lesson{lesson > 1 && "s"} • {duration}
            </span>
        </button>
    );
}

export function DetailCourseItemLesson({ children }: DetailCourseItemProps) {
    return (
        <div className="px-4 md:px-6 py-4 hidden group-[.active]/lesson-section:block">
            <div className="ml-6 space-y-3">{children}</div>
        </div>
    );
}

export function DetailCourseItemLessonItem({
    type = "video",
    title,
    duration,
    hasPreview = false,
    previewLink = "/",
}: DetailCourseItemLessonItemProps) {
    return (
        <div className="flex items-center">
            {type === "file" ? (
                <File
                    size={16}
                    className="mr-3 text-neutral-500 flex-shrink-0"
                />
            ) : (
                <Video
                    size={16}
                    className="mr-3 text-neutral-500 flex-shrink-0"
                />
            )}
            <p className="text-sm text-neutral-700 dark:text-neutral-300 font-medium truncate min-w-0 mr-4">
                {title}
            </p>
            <div className="flex items-center space-x-4 ml-auto">
                {hasPreview && (
                    <Link
                        to={previewLink}
                        className="text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                    >
                        Preview
                    </Link>
                )}
                <span className="text-xs text-neutral-700 dark:text-neutral-300 ml-auto">
                    {duration}
                </span>
            </div>
        </div>
    );
}
