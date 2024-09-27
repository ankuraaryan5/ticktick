"use client";
import React, { useEffect } from "react";
import { useStore } from "./UseStore";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DatePicker = () => {
  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    recurrence,
    customInterval,
    selectedDates,
    setSelectedDates,
  } = useStore();

  const calculateRecurringDates = () => {
    if (!startDate) return [];
    let dates = [];
    let currentDate = new Date(startDate);
    let end = endDate ? new Date(endDate) : new Date();
    while (currentDate <= end) {
      dates.push(currentDate.toISOString().split("T")[0]);
      if (recurrence === "daily") {
        currentDate.setDate(currentDate.getDate() + customInterval);
      } else if (recurrence === "weekly") {
        currentDate.setDate(currentDate.getDate() + customInterval * 7);
      } else if (recurrence === "monthly") {
        currentDate.setMonth(currentDate.getMonth() + customInterval);
      } else if (recurrence === "yearly") {
        currentDate.setFullYear(currentDate.getFullYear() + customInterval);
      }
    }
    setSelectedDates(dates);
  };

  useEffect(() => {
    calculateRecurringDates();
  }, [startDate, endDate, recurrence, customInterval]);

  const handleDateChange = (date) => {
    if (!startDate) {
      const newStartDate = new Date(date);
      newStartDate.setDate(newStartDate.getDate() + 1);
      setStartDate(newStartDate.toISOString().split("T")[0]);
    } else {
      setEndDate(date.toISOString().split("T")[0]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Calendar
        onClickDay={handleDateChange}
        className={"bg-gray-200 text-gray-800 rounded-lg p-2 m-2"}
      />
      <div className="flex flex-col mt-4">
        <div>
          <label htmlFor="start-date">Start Date:</label>
          <input
            id="start-date"
            value={startDate || "Not selected"}
            readOnly
            className="ml-2 border"
          />
        </div>
        <div>
          <label htmlFor="end-date">End Date:</label>
          <input
            id="end-date"
            value={endDate || "Not selected"}
            readOnly
            className="ml-2 border"
          />
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
