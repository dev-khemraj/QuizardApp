import React from "react";

const ReviewPage = ({ quiz }) => {
    return (
        <div className="p-8 bg-blue-900 min-h-screen text-white">
            <h1 className="text-3xl font-bold mb-4">{quiz.title}</h1>
            <p className="text-xl mb-8">{quiz.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {quiz.questions.map((question, index) => (
                    <div
                        key={index}
                        className="bg-blue-800 p-6 rounded-lg shadow-md border border-gray-700"
                    >
                        <h3 className="text-xl font-semibold mb-4">
                            Ques {index + 1}: {question.questionText}
                        </h3>

                        <div className="space-y-2 mb-4">
                            {question.options.map((option, i) => (
                                <div
                                    key={i}
                                    className={`p-3 rounded-lg border ${i === question.correctAnswer
                                            ? "bg-green-700 border-green-500"
                                            : "bg-gray-700 border-gray-500"
                                        } ${i === question.userAnswer && i !== question.correctAnswer
                                            ? "border-red-500"
                                            : ""
                                        }`}
                                >
                                    <span
                                        className={`mr-2 ${i === question.correctAnswer ? "text-green-300" : ""
                                            }`}
                                    >
                                        {String.fromCharCode(65 + i)}.
                                    </span>
                                    {option}
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-400">
                            <span className="flex items-center">⏱ {question.timeTaken}s</span>
                            <span
                                className={`${question.isCorrect ? "text-green-400" : "text-red-400"
                                    }`}
                            >
                                {question.isCorrect ? "Correct" : "Incorrect"}
                            </span>
                        </div>

                        {/* Solution Section */}
                        <div className="mt-4 text-gray-300">
                            <strong>Solution:</strong> {question.solution}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewPage;
