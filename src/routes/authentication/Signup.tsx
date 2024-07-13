import Label from "../../components/ui/Label";
import Input from "../../components/ui/Input";
import Checkbox from "../../components/ui/Checkbox";
import { Link } from "react-router-dom";

export default function Signup() {
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
                        <h1 className="text-xl font-semibold mb-2">Sign Up</h1>
                        <p className="text-neutral-500 text-sm">
                            Join us by creating an account!
                        </p>
                        <form action="" className="mt-6">
                            <div className="mb-4">
                                <Label htmlFor="name">Full Name</Label>
                                <Input type="text" id="name" />
                            </div>
                            <div className="mb-4">
                                <Label htmlFor="email">Email address</Label>
                                <Input type="email" id="email" />
                            </div>
                            <div className="mb-4">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" />
                            </div>
                            <div className="flex space-x-2 mb-4">
                                <Checkbox
                                    id="aggree"
                                    className="flex-shrink-0 mt-0.5"
                                />
                                <Label
                                    htmlFor="aggree"
                                    className="mb-0 font-normal text-neutral-500"
                                >
                                    By creating an account, you agree to our{" "}
                                    <Link
                                        to="/"
                                        className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                                    >
                                        Terms & Conditions
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        to="/"
                                        className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                                    >
                                        Privacy Policy
                                    </Link>
                                </Label>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                            >
                                Sign up
                            </button>
                        </form>
                        <p className="text-neutral-500 text-sm mt-4">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                            >
                                Login
                            </Link>
                        </p>
                        <div className="text-center relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-full before:h-0 before:border-t before:border-t-neutral-200 dark:before:border-t-neutral-700 mt-6">
                            <span className="px-3 bg-white dark:bg-neutral-900 text-sm text-neutral-500 relative">
                                or
                            </span>
                        </div>
                        <div className="mt-4 space-y-3">
                            <Link
                                to="/"
                                className="btn btn-light w-full space-x-3 text-sm"
                            >
                                <img
                                    src="/images/google.svg"
                                    alt=""
                                    className="h-4 flex-shrink-0"
                                />
                                <span>Sign up with Google</span>
                            </Link>
                            <Link
                                to="/"
                                className="btn btn-light w-full space-x-3 text-sm"
                            >
                                <img
                                    src="/images/facebook.svg"
                                    alt=""
                                    className="h-4 flex-shrink-0"
                                />
                                <span>Sign up with Facebook</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
