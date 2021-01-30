import React, { useState, useEffect, useContext } from "react";
import base from "../API/API";
import { WatchListContext } from "../context/watchListContext";
import Coin from "./Coin";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { watchList, deleteCoin } = useContext(WatchListContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await base.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(","),
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };
    if (watchList.length > 0) {
      fetchData();
    } else {
      setCoins([]);
    }
  }, [watchList]);

  const renderCoins = () => {
    if (isLoading) {
      <div>Loading...</div>;
    }
    return (
      <ul className="list-reset max-h-screen overflow-y-scroll px-4 md:px-0">
        {coins.map((coin) => {
          return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />;
        })}
      </ul>
    );
  };

  return <div>{renderCoins()}</div>;
};

export default CoinList;
