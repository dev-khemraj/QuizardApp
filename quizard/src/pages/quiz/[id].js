// pages/quiz/[id].js
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const QuizDetails = ({ quiz }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>; // Show loading state if fallback is true
    }

    if (!quiz) {
        return <div>Quiz not found</div>; // Handle case where quiz is not found
    }

    return (
        <>
            <Navbar />
            <div className="p-8 mt-10 text-center">
                <img
                    src='/Images/Questionimages.png'
                    alt='Question Image'
                    className="w-40 h-40 object-cover rounded mx-auto mb-5"
                />


                <h1 className="text-4xl font-bold mb-5">{quiz.title}</h1>
                <p className="text-lg mb-4">{quiz.description}</p>
                <div className="mb-4">
                    <span className="text-md font-semibold">Difficulty Level: </span>
                    <button className="bg-gray-500 text-white py-2 px-4 rounded mr-2">{quiz.difficultyLevel}</button>
                </div>
                <div className="mb-4">
                    <span className="text-md font-semibold">{quiz.questions.length} Questions</span>
                </div>
                <button
                    onClick={() => router.push(`/quiz/${quiz.id}/start`)}

                    className="bg-blue-500 text-white py-2 px-4 rounded mr-2">
                    Play
                </button>
                <button className="bg-green-500 text-white py-2 px-4 rounded">
                    Play with Friends
                </button>
            </div>
            <Footer />
        </>
    );
};

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), 'db.json');
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);

    const paths = data.quizzes.map((quiz) => ({
        params: { id: quiz.id.toString() },
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const filePath = path.join(process.cwd(), 'db.json');
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);

    const quiz = data.quizzes.find((quiz) => quiz.id.toString() === params.id);

    if (!quiz) {
        return {
            notFound: true, // Return 404 if quiz is not found
        };
    }

    return {
        props: {
            quiz,
        },
    };
}

export default QuizDetails;
