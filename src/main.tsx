import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardRoot from "./routes/dashboard/Root";
import Analytics from "./routes/dashboard/Analytics";
import NotFound from "./routes/NotFound";

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
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
