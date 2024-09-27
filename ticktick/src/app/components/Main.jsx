"use client";
import React, { useState } from "react";
import DatePicker from "./DatePicker";
import Calender from "./Calender";
import Recurrence from "./Recurrence";

const Main = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };
    return (
        <div className={`flex flex-col w-full  items-center justify-center font-sans relative ${darkTheme ? "bg-gray-800 text-gray-200" : "bg-gray-300 text-gray-800"}`}>
            <h1>Date Picker with Recurrence</h1>
            <Recurrence />
            <DatePicker />
            <Calender />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full shadow-xl absolute bottom-4 right-4"
                onClick={toggleTheme}>
            </button>
        </div>
    );
};

export default Main;
