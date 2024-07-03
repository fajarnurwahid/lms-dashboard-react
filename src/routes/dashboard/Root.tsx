import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardRoot() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64 min-h-screen bg-neutral-100 md:peer-[.collapsed]/sidebar:ml-[58px] transition-all">
                <Navbar />
                <Outlet />
            </div>
        </>
    );
}
