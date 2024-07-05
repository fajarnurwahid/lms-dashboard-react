export default function useSidebar() {
    function handleMouseOutAndLeave(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault();
        const sidebar = e.currentTarget;
        if (
            sidebar.classList.contains("collapsed") &&
            window.innerWidth >= 768
        ) {
            collapseMenus();
        }
    }
    function collapseMenus() {
        document
            .querySelectorAll(".sidebar-link-item")
            .forEach(function (item) {
                item.classList.remove("extended");
            });
    }
    function toggleSidebar(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault();
        const sidebar = document.querySelector("[data-sidebar]");
        if (sidebar) {
            sidebar.classList.toggle("collapsed");
            sidebar.classList.toggle("mobile-shown");
            collapseMenus();
        }
    }
    return {
        handleMouseOutAndLeave,
        collapseMenus,
        toggleSidebar,
    };
}
