import React, { useEffect, useState, useRef, useContext } from "react";
import Chartjs from "chart.js";
import NumberFormat from "react-number-format";
import { historyOptions } from "../chartConfigs/chartConfigs";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { WatchListContext } from "../context/watchListContext";

const Chart = ({ data }) => {
  const { sideBar } = useContext(WatchListContext);

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
              borderWidth: 2,
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
        <div
          className={
            !sideBar
              ? "flex flex-1 flex-col m-1 md:flex-row"
              : "flex flex-1 flex-col m-1 "
          }
        >
          <div className="flex mb-2 py-2 items-center justify-center bg-black bg-opacity-20 border border-gray-500 rounded shadow text-2xl md:flex-grow md:mx-1">
            <img className="w-10 mr-2" src={detail.image} alt="" />
            {detail.name}
          </div>
          <div className="mb-2 py-2 bg-black bg-opacity-20 border border-gray-500 rounded shadow text-2xl flex align-center justify-center items-center md:flex-grow md:mx-1">
            <NumberFormat
              value={detail.current_price.toFixed(2)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>

          <span
            className={
              detail.price_change_24h < 0
                ? " text-red-500  bg-black bg-opacity-20 border border-gray-500 rounded shadow text-2xl flex align-center justify-center items-center md:flex-grow md:mx-1 md:mb-2"
                : "text-green-500  bg-black bg-opacity-20 border border-gray-500 rounded shadow text-2xl flex align-center justify-center items-center md:flex-grow md:mx-1 md:mb-2"
            }
          >
            {detail.price_change_24h < 0 ? (
              <IoMdArrowDropdown color="rgba(239, 68, 68)" />
            ) : (
              <IoMdArrowDropup color="rgba(16, 185, 129)" />
            )}
            <NumberFormat
              value={detail.price_change_24h.toFixed(2)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            <span className="text-white ml-2"> (24h)</span>
          </span>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col">
      <div>{renderPrice()}</div>
      <div className=" py-2 mb-2 mx-2 bg-black bg-opacity-20 border border-gray-500 rounded shadow md:mx-2">
        <canvas ref={chartRef}></canvas>
      </div>
      <div className="flex align-center justify-around md:justify-end">
        <button
          className="w-10 px-1 bg-black bg-opacity-20 border border-gray-500 rounded shadow hover:opacity-40 md:mx-1"
          onClick={() => setTimeSpan("24h")}
        >
          24h
        </button>
        <button
          className="w-10 px-1 bg-black bg-opacity-20 border border-gray-500 rounded shadow hover:opacity-40 md:mx-1"
          onClick={() => setTimeSpan("7d")}
        >
          7d
        </button>
        <button
          className="w-10 px-1 bg-black bg-opacity-20 border border-gray-500 rounded shadow hover:opacity-40 md:mx-1"
          onClick={() => setTimeSpan("1m")}
        >
          1m
        </button>
        <button
          className="w-10 px-1 bg-black bg-opacity-20 border border-gray-500 rounded shadow hover:opacity-40 md:mx-1"
          onClick={() => setTimeSpan("6m")}
        >
          6m
        </button>
        <button
          className=" w-10 px-1 bg-black bg-opacity-20 border border-gray-500 rounded shadow hover:opacity-40 md:mx-1"
          onClick={() => setTimeSpan("1y")}
        >
          1y
        </button>
        <button
          className="w-10 px-1 bg-black bg-opacity-20 border border-gray-500 rounded shadow hover:opacity-40 md:mx-1"
          onClick={() => setTimeSpan("5y")}
        >
          5y
        </button>
        <button
          className="w-10 px-1 bg-black bg-opacity-20 border border-gray-500 rounded shadow hover:opacity-40 md:mx-1"
          onClick={() => setTimeSpan("10y")}
        >
          10y
        </button>
      </div>
    </div>
  );
};

export default Chart;
