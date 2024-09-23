import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const StartQuiz = () => {
    const [countdown, setCountdown] = useState(3);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (countdown === 0) {
            setTimeout(() => {
                router.push(`/quiz/${id}/questions`);
            }, 1000); // Delay for 1 second before navigating
        }
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => clearInterval(timer); // Clean up the timer
    }, [countdown, id, router]);

    return (
        <div className="flex flex-col items-center justify-center h-screen text-5xl">
            <h1 className="mb-4">Starting in:</h1>
            {countdown > 0 ? (
                <div className="font-bold text-7xl">{countdown}</div>
            ) : (
                <div className="font-bold text-7xl text-green-500">GO!</div>
            )}
        </div>
    );
};

export default StartQuiz;
