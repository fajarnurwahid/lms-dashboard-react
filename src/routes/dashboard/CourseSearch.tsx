import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import { Grid, List, Search } from "lucide-react";

export default function CourseSearch() {
    return (
        <div className="p-4">
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-4">
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
                            <span className="font-semibold text-neutral-900">
                                23 courses
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-neutral-500 hidden sm:block">
                            View:
                        </span>
                        <button
                            type="button"
                            className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 [&.active]:text-neutral-700 dark:[&.active]:text-neutral-300 active"
                        >
                            <Grid size={20} />
                        </button>
                        <button
                            type="button"
                            className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 [&.active]:text-neutral-700 dark:[&.active]:text-neutral-300"
                        >
                            <List size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
