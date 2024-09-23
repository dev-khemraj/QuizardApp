const Banner = () => {
    return (
        <section className="bg-blue-500 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-5xl font-bold">Play Quiz</h1>
                <p className="mt-4 text-xl">
                    Welcome to Quizard, where knowledge meets fun! Unleash your intellect with our captivating quizzes.
                </p>
                <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold">
                    Start Quiz
                </button>
            </div>
        </section>
    )
}

export default Banner;
