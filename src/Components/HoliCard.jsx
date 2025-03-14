import React from "react";
import Card from "./Card";
import AboutMe from "./AboutMe";


const HoliCard = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-pink-400 to-yellow-300">

            <h1 className="text-5xl font-extrabold text-white animate-bounce drop-shadow-lg">Happy Holi!</h1>

            <div className="mt-6">
                <Card title="Festival of Colors">
                    <p>May your life be filled with vibrant colors of happiness and joy. Wishing you a wonderful Holi!</p>
                    <img
                        src="https://c.ndtvimg.com/2021-03/ep5miu58_happy-holi_625x300_29_March_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"
                        alt="Holi Colors"
                        className="rounded-lg shadow-md mt-4"
                    />

                </Card>
            </div>

            <AboutMe />
        </div>
    );
};

export default HoliCard;
