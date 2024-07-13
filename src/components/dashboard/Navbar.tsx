import {
    Menu,
    Search,
    Moon,
    Sun,
    ShoppingCart,
    User2Icon,
    Settings2,
    LogOut,
} from "lucide-react";
import NavbarSearchForm from "./NavbarSearchForm";
import NavbarButton from "./NavbarButton";
import useSidebar from "../../hooks/useSidebar";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/Popover";
import { Link } from "react-router-dom";
import useTheme from "../../contexts/ThemeContext";
import Cart from "./Cart";

export default function Navbar() {
    const { toggleSidebar } = useSidebar();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    return (
        <div className="h-16 backdrop-blur sticky top-0 left-0 z-10 px-4 flex items-center">
            <button
                type="button"
                className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                onClick={toggleSidebar}
            >
                <Menu size={20} className="mr-4 sm:mr-6" />
            </button>
            <NavbarSearchForm
                isOpen={isSearchOpen}
                setIsOpen={setIsSearchOpen}
            />
            <div
                className={twMerge(
                    "ml-auto flex sm:flex items-center space-x-4",
                    isSearchOpen && "hidden"
                )}
            >
                <NavbarButton
                    className="hidden sm:flex sm:items-center sm:justify-center"
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                >
                    {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
                </NavbarButton>
                <NavbarButton
                    className="sm:hidden"
                    onClick={() => setIsSearchOpen(true)}
                >
                    <Search size={14} />
                </NavbarButton>
                <Popover>
                    <PopoverTrigger asChild>
                        <NavbarButton className="relative">
                            <ShoppingCart size={14} />
                            <span className="animate-ping absolute -top-1 -right-1 w-4 h-4 rounded-full bg-indigo-600 opacity-75"></span>
                            <span className="absolute -top-1 -right-1 bg-indigo-600 text-neutral-100 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold">
                                3
                            </span>
                        </NavbarButton>
                    </PopoverTrigger>
                    <PopoverContent className="z-30 max-w-80 w-[calc(100%-32px)]">
                        <Cart />
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger asChild>
                        <button
                            type="button"
                            className="w-8 h-8 rounded-full bg-white shadow hover:bg-neutral-200 overflow-hidden border border-white dark:border-neutral-900"
                        >
                            <img
                                src="https://github.com/shadcn.png"
                                alt=""
                                className="w-full h-full block"
                            />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="z-30 w-40">
                        <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-1 space-y-1">
                            <Link
                                to="/profile"
                                className="flex items-center space-x-3 h-8 px-3 text-sm hover:bg-indigo-50 dark:hover:bg-neutral-950 rounded-md text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-100 hover:text-indigo-600"
                            >
                                <User2Icon size={16} />
                                <span>Profile</span>
                            </Link>
                            <Link
                                to="/settings"
                                className="flex items-center space-x-3 h-8 px-3 text-sm hover:bg-indigo-50 dark:hover:bg-neutral-950 rounded-md text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-100 hover:text-indigo-600"
                            >
                                <Settings2 size={16} />
                                <span>Settings</span>
                            </Link>
                            <Link
                                to="/logout"
                                className="flex items-center space-x-3 h-8 px-3 text-sm hover:bg-indigo-50 dark:hover:bg-neutral-950 rounded-md text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-100 hover:text-indigo-600"
                            >
                                <LogOut size={16} />
                                <span>Logout</span>
                            </Link>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}
