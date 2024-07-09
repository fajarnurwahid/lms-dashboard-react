import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
import useSidebarLink from "../../hooks/useSidebarLink";

type SidebarLinkListBaseProps = {
    children: React.ReactNode;
    className?: string;
};
type SidebarLinkListProps = SidebarLinkListBaseProps & {
    label?: string;
};
type SidebarLinkItemBaseProps = {
    to?: string;
    children?: React.ReactNode;
    label: string;
    isActive?: boolean;
};
type SidebarLinkItemProps = SidebarLinkItemBaseProps & {
    icon: React.ReactNode;
};
type SidebarLinkItemIconProps = {
    children: React.ReactNode;
};

export function SidebarLinkList({
    children,
    label,
    className,
}: SidebarLinkListProps) {
    return (
        <div className={twMerge(className)}>
            {label && (
                <div className="text-xs text-white/50 font-semibold mb-3 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-full before:h-0 before:border-b before:border-white/10 min-h-4 md:group-[.collapsed]/sidebar:before:hidden md:group-[.collapsed]/sidebar:group-hover/sidebar:before:block truncate">
                    <span className="inline-block px-3 bg-indigo-950 dark:bg-neutral-900 relative md:group-[.collapsed]/sidebar:hidden md:group-[.collapsed]/sidebar:group-hover/sidebar:inline-block">
                        {label}
                    </span>
                    <span className="w-1.5 h-0 border-b border-b-white/30 mx-auto hidden mt-2 md:group-[.collapsed]/sidebar:block md:group-[.collapsed]/sidebar:group-hover/sidebar:hidden"></span>
                </div>
            )}
            <ul className="space-y-2" data-sidebar-link-list>
                {children}
            </ul>
        </div>
    );
}

export function SidebarLinkItem({
    to,
    children,
    icon,
    label,
    isActive = false,
}: SidebarLinkItemProps) {
    const { handleSidebarLinkClick } = useSidebarLink();

    return (
        <li
            className={twMerge(
                "sidebar-link-item",
                isActive && "active extended"
            )}
        >
            {to ? (
                <Link
                    to={to}
                    className="flex items-center px-3 h-9 rounded-lg space-x-2 hover:bg-white/10 text-white/60 hover:text-white sidebar-link-item-link"
                >
                    {icon}
                    <span className="font-semibold text-sm min-w-0 truncate">
                        {label}
                    </span>
                    {children && (
                        <ChevronRight
                            size={16}
                            className="!ml-auto sidebar-link-item-chevron"
                        />
                    )}
                </Link>
            ) : (
                <button
                    type="button"
                    className="flex items-center px-3 h-9 rounded-lg space-x-2 hover:bg-white/10 text-white/60 hover:text-white w-full text-left sidebar-link-item-link"
                    onClick={(e) => handleSidebarLinkClick(e)}
                >
                    {icon}
                    <span className="font-semibold text-sm min-w-0 truncate">
                        {label}
                    </span>
                    {children && (
                        <ChevronRight
                            size={16}
                            className="!ml-auto sidebar-link-item-chevron"
                        />
                    )}
                </button>
            )}
            {children}
        </li>
    );
}

export function SidebarSubLinkList({
    className,
    children,
}: SidebarLinkListBaseProps) {
    return (
        <ul
            className={twMerge(
                "space-y-1 ml-5 mt-1 hidden sidebar-link-item-menu",
                className
            )}
        >
            {children}
        </ul>
    );
}

export function SidebarSubLinkItem({
    to,
    children,
    label,
    isActive = false,
}: SidebarLinkItemBaseProps) {
    const { handleSidebarLinkClick } = useSidebarLink();

    return (
        <li
            className={twMerge(
                "sidebar-link-item",
                isActive && "active extended"
            )}
        >
            {to ? (
                <Link
                    to={to}
                    className="flex items-center px-3 h-8 rounded-lg hover:bg-white/10 text-white/60 hover:text-white before:w-1.5 before:h-0 before:rounded-full before:border-b before:border-white/30 before:bg-white/10 before:mr-3 text-xs hover:before:border-white sidebar-link-item-sublink"
                >
                    <span className="font-semibold text-sm min-w-0 truncate">
                        {label}
                    </span>
                    {children && (
                        <ChevronRight
                            size={16}
                            className="ml-auto sidebar-link-item-chevron"
                        />
                    )}
                </Link>
            ) : (
                <button
                    type="button"
                    className="flex items-center px-3 h-8 rounded-lg hover:bg-white/10 text-white/60 hover:text-white w-full text-left before:w-1.5 before:h-0 before:rounded-full before:border-b before:border-white/30 before:bg-white/10 before:mr-3 text-xs hover:before:border-white sidebar-link-item-sublink"
                    onClick={(e) => handleSidebarLinkClick(e)}
                >
                    <span className="font-semibold text-sm min-w-0 truncate">
                        {label}
                    </span>
                    {children && (
                        <ChevronRight
                            size={16}
                            className="ml-auto sidebar-link-item-chevron"
                        />
                    )}
                </button>
            )}
            {children}
        </li>
    );
}

export function SidebarLinkItemIcon({ children }: SidebarLinkItemIconProps) {
    return <span className="flex-shrink-0">{children}</span>;
}
