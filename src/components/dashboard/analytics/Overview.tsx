import { twMerge } from "tailwind-merge";
import { ArrowDown, ArrowUp } from "lucide-react";

type OverviewProps = {
    children: React.ReactNode;
    className?: string;
};
type OverviewItemProps = {
    label: string;
    value: string;
    progress: {
        isIncrease: boolean;
        value: string;
    };
    children?: React.ReactNode;
    className?: string;
};

export function Overview({ children, className }: OverviewProps) {
    return (
        <div
            className={twMerge(
                "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6",
                className
            )}
        >
            {children}
        </div>
    );
}

export function OverviewItem({
    label,
    value,
    className,
    progress: { isIncrease, value: progressValue },
    children,
}: OverviewItemProps) {
    return (
        <div
            className={twMerge(
                "relative border-l-4 rounded-lg bg-white dark:bg-neutral-900 p-6 overflow-hidden shadow",
                className
            )}
        >
            <p className="mb-3 text-sm">{label}</p>
            <p className="text-2xl font-medium mb-2 leading-tight">{value}</p>
            <div className="flex items-center space-x-2">
                <p className="text-xs text-neutral-500">This Month</p>
                <div
                    className={twMerge(
                        "flex items-center text-xs",
                        isIncrease ? "text-green-500" : "text-red-500"
                    )}
                >
                    {isIncrease ? (
                        <ArrowUp size={16} />
                    ) : (
                        <ArrowDown size={16} />
                    )}
                    <span>{progressValue}</span>
                </div>
            </div>
            {children}
        </div>
    );
}
