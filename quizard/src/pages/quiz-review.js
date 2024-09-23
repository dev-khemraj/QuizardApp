import React, { useEffect, useState } from "react";
import ReviewPage from "../components/ReviewPage";
import quizData from "../../db.json";
const QuizReview = () => {
    const [quiz, setQuiz] = useState(null);

    useEffect(() => {
        setQuiz(quizData.quizzes[0]); // Use the first quiz
    }, []);

    if (!quiz) {
        return <div className="text-white text-center">Loading...</div>;
    }

    return <ReviewPage quiz={quiz} />;
};

export default QuizReview;
