import { Check } from "lucide-react";
import { twMerge } from "tailwind-merge";

type CheckListItemProps = React.HTMLAttributes<HTMLLIElement> & {
    children: React.ReactNode;
};

export default function CheckListItem({
    children,
    className,
    ...props
}: CheckListItemProps) {
    return (
        <li className={twMerge("flex space-x-2", className)} {...props}>
            <Check size={16} className="mt-0.5 flex-shrink-0" />
            {children}
        </li>
    );
}
