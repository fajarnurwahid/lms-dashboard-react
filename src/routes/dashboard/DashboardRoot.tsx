import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../../contexts/ThemeContext";

export default function DashboardRoot() {
    return (
        <ThemeProvider>
            <Sidebar />
            <div className="md:ml-64 min-h-screen bg-neutral-100 dark:bg-neutral-800 md:peer-[.collapsed]/sidebar:ml-[58px] transition-all">
                <Navbar />
                <Outlet />
            </div>
        </ThemeProvider>
    );
}
