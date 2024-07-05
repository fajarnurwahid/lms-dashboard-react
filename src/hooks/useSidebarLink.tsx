export default function useSidebarLink() {
    function handleSidebarLinkClick(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault();
        e.currentTarget
            .closest("ul")
            ?.querySelectorAll("li")
            .forEach(function (item) {
                if (item !== e.currentTarget.parentElement) {
                    item.classList.remove("extended");
                } else {
                    item.classList.toggle("extended");
                }
            });
    }

    return {
        handleSidebarLinkClick,
    };
}
