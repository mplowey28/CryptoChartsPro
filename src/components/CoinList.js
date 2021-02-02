import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
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
      <div className="flex self-center align-center justify-center mt-10">
        <Loader
          type="TailSpin"
          color="white"
          height={50}
          width={50}
          timeout={3000}
        />
      </div>;
    }
    return (
      <ul className="max-h-screen overflow-y-scroll pt-2 px-2 border border-gray-500 rounded">
        {coins.map((coin) => {
          return <Coin key={coin.id} coin={coin} />;
        })}
      </ul>
    );
  };

  return <div>{renderCoins()}</div>;
};

export default CoinList;
