import React, { useContext } from "react";
import { WatchListContext } from "../context/watchListContext";
import CoinDetailPage from "./CoinDetailPage";
import Footer from "./Footer";

const CoinDetailPageContainer = () => {
  const { watchList, sideBar } = useContext(WatchListContext);

  return (
    <ul
      className={
        !sideBar
          ? "flex flex-col flex-grow bg-gray-900 w-full h-full justify-between"
          : "flex flex-col flex-grow bg-gray-900 w-full h-full justify-between md:w-3/5 md:self-end lg:w-3/4"
      }
    >
      {watchList.map((coin) => {
        return <CoinDetailPage key={coin} id={coin} />;
      })}
      <Footer />
    </ul>
  );
};

export default CoinDetailPageContainer;
