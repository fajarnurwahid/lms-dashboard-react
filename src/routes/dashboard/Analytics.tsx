import {
    Overview,
    OverviewItem,
} from "../../components/dashboard/analytics/Overview";
import {
    Breadcrumb,
    BreadcrumbLink,
    BreadcrumbDivider,
    BreadcrumbActive,
} from "../../components/dashboard/Breadcrumb";
import { Card, CardHeader, CardBody } from "../../components/dashboard/Card";
import { GraduationCap, ArrowRight } from "lucide-react";
import TrendingKeywordChart from "../../components/dashboard/analytics/TrendingKeywordChart";
import { Link } from "react-router-dom";
import Payout from "../../components/dashboard/analytics/Payout";
import { Table, Th, Td } from "../../components/dashboard/Table";

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
            <Overview className="mb-4 md:mb-6">
                <OverviewItem
                    className="border-l-indigo-500"
                    label="Total Learners"
                    value="34,564"
                    progress={{
                        isIncrease: true,
                        value: "3,45%",
                    }}
                >
                    <div className="w-16 h-16 rounded-full bg-indigo-500 text-white flex items-center justify-center absolute -top-4 -right-4 ring-8 ring-indigo-600/10 dark:ring-indigo-600/20">
                        <GraduationCap size={24} className="mt-3 mr-3" />
                    </div>
                </OverviewItem>
                <OverviewItem
                    className="border-l-green-500"
                    label="Total Trainers"
                    value="253"
                    progress={{
                        isIncrease: true,
                        value: "3,45%",
                    }}
                >
                    <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center absolute -top-4 -right-4 ring-8 ring-green-600/10 dark:ring-green-600/20">
                        <GraduationCap size={24} className="mt-3 mr-3" />
                    </div>
                </OverviewItem>
                <OverviewItem
                    className="border-l-orange-500"
                    label="Total Courses"
                    value="2,348"
                    progress={{
                        isIncrease: false,
                        value: "3,45%",
                    }}
                >
                    <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center absolute -top-4 -right-4 ring-8 ring-orange-600/10 dark:ring-orange-600/20">
                        <GraduationCap size={24} className="mt-3 mr-3" />
                    </div>
                </OverviewItem>
                <OverviewItem
                    className="border-l-pink-500"
                    label="Total Revenue"
                    value="$6,346"
                    progress={{
                        isIncrease: true,
                        value: "3,45%",
                    }}
                >
                    <div className="w-16 h-16 rounded-full bg-pink-500 text-white flex items-center justify-center absolute -top-4 -right-4 ring-8 ring-pink-600/10 dark:ring-pink-600/20">
                        <GraduationCap size={24} className="mt-3 mr-3" />
                    </div>
                </OverviewItem>
            </Overview>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 md:gap-6">
                <div className="lg:col-span-3 xl:col-span-4">
                    <Card className="mb-4 md:mb-6">
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
                    <Card>
                        <CardHeader>
                            <h2 className="font-bold truncate">
                                Popular Courses
                            </h2>
                        </CardHeader>
                        <CardBody className="pt-0 overflow-x-auto">
                            <Table>
                                <thead>
                                    <tr>
                                        <Th>Course Title</Th>
                                        <Th>Trainer</Th>
                                        <Th className="text-right">
                                            Published on
                                        </Th>
                                        <Th className="text-right">Enrolled</Th>
                                        <Th className="text-right">Price</Th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <Td>
                                            <Link
                                                to="/"
                                                className="text-indigo-600 text-sm font-semibold hover:underline"
                                            >
                                                Course title here
                                            </Link>
                                        </Td>
                                        <Td>
                                            <Link
                                                to="/"
                                                className="flex items-center space-x-2"
                                            >
                                                <img
                                                    src="https://github.com/shadcn.png"
                                                    alt=""
                                                    className="w-6 h-6 object-cover rounded-full flex-shrink-0"
                                                />
                                                <span className="font-semibold text-sm">
                                                    Jonathan
                                                </span>
                                            </Link>
                                        </Td>
                                        <Td className="text-right">
                                            <span className="text-sm text-neutral-700">
                                                11/12/21
                                            </span>
                                        </Td>
                                        <Td className="text-right">
                                            <span className="text-sm text-neutral-700">
                                                3,423
                                            </span>
                                        </Td>
                                        <Td className="text-right">
                                            <span className="text-sm text-neutral-700">
                                                $53
                                            </span>
                                        </Td>
                                    </tr>
                                    <tr>
                                        <Td>
                                            <Link
                                                to="/"
                                                className="text-indigo-600 text-sm font-semibold hover:underline"
                                            >
                                                Course title here
                                            </Link>
                                        </Td>
                                        <Td>
                                            <Link
                                                to="/"
                                                className="flex items-center space-x-2"
                                            >
                                                <img
                                                    src="https://github.com/shadcn.png"
                                                    alt=""
                                                    className="w-6 h-6 object-cover rounded-full flex-shrink-0"
                                                />
                                                <span className="font-semibold text-sm">
                                                    Jonathan
                                                </span>
                                            </Link>
                                        </Td>
                                        <Td className="text-right">
                                            <span className="text-sm text-neutral-700">
                                                11/12/21
                                            </span>
                                        </Td>
                                        <Td className="text-right">
                                            <span className="text-sm text-neutral-700">
                                                3,423
                                            </span>
                                        </Td>
                                        <Td className="text-right">
                                            <span className="text-sm text-neutral-700">
                                                $53
                                            </span>
                                        </Td>
                                    </tr>
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
