import { twMerge, twJoin } from "tailwind-merge";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    children: React.ReactNode;
};

export default function Select({ children, className, ...props }: SelectProps) {
    return (
        <select
            className={twJoin(
                "appearance-none bg-select-dark dark:bg-select-light bg-no-repeat bg-[length:16px_16px] bg-[right_16px_center]",
                twMerge(
                    "h-10 rounded-lg pl-4 pr-10 text-sm border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 w-full outline-none focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-4 focus:ring-indigo-600/20 dark:focus:ring-indigo-400/20 transition-colors",
                    className
                )
            )}
            {...props}
        >
            {children}
        </select>
    );
}
