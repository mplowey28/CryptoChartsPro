import { useState } from "react";
import { Link } from "react-router-dom";
import CoinList from "./CoinList";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Sidebar = () => {
  const [sidebar, setSideBar] = useState(true);

  const showSidebar = () => setSideBar(!sidebar);
  return (
    <>
      <div className="bg-gray-700  h-10 flex justify-start items-center w-screen">
        <Link to="#" className="ml-4 text-4xl bg-transparent">
          <FaArrowRight onClick={showSidebar} />
        </Link>
      </div>
      <nav
        className={
          sidebar
            ? "bg-gray-700  w-66 h-screen flex justify-center fixed -top-0 -left-0 transition duration-350"
            : "bg-gray-700 w-66 h-screen flex justify-center fixed -top-0 -left-full transition duration-850"
        }
      >
        <ul className="w-full">
          <li className="bg-gray-700  h-10 flex justify-start items-center">
            <Link to="#" className="ml-4 text-4xl bg-transparent">
              <FaArrowLeft onClick={showSidebar} />
            </Link>
          </li>
          <CoinList />
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
