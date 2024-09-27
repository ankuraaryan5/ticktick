"use client";
import React, { useEffect } from "react";
import { useStore } from "./UseStore";

const Calendar = () => {
  const {
    recurrence,
    customInterval,
    startDate,
    endDate,
    selectedDates,
    setSelectedDates,
    setEndDate,
  } = useStore();

  useEffect(() => {
    if (startDate) {
      const dates = [];
      let currentDate = new Date(startDate);
      let end = endDate ? new Date(endDate) : new Date();

      if (!endDate) {
        setEndDate(end.toISOString().split("T")[0]);
      }

      while (currentDate <= end) {
        dates.push(new Date(currentDate)); // Create a copy of the date object

        switch (recurrence) {
          case "daily":
            currentDate.setDate(currentDate.getDate() + customInterval);
            break;
          case "weekly":
            currentDate.setDate(currentDate.getDate() + customInterval * 7);
            break;
          case "monthly":
            currentDate.setMonth(currentDate.getMonth() + customInterval);
            break;
          case "yearly":
            currentDate.setFullYear(currentDate.getFullYear() + customInterval);
            break;
          default:
            break;
        }
      }
      setSelectedDates(dates);
    }
  }, [recurrence, customInterval, startDate, endDate, setSelectedDates, setEndDate]);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <label>Preview Recurring Days</label>
      <div className="flex flex-wrap">
        {selectedDates.map((date, index) => (
          <div
            key={index}
            className="bg-gray-200 text-gray-800 rounded-lg p-2 m-1"
          >
            {date.toLocaleDateString()}
            <div>{date.toLocaleDateString("en-US", { weekday: "long" })}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
