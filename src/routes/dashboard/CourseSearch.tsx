import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import { Grid, List, Search } from "lucide-react";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "../../components/ui/Tooltip";
import SearchCourse from "../../components/dashboard/course/SearchCourse";
import SearchCourseItem from "../../components/dashboard/course/SearchCourseItem";
import { SearchCourseType } from "../../components/dashboard/course/SearchCourse";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function CourseSearch() {
    const [type, setType] = useState<SearchCourseType>("grid");

    return (
        <div className="p-4 md:p-6">
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-4 mb-4 md:mb-6">
                <form
                    action=""
                    className="sm:flex sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 justify-between mb-6"
                >
                    <div className="sm:flex sm:items-center sm:space-x-4 sm:max-w-sm sm:w-full relative">
                        <Input type="text" placeholder="Search courses..." />
                        <button
                            type="submit"
                            className="btn btn-primary w-8 h-8 sm:h-10 px-0 sm:px-4 sm:w-auto flex-shrink-0 absolute sm:static top-1 right-1"
                        >
                            <span className="hidden sm:block">Search</span>
                            <Search size={16} className="sm:hidden" />
                        </button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Select className="w-32">
                            <option value="">Sort By</option>
                        </Select>
                    </div>
                </form>
                <div className="flex items-end justify-between space-x-4">
                    <div>
                        <h1 className="text-lg font-medium mb-1">
                            All Courses
                        </h1>
                        <p className="text-neutral-500 text-sm">
                            Showing{" "}
                            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                                23 courses
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-neutral-500 hidden sm:block">
                            View:
                        </span>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    type="button"
                                    className={twMerge(
                                        "text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 [&.active]:text-neutral-700 dark:[&.active]:text-neutral-300",
                                        type === "grid" && "active"
                                    )}
                                    onClick={() => setType("grid")}
                                >
                                    <Grid size={20} />
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Grid view</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    type="button"
                                    className={twMerge(
                                        "text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 [&.active]:text-neutral-700 dark:[&.active]:text-neutral-300",
                                        type === "list" && "active"
                                    )}
                                    onClick={() => setType("list")}
                                >
                                    <List size={20} />
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>List view</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <SearchCourse type={type}>
                <SearchCourseItem
                    image="https://github.com/shadcn.png"
                    author={{
                        link: "/",
                        name: "John Doe",
                    }}
                    link="/"
                    rating={4.2}
                    title="Lorem ipsum dolor sit amet consectetur adipisicing."
                    price={{
                        current: 43,
                        old: 54,
                    }}
                    learners={453}
                />
                <SearchCourseItem
                    image="https://github.com/shadcn.png"
                    author={{
                        link: "/",
                        name: "Jonathan",
                    }}
                    link="/"
                    rating={4.5}
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum quod perferendis possimus dicta."
                    price={{
                        current: 78,
                        old: 132,
                    }}
                    learners={923}
                />
                <SearchCourseItem
                    image="https://github.com/shadcn.png"
                    author={{
                        link: "/",
                        name: "John Doe",
                    }}
                    link="/"
                    rating={4.2}
                    title="Lorem ipsum dolor sit amet consectetur adipisicing."
                    price={{
                        current: 43,
                        old: 54,
                    }}
                    learners={453}
                />
                <SearchCourseItem
                    image="https://github.com/shadcn.png"
                    author={{
                        link: "/",
                        name: "Jonathan",
                    }}
                    link="/"
                    rating={4.5}
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum quod perferendis possimus dicta."
                    price={{
                        current: 78,
                        old: 132,
                    }}
                    learners={923}
                />
            </SearchCourse>
        </div>
    );
}
