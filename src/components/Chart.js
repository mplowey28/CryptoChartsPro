import React, { useEffect, useState, useRef } from "react";
import Chartjs from "chart.js";
import { historyOptions } from "../chartConfigs/chartConfigs";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const Chart = ({ data }) => {
  const chartRef = useRef();
  const {
    day,
    week,
    month,
    sixMonths,
    year,
    fiveYears,
    tenYears,
    detail,
  } = data;
  const [timeSpan, setTimeSpan] = useState();

  const determineTimeSpan = () => {
    switch (timeSpan) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1m":
        return month;
      case "6m":
        return sixMonths;
      case "1y":
        return year;
      case "5y":
        return fiveYears;
      case "10y":
        return tenYears;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      const chartIns = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name}`,
              data: determineTimeSpan(),
              backgroundColor: "rgba(96, 165, 250, 0.5)",
              borderColor: "rgba(96, 165, 250)",
              pointRadius: 0,
              borderWidth: 3,
            },
          ],
        },
        options: { ...historyOptions },
      });
    }
  });

  const renderPrice = () => {
    if (detail) {
      return (
        <div className="grid grid-cols-3 gap-x-1">
          <div className="flex items-center justify-center py-4 ml-2 bg-white bg-opacity-20 border border-gray-100 rounded shadow text-4xl">
            <img className="w-10 mr-2" src={detail.image} alt="" />
            {detail.name}
          </div>
          <div className="bg-white bg-opacity-20 border border-gray-100 rounded shadow text-4xl flex align-center justify-center items-center">
            ${detail.current_price.toFixed(2)}
          </div>

          <span
            className={
              detail.price_change_24h < 0
                ? "text-red-500 mr-2 bg-white bg-opacity-20 border border-gray-100 rounded shadow text-4xl flex align-center justify-center items-center"
                : "text-green-500 mr-2 bg-white bg-opacity-20 border border-gray-100  rounded shadow text-4xl flex align-center justify-center items-center"
            }
          >
            {detail.price_change_24h < 0 ? (
              <IoMdArrowDropdown />
            ) : (
              <IoMdArrowDropup />
            )}
            {detail.price_change_24h.toFixed(2)}
          </span>
        </div>
      );
    }
  };

  return (
    <div className="grid grid-rows-5 my-2 row-start-1 row-span-2">
      <div className="row-start-1 row-span-1">{renderPrice()}</div>
      <div className="row-start-2 row-span-3">
        <canvas ref={chartRef}></canvas>
      </div>
      <div className="grid grid-cols-7 gap-x-1 row-start-5 mx-2">
        <button
          className="bg-white bg-opacity-20 border border-gray-100 rounded shadow hover:opacity-40"
          onClick={() => setTimeSpan("24h")}
        >
          24h
        </button>
        <button
          className="bg-white bg-opacity-20 border border-gray-100 rounded shadow hover:opacity-40"
          onClick={() => setTimeSpan("7d")}
        >
          7d
        </button>
        <button
          className="bg-white bg-opacity-20 border border-gray-100 rounded shadow hover:opacity-40"
          onClick={() => setTimeSpan("1m")}
        >
          1m
        </button>
        <button
          className="bg-white bg-opacity-20 border border-gray-100 rounded shadow hover:opacity-40"
          onClick={() => setTimeSpan("6m")}
        >
          6m
        </button>
        <button
          className="bg-white bg-opacity-20 border border-gray-100 rounded shadow hover:opacity-40"
          onClick={() => setTimeSpan("1y")}
        >
          1y
        </button>
        <button
          className="bg-white bg-opacity-20 border border-gray-100 rounded shadow hover:opacity-40"
          onClick={() => setTimeSpan("5y")}
        >
          5y
        </button>
        <button
          className="bg-white bg-opacity-20 border border-gray-100 rounded shadow hover:opacity-40"
          onClick={() => setTimeSpan("10y")}
        >
          10y
        </button>
      </div>
    </div>
  );
};

export default Chart;
