import { Link } from "react-router-dom";
import {
    Star,
    StarHalf,
    Timer,
    Check,
    Facebook,
    Instagram,
    Twitter,
} from "lucide-react";
import { Card, CardBody, CardHeader } from "../../components/dashboard/ui/Card";
import DetailLessonItem from "../../components/dashboard/course/DetailLessonItem";
import DetailLesson from "../../components/dashboard/course/DetailLesson";

export default function CourseDetails() {
    return (
        <div className="p-4 md:p-6">
            <Card className="overflow-hidden mb-4 md:mb-6">
                <div className="flex relative isolate">
                    <div className="flex space-x-6 w-full p-4 md:p-6">
                        <div className="flex-shrink-0">
                            <img
                                src="https://github.com/shadcn.png"
                                alt=""
                                className="w-64 h-56 object-cover rounded-md block"
                            />
                        </div>
                        <div className="w-full">
                            <p className="mb-2 text-neutral-500 font-medium">
                                A course by{" "}
                                <Link
                                    to="/"
                                    className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                                >
                                    Jonathan
                                </Link>
                            </p>
                            <h1 className="mb-2 leading-tight text-2xl font-semibold">
                                <Link to="/">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Soluta maxime nemo
                                    repudiandae.
                                </Link>
                            </h1>
                            <div className="flex items-center space-x-1 mb-2">
                                <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                    4.6
                                </span>
                                <div className="flex items-center">
                                    <Star
                                        size={14}
                                        className="fill-orange-400 text-orange-400"
                                    />
                                    <Star
                                        size={14}
                                        className="fill-orange-400 text-orange-400"
                                    />
                                    <Star
                                        size={14}
                                        className="fill-orange-400 text-orange-400"
                                    />
                                    <Star
                                        size={14}
                                        className="fill-orange-400 text-orange-400"
                                    />
                                    <StarHalf
                                        size={14}
                                        className="fill-orange-400 text-orange-400"
                                    />
                                </div>
                                <span className="text-neutral-500 text-xs">
                                    (45,324 reviews)
                                </span>
                            </div>
                            <p className="text-neutral-500 line-clamp-2 leading-normal">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Officia error praesentium aut
                                eaque velit voluptatum, nihil possimus beatae
                                maiores. Debitis?
                            </p>
                        </div>
                    </div>
                    <div className="w-96 flex-shrink-0"></div>
                    <div className="w-1/2 absolute top-0 right-0 h-full after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-gradient-to-r after:from-white dark:after:from-neutral-900 after:to-white/80 dark:after:to-neutral-900/80 -z-10 select-none">
                        <img
                            src="https://github.com/shadcn.png"
                            alt=""
                            className="w-full h-full object-cover block"
                        />
                    </div>
                </div>
            </Card>
            <div className="flex items-start space-x-6">
                <div className="w-full">
                    <Card>
                        <CardHeader>
                            <h2 className="font-bold truncate">Lessons</h2>
                        </CardHeader>
                        <CardBody>
                            <DetailLesson>
                                <DetailLessonItem
                                    title="Lorem ipsum dolor sit amet, consectetur adipisicing."
                                    link="/"
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ratione quia minus, velit dicta voluptas veniam facere error dolorum et? Sapiente consequatur deleniti id ipsa enim numquam quibusdam labore adipisci?"
                                    isLocked={false}
                                />
                                <DetailLessonItem
                                    title="Lorem ipsum dolor sit amet, consectetur adipisicing."
                                    link="/"
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ratione quia minus, velit dicta voluptas veniam facere error dolorum et? Sapiente consequatur deleniti id ipsa enim numquam quibusdam labore adipisci?"
                                />
                                <DetailLessonItem
                                    title="Lorem ipsum dolor sit amet, consectetur adipisicing."
                                    link="/"
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ratione quia minus, velit dicta voluptas veniam facere error dolorum et? Sapiente consequatur deleniti id ipsa enim numquam quibusdam labore adipisci?"
                                />
                                <DetailLessonItem
                                    title="Lorem ipsum dolor sit amet, consectetur adipisicing."
                                    link="/"
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ratione quia minus, velit dicta voluptas veniam facere error dolorum et? Sapiente consequatur deleniti id ipsa enim numquam quibusdam labore adipisci?"
                                />
                                <DetailLessonItem
                                    title="Lorem ipsum dolor sit amet, consectetur adipisicing."
                                    link="/"
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ratione quia minus, velit dicta voluptas veniam facere error dolorum et? Sapiente consequatur deleniti id ipsa enim numquam quibusdam labore adipisci?"
                                />
                                <DetailLessonItem
                                    title="Lorem ipsum dolor sit amet, consectetur adipisicing."
                                    link="/"
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ratione quia minus, velit dicta voluptas veniam facere error dolorum et? Sapiente consequatur deleniti id ipsa enim numquam quibusdam labore adipisci?"
                                />
                            </DetailLesson>
                        </CardBody>
                    </Card>
                </div>
                <div className="w-96 flex-shrink-0 -mt-48 sticky top-20">
                    <Card>
                        <CardBody>
                            <div className="flex items-center space-x-3 mb-2">
                                <h2 className="text-3xl font-semibold leading-tight text-indigo-600 dark:text-indigo-400">
                                    $23.54
                                </h2>
                                <p className="text-sm text-neutral-500 line-through">
                                    $45.65
                                </p>
                            </div>
                            <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 text-sm mb-4">
                                <Timer size={16} />
                                <span>Sale ends in 13h : 25m : 54s</span>
                            </div>
                            <Link to="/" className="btn btn-primary w-full">
                                Purchase this course
                            </Link>
                            <p className="text-sm text-neutral-500 mt-3">
                                14 days return policy
                            </p>
                            <hr className="my-4 border-neutral-100 dark:border-neutral-800" />
                            <p className="font-semibold text-sm mb-2">
                                Course features:
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2 text-sm text-neutral-500">
                                    <Check size={16} />
                                    <span>
                                        Total 13 hours of video lectures
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2 text-sm text-neutral-500">
                                    <Check size={16} />
                                    <span>12 premium article access</span>
                                </li>
                                <li className="flex items-center space-x-2 text-sm text-neutral-500">
                                    <Check size={16} />
                                    <span>11 downloadable resources</span>
                                </li>
                                <li className="flex items-center space-x-2 text-sm text-neutral-500">
                                    <Check size={16} />
                                    <span>
                                        Total 13 hours of video lectures
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2 text-sm text-neutral-500">
                                    <Check size={16} />
                                    <span>12 premium article access</span>
                                </li>
                                <li className="flex items-center space-x-2 text-sm text-neutral-500">
                                    <Check size={16} />
                                    <span>11 downloadable resources</span>
                                </li>
                            </ul>
                            <hr className="my-4 border-neutral-100 dark:border-neutral-800" />
                            <p className="font-semibold text-sm mb-2">
                                Share course:
                            </p>
                            <div className="flex items-center space-x-2">
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
                                    <Twitter size={16} />
                                </Link>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}
