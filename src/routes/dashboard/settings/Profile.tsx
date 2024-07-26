import {
    Card,
    CardBody,
    CardHeader,
} from "../../../components/dashboard/ui/Card";
import Input from "../../../components/ui/Input";
import Label from "../../../components/ui/Label";
import Textarea from "../../../components/ui/Textarea";

export default function Profile() {
    return (
        <Card>
            <CardHeader>
                <h2 className="font-bold truncate">Profile</h2>
            </CardHeader>
            <CardBody>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 md:gap-x-6">
                    <div>
                        <Label htmlFor="first-name">First Name</Label>
                        <Input type="text" id="first-name" />
                    </div>
                    <div>
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input type="text" id="last-name" />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" />
                    </div>
                    <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input type="tel" id="phone" />
                    </div>
                    <div className="md:col-span-2">
                        <Label htmlFor="intro">Intro</Label>
                        <Textarea rows={5} id="intro" />
                    </div>
                    <div className="md:col-span-2">
                        <button type="submit" className="btn btn-primary">
                            Save Changes
                        </button>
                    </div>
                </form>
            </CardBody>
        </Card>
    );
}
