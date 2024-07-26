import { twMerge } from "tailwind-merge";

export default function Textarea({
    className,
    ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            className={twMerge(
                "rounded-lg py-2.5 px-4 text-sm border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 w-full outline-none focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-4 focus:ring-indigo-600/20 dark:focus:ring-indigo-400/20 transition-colors",
                className
            )}
            {...props}
        ></textarea>
    );
}
