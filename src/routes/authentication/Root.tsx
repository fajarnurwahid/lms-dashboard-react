import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../../contexts/ThemeContext";

export default function AuthenticationRoot() {
    return (
        <ThemeProvider>
            <Outlet />
        </ThemeProvider>
    );
}
