import { ArrowDown, ArrowUp } from "lucide-react";
import { twMerge } from "tailwind-merge";

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

export default function OverviewItem({
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
            <p className="mb-3 text-sm text-neutral-700 dark:text-neutral-300">
                {label}
            </p>
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
