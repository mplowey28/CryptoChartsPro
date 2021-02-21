import React, { createContext, useState } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState([]);
  const [sideBar, setSideBar] = useState(true);
  const [searchInput, setSearchInput] = useState("");

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
      value={{
        watchList,
        addCoin,
        deleteCoin,
        sideBar,
        searchInput,
        setSearchInput,
        toggleSideBar,
      }}
    >
      {props.children}
    </WatchListContext.Provider>
  );
};
