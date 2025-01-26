"use client";
import React, { useState, useRef, forwardRef } from "react";
import Image from "next/image";
import calendar from "@/public/calendar.svg";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { he } from "date-fns/locale";
import { useSelectMonths, useSelectYears } from "./GlobalState";

const CustomDatePicker = forwardRef((props, ref) => (
  <DatePicker {...props} ref={ref} />
));
CustomDatePicker.displayName = "CustomDatePicker";

const MyContainer = ({ children }) => {
  return (
    <CalendarContainer className="custom-calendar-container">
      <div>{children}</div>
    </CalendarContainer>
  );
};

const generateYears = (startYear, count) => {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(startYear + i);
  }
  return arr;
};

const generateMonths = () => {
  let currentMonth = 0;
  const arr = [];
  const now = new Date();
  while (currentMonth < 12) {
    const nextDate = new Date(now.getFullYear(), now.getMonth() + currentMonth);
    const monthInHebrew = nextDate.toLocaleString("he-IL", { month: "long" });
    arr.push({ nextDate, monthInHebrew });
    currentMonth++;
  }
  return arr;
};

export default function CustomCalendar({ startDate, setStartDate }) {
  const dateInputRef = useRef(null);
  const { displaySelectMonths, setDisplaySelectMonths } = useSelectMonths();
  const { displaySelectYears, setDisplaySelectYears } = useSelectYears();
  const [loadedCount, setLoadedCount] = useState(10);

  const [yearsData, setYearsData] = useState(() => {
    const now = new Date();
    const currentYear = now.getFullYear();

    return generateYears(currentYear, 10);
  });

  const loadMoreYears = () => {
    const now = new Date();
    const base = now.getFullYear();

    const more = generateYears(base + loadedCount, 10);
    setYearsData((prev) => [...prev, ...more]);
    setLoadedCount((prev) => prev + 10);
  };

  const MonthsArray = generateMonths();

  const customHeader = ({
    decreaseMonth,
    increaseMonth,
    changeMonth,
    changeYear,
    date,
  }) => {
    const year = date.getFullYear();
    const month = date.toLocaleString("he-IL", { month: "long" });

    const handleScroll = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;

      if (scrollTop + clientHeight >= scrollHeight - 30) {
        loadMoreYears();
      }
    };

    return (
      <div className="flex justify-between items-center pt-4 px-3">
        <div className="flex items-center gap-4 pr-3">
          <button
            onClick={(e) => {
              e.stopPropagation(),
                setDisplaySelectYears(!setDisplaySelectYears),
                setDisplaySelectMonths(!displaySelectMonths);
            }}
            className="text-[#002A78] text-lg font-medium flex relative"
          >
            {month}

            {displaySelectMonths && (
              <div
                className="bg-white border rounded-md absolute top-full left-1/2 transform -translate-x-1/2 mt-1"
                style={{ boxShadow: "0px 4px 4px 1px rgba(0, 0, 0, 0.25)" }}
              >
                {MonthsArray.map((month, index) => (
                  <div
                    key={index}
                    className="text-sm optionsHover py-1 px-3 "
                    onClick={() => {
                      changeMonth(month.nextDate.getMonth());
                    }}
                  >
                    <span>{month.monthInHebrew}</span>
                  </div>
                ))}
              </div>
            )}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation(),
                setDisplaySelectMonths(false),
                setDisplaySelectYears(!displaySelectYears);
            }}
            className=" text-[#002A78] text-lg font-medium flex relative"
          >
            {year}

            {displaySelectYears && (
              <div
                dir="ltr"
                className="bg-white border rounded-md absolute top-full left-1/2 transform -translate-x-1/2 mt-1 max-h-56 overflow-y-auto"
                style={{ boxShadow: "0px 4px 4px 1px rgba(0, 0, 0, 0.25)" }}
                onScroll={handleScroll}
              >
                {yearsData.map((year, index) => (
                  <div
                    key={index}
                    className="text-sm optionsHover py-1 px-4"
                    onClick={() => {
                      changeYear(year);
                    }}
                  >
                    <span>{year}</span>
                  </div>
                ))}
              </div>
            )}
          </button>
        </div>

        <div className="flex gap-2">
          <button>
            <Image
              onClick={decreaseMonth}
              src={"/previousMonth.svg"}
              alt="prevMonth"
              width={15}
              height={15}
            />
          </button>
          <button>
            <Image
              onClick={increaseMonth}
              src={"/nextMonth.svg"}
              alt="nextMonth"
              width={15}
              height={15}
            />
          </button>
        </div>
      </div>
    );
  };

  const handleIconClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.setOpen(true);
    }
  };

  return (
    <div className="inline-flex relative z-0 w-[73%]">
      <CustomDatePicker
        className={`w-full py-2  bg-white rounded-[41px] border-[0.84px] border-[#002A7842] shadow-[0_2.4px_6px_-5.68px] pr-6 pl-5 ${
          startDate ? "text-[#002A78]" : "text-[#002A7887]"
        } `}
        calendarContainer={MyContainer}
        ref={dateInputRef}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        locale={he}
        placeholderText={"DD/MM/YYYY"}
        renderCustomHeader={(props) => customHeader(props)}
      />
      <div onClick={handleIconClick} className="absolute left-5 top-[10px]">
        <Image src={calendar} alt="calendar icon" width={20} height={20} />
      </div>
    </div>
  );
}
