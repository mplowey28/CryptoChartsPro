import React, { useState, useEffect } from "react";
import base from "../API/API";
import Coin from "./Coin";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await base.get("/coins/markets", {
        params: {
          vs_currency: "usd",
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const renderCoins = () => {
    if (isLoading) {
      <div>Loading...</div>;
    }
    return (
      <ul className="max-h-screen overflow-y-scroll pt-4 px-4">
        {coins.map((coin) => {
          return <Coin key={coin.id} coin={coin} />;
        })}
      </ul>
    );
  };

  return <div>{renderCoins()}</div>;
};

export default CoinList;
