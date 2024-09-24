import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

const QuizResults = () => {


    const router = useRouter();

    const handleShareScore = () => {
        router.push('/share-score'); // Replace with your actual route
    };

    const handleReviewQuestions = () => {
        router.push('/quiz-review'); // Replace with your actual route
    };

    const handleLeaderboard = () => {
        router.push('/leaderboard'); // Replace with your actual route
    };
    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-blue-900 text-white flex flex-col items-center justify-center py-2">
                <h1 className="text-3xl font-bold mb-2">Real Number Quiz 1</h1>

                <div className="grid grid-cols-2 gap-4 w-full max-w-3xl bg-gray-800 p-4 rounded-lg">
                    {/* Coin Earned */}
                    <div className="bg-gray-700 p-2 rounded-lg flex items-center">
                        <div className="text-yellow-400 text-2xl mr-4">🪙</div>
                        <div className="text-left">
                            <p>Coin Earned</p>
                            <p className="text-2xl font-bold">20</p>
                        </div>
                    </div>

                    {/* Your Score */}
                    <div className="bg-gray-700 p-2 rounded-lg flex items-center">
                        <div className="text-yellow-400 text-2xl mr-4">🏆</div>
                        <div className="text-left">
                            <p>Your Score</p>
                            <p className="text-2xl font-bold">20</p>
                        </div>
                    </div>

                    {/* Correct */}
                    <div className="bg-gray-700 p-2 rounded-lg flex items-center">
                        <div className="text-green-400 text-2xl mr-4">✔️</div>
                        <div className="text-left">
                            <p>Correct</p>
                            <p className="text-2xl font-bold">5</p>
                        </div>
                    </div>

                    {/* Incorrect */}
                    <div className="bg-gray-700 p-2 rounded-lg flex items-center">
                        <div className="text-red-400 text-2xl mr-4">❌</div>
                        <div className="text-left">
                            <p>Incorrect</p>
                            <p className="text-2xl font-bold">10</p>
                        </div>
                    </div>

                    {/* Percentage */}
                    <div className="bg-gray-700 p-2 rounded-lg flex items-center">
                        <div className="text-red-400 text-2xl mr-4">📊</div>
                        <div className="text-left">
                            <p>Percentage</p>
                            <p className="text-2xl font-bold">33%</p>
                        </div>
                    </div>

                    {/* Time Spent */}
                    <div className="bg-gray-700 p-2 rounded-lg flex items-center">
                        <div className="text-blue-400 text-2xl mr-4">⏱️</div>
                        <div className="text-left">
                            <p>Time Spent</p>
                            <p className="text-2xl font-bold">36 sec</p>
                        </div>
                    </div>

                    {/* Unattempted */}
                    <div className="bg-gray-700 p-2 rounded-lg flex items-center">
                        <div className="text-gray-400 text-2xl mr-4">➖</div>
                        <div className="text-left">
                            <p>Unattempted</p>
                            <p className="text-2xl font-bold">0</p>
                        </div>
                    </div>

                    {/* Time/Ques */}
                    <div className="bg-gray-700 p-2 rounded-lg flex items-center">
                        <div className="text-blue-400 text-2xl mr-4">⏳</div>
                        <div className="text-left">
                            <p>Time/Ques</p>
                            <p className="text-2xl font-bold">2 sec</p>
                        </div>
                    </div>

                    {/* Live Rank */}
                    <div className="bg-gray-700 p-2 rounded-lg flex items-center col-span-2">
                        <div className="text-orange-400 text-2xl mr-4">🥇</div>
                        <div className="text-left">
                            <p>Live Rank</p>
                            <p className="text-2xl font-bold">545</p>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 w-full max-w-3xl flex justify-between space-x-4">
                    <button
                        onClick={handleShareScore}
                        className="flex-grow bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
                    >
                        Share Score
                    </button>
                    <button
                        onClick={handleReviewQuestions}
                        className="flex-grow bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
                    >
                        Review Questions
                    </button>

                </div>
                <div className="mt-4 w-full max-w-3xl flex justify-between space-x-4">
                    <button
                        onClick={handleLeaderboard}
                        className="flex-grow bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
                    >
                        Leaderboard
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default QuizResults;
