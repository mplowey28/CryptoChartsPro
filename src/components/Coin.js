import React, { useContext } from "react";
import NumberFormat from "react-number-format";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { WatchListContext } from "../context/watchListContext";

const Coin = ({ coin }) => {
  const { addCoin, toggleSideBar } = useContext(WatchListContext);
  return (
    <li
      onClick={() => {
        addCoin(coin);
        toggleSideBar();
      }}
      className="bg-black bg-opacity-20 border border-gray-500 rounded shadow mb-2 p-2 w-full active:opacity-40 hover:opacity-40 cursor-pointer"
    >
      <div className="flex items-center justify-center my-1">
        <img className="w-10 mr-4" src={coin.image} alt="" />
        {coin.name}
      </div>
      <div className="w-full text-center text-3xl">
        <NumberFormat
          value={
            coin.current_price < 1
              ? coin.current_price.toFixed(6)
              : coin.current_price.toFixed(2)
          }
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
      <span
        className={
          coin.price_change_percentage_24h < 0
            ? "flex align-center justify-center items-center text-red-500 w-full text-center text-2xl"
            : "flex align-center justify-center items-center text-green-500 w-full text-center text-2xl"
        }
      >
        {coin.price_change_percentage_24h < 0 ? (
          <IoMdArrowDropdown />
        ) : (
          <IoMdArrowDropup />
        )}
        <NumberFormat
          value={coin.price_change_percentage_24h.toFixed(2)}
          displayType={"text"}
          thousandSeparator={true}
          suffix={"%"}
        />
      </span>
    </li>
  );
};

export default Coin;
