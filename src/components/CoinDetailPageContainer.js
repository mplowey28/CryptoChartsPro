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
          ? "flex flex-col flex-grow bg-gray-900 w-full max-h-screen overflow-y-scroll justify-between"
          : "flex flex-col flex-grow bg-gray-900 w-full max-h-screen overflow-y-scroll justify-between md:w-3/5 md:self-end lg:w-3/4"
      }
    >
      {watchList.length > 0 ? (
        watchList.map((coin) => {
          return <CoinDetailPage key={coin} id={coin} />;
        })
      ) : (
        <div className="flex flex-col flex-grow bg-gray-900 w-full h-full"></div>
      )}
      <Footer />
    </ul>
  );
};

export default CoinDetailPageContainer;
