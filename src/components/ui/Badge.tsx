import { twMerge } from "tailwind-merge";

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};

export default function Badge({ children, className, ...props }: BadgeProps) {
    return (
        <div
            className={twMerge(
                "flex items-center space-x-2 text-xs font-medium h-6 px-3 rounded-full bg-neutral-100 dark:bg-neutral-950",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
