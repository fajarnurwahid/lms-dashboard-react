import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
    return (
        <div className="bg-white dark:bg-neutral-900 rounded-lg shadow">
            <div className="py-3 px-4 flex items-center justify-between space-x-2 border-b border-b-neutral-100">
                <p className="font-medium">Cart items</p>
                <span className="h-5 px-2 rounded bg-indigo-100 text-indigo-600 flex items-center text-xs font-medium">
                    5
                </span>
            </div>
            <div className="divide-y divide-neutral-100 max-h-72 overflow-y-auto">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="py-3 px-4 border-t border-t-neutral-100">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-neutral-600">Total</p>
                    <p className="font-medium text-lg">$363</p>
                </div>
                <Link
                    to="/dashboard"
                    className="h-8 px-4 flex items-center justify-center text-center bg-indigo-600 text-white rounded-md hover:bg-indigo-500 active:bg-indigo-700 transition-colors text-sm"
                >
                    Proceed to checkout
                </Link>
            </div>
        </div>
    );
}
