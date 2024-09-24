// pages/leaderboard.js
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ConfettiExplosion from 'react-confetti-explosion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const leaderboardData = [
    { name: 'Alice', image: '/images/Questionimages.png', rank: 1 },
    { name: 'Bob', image: '/images/Questionimages.png', rank: 2 },
    { name: 'Charlie', image: '/images/Questionimages.png', rank: 3 },
];

export default function Leaderboard() {
    const [currentRanker, setCurrentRanker] = useState(-1);
    const [allRankersVisible, setAllRankersVisible] = useState(false);
    const [confettiVisible, setConfettiVisible] = useState(false);

    useEffect(() => {
        const sequence = [2, 1, 0, 3]; // Ranks: 3rd (index 2), 2nd (index 1), 1st (index 0)
        let index = 0;

        const interval = setInterval(() => {
            setCurrentRanker(sequence[index]);
            index++;

            if (index === sequence.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setAllRankersVisible(true);
                    setConfettiVisible(true);
                }, 1000); // Delay confetti after all rankers are visible
            }
        }, 2000); // Delay for each ranker

        return () => clearInterval(interval);
    }, []);

    return (

        <>
            <Navbar />

            <center className='bg-blue-100 items-center justify-center'>
                <h1 className="text-4xl font-bold  text-black pt-5">Leaderboard</h1>
            </center>
            <div className="min-h-screen flex flex-col items-center justify-center  bg-blue-100 relative ">


                {/* Display the top 3 rankers with entrance animations */}
                <div className="relative flex justify-between items-end space-x-16">
                    {/* 3rd Place */}
                    {currentRanker === 2 && (
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 100, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-center"
                            style={{ zIndex: 10 }}
                        >
                            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                                <img src="/images/Questionimages.png" alt="3rd Rank" className="w-24 h-24 mx-auto rounded-full border-4 border-green-400" />

                            </div>
                            <p className="text-green-400 text-lg mt-2">Charlie</p>
                            <p className="text-green-400 text-2xl font-bold">Rank 3</p>
                        </motion.div>
                    )}

                    {/* 2nd Place */}
                    {currentRanker === 1 && (
                        <motion.div
                            initial={{ x: -300, opacity: 0 }}
                            animate={{ x: -100, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-center"
                            style={{ zIndex: 10 }}
                        >
                            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                                <img src="/images/Questionimages.png" alt="2nd Rank" className=" sm:w-24 sm:h-24 w-24 h-24 mx-auto rounded-full border-4 border-sky-300" />

                            </div>
                            <p className="text-sky-300 text-lg mt-2">Bob</p>
                            <p className="text-sky-300 text-2xl font-bold">Rank 2</p>
                        </motion.div>
                    )}

                    {/* 1st Place */}
                    {currentRanker === 0 && (
                        <motion.div
                            initial={{ y: -500, opacity: 0 }}
                            animate={{ y: 50, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-center"
                            style={{ zIndex: 10 }}
                        >
                            <div className="bg-gray-800 p-4 rounded-lg shadow-lg relative" style={{ transform: 'translateY(-50%)' }}>
                                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                    <span className="text-yellow-400 text-6xl">👑</span>
                                </div>
                                <img src="/images/Questionimages.png" alt="1st Rank" className="w-32 h-32 mx-auto rounded-full border-4 border-yellow-500" />

                            </div>
                            <p className="text-yellow-500 text-lg ">Alice</p>
                            <p className="text-yellow-500 text-2xl font-bold">Rank 1</p>
                        </motion.div>
                    )}
                </div>

                {/* showing for all */}
                <div className="relative flex justify-between items-end space-x-5">
                    {/* 3rd Place */}
                    {currentRanker === 3 && (
                        <>
                            {/* 2nd Place */}
                            <motion.div
                                // initial={{ x: -500, opacity: 0 }}
                                // animate={{ x: -100, opacity: 1 }}
                                // transition={{ duration: 1 }}
                                className="text-center"
                                style={{ zIndex: 10 }}
                            >
                                <div className="bg-gray-800 p-2 rounded-lg shadow-md">
                                    <img src="/images/Questionimages.png" alt="2nd Rank" className="w-20 h-20 mx-auto rounded-full border-4 border-sky-300" />

                                </div>
                                <p className="text-sky-300 text-lg mt-2">Bob</p>
                                <p className="text-sky-300 text-2xl font-bold">Rank 2</p>
                            </motion.div>

                            {/* 1st Place */}
                            <motion.div
                                // initial={{ y: -500, opacity: 0 }}
                                // animate={{ y: 120, opacity: 1 }}
                                // transition={{ duration: 1 }}
                                className="text-center"
                                style={{ zIndex: 10 }}
                            >
                                <div className="bg-gray-800 p-2 rounded-lg shadow-lg relative" style={{ transform: 'translateY(-15%)' }}>
                                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                        <span className="text-yellow-400 text-6xl">👑</span>
                                    </div>
                                    <img src="/images/Questionimages.png" alt="1st Rank" className="w-25 h-25 mx-auto rounded-full border-4 border-yellow-500" />

                                </div>
                                <p className="text-yellow-500 text-lg mt-2">Alice</p>
                                <p className="text-yellow-500 text-2xl font-bold">Rank 1</p>
                            </motion.div>


                            <motion.div
                                // initial={{ x: 500, opacity: 0 }}
                                // animate={{ x: 100, opacity: 1 }}
                                // transition={{ duration: 1 }}
                                className="text-center"
                                style={{ zIndex: 10 }}
                            >
                                <div className="bg-gray-800 p-2 rounded-lg shadow-md">
                                    <img src="/images/Questionimages.png" alt="3rd Rank" className="w-20 h-20 mx-auto rounded-full border-4 border-green-400" />

                                </div>
                                <p className="text-green-400 text-lg mt-2">Charlie</p>
                                <p className="text-green-400 text-2xl font-bold">Rank 3</p>
                            </motion.div>


                        </>
                    )}
                </div>


                {/* Confetti explosion after all rankers are in place */}
                {confettiVisible && (
                    <div className="absolute left-0 right-0 bottom-0 top-0 flex justify-center items-center">
                        <ConfettiExplosion force={0.6} duration={10000} width={2000} height={1000} />
                    </div>
                )}

                {/* Display all rankers in a list */}
                {allRankersVisible && (
                    <div className="mt-8 w-full max-w-md">
                        <h2 className="text-2xl font-bold text-gray-500">All Rankers</h2>
                        <ul className="space-y-2 mt-4">
                            {leaderboardData.map((ranker) => (
                                <li key={ranker.rank} className="flex items-center justify-between p-2 bg-white shadow rounded">
                                    <span className="text-gray-500">{ranker.name}</span>
                                    <span className="text-gray-500">Rank: {ranker.rank}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <button className='btn text-gray-500 mt-2'>View More</button>
            </div>
            <Footer />
        </>
    );
}
