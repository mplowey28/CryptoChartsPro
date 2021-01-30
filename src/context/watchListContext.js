import React, { createContext, useState } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState([]);

  const addCoin = (coin) => {
    const newCoinArr = [...watchList, coin.id];
    setWatchList(newCoinArr);
  };

  const deleteCoin = (coin) =>
    setWatchList(watchList.filter((item) => item !== coin));

  return (
    <WatchListContext.Provider value={{ watchList, addCoin, deleteCoin }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
