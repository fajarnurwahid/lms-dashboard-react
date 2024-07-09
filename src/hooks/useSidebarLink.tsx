export default function useSidebarLink() {
    function handleSidebarLinkClick(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault();
        const parent = e.currentTarget.closest("ul");
        if (parent?.hasAttribute("data-sidebar-link-list")) {
            document
                .querySelectorAll("[data-sidebar-link-list] li")
                .forEach(function (item) {
                    if (item !== e.currentTarget.parentElement) {
                        item.classList.remove("extended");
                    } else {
                        item.classList.toggle("extended");
                    }
                });
        } else {
            parent?.querySelectorAll("li").forEach(function (item) {
                if (item !== e.currentTarget.parentElement) {
                    item.classList.remove("extended");
                } else {
                    item.classList.toggle("extended");
                }
            });
        }
    }

    return {
        handleSidebarLinkClick,
    };
}
