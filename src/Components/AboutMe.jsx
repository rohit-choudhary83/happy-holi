import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const AboutMe = () => {
    return (
        <div className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-pink-400 to-yellow-300">
            <div className="absolute inset-0 pointer-events-none flex justify-center items-center overflow-hidden z-0">
                <div className="w-64 h-64 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full opacity-50 animate-pulse mix-blend-multiply"></div>
                <div className="w-48 h-48 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-50 animate-bounce mix-blend-multiply"></div>
                <div className="w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-50 animate-spin-slow mix-blend-multiply"></div>
            </div>

            <h1 className="text-5xl font-extrabold text-white animate-bounce drop-shadow-lg z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500" role="banner">
                About Me
            </h1>

            <div className="flex justify-center mt-8 z-10">
                <Card title="About Me" className="border-4 border-dashed border-pink-500 p-4 bg-white bg-opacity-80 shadow-2xl rounded-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-3">
                    <p className="text-lg text-gray-700 leading-relaxed"><span className="font-bold">Name: </span>Rohit Choudhary</p>
                    <p className="text-lg text-gray-700 leading-relaxed"><span className="font-bold">College: </span>Jijamata Government Polytechnic College, Burhanpur</p>
                    <p className="text-lg text-gray-700 leading-relaxed"><span className="font-bold">Branch: </span>CSE (Computer Science and Engineering) 3rd Year</p>
                    <p className="text-lg text-gray-700 leading-relaxed"><span className="font-bold">District: </span>Burhanpur (M P)</p>
                </Card>
            </div>

            <Link
                to='/'
                className="mt-6 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded transition-colors duration-300 z-10 transform hover:-translate-y-1 hover:scale-105"
            >
                Holi Card
            </Link>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="bg-gradient-to-b from-transparent to-pink-200 absolute inset-0 mix-blend-multiply" />
            </div>
        </div>
    );
};

export default AboutMe;
