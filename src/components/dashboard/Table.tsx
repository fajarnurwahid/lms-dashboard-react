import { twMerge } from "tailwind-merge";

type TableProps = {
    children: React.ReactNode;
    className?: string;
};

export function Table({ children, className }: TableProps) {
    return (
        <table className={twMerge("w-full min-w-[540px]", className)}>
            {children}
        </table>
    );
}

export function Th({ children, className }: TableProps) {
    return (
        <th
            className={twMerge(
                "py-4 border-b border-b-neutral-100 font-bold text-neutral-500 text-xs tracking-wide text-left uppercase",
                className
            )}
        >
            {children}
        </th>
    );
}

export function Td({ children, className }: TableProps) {
    return (
        <td
            className={twMerge("py-3 border-b border-b-neutral-100", className)}
        >
            {children}
        </td>
    );
}
