import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';

const QuizQuestions = ({ quiz }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [timeLeft, setTimeLeft] = useState(59);
    const [coins, setCoins] = useState(0);
    const [showCoin, setShowCoin] = useState(false);
    const [coinPosition, setCoinPosition] = useState({ top: 0, left: 0 }); // Track position
    const [isQuestionEntering, setIsQuestionEntering] = useState(true); // Track if question is entering
    const [isQuestionExiting, setIsQuestionExiting] = useState(false); // Track if question is exiting
    const correctAnswerRef = useRef(null); // Ref to the correct answer button
    const router = useRouter();

    // Timer countdown effect
    useEffect(() => {
        if (timeLeft === 0) {
            handleNextQuestion();
        }
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    // Handle option click
    const handleOptionClick = (optionIndex) => {
        setSelectedOption(optionIndex);
        const isAnswerCorrect = quiz.questions[currentQuestionIndex].correctAnswer === optionIndex;
        setIsCorrect(isAnswerCorrect);

        if (isAnswerCorrect && correctAnswerRef.current) {
            const rect = correctAnswerRef.current.getBoundingClientRect();
            setCoinPosition({ top: rect.top, left: rect.left });
            setShowCoin(true); // Trigger the coin animation

            setTimeout(() => {
                setCoins((prevCoins) => prevCoins + 5); // Increase coins after animation
                setShowCoin(false); // Hide the coin after the animation completes
            }, 1000);

        }
    };

    // Move to the next question with animation
    const handleNextQuestion = () => {
        setIsQuestionExiting(true); // Start exiting animation

        setTimeout(() => {
            // After the exit animation completes, load the next question
            if (currentQuestionIndex < quiz.questions.length - 1) {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
                setSelectedOption(null);
                setIsCorrect(null);
                setTimeLeft(59);
                setIsQuestionEntering(true); // Start entering animation
            } else {
                handleSubmitQuiz();
            }
            setIsQuestionExiting(false);
        }, 500); // Duration of exit animation
    };

    // Handle quiz submission
    const handleSubmitQuiz = () => {
        // alert('Quiz submitted');
        router.push('/quiz/results');
    };

    // Get the class for the option to determine color (green for correct, red for incorrect)
    const getOptionClass = (index) => {
        if (selectedOption === null) return '';
        if (selectedOption === index) {
            return isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
        }
        if (!isCorrect && index === quiz.questions[currentQuestionIndex].correctAnswer) {
            return 'bg-green-500 text-white';
        }
        return 'bg-white text-black';
    };

    return (
        <>
            <header className="w-full p-4 flex justify-between items-center mb-2 relative">
                <h1 className="text-2xl font-bold">{quiz?.title}</h1>
                <div className="flex items-center">
                    {showCoin && (
                        <div
                            className="absolute bg-yellow-400 w-8 h-8 rounded-full"
                            style={{
                                top: `${coinPosition.top}px`,
                                left: `${coinPosition.left}px`,
                                animation: 'moveCoin 1s forwards',
                            }}
                        />
                    )}
                    <div className="bg-yellow-400 text-black py-2 px-4 rounded-full ml-2">
                        Coins: {coins}
                    </div>
                </div>
            </header>

            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
                    <div className='mb-5'>

                        <h1 className="absolute left-1/2 transform -translate-x-1/2 bg-purple-600 text-white py-2 px-4 rounded-full text-lg font-semibold">
                            Time left: {timeLeft}s
                        </h1>
                        
                    </div>
                    <h2 className="text-xl font-semibold mt-14 mb-6">{`Question ${currentQuestionIndex + 1} of ${quiz?.questions.length}`}</h2>
                    <div
                        className={`transition-all duration-500 ${isQuestionEntering ? 'slide-in' : ''} ${isQuestionExiting ? 'slide-out' : ''}`}
                    >


                        <h3 className="text-lg mb-4">{quiz?.questions[currentQuestionIndex].questionText}</h3>

                        <div className="space-y-4">
                            {quiz?.questions[currentQuestionIndex].options.map((option, index) => (
                                <button
                                    key={index}
                                    ref={index === quiz?.questions[currentQuestionIndex].correctAnswer ? correctAnswerRef : null}
                                    className={`block w-full py-2 px-4 rounded-lg border-2 ${getOptionClass(index)} transition-colors`}
                                    onClick={() => handleOptionClick(index)}
                                    disabled={selectedOption !== null}
                                >
                                    {String.fromCharCode(65 + index)}. {option}
                                </button>
                            ))}
                        </div>

                        {selectedOption !== null && (
                            <button
                                onClick={handleNextQuestion}
                                className="mt-8 w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg transition-colors"
                            >
                                {currentQuestionIndex < quiz?.questions?.length - 1 ? 'Next Question' : 'Submit Quiz'}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Coin animation styles */}
            <style jsx>{`
                @keyframes moveCoin {
                    0% {
                        top: ${coinPosition.top}px;
                        left: ${coinPosition.left}px;
                    }
                    100% {
                        top: 10px; /* Adjust to your coin box's position */
                        left: calc(100% - 80px); /* Adjust to your coin box's position */
                    }
                }

                  .slide-in {
        transform: translateX(100%); /* Start off-screen to the right */
        animation: slideIn 0.5s forwards; /* Slide in from the right */
    }

    .slide-out {
        transform: translateX(0); /* Start at its position */
        animation: slideOut 0.9s forwards; /* Slide out to the left */
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%); /* Off-screen right */
        }
        to {
            transform: translateX(0); /* End at center */
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0); /* Start at center */
        }
        to {
            transform: translateX(-200%); /* Off-screen left */
        }
    }

    .transition-all {
        transition: transform 0.8s ease-in-out; /* Transition effect */
    }
                    
            `}</style>
        </>
    );
};


// Define getStaticPaths for dynamic pages
export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), 'db.json');
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);

    const paths = data.quizzes.map((quiz) => ({
        params: { id: quiz.id.toString() },
    }));

    return { paths, fallback: true };
}

// Define getStaticProps to pass quiz data
// export async function getStaticProps({ params }) {
//     const filePath = path.join(process.cwd(), 'db.json');
//     const jsonData = fs.readFileSync(filePath);
//     const data = JSON.parse(jsonData);

//     const quiz = data.quizzes.find((quiz) => quiz.id.toString() === params.id);

//     if (!quiz) {
//         return {
//             notFound: true,
//         };
//     }

//     return {
//         props: {
//             quiz,
//         },
//     };
// }

export async function getStaticProps({ params }) {
    const filePath = path.join(process.cwd(), 'db.json');
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);

    const quiz = data.quizzes.find((quiz) => quiz.id.toString() === params.id);

    if (!quiz) {
        return {
            notFound: true, // Return a 404 if quiz data is missing
        };
    }

    return {
        props: {
            quiz,
        },
    };
}


export default QuizQuestions;
