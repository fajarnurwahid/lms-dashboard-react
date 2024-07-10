import { Th } from "../Table";

export default function PopularCourseHead() {
    return (
        <tr>
            <Th>Course Title</Th>
            <Th>Trainer</Th>
            <Th className="text-right">Published on</Th>
            <Th className="text-right">Enrolled</Th>
            <Th className="text-right">Price</Th>
        </tr>
    );
}
