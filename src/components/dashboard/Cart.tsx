import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
    return (
        <div className="bg-white dark:bg-neutral-900 rounded-lg shadow dark:shadow-white/10">
            <div className="py-3 px-4 flex items-center justify-between space-x-2 border-b border-b-neutral-100 dark:border-b-neutral-800">
                <p className="font-medium">Cart items</p>
                <span className="h-5 px-2 rounded bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 flex items-center text-xs font-medium">
                    5
                </span>
            </div>
            <div className="divide-y divide-neutral-100 dark:divide-neutral-800 max-h-72 overflow-y-auto">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="py-3 px-4 border-t border-t-neutral-100 dark:border-t-neutral-800">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-neutral-500">Total</p>
                    <p className="font-medium text-lg">$363</p>
                </div>
                <Link to="/dashboard" className="btn btn-sm btn-primary w-full">
                    Proceed to checkout
                </Link>
            </div>
        </div>
    );
}
