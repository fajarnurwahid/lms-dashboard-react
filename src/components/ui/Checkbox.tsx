import { twJoin, twMerge } from "tailwind-merge";

export default function Checkbox({
    className,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            type="checkbox"
            className={twJoin(
                "checked:bg-indigo-600",
                twMerge(
                    "w-4 h-4 rounded appearance-none border border-neutral-400 dark:border-neutral-600 checked:border-indigo-600 checked:ring-4 checked:ring-indigo-600/20 dark:checked:ring-indigo-400/20 checked:bg-checkbox checked:bg-no-repeat checked:bg-center checked:bg-[length:14px_14px] transition-colors",
                    className
                )
            )}
            {...props}
        />
    );
}
