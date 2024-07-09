import { twMerge } from "tailwind-merge";

type CardProps = {
    children: React.ReactNode;
    className?: string;
};

export function Card({ children, className }: CardProps) {
    return (
        <div
            className={twMerge(
                "bg-white dark:bg-neutral-900 rounded-lg shadow",
                className
            )}
        >
            {children}
        </div>
    );
}

export function CardHeader({ children, className }: CardProps) {
    return (
        <div
            className={twMerge(
                "px-4 md:px-6 py-3 border-b border-b-neutral-100 dark:border-b-neutral-800 bg-neutral-50 rounded-tl-lg rounded-tr-lg dark:bg-neutral-900",
                className
            )}
        >
            {children}
        </div>
    );
}

export function CardBody({ children, className }: CardProps) {
    return <div className={twMerge("p-4 md:px-6", className)}>{children}</div>;
}
