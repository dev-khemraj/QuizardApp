import Slider from 'react-slick';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const QuizCategory = ({ title, quizzes }) => {
    const NextArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 cursor-pointer"
            onClick={onClick}
        >
            <HiChevronRight className="text-3xl text-black" />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 cursor-pointer"
            onClick={onClick}
        >
            <HiChevronLeft className="text-3xl text-black" />
        </div>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="py-10">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-semibold">{title}</h2>
                <Link href="/view-more" legacyBehavior>
                    <a className="text-blue-500">View More</a>
                </Link>
            </div>
            <Slider {...settings}>
                {quizzes.map((quiz, index) => (
                    <Link key={index} href={`/quiz/${quiz.id}`}>
                        <div className="px-2">
                            <div className="relative bg-white shadow-lg rounded-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-200">
                                <div className="relative">
                                    <img
                                        src={quiz.image}
                                        alt={quiz.name}
                                        className="w-full h-40 object-cover"
                                    />
                                    <div className="absolute top-0 left-0 right-0 flex justify-between p-2">
                                        <span className="bg-black text-white text-xs px-2 py-1 rounded">
                                            {quiz.questions} Qs
                                        </span>
                                        <span className="bg-black text-white text-xs px-2 py-1 rounded">
                                            {quiz.plays} Plays
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-center text-red-500">
                                        {quiz.name}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </Slider>
        </section>
    );
};

export default QuizCategory;
