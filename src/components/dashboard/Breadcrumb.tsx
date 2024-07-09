import { twMerge } from "tailwind-merge";
import { Link, LinkProps } from "react-router-dom";

type BreadcrumbProps = {
    children: React.ReactNode;
    className?: string;
};
type BreadcrumbLinkProps = LinkProps & {
    children: React.ReactNode;
};

export function Breadcrumb({ children, className }: BreadcrumbProps) {
    return (
        <div
            className={twMerge(
                "flex items-center flex-wrap space-x-2 space-y-1 -ml-2",
                className
            )}
        >
            {children}
        </div>
    );
}

export function BreadcrumbLink({ children, ...props }: BreadcrumbLinkProps) {
    return (
        <Link
            {...props}
            className="text-indigo-600 dark:text-indigo-400 text-sm hover:underline first:ml-2"
        >
            {children}
        </Link>
    );
}

export function BreadcrumbActive({ children }: { children: React.ReactNode }) {
    return <span className="text-sm first:ml-2">{children}</span>;
}

export function BreadcrumbDivider() {
    return (
        <span className="text-neutral-500 dark:text-neutral-400 text-sm first:ml-2">
            /
        </span>
    );
}
