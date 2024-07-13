import { twMerge } from "tailwind-merge";

export default function Input({
    className,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={twMerge(
                "h-10 rounded-lg px-4 text-sm border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 w-full outline-none focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-4 focus:ring-indigo-600/20 dark:focus:ring-indigo-400/20 transition-colors",
                className
            )}
            {...props}
        />
    );
}
