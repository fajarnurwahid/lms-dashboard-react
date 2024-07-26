import { Link, LinkProps } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type NavigationProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};
type NavigationItemProps = LinkProps & {
    children: React.ReactNode;
    isActive?: boolean;
};

export function Navigation({ children, className, ...props }: NavigationProps) {
    return (
        <div
            className={twMerge(
                "flex items-center overflow-x-auto px-4 md:px-6",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function NavigationItem({
    children,
    className,
    isActive = false,
    ...props
}: NavigationItemProps) {
    return (
        <Link
            className={twMerge(
                "pb-2 font-semibold text-neutral-500 px-4 border-b-2 border-b-transparent hover:text-neutral-700 dark:hover:text-neutral-300 text-sm whitespace-nowrap [&.active]:text-indigo-600 dark:[&.active]:text-indigo-400 [&.active]:border-b-indigo-500",
                className,
                isActive && "active"
            )}
            {...props}
        >
            {children}
        </Link>
    );
}
