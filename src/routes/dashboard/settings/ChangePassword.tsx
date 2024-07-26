import {
    Card,
    CardBody,
    CardHeader,
} from "../../../components/dashboard/ui/Card";
import Input from "../../../components/ui/Input";
import Label from "../../../components/ui/Label";

export default function ChangePassword() {
    return (
        <Card>
            <CardHeader>
                <h2 className="font-bold truncate">Change Password</h2>
            </CardHeader>
            <CardBody>
                <form className="space-y-4">
                    <div>
                        <Label htmlFor="old-password">Old Password</Label>
                        <Input type="password" id="old-password" />
                    </div>
                    <div>
                        <Label htmlFor="new-password">New Password</Label>
                        <Input type="password" id="new-password" />
                    </div>
                    <div>
                        <Label htmlFor="confirm-password">
                            Confirm Password
                        </Label>
                        <Input type="password" id="confirm-password" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Change Password
                    </button>
                </form>
            </CardBody>
        </Card>
    );
}
