import React, { useContext } from "react";
import { WatchListContext } from "../context/watchListContext";
import CoinDetailPage from "./CoinDetailPage";

const CoinDetailPageContainer = () => {
  const { watchList } = useContext(WatchListContext);
  return (
    <ul>
      {watchList.map((coin) => {
        return <CoinDetailPage key={coin} id={coin} />;
      })}
    </ul>
  );
};

export default CoinDetailPageContainer;
