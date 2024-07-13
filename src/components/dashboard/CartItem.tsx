import { Trash } from "lucide-react";

export default function CartItem() {
    return (
        <div className="flex items-center justify-between py-2 px-4 space-x-2 hover:bg-neutral-100 dark:hover:bg-neutral-950">
            <div className="flex items-center space-x-2 min-w-0">
                <img
                    src="https://github.com/shadcn.png"
                    alt=""
                    className="w-10 h-10 rounded object-cover"
                />
                <div className="min-w-0">
                    <p className="font-medium text-sm truncate mb-0.5">
                        Smart Watch
                    </p>
                    <p className="text-xs text-neutral-500 truncate">
                        Qty: 1, Color:{" "}
                        <span className="font-medium text-indigo-600 dark:text-indigo-400">
                            Indigo
                        </span>
                    </p>
                </div>
            </div>
            <div className="text-right">
                <button
                    type="button"
                    className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                >
                    <Trash size={14} />
                </button>
                <p>
                    <span className="font-medium text-sm">$43</span>{" "}
                    <span className="text-neutral-500 text-xs line-through">
                        $87
                    </span>
                </p>
            </div>
        </div>
    );
}
