import { twMerge } from "tailwind-merge";

type NavbarButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

export default function NavbarButton({
    children,
    className,
    ...props
}: NavbarButtonProps) {
    return (
        <button
            type="button"
            className={twMerge(
                "w-8 h-8 rounded-full flex items-center justify-center text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-300 bg-white dark:bg-neutral-900 dark:hover:bg-neutral-950 shadow hover:bg-neutral-200",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
