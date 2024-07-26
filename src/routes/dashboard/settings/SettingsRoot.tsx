import { Card, CardBody } from "../../../components/dashboard/ui/Card";
import { Edit } from "lucide-react";
import {
    Navigation,
    NavigationItem,
} from "../../../components/dashboard/settings/Navigation";
import { Outlet } from "react-router-dom";
import { useLocation, matchPath } from "react-router-dom";

export default function SettingsRoot() {
    const location = useLocation();

    return (
        <div className="p-4 md:p-6">
            <Card className="overflow-hidden mb-4 md:mb-6">
                <CardBody className="p-0 md:p-0">
                    <div className="relative h-36 group/cover">
                        <img
                            src="https://github.com/shadcn.png"
                            alt=""
                            className="w-full h-full object-cover block"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black/50 p-4 opacity-0 invisible transition-all group-hover/cover:opacity-100 group-hover/cover:visible">
                            <label
                                htmlFor="cover"
                                className="btn btn-outline-light btn-sm cursor-pointer space-x-2"
                            >
                                <Edit size={16} />
                                <span>Update</span>
                            </label>
                            <input type="file" id="cover" className="hidden" />
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4 mb-6 px-4 md:px-6">
                        <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-neutral-100 dark:border-neutral-900 -mt-4 sm:-mt-8 group/image flex-shrink-0">
                            <img
                                src="https://github.com/shadcn.png"
                                alt=""
                                className="w-full h-full block"
                            />
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black/50 text-neutral-100 font-semibold pt-3 opacity-0 invisible translate-y-4 transition-all group-hover/image:opacity-100 group-hover/image:visible group-hover/image:translate-y-0">
                                <div className="flex items-center space-x-2 justify-center">
                                    <Edit size={16} />
                                    <p className="text-center text-sm">
                                        Update
                                    </p>
                                </div>
                            </div>
                            <input
                                type="file"
                                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                            />
                        </div>
                        <div className="pt-2 sm:pt-4">
                            <h1 className="text-xl sm:text-2xl font-semibold leading-tight mb-1">
                                Jonathan
                            </h1>
                            <p className="text-neutral-500 text-xs sm:text-sm">
                                Web Developer
                            </p>
                        </div>
                    </div>
                    <Navigation>
                        <NavigationItem
                            to="/dashboard/settings/profile"
                            isActive={Boolean(
                                matchPath(
                                    {
                                        path: "/dashboard/settings/profile",
                                        end: true,
                                    },
                                    location.pathname
                                )
                            )}
                        >
                            Profile
                        </NavigationItem>
                        <NavigationItem
                            to="/dashboard/settings/change-password"
                            isActive={Boolean(
                                matchPath(
                                    {
                                        path: "/dashboard/settings/change-password",
                                        end: true,
                                    },
                                    location.pathname
                                )
                            )}
                        >
                            Change Password
                        </NavigationItem>
                    </Navigation>
                </CardBody>
            </Card>
            <Outlet />
        </div>
    );
}
