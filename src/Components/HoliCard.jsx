import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const HoliCard = () => {
    return (
        <div className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-pink-400 to-yellow-300">
            {/* Confetti effect using Tailwind CSS */}
            <div className="absolute inset-0 pointer-events-none flex justify-center items-center overflow-hidden z-0">
                <div className="w-64 h-64 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full opacity-50 animate-pulse mix-blend-multiply"></div>
                <div className="w-48 h-48 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-50 animate-bounce mix-blend-multiply"></div>
                <div className="w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-50 animate-spin-slow mix-blend-multiply"></div>
            </div>

            <h1 className="text-5xl font-extrabold text-white animate-bounce drop-shadow-lg z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500" role="banner">
                Happy Holi!
            </h1>

            <div className="mt-6 z-10">
                <Card title="Festival of Colors" className="border-4 border-dashed border-pink-500 p-4 bg-white bg-opacity-80 shadow-2xl rounded-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-3">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        May your life be filled with vibrant colors of happiness and joy. Wishing you a wonderful Holi!
                    </p>
                    <img
                        src="https://c.ndtvimg.com/2021-03/ep5miu58_happy-holi_625x300_29_March_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"
                        alt="Holi Colors"
                        className="rounded-lg shadow-lg mt-4 transition-transform transform hover:scale-110 hover:rotate-3"
                    />
                </Card>
            </div>

            <Link
                to='/AboutMe'
                className="mt-6 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded transition-colors duration-300 z-10 transform hover:-translate-y-1 hover:scale-105"
            >
                About Me
            </Link>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="bg-gradient-to-b from-transparent to-pink-200 absolute inset-0 mix-blend-multiply" />
            </div>
        </div>
    );
};

export default HoliCard;
