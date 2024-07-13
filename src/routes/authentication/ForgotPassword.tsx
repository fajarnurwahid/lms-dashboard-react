import Label from "../../components/ui/Label";
import Input from "../../components/ui/Input";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ForgotPassword() {
    return (
        <section className="py-12 bg-neutral-100 dark:bg-neutral-800">
            <div className="container mx-auto px-4 min-h-[calc(100vh-(48px*2))] flex items-center">
                <div className="max-w-md mx-auto w-full">
                    <div className="text-center mb-6">
                        <a href="#" className="text-xl font-bold">
                            LOGO
                        </a>
                    </div>
                    <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-6 sm:p-12">
                        <h1 className="text-xl font-semibold mb-2">
                            Forgot Password?
                        </h1>
                        <p className="text-neutral-500 text-sm">
                            Enter your email address and we'll send you a magic
                            link to reset your password.
                        </p>
                        <form action="" className="mt-6">
                            <div className="mb-4">
                                <Label htmlFor="email">Email address</Label>
                                <Input type="email" id="email" />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                            >
                                Send Magic Link
                            </button>
                        </form>
                        <Link
                            to="/login"
                            className="btn btn-light w-full space-x-2 mt-4"
                        >
                            <ArrowLeft size={14} />
                            <span>Back</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
