import OverviewItem from "../../components/dashboard/analytics/OverviewItem";
import {
    Breadcrumb,
    BreadcrumbLink,
    BreadcrumbDivider,
    BreadcrumbActive,
} from "../../components/dashboard/Breadcrumb";
import { Card, CardHeader, CardBody } from "../../components/dashboard/ui/Card";
import { GraduationCap, ArrowRight, MoreHorizontal } from "lucide-react";
import TrendingKeywordChart from "../../components/dashboard/analytics/TrendingKeywordChart";
import { Link } from "react-router-dom";
import Payout from "../../components/dashboard/analytics/Payout";
import { Table } from "../../components/dashboard/Table";
import PopularCourseHead from "../../components/dashboard/analytics/PopularCourseHead";
import PopularCourseItem from "../../components/dashboard/analytics/PopularCourseItem";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../components/ui/Popover";
import EnrollmentRateChart from "../../components/dashboard/analytics/EnrollmentRateChart";

export default function Analytics() {
    return (
        <div className="p-4 md:p-6">
            <div className="flex items-end justify-between mb-6">
                <div>
                    <h1 className="text-lg md:text-xl font-bold mb-2">
                        Analytics
                    </h1>
                    <Breadcrumb>
                        <BreadcrumbLink to="/">Dashboard</BreadcrumbLink>
                        <BreadcrumbDivider />
                        <BreadcrumbActive>Analytics</BreadcrumbActive>
                    </Breadcrumb>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
                <OverviewItem
                    className="border-l-indigo-600"
                    label="Total Learners"
                    value="34,564"
                    progress={{
                        isIncrease: true,
                        value: "3,45%",
                    }}
                >
                    <div className="w-16 h-16 rounded-full bg-indigo-600 text-neutral-100 flex items-center justify-center absolute -top-4 -right-4 ring-8 ring-indigo-600/20 dark:ring-indigo-400/20">
                        <GraduationCap size={24} className="mt-3 mr-3" />
                    </div>
                </OverviewItem>
                <OverviewItem
                    className="border-l-green-600"
                    label="Total Trainers"
                    value="253"
                    progress={{
                        isIncrease: true,
                        value: "3,45%",
                    }}
                >
                    <div className="w-16 h-16 rounded-full bg-green-600 text-neutral-100 flex items-center justify-center absolute -top-4 -right-4 ring-8 ring-green-600/20 dark:ring-green-400/20">
                        <GraduationCap size={24} className="mt-3 mr-3" />
                    </div>
                </OverviewItem>
                <OverviewItem
                    className="border-l-orange-600"
                    label="Total Courses"
                    value="2,348"
                    progress={{
                        isIncrease: false,
                        value: "3,45%",
                    }}
                >
                    <div className="w-16 h-16 rounded-full bg-orange-600 text-neutral-100 flex items-center justify-center absolute -top-4 -right-4 ring-8 ring-orange-600/20 dark:ring-orange-400/20">
                        <GraduationCap size={24} className="mt-3 mr-3" />
                    </div>
                </OverviewItem>
                <OverviewItem
                    className="border-l-pink-600"
                    label="Total Revenue"
                    value="$6,346"
                    progress={{
                        isIncrease: true,
                        value: "3,45%",
                    }}
                >
                    <div className="w-16 h-16 rounded-full bg-pink-600 text-neutral-100 flex items-center justify-center absolute -top-4 -right-4 ring-8 ring-pink-600/20 dark:ring-pink-400/20">
                        <GraduationCap size={24} className="mt-3 mr-3" />
                    </div>
                </OverviewItem>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <div>
                    <Card>
                        <CardHeader className="flex items-center justify-between space-x-2">
                            <h2 className="font-bold truncate">
                                Enrollment Rate
                            </h2>
                            <Link
                                to="/"
                                className="text-xs text-neutral-500 flex items-center space-x-1 hover:text-neutral-700 dark:hover:text-neutral-300 whitespace-nowrap"
                            >
                                <span>View All</span>
                                <ArrowRight size={14} />
                            </Link>
                        </CardHeader>
                        <CardBody className="pt-0">
                            <EnrollmentRateChart
                                categories={[
                                    "Jan 1",
                                    "Jan 2",
                                    "Jan 3",
                                    "Jan 4",
                                    "Jan 5",
                                    "Jan 6",
                                    "Jan 7",
                                    "Jan 8",
                                    "Jan 9",
                                    "Jan 10",
                                ]}
                                data={{
                                    paid: [
                                        13, 22, 35, 45, 50, 12, 55, 68, 72, 88,
                                    ],
                                    free: [
                                        10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
                                    ],
                                }}
                            />
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader className="flex items-center justify-between space-x-2">
                            <h2 className="font-bold truncate">
                                Trending Keywords
                            </h2>
                            <Link
                                to="/"
                                className="text-xs text-neutral-500 flex items-center space-x-1 hover:text-neutral-700 dark:hover:text-neutral-300 whitespace-nowrap"
                            >
                                <span>View All</span>
                                <ArrowRight size={14} />
                            </Link>
                        </CardHeader>
                        <CardBody className="pt-0">
                            <TrendingKeywordChart
                                categories={[
                                    "Branding",
                                    "Photoshop",
                                    "Python",
                                    "HTML",
                                    "Writing",
                                    "Marketing",
                                    "Blender",
                                    "UX",
                                    "Crypto",
                                    "AI",
                                ]}
                                data={[13, 22, 35, 45, 50, 12, 55, 68, 72, 88]}
                            />
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 md:gap-6">
                <div className="lg:col-span-3 xl:col-span-4">
                    <Card>
                        <CardHeader className="flex items-center justify-between space-x-2">
                            <h2 className="font-bold truncate">
                                Popular Courses
                            </h2>
                            <Popover placement="bottom-end">
                                <PopoverTrigger asChild>
                                    <button
                                        type="button"
                                        className="w-6 h-6 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-white dark:hover:bg-neutral-950 hover:shadow [&[data-state='open']]:bg-white dark:[&[data-state='open']]:bg-neutral-950 [&[data-state='open']]:shadow rounded"
                                    >
                                        <MoreHorizontal size={14} />
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent className="z-30 w-40">
                                    <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-1">
                                        <Link
                                            to="/profile"
                                            className="flex items-center space-x-3 h-8 px-3 text-sm hover:bg-indigo-50 dark:hover:bg-neutral-950 rounded-md text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-100 hover:text-indigo-600"
                                        >
                                            View
                                        </Link>
                                        <Link
                                            to="/profile"
                                            className="flex items-center space-x-3 h-8 px-3 text-sm hover:bg-indigo-50 dark:hover:bg-neutral-950 rounded-md text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-100 hover:text-indigo-600"
                                        >
                                            Export
                                        </Link>
                                        <Link
                                            to="/profile"
                                            className="flex items-center space-x-3 h-8 px-3 text-sm hover:bg-red-50 dark:hover:bg-neutral-950 rounded-md text-red-600 dark:text-neutral-300 dark:hover:text-neutral-100 hover:text-red-600"
                                        >
                                            Remove
                                        </Link>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </CardHeader>
                        <CardBody className="pt-0 overflow-x-auto">
                            <Table>
                                <thead>
                                    <PopularCourseHead />
                                </thead>
                                <tbody>
                                    <PopularCourseItem
                                        to="/"
                                        title="Course title here"
                                        trainer={{
                                            name: "Jonathan",
                                            image: "https://github.com/shadcn.png",
                                        }}
                                        publishedOn="11/12/21"
                                        enrolled="3,423"
                                        price="$53"
                                    />
                                    <PopularCourseItem
                                        to="/"
                                        title="Course title here"
                                        trainer={{
                                            name: "John Doe",
                                            image: "https://github.com/shadcn.png",
                                        }}
                                        publishedOn="11/12/21"
                                        enrolled="1,748"
                                        price="$97"
                                    />
                                    <PopularCourseItem
                                        to="/"
                                        title="Course title here"
                                        trainer={{
                                            name: "Jonathan",
                                            image: "https://github.com/shadcn.png",
                                        }}
                                        publishedOn="11/12/21"
                                        enrolled="3,423"
                                        price="$53"
                                    />
                                    <PopularCourseItem
                                        to="/"
                                        title="Course title here"
                                        trainer={{
                                            name: "John Doe",
                                            image: "https://github.com/shadcn.png",
                                        }}
                                        publishedOn="11/12/21"
                                        enrolled="1,748"
                                        price="$97"
                                    />
                                    <PopularCourseItem
                                        to="/"
                                        title="Course title here"
                                        trainer={{
                                            name: "Jonathan",
                                            image: "https://github.com/shadcn.png",
                                        }}
                                        publishedOn="11/12/21"
                                        enrolled="3,423"
                                        price="$53"
                                    />
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </div>
                <div className="lg:col-span-3 xl:col-span-2">
                    <Card>
                        <CardHeader className="flex items-center justify-between space-x-2">
                            <h2 className="font-bold truncate">Payouts</h2>
                            <Link
                                to="/"
                                className="text-xs text-neutral-500 flex items-center space-x-1 hover:text-neutral-700 dark:hover:text-neutral-300 whitespace-nowrap"
                            >
                                <span>View All</span>
                                <ArrowRight size={14} />
                            </Link>
                        </CardHeader>
                        <CardBody>
                            <Payout />
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}
