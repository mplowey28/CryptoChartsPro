import React, { useContext } from "react";
import { WatchListContext } from "../context/watchListContext";
import CoinDetailPage from "./CoinDetailPage";

const CoinDetailPageContainer = () => {
  const { watchList } = useContext(WatchListContext);

  return (
    <ul className="flex-1 bg-gray-900 w-full h-full">
      {watchList.map((coin) => {
        return <CoinDetailPage key={coin} id={coin} />;
      })}
    </ul>
  );
};

export default CoinDetailPageContainer;
