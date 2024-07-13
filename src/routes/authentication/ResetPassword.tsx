import Label from "../../components/ui/Label";
import Input from "../../components/ui/Input";

export default function ResetPassword() {
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
                            Reset Password
                        </h1>
                        <p className="text-neutral-500 text-sm">
                            Enter your new password below.
                        </p>
                        <form action="" className="mt-6">
                            <div className="mb-4">
                                <Label htmlFor="password">New password</Label>
                                <Input type="password" id="password" />
                            </div>
                            <div className="mb-4">
                                <Label htmlFor="confirm-password">
                                    Confirm new password
                                </Label>
                                <Input type="password" id="confirm-password" />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                            >
                                Reset Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
