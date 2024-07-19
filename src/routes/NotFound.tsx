import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <section className="bg-neutral-100 dark:bg-neutral-800">
                <div className="container mx-auto px-4">
                    <div className="min-h-screen flex items-center justify-center">
                        <div>
                            <h1 className="text-2xl font-bold text-center mb-4">
                                Not Found
                            </h1>
                            <div className="text-center">
                                <Link
                                    to="/dashboard"
                                    className="btn btn-primary"
                                >
                                    Go to dashboard
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
