import { useContext } from "react";
import { WatchListContext } from "../context/watchListContext";

const Search = () => {
  const { searchInput, setSearchInput } = useContext(WatchListContext);

  const handleChange = (e) => {
    const coin = e.target.value.toLowerCase();
    setSearchInput(coin);
  };

  return (
    <div className="bg-black opacity-80 text-gray-500 border border-gray-500 rounded shadow mb-2 p-2 w-full active:opacity-1 hover:opacity-1 cursor-pointer">
      <input
        onChange={handleChange}
        value={searchInput}
        type="text"
        placeholder="Search..."
        className="opacity-80 active:opacity-100 hover:opacity-100 w-full p-2"
      ></input>
    </div>
  );
};

export default Search;
