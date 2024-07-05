import {
    Breadcrumb,
    BreadcrumbLink,
    BreadcrumbDivider,
    BreadcrumbActive,
} from "../../components/dashboard/Breadcrumb";

export default function Analytics() {
    return (
        <div className="p-4">
            <div className="flex items-end justify-between">
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
        </div>
    );
}
