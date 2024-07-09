import { Wallet, X } from "lucide-react";
import PayoutItem from "./PayoutItem";
import PayoutChart from "./PayoutChart";

export default function Payout() {
    return (
        <div>
            <div className="max-w-sm mx-auto">
                <PayoutChart />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <PayoutItem
                    icon={<Wallet size={16} />}
                    label="Paid"
                    value="$4,346"
                    theme="primary"
                />
                <PayoutItem
                    icon={<X size={16} />}
                    label="Unpaid"
                    value="$142"
                    theme="warning"
                />
            </div>
        </div>
    );
}
