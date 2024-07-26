import { Link } from "react-router-dom";
import { Home, GraduationCap, User2, Lock } from "lucide-react";
import {
    SidebarLinkList,
    SidebarLinkItem,
    SidebarSubLinkList,
    SidebarSubLinkItem,
    SidebarLinkItemIcon,
} from "./SidebarLink";
import useSidebar from "../../hooks/useSidebar";
import { useLocation, matchPath } from "react-router-dom";

export default function Sidebar() {
    const { handleMouseOutAndLeave, toggleSidebar } = useSidebar();
    const location = useLocation();

    return (
        <>
            <div
                className="fixed z-40 top-0 left-0 -translate-x-full md:translate-x-0 w-64 h-full bg-indigo-950 dark:bg-neutral-900 flex flex-col transition-all group/sidebar peer/sidebar md:[&.collapsed]:w-[58px] md:[&.collapsed]:hover:w-64 [&.mobile-shown]:translate-x-0"
                data-sidebar
                onMouseLeave={handleMouseOutAndLeave}
            >
                <div className="text-center h-16 flex items-center justify-center border-b border-b-neutral-700 flex-shrink-0">
                    <Link
                        to="/dashboard"
                        className="font-black text-2xl text-neutral-100"
                    >
                        <span className="md:group-[.collapsed]/sidebar:hidden md:group-[.collapsed]/sidebar:group-hover/sidebar:inline">
                            LOGO
                        </span>
                        <span className="hidden md:group-[.collapsed]/sidebar:inline md:group-[.collapsed]/sidebar:group-hover/sidebar:hidden">
                            L
                        </span>
                    </Link>
                </div>
                <div className="py-8 px-2 overflow-y-auto min-h-0 h-full">
                    <div className="space-y-8">
                        <SidebarLinkList label="Main">
                            <SidebarLinkItem
                                to="/dashboard"
                                icon={
                                    <SidebarLinkItemIcon>
                                        <Home size={18} />
                                    </SidebarLinkItemIcon>
                                }
                                label="Analytics"
                                isActive={Boolean(
                                    matchPath(
                                        { path: "/dashboard", end: true },
                                        location.pathname
                                    )
                                )}
                            />
                            <SidebarLinkItem
                                icon={
                                    <SidebarLinkItemIcon>
                                        <GraduationCap size={18} />
                                    </SidebarLinkItemIcon>
                                }
                                label="Course"
                                isActive={location.pathname.startsWith(
                                    "/dashboard/course"
                                )}
                            >
                                <SidebarSubLinkList>
                                    <SidebarSubLinkItem
                                        to="/dashboard/course/search"
                                        label="Search course"
                                        isActive={Boolean(
                                            matchPath(
                                                {
                                                    path: "/dashboard/course/search",
                                                    end: true,
                                                },
                                                location.pathname
                                            )
                                        )}
                                    />
                                    <SidebarSubLinkItem
                                        to="/dashboard/course/detail"
                                        label="Course details"
                                        isActive={Boolean(
                                            matchPath(
                                                {
                                                    path: "/dashboard/course/detail",
                                                    end: true,
                                                },
                                                location.pathname
                                            )
                                        )}
                                    />
                                </SidebarSubLinkList>
                            </SidebarLinkItem>
                            <SidebarLinkItem
                                icon={
                                    <SidebarLinkItemIcon>
                                        <User2 size={18} />
                                    </SidebarLinkItemIcon>
                                }
                                label="My account"
                                isActive={Boolean(
                                    matchPath(
                                        {
                                            path: "/dashboard/profile",
                                            end: true,
                                        },
                                        location.pathname
                                    ) ||
                                        location.pathname.includes(
                                            "/dashboard/settings"
                                        )
                                )}
                            >
                                <SidebarSubLinkList>
                                    <SidebarSubLinkItem
                                        to="/dashboard/profile"
                                        label="Profile"
                                        isActive={Boolean(
                                            matchPath(
                                                {
                                                    path: "/dashboard/profile",
                                                    end: true,
                                                },
                                                location.pathname
                                            )
                                        )}
                                    />
                                    <SidebarSubLinkItem
                                        to="/dashboard/settings/profile"
                                        label="Settings"
                                        isActive={location.pathname.includes(
                                            "/dashboard/settings"
                                        )}
                                    />
                                </SidebarSubLinkList>
                            </SidebarLinkItem>
                        </SidebarLinkList>
                        <SidebarLinkList label="Pages">
                            <SidebarLinkItem
                                icon={
                                    <SidebarLinkItemIcon>
                                        <Lock size={18} />
                                    </SidebarLinkItemIcon>
                                }
                                label="Authentication"
                            >
                                <SidebarSubLinkList>
                                    <SidebarSubLinkItem
                                        to="/login"
                                        label="Login"
                                    />
                                    <SidebarSubLinkItem
                                        to="/signup"
                                        label="Register"
                                    />
                                    <SidebarSubLinkItem
                                        to="/forgot-password"
                                        label="Forgot password"
                                    />
                                    <SidebarSubLinkItem
                                        to="/reset-password"
                                        label="Reset password"
                                    />
                                </SidebarSubLinkList>
                            </SidebarLinkItem>
                        </SidebarLinkList>
                    </div>
                </div>
            </div>
            <div
                className="fixed top-0 left-0 w-full h-full md:hidden bg-black/50 z-30 opacity-0 invisible peer-[.mobile-shown]/sidebar:opacity-100 peer-[.mobile-shown]/sidebar:visible"
                onClick={toggleSidebar}
            ></div>
        </>
    );
}
