import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

type NavbarButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

function NavbarButton(
    { children, className, ...props }: NavbarButtonProps,
    ref: any
) {
    return (
        <button
            type="button"
            className={twMerge(
                "w-8 h-8 rounded-full flex items-center justify-center text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-300 bg-white dark:bg-neutral-900 dark:hover:bg-neutral-950 shadow hover:bg-neutral-200",
                className
            )}
            {...props}
            ref={ref}
        >
            {children}
        </button>
    );
}

export default forwardRef<HTMLButtonElement, NavbarButtonProps>(NavbarButton);
