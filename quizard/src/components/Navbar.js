import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-600 text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-2">
                    <Link href="/" legacyBehavior>
                        <a className="hover:text-yellow-500">
                            {/* <img src='/Images/logoquiz.png' className='w-full sm:w-1/4 md:w-1/4 lg:w-1/5 h-50 ' alt='Quiz Logo' /> */}
                            <img src='/Images/logoquiz.png' className='h-12 w-auto' alt='Quiz Logo' />

                            {/* <h1 className="text-2xl font-bold">Quizard</h1> */}
                        </a>
                    </Link>

                    <div className="hidden md:flex space-x-4">
                        <Link href="#" legacyBehavior>
                            <a className="hover:text-yellow-500">Live Quiz</a>
                        </Link>
                        <Link href="#" legacyBehavior>
                            <a className="hover:text-yellow-500">Grade 10</a>
                        </Link>
                        <Link href="#" legacyBehavior>
                            <a className="hover:text-yellow-500">Login</a>
                        </Link>
                        <Link href="#" legacyBehavior>
                            <a className="hover:text-yellow-500">Register</a>
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden">
                        <Link href="#" legacyBehavior>
                            <a className="block py-2 px-4 hover:bg-blue-700">Live Quiz</a>
                        </Link>
                        <Link href="#" legacyBehavior>
                            <a className="block py-2 px-4 hover:bg-blue-700">Grade 10</a>
                        </Link>
                        <Link href="#" legacyBehavior>
                            <a className="block py-2 px-4 hover:bg-blue-700">Login</a>
                        </Link>
                        <Link href="#" legacyBehavior>
                            <a className="block py-2 px-4 hover:bg-blue-700">Register</a>
                        </Link>
                    </div>
                )}
            </div>
        </nav>

    );
};

export default Navbar;
