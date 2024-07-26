import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardRoot from "./routes/dashboard/DashboardRoot";
import Analytics from "./routes/dashboard/Analytics";
import NotFound from "./routes/NotFound";
import Login from "./routes/authentication/Login";
import Signup from "./routes/authentication/Signup";
import AuthenticationRoot from "./routes/authentication/Root";
import ForgotPassword from "./routes/authentication/ForgotPassword";
import ResetPassword from "./routes/authentication/ResetPassword";
import CourseSearch from "./routes/dashboard/CourseSearch";
import CourseDetails from "./routes/dashboard/CourseDetails";
import Profile from "./routes/dashboard/Profile";
import { default as SettingProfile } from "./routes/dashboard/settings/Profile";
import SettingsRoot from "./routes/dashboard/settings/SettingsRoot";
import ChangePassword from "./routes/dashboard/settings/ChangePassword";

const router = createBrowserRouter([
    {
        errorElement: <NotFound />,
    },
    {
        path: "/dashboard/",
        element: <DashboardRoot />,
        children: [
            {
                index: true,
                element: <Analytics />,
            },
            {
                children: [
                    {
                        path: "/dashboard/course/search/",
                        element: <CourseSearch />,
                    },
                    {
                        path: "/dashboard/course/detail/",
                        element: <CourseDetails />,
                    },
                ],
            },
            {
                path: "/dashboard/profile/",
                element: <Profile />,
            },
            {
                path: "/dashboard/settings/",
                element: <SettingsRoot />,
                children: [
                    {
                        path: "/dashboard/settings/profile/",
                        index: true,
                        element: <SettingProfile />,
                    },
                    {
                        path: "/dashboard/settings/change-password/",
                        element: <ChangePassword />,
                    },
                ],
            },
        ],
    },
    {
        element: <AuthenticationRoot />,
        children: [
            {
                path: "/login/",
                element: <Login />,
            },
            {
                path: "/signup/",
                element: <Signup />,
            },
            {
                path: "/forgot-password/",
                element: <ForgotPassword />,
            },
            {
                path: "/reset-password/",
                element: <ResetPassword />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
