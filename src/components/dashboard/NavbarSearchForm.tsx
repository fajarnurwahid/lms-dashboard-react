import { ArrowLeft, Search } from "lucide-react";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

type NavbarSearchFormProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavbarSearchForm({
    isOpen,
    setIsOpen,
}: NavbarSearchFormProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        isOpen && inputRef.current?.focus();
    }, [isOpen]);

    return (
        <form
            className={twMerge(
                "sm:max-w-56 w-full relative transition-all sm:focus-within:max-w-72 hidden sm:block",
                isOpen && "block"
            )}
        >
            <button
                type="button"
                className="text-neutral-400 dark:text-neutral-500 absolute top-1/2 -translate-y-1/2 left-0 hover:text-gray-700 dark:hover:text-neutral-300 h-8 w-8 flex items-center justify-center sm:hidden"
                onClick={() => setIsOpen(false)}
            >
                <ArrowLeft size={16} />
            </button>
            <input
                type="text"
                className="bg-white dark:bg-neutral-900 dark:text-neutral-100 rounded-md shadow h-8 pl-8 sm:pl-3 pr-8 outline-none text-sm w-full"
                placeholder="Search..."
                ref={inputRef}
            />
            <button
                type="submit"
                className="text-neutral-400 dark:text-neutral-500 absolute top-1/2 -translate-y-1/2 right-0 hover:text-gray-700 dark:hover:text-neutral-300 h-8 w-8 flex items-center justify-center"
            >
                <Search size={16} />
            </button>
        </form>
    );
}
