import { twMerge } from "tailwind-merge";

type PayoutItemProps = {
    icon: React.ReactNode;
    label: string;
    value: string;
    theme: "primary" | "warning";
};

export default function PayoutItem({
    icon,
    label,
    value,
    theme,
}: PayoutItemProps) {
    return (
        <div className="flex items-center space-x-3">
            <div
                className={twMerge(
                    "w-8 h-8 rounded flex items-center justify-center flex-shrink-0",
                    theme === "primary"
                        ? "bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 dark:bg-indigo-400/20"
                        : "bg-orange-600/20 text-orange-600 dark:text-orange-400 dark:bg-orange-400/20"
                )}
            >
                {icon}
            </div>
            <div>
                <p className="text-xs mb-0.5 text-neutral-700 dark:text-neutral-300">
                    {label}
                </p>
                <p className="font-medium">{value}</p>
            </div>
        </div>
    );
}
