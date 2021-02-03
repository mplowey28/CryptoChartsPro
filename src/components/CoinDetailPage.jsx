import React, { useEffect, useState, useContext } from "react";
import { WatchListContext } from "../context/watchListContext";
import Chart from "./Chart";
import CoinData from "./CoinData";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import base from "../API/API";
import { CgCloseR } from "react-icons/cg";
import { IconContext } from "react-icons";

const CoinDetailPage = ({ id }) => {
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { deleteCoin } = useContext(WatchListContext);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [
        day,
        week,
        month,
        sixMonths,
        year,
        fiveYears,
        tenYears,
        detail,
      ] = await Promise.all([
        base.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        base.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "7",
          },
        }),
        base.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "31",
          },
        }),
        base.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "182",
          },
        }),
        base.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "365",
          },
        }),
        base.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "1825",
          },
        }),
        base.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "3650",
          },
        }),
        base.get("/coins/markets/", {
          params: {
            vs_currency: "usd",
            ids: id,
          },
        }),
      ]);

      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        month: formatData(month.data.prices),
        sixMonths: formatData(sixMonths.data.prices),
        year: formatData(year.data.prices),
        fiveYears: formatData(fiveYears.data.prices),
        tenYears: formatData(tenYears.data.prices),
        detail: detail.data[0],
      });
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  const renderData = () => {
    if (isLoading) {
      return (
        <div className="flex self-center align-center justify-center mt-10">
          <Loader
            type="TailSpin"
            color="white"
            height={50}
            width={50}
            timeout={3000}
          />
        </div>
      );
    }
    return (
      <IconContext.Provider value={{ color: "red", size: "50px" }}>
        <div className="flex flex-col h-auto bg-black bg-opacity-30 border border-gray-500 rounded shadow m-2">
          <div className={"flex mt-2 mx-2 justify-end"}>
            <CgCloseR
              className="cursor-pointer"
              onClick={() => deleteCoin(id)}
            />
          </div>
          <Chart data={coinData} />
          <CoinData data={coinData.detail} />
        </div>
      </IconContext.Provider>
    );
  };

  return renderData();
};

export default CoinDetailPage;
