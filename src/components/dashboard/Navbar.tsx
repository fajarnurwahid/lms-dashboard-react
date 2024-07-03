import { Menu, Search, Moon, ShoppingCart } from "lucide-react";
import useSidebar from "../../hooks/useSidebar";

export default function Navbar() {
    const { toggleSidebar } = useSidebar();

    return (
        <div className="h-16 bg-neutral-100 px-4 flex items-center">
            <button
                type="button"
                className="text-neutral-500 hover:text-neutral-700"
                onClick={toggleSidebar}
            >
                <Menu size={20} className="mr-6" />
            </button>
            <form className="max-w-56 w-full relative transition-all focus-within:max-w-72">
                <input
                    type="text"
                    className="bg-white rounded-md shadow h-8 pl-3 pr-10 outline-none text-sm w-full"
                    placeholder="Search..."
                />
                <button
                    type="submit"
                    className="text-neutral-400 absolute top-1/2 -translate-y-1/2 right-0 hover:text-gray-700 h-8 w-8 flex items-center justify-center"
                >
                    <Search size={16} />
                </button>
            </form>
            <div className="ml-auto flex items-center space-x-4">
                <button
                    type="button"
                    className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-500 bg-white shadow hover:bg-neutral-200"
                >
                    <Moon size={14} />
                </button>
                <button
                    type="button"
                    className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-500 bg-white shadow hover:bg-neutral-200 relative"
                >
                    <ShoppingCart size={14} />
                    <span className="animate-ping absolute -top-1 -right-1 w-4 h-4 rounded-full bg-indigo-600 opacity-75"></span>
                    <span className="absolute -top-1 -right-1 bg-indigo-600 text-white w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold">
                        3
                    </span>
                </button>
                <button
                    type="button"
                    className="w-8 h-8 rounded-full bg-white shadow hover:bg-neutral-200 overflow-hidden border border-white"
                >
                    <img
                        src="https://github.com/shadcn.png"
                        alt=""
                        className="w-full h-full block"
                    />
                </button>
            </div>
        </div>
    );
}
