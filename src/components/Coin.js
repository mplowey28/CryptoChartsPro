import { Link } from "react-router-dom";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const Coin = ({ coin }) => {
  return (
    <Link to={`/${coin.id}`}>
      <li className="bg-white bg-opacity-20 border border-gray-800 rounded shadow mx-2 mb-2 p-2 w-56 hover:opacity-40">
        <div className="flex items-center justify-between">
          <img className="w-10 mr-1" src={coin.image} alt="" />
          {coin.name}
        </div>
        <div className="w-full text-center text-3xl">
          ${coin.current_price.toFixed(2)}
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
          {coin.price_change_percentage_24h.toFixed(2)}%
        </span>
      </li>
    </Link>
  );
};

export default Coin;
