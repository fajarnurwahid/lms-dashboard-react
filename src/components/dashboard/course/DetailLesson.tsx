import { twMerge } from "tailwind-merge";

type DetailLessonProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};

export default function DetailLesson({
    children,
    className,
    ...props
}: DetailLessonProps) {
    return (
        <div
            className={twMerge("divide-y divide-neutral-100", className)}
            {...props}
        >
            {children}
        </div>
    );
}
