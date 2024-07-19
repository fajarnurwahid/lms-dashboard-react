import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader } from "../../components/dashboard/ui/Card";
import {
    MapPin,
    MessageCircle,
    UserPlus2,
    Globe,
    Facebook,
    Instagram,
    Linkedin,
} from "lucide-react";
import SearchCourse from "../../components/dashboard/course/SearchCourse";
import SearchCourseItem from "../../components/dashboard/course/SearchCourseItem";

export default function Profile() {
    return (
        <div className="p-4 md:p-6">
            <div className="lg:flex lg:items-start lg:space-x-6 space-y-4 md:space-y-6 lg:space-y-0">
                <div className="lg:w-72 xl:w-96 flex-shrink-0 sticky top-20">
                    <Card className="py-4 px-4 md:px-6">
                        <div className="flex space-x-4">
                            <img
                                src="https://github.com/shadcn.png"
                                alt=""
                                className="w-16 h-16 rounded-full flex-shrink-0"
                            />
                            <div className="min-w-0">
                                <h2 className="text-xl leading-tight font-semibold mb-1">
                                    Jonathan
                                </h2>
                                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-1">
                                    Web Developer
                                </p>
                                <div className="flex space-x-2 text-neutral-500">
                                    <MapPin
                                        size={12}
                                        className="mt-0.5 flex-shrink-0"
                                    />
                                    <p className="text-xs">
                                        National Comics Publications, NY, USA
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr className="border-neutral-100 dark:border-neutral-800 my-4" />
                        <div className="flex items-center space-x-6 mb-4">
                            <div>
                                <p className="text-lg font-medium">836</p>
                                <p className="text-xs text-neutral-500">
                                    Followers
                                </p>
                            </div>
                            <div>
                                <p className="text-lg font-medium">482</p>
                                <p className="text-xs text-neutral-500">
                                    Following
                                </p>
                            </div>
                            <div>
                                <p className="text-lg font-medium">102</p>
                                <p className="text-xs text-neutral-500">
                                    Courses
                                </p>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn btn-light space-x-2 w-full mb-3"
                        >
                            <MessageCircle size={16} />
                            <span>Message</span>
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary space-x-2 w-full"
                        >
                            <UserPlus2 size={16} />
                            <span>Follow</span>
                        </button>
                        <hr className="border-neutral-100 dark:border-neutral-800 my-4" />
                        <p className="font-semibold mb-2 text-sm">
                            Find me on:
                        </p>
                        <div className="flex items-center space-x-2">
                            <Link
                                to="/"
                                className="w-9 h-9 flex items-center justify-center bg-neutral-100 dark:bg-neutral-950 text-neutral-500 hover:bg-indigo-500 dark:hover:bg-indigo-500 hover:text-neutral-100 rounded-full transition-colors"
                            >
                                <Globe size={16} />
                            </Link>
                            <Link
                                to="/"
                                className="w-9 h-9 flex items-center justify-center bg-neutral-100 dark:bg-neutral-950 text-neutral-500 hover:bg-indigo-500 dark:hover:bg-indigo-500 hover:text-neutral-100 rounded-full transition-colors"
                            >
                                <Facebook size={16} />
                            </Link>
                            <Link
                                to="/"
                                className="w-9 h-9 flex items-center justify-center bg-neutral-100 dark:bg-neutral-950 text-neutral-500 hover:bg-indigo-500 dark:hover:bg-indigo-500 hover:text-neutral-100 rounded-full transition-colors"
                            >
                                <Instagram size={16} />
                            </Link>
                            <Link
                                to="/"
                                className="w-9 h-9 flex items-center justify-center bg-neutral-100 dark:bg-neutral-950 text-neutral-500 hover:bg-indigo-500 dark:hover:bg-indigo-500 hover:text-neutral-100 rounded-full transition-colors"
                            >
                                <Linkedin size={16} />
                            </Link>
                        </div>
                    </Card>
                </div>
                <div className="w-full space-y-4 md:space-y-6">
                    <Card>
                        <CardHeader>
                            <h2 className="font-bold truncate">Introduction</h2>
                        </CardHeader>
                        <CardBody className="space-y-4">
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Fugit asperiores, nemo
                                adipisci totam nesciunt dignissimos itaque quia
                                nostrum assumenda officia.
                            </p>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eos necessitatibus omnis culpa
                                dicta aut hic, nobis amet dolorem mollitia vitae
                                alias, velit sapiente aperiam, repellendus quasi
                                repellat ipsa veritatis laboriosam.
                            </p>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Fugit asperiores, nemo
                                adipisci totam nesciunt dignissimos itaque quia
                                nostrum assumenda officia.
                            </p>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eos necessitatibus omnis culpa
                                dicta aut hic, nobis amet dolorem mollitia vitae
                                alias, velit sapiente aperiam, repellendus quasi
                                repellat ipsa veritatis laboriosam.
                            </p>
                        </CardBody>
                    </Card>
                    <div>
                        <h2 className="font-bold truncate mb-2">Courses</h2>

                        <SearchCourse
                            type="grid"
                            className="md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
                        >
                            <SearchCourseItem
                                image="https://github.com/shadcn.png"
                                author={{
                                    link: "/",
                                    name: "John Doe",
                                }}
                                link="/"
                                rating={4.2}
                                title="Lorem ipsum dolor sit amet consectetur adipisicing."
                                price={{
                                    current: 43,
                                    old: 54,
                                }}
                                learners={453}
                            />
                            <SearchCourseItem
                                image="https://github.com/shadcn.png"
                                author={{
                                    link: "/",
                                    name: "John Doe",
                                }}
                                link="/"
                                rating={4.2}
                                title="Lorem ipsum dolor sit amet consectetur adipisicing."
                                price={{
                                    current: 43,
                                    old: 54,
                                }}
                                learners={453}
                            />
                            <SearchCourseItem
                                image="https://github.com/shadcn.png"
                                author={{
                                    link: "/",
                                    name: "John Doe",
                                }}
                                link="/"
                                rating={4.2}
                                title="Lorem ipsum dolor sit amet consectetur adipisicing."
                                price={{
                                    current: 43,
                                    old: 54,
                                }}
                                learners={453}
                            />
                            <SearchCourseItem
                                image="https://github.com/shadcn.png"
                                author={{
                                    link: "/",
                                    name: "John Doe",
                                }}
                                link="/"
                                rating={4.2}
                                title="Lorem ipsum dolor sit amet consectetur adipisicing."
                                price={{
                                    current: 43,
                                    old: 54,
                                }}
                                learners={453}
                            />
                        </SearchCourse>
                    </div>
                </div>
            </div>
        </div>
    );
}
