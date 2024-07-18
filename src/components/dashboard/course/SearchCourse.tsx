import { twMerge } from "tailwind-merge";
import { createContext, useContext } from "react";

export type SearchCourseType = "grid" | "list" | undefined;
type SearchContextType = {
    type: SearchCourseType;
};
type SearchCourseProps = React.HTMLAttributes<HTMLDivElement> & {
    type?: SearchCourseType;
    children: React.ReactNode;
};

const SearchCourseContext = createContext<SearchContextType | null>(null);

export function useSearchCourse() {
    const context = useContext(SearchCourseContext);
    if (!context) {
        throw new Error(
            "useSearchCourse must be used within a SearchCourseProvider"
        );
    }
    return context;
}

export default function SearchCourse({
    children,
    className,
    type,
    ...props
}: SearchCourseProps) {
    return (
        <SearchCourseContext.Provider
            value={{
                type,
            }}
        >
            <div
                className={twMerge(
                    type === "list"
                        ? "grid grid-cols-1 gap-4 md:gap-6"
                        : type === "grid"
                        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                        : "",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </SearchCourseContext.Provider>
    );
}
