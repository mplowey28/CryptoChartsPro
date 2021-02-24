import { useContext } from "react";
import { WatchListContext } from "../context/watchListContext";
import CoinList from "./CoinList";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Sidebar = () => {
  const { sideBar, toggleSideBar } = useContext(WatchListContext);

  return (
    <>
      <div className="bg-gray-900  h-10 flex justify-between items-center w-screen border-b-4">
        <div className="ml-4 text-4xl bg-transparent">
          <FaArrowRight onClick={toggleSideBar} />
        </div>
        <h1 className={"mr-4"}>CryptoChartsPro</h1>
      </div>
      <nav
        className={
          sideBar
            ? "bg-gray-900 w-screen h-screen flex justify-center fixed -top-0 -left-0 transition duration-350 md:w-2/5 lg:w-1/4"
            : "bg-gray-900 w-screen h-screen flex justify-center fixed -top-0 -left-full transition duration-850"
        }
      >
        <ul className="w-full">
          <li className="bg-gray-900  h-10 flex justify-between items-center border-b-4">
            <div className="ml-4 text-4xl bg-transparent">
              <FaArrowLeft onClick={toggleSideBar} />
            </div>
            <h1 className={"mr-4 md:hidden"}>CryptoChartsPro</h1>
          </li>
          <CoinList />
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
