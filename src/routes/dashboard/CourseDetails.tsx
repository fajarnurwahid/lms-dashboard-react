import { Link } from "react-router-dom";
import {
    Star,
    StarHalf,
    Timer,
    Check,
    Facebook,
    Instagram,
    Twitter,
    GraduationCap,
    CheckCircle,
    Play,
    Target,
} from "lucide-react";
import { Card, CardBody, CardHeader } from "../../components/dashboard/ui/Card";
import {
    DetailLessonItem,
    DetailLessonItemLesson,
    DetailLessonItemLessonItem,
    DetailLessonItemTrigger,
} from "../../components/dashboard/course/DetailLessonItem";

export default function CourseDetails() {
    return (
        <div className="p-4 md:p-6">
            <Card className="overflow-hidden mb-4 md:mb-6">
                <div className="lg:flex relative isolate">
                    <div className="w-full p-4 md:p-6">
                        <div className="mb-4">
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
                            <p className="text-neutral-500 leading-normal">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Officia error praesentium aut
                                eaque velit voluptatum, nihil possimus beatae
                                maiores. Debitis?
                            </p>
                        </div>
                        <div className="flex items-center flex-wrap space-y-2 space-x-2 -ml-2 -mt-2">
                            <div className="flex items-center space-x-2 text-xs font-medium first:ml-2 first:mt-2 h-6 px-3 rounded-full bg-neutral-100 dark:bg-neutral-950">
                                <GraduationCap size={16} />
                                <span>2,345 learners</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs font-medium first:ml-2 first:mt-2 h-6 px-3 rounded-full bg-neutral-100 dark:bg-neutral-950">
                                <CheckCircle size={16} />
                                <span>87% completions</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs font-medium first:ml-2 first:mt-2 h-6 px-3 rounded-full bg-neutral-100 dark:bg-neutral-950">
                                <GraduationCap size={16} />
                                <span>2,345 learners</span>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block w-80 xl:w-96 flex-shrink-0"></div>
                    <div className="w-1/2 absolute top-0 right-0 h-full after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-gradient-to-r after:from-white dark:after:from-neutral-900 after:to-white/80 dark:after:to-neutral-900/80 -z-10 select-none">
                        <img
                            src="https://github.com/shadcn.png"
                            alt=""
                            className="w-full h-full object-cover block"
                        />
                    </div>
                </div>
            </Card>
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                <div className="w-full min-w-0 order-2 lg:order-1 space-y-4 md:space-y-6">
                    <Card>
                        <CardHeader>
                            <h2 className="font-bold truncate">
                                What you'll learn
                            </h2>
                        </CardHeader>
                        <CardBody>
                            <ul className="list-disc space-y-3 text-neutral-700 dark:text-neutral-300 text-sm">
                                <li className="flex space-x-2">
                                    <Check
                                        size={16}
                                        className="mt-0.5 flex-shrink-0"
                                    />
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. At, ad.
                                    </span>
                                </li>
                                <li className="flex space-x-2">
                                    <Check
                                        size={16}
                                        className="mt-0.5 flex-shrink-0"
                                    />
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing.
                                    </span>
                                </li>
                                <li className="flex space-x-2">
                                    <Check
                                        size={16}
                                        className="mt-0.5 flex-shrink-0"
                                    />
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Asperiores molestias
                                        magnam sapiente.
                                    </span>
                                </li>
                                <li className="flex space-x-2">
                                    <Check
                                        size={16}
                                        className="mt-0.5 flex-shrink-0"
                                    />
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. At, ad.
                                    </span>
                                </li>
                                <li className="flex space-x-2">
                                    <Check
                                        size={16}
                                        className="mt-0.5 flex-shrink-0"
                                    />
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing.
                                    </span>
                                </li>
                                <li className="flex space-x-2">
                                    <Check
                                        size={16}
                                        className="mt-0.5 flex-shrink-0"
                                    />
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Asperiores molestias
                                        magnam sapiente.
                                    </span>
                                </li>
                            </ul>
                        </CardBody>
                    </Card>
                    <Card className="overflow-hidden">
                        <CardHeader>
                            <h2 className="font-bold truncate">Lessons</h2>
                        </CardHeader>
                        <CardBody>
                            <div className="flex items-center flex-wrap space-y-2 space-x-2 -ml-2 -mt-2 mb-4">
                                <div className="flex items-center space-x-2 text-xs font-medium first:ml-2 first:mt-2 h-6 px-3 rounded-full bg-neutral-100 dark:bg-neutral-950">
                                    <Target size={16} />
                                    <span>34 sections</span>
                                </div>
                                <div className="flex items-center space-x-2 text-xs font-medium first:ml-2 first:mt-2 h-6 px-3 rounded-full bg-neutral-100 dark:bg-neutral-950">
                                    <CheckCircle size={16} />
                                    <span>205 lessons</span>
                                </div>
                                <div className="flex items-center space-x-2 text-xs font-medium first:ml-2 first:mt-2 h-6 px-3 rounded-full bg-neutral-100 dark:bg-neutral-950">
                                    <Timer size={16} />
                                    <span>34h 4m</span>
                                </div>
                            </div>
                            <div className="-mx-4 md:-mx-6 -mb-4 divide-y divide-neutral-100 dark:divide-neutral-800 border-t border-t-neutral-100 dark:border-t-neutral-800">
                                <DetailLessonItem className="active">
                                    <DetailLessonItemTrigger
                                        label="Overview"
                                        duration="13m"
                                        lesson={7}
                                    />
                                    <DetailLessonItemLesson>
                                        <DetailLessonItemLessonItem
                                            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eum."
                                            duration="45:08"
                                            hasPreview={true}
                                        />
                                        <DetailLessonItemLessonItem
                                            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eum."
                                            duration="23:43"
                                        />
                                        <DetailLessonItemLessonItem
                                            type="file"
                                            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eum."
                                            duration="10:32"
                                        />
                                    </DetailLessonItemLesson>
                                </DetailLessonItem>
                                <DetailLessonItem>
                                    <DetailLessonItemTrigger
                                        label="Overview test"
                                        duration="13m"
                                        lesson={7}
                                    />
                                    <DetailLessonItemLesson>
                                        <DetailLessonItemLessonItem
                                            type="file"
                                            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eum."
                                            duration="24:13"
                                        />
                                        <DetailLessonItemLessonItem
                                            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eum."
                                            duration="15:46"
                                        />
                                        <DetailLessonItemLessonItem
                                            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eum."
                                            duration="34:45"
                                        />
                                    </DetailLessonItemLesson>
                                </DetailLessonItem>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            <h2 className="font-bold truncate">Requirements</h2>
                        </CardHeader>
                        <CardBody>
                            <ul className="list-disc space-y-3 text-neutral-700 dark:text-neutral-300 text-sm pl-4">
                                <li>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. At, ad.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Unde, accusamus?
                                    <ul className="list-disc space-y-2 text-neutral-700 dark:text-neutral-300 pl-4 mt-2">
                                        <li>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Suscipit, corporis.
                                        </li>
                                        <li>
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing.
                                        </li>
                                        <li>Lorem ipsum dolor sit.</li>
                                    </ul>
                                </li>
                                <li>Lorem ipsum dolor sit.</li>
                            </ul>
                        </CardBody>
                    </Card>
                </div>
                <div className="lg:w-80 xl:w-96 lg:flex-shrink-0 lg:-mt-48 mb-4 md:mb-6 lg:mb-0 lg:sticky lg:top-20 order-1 lg:order-2">
                    <Card className="overflow-hidden">
                        <button type="button" className="relative w-full">
                            <img
                                src="https://github.com/shadcn.png"
                                alt=""
                                className="w-full h-40 object-cover block"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/30 hover:bg-black/40 transition-colors flex items-center justify-center text-neutral-300 hover:text-neutral-100">
                                <Play size={32} />
                            </div>
                        </button>
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
