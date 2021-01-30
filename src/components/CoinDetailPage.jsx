import React, { useEffect, useState, useContext } from "react";
import { WatchListContext } from "../context/watchListContext";
import Chart from "./Chart";
import CoinData from "./CoinData";
import base from "../API/API";
import { CgCloseR } from "react-icons/cg";

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
            days: "30",
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
      return <div>Loading....</div>;
    }
    return (
      <div className="grid grid-rows-3 bg-white bg-opacity-30 border border-gray-800 rounded shadow">
        <CgCloseR onClick={() => deleteCoin(id)} />
        <Chart data={coinData} />
        <CoinData data={coinData.detail} />
      </div>
    );
  };

  return renderData();
};

export default CoinDetailPage;
