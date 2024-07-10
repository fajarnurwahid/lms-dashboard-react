import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <div className="container mx-auto px-4">
                <div className="min-h-screen flex items-center justify-center">
                    <div>
                        <h1 className="text-2xl font-bold text-center mb-4">
                            Not Found
                        </h1>
                        <div className="text-center">
                            <Link
                                to="/dashboard"
                                className="h-10 px-4 inline-flex items-center justify-center text-center bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 active:bg-indigo-700 transition-colors"
                            >
                                Go to dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
