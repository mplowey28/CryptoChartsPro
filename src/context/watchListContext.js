import React, { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState(
    JSON.parse(localStorage.getItem("watchList"))
  );
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

  const addCoin = (coin) => {
    if (!watchList.includes(coin.id)) {
      const newCoinArr = [...watchList, coin.id];
      setWatchList(newCoinArr);
    }
  };

  const deleteCoin = (coin) =>
    setWatchList(watchList.filter((item) => item !== coin));

  const toggleSideBar = () => setSideBar(!sideBar);

  return (
    <WatchListContext.Provider
      value={{ watchList, addCoin, deleteCoin, toggleSideBar, sideBar }}
    >
      {props.children}
    </WatchListContext.Provider>
  );
};
