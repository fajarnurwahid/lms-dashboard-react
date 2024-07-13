import { twMerge } from "tailwind-merge";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
    children: React.ReactNode;
};

export default function Label({ children, className, ...props }: LabelProps) {
    return (
        <label
            className={twMerge(
                "text-sm font-medium inline-block mb-1",
                className
            )}
            {...props}
        >
            {children}
        </label>
    );
}
