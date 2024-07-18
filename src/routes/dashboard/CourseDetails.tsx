import { Link } from "react-router-dom";
import {
    Star,
    StarHalf,
    Timer,
    Facebook,
    Instagram,
    Twitter,
    GraduationCap,
    CheckCircle,
    Play,
    Target,
    UserPlus2,
    Verified,
    Video,
} from "lucide-react";
import { Card, CardBody, CardHeader } from "../../components/dashboard/ui/Card";
import {
    DetailCourseItem,
    DetailCourseItemLesson,
    DetailCourseItemLessonItem,
    DetailCourseItemTrigger,
} from "../../components/dashboard/course/DetailCourseItem";
import Badge from "../../components/ui/Badge";
import CheckListItem from "../../components/dashboard/ui/CheckListItem";
import DetailLessonRatingItem from "../../components/dashboard/course/DetailCourseRatingItem";
import DetailCourseReviewItem from "../../components/dashboard/course/DetailCourseReviewItem";
import SearchCourse from "../../components/dashboard/course/SearchCourse";
import SearchCourseItem from "../../components/dashboard/course/SearchCourseItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
                            <Badge className="first:ml-2 first:mt-2">
                                <GraduationCap size={16} />
                                <span>2,345 learners</span>
                            </Badge>
                            <Badge className="first:ml-2 first:mt-2">
                                <CheckCircle size={16} />
                                <span>87% completions</span>
                            </Badge>
                            <Badge className="first:ml-2 first:mt-2">
                                <GraduationCap size={16} />
                                <span>2,345 learners</span>
                            </Badge>
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
                            <ul className="space-y-3 text-neutral-700 dark:text-neutral-300 text-sm">
                                <CheckListItem>
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. At, ad.
                                    </span>
                                </CheckListItem>
                                <CheckListItem>
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing.
                                    </span>
                                </CheckListItem>
                                <CheckListItem>
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Asperiores molestias
                                        magnam sapiente.
                                    </span>
                                </CheckListItem>
                                <CheckListItem>
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. At, ad.
                                    </span>
                                </CheckListItem>
                                <CheckListItem>
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing.
                                    </span>
                                </CheckListItem>
                                <CheckListItem>
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Asperiores molestias
                                        magnam sapiente.
                                    </span>
                                </CheckListItem>
                            </ul>
                        </CardBody>
                    </Card>
                    <Card className="overflow-hidden">
                        <CardHeader>
                            <h2 className="font-bold truncate">Lessons</h2>
                        </CardHeader>
                        <CardBody>
                            <div className="flex items-center flex-wrap space-y-2 space-x-2 -ml-2 -mt-2 mb-4">
                                <Badge className="first:ml-2 first:mt-2">
                                    <Target size={16} />
                                    <span>34 sections</span>
                                </Badge>
                                <Badge className="first:ml-2 first:mt-2">
                                    <CheckCircle size={16} />
                                    <span>205 lessons</span>
                                </Badge>
                                <Badge className="first:ml-2 first:mt-2">
                                    <Timer size={16} />
                                    <span>34h 4m</span>
                                </Badge>
                            </div>
                            <div className="-mx-4 md:-mx-6 -mb-4 divide-y divide-neutral-100 dark:divide-neutral-800 border-t border-t-neutral-100 dark:border-t-neutral-800">
                                <DetailCourseItem className="active">
                                    <DetailCourseItemTrigger
                                        label="Overview"
                                        duration="13m"
                                        lesson={7}
                                    />
                                    <DetailCourseItemLesson>
                                        <DetailCourseItemLessonItem
                                            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eum."
                                            duration="45:08"
                                            hasPreview={true}
                                        />
                                        <DetailCourseItemLessonItem
                                            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eum."
                                            duration="23:43"
                                        />
                                        <DetailCourseItemLessonItem
                                            type="file"
                                            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eum."
                                            duration="10:32"
                                        />
                                    </DetailCourseItemLesson>
                                </DetailCourseItem>
                                <DetailCourseItem>
                                    <DetailCourseItemTrigger
                                        label="Overview test"
                                        duration="13m"
                                        lesson={7}
                                    />
                                    <DetailCourseItemLesson>
                                        <DetailCourseItemLessonItem
                                            type="file"
                                            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eum."
                                            duration="24:13"
                                        />
                                        <DetailCourseItemLessonItem
                                            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eum."
                                            duration="15:46"
                                        />
                                        <DetailCourseItemLessonItem
                                            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, eum."
                                            duration="34:45"
                                        />
                                    </DetailCourseItemLesson>
                                </DetailCourseItem>
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
                    <Card>
                        <CardHeader>
                            <h2 className="font-bold truncate">Instructor</h2>
                        </CardHeader>
                        <CardBody>
                            <div className="flex sm:items-center space-x-4 justify-between mb-4">
                                <div className="sm:flex sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 min-w-0">
                                    <img
                                        src="https://github.com/shadcn.png"
                                        alt=""
                                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex-shrink-0"
                                    />
                                    <div className="min-w-0">
                                        <Link
                                            to="/"
                                            className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg hover:underline inline-block mb-1"
                                        >
                                            Jonathan
                                        </Link>
                                        <p className="text-neutral-500 text-sm truncate">
                                            Web Developer
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    to="/"
                                    className="btn btn-primary-soft btn-sm ml-auto space-x-2"
                                >
                                    <UserPlus2 size={16} />
                                    <span>Follow</span>
                                </Link>
                            </div>
                            <p className="text-neutral-500 text-sm mb-4">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Dolorem, officia delectus ab
                                aut totam reprehenderit adipisci! Sit error
                                nihil ea.
                            </p>
                            <div className="flex items-center flex-wrap space-y-2 space-x-2 -ml-2 -mt-2 mb-4">
                                <Badge className="first:ml-2 first:mt-2">
                                    <Verified size={16} />
                                    <span>1,432 reviews</span>
                                </Badge>
                                <Badge className="first:ml-2 first:mt-2">
                                    <Star size={16} />
                                    <span>4.8 rating</span>
                                </Badge>
                                <Badge className="first:ml-2 first:mt-2">
                                    <GraduationCap size={16} />
                                    <span>1,654 learners</span>
                                </Badge>
                                <Badge className="first:ml-2 first:mt-2">
                                    <Video size={16} />
                                    <span>94 courses</span>
                                </Badge>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            <h2 className="font-bold truncate">
                                Reviews & Ratings
                            </h2>
                        </CardHeader>
                        <CardBody>
                            <div className="xl:flex xl:space-x-6">
                                <div className="xl:w-56 xl:flex-shrink-0">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <Star
                                            size={18}
                                            className="text-orange-400 fill-orange-400"
                                        />
                                        <span className="font-semibold">
                                            4.6 rating
                                        </span>
                                    </div>
                                    <div className="space-y-3">
                                        <DetailLessonRatingItem
                                            progress="70%"
                                            star={5}
                                            total={1345}
                                        />
                                        <DetailLessonRatingItem
                                            progress="67%"
                                            star={4}
                                            total={983}
                                        />
                                        <DetailLessonRatingItem
                                            progress="54%"
                                            star={3}
                                            total={545}
                                        />
                                        <DetailLessonRatingItem
                                            progress="34%"
                                            star={2}
                                            total={23}
                                        />
                                        <DetailLessonRatingItem
                                            progress="23%"
                                            star={1}
                                            total={4}
                                        />
                                    </div>
                                </div>
                                <div className="w-full min-w-0 divide-y divide-neutral-200 dark:divide-neutral-800 mt-6 border-t border-t-neutral-200 dark:border-t-neutral-800 xl:mt-0 xl:border-t-0">
                                    <DetailCourseReviewItem
                                        image="https://github.com/shadcn.png"
                                        user="Jonathan"
                                        rating={4.7}
                                        created="a day ago"
                                        review="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, consectetur reprehenderit? Ex iste impedit perferendis animi quam minus modi reprehenderit!"
                                    />
                                    <DetailCourseReviewItem
                                        image="https://github.com/shadcn.png"
                                        user="Jonathan"
                                        rating={4.7}
                                        created="a day ago"
                                        review="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, consectetur reprehenderit? Ex iste impedit perferendis animi quam minus modi reprehenderit!"
                                    />
                                    <DetailCourseReviewItem
                                        image="https://github.com/shadcn.png"
                                        user="Jonathan"
                                        rating={4.7}
                                        created="a day ago"
                                        review="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, consectetur reprehenderit? Ex iste impedit perferendis animi quam minus modi reprehenderit!"
                                    />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <div>
                        <h2 className="font-bold mb-2">More Courses</h2>
                        <SearchCourse>
                            <Swiper
                                spaceBetween={16}
                                slidesPerView={1}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 2,
                                        spaceBetween: 24,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                }}
                                className="swiper-space-y"
                            >
                                <SwiperSlide>
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
                                </SwiperSlide>
                                <SwiperSlide>
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
                                </SwiperSlide>
                                <SwiperSlide>
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
                                </SwiperSlide>
                                <SwiperSlide>
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
                                </SwiperSlide>
                            </Swiper>
                        </SearchCourse>
                    </div>
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
                            <ul className="space-y-2 text-neutral-500 text-sm">
                                <CheckListItem>
                                    <span>
                                        Total 13 hours of video lectures
                                    </span>
                                </CheckListItem>
                                <CheckListItem>
                                    <span>12 premium article access</span>
                                </CheckListItem>
                                <CheckListItem>
                                    <span>11 downloadable resources</span>
                                </CheckListItem>
                                <CheckListItem>
                                    <span>
                                        Total 13 hours of video lectures
                                    </span>
                                </CheckListItem>
                                <CheckListItem>
                                    <span>12 premium article access</span>
                                </CheckListItem>
                                <CheckListItem>
                                    <span>11 downloadable resources</span>
                                </CheckListItem>
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
