import { useContext } from "react";
import NumberFormat from "react-number-format";
import { WatchListContext } from "../context/watchListContext";

const CoinData = ({ data }) => {
  const { currency } = useContext(WatchListContext);
  const renderData = () => {
    if (data) {
      return (
        <div className="flex flex-col m-2 p-2 bg-black bg-opacity-20 border border-gray-500 rounded shadow lg:w-1/2 lg:mx-auto xl:w-1/4">
          <div>
            <div className="flex justify-between">
              <span>Low (24h): </span>
              <span>
                <NumberFormat
                  value={data.low_24h}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={currency.symbol}
                />
              </span>
            </div>
            <div className="flex justify-between">
              <span>High (24h): </span>
              <span>
                <NumberFormat
                  value={data.high_24h}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={currency.symbol}
                />
              </span>
            </div>
            <div className="flex justify-between">
              <span> All Time High: </span>
              <span>
                <NumberFormat
                  value={data.ath}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={currency.symbol}
                />
              </span>
            </div>
            <div className="flex justify-between">
              <span> All Time Low: </span>
              <span>
                <NumberFormat
                  value={data.atl}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={currency.symbol}
                />
              </span>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span>Total Volume:</span>
              <span>
                {" "}
                <NumberFormat
                  value={data.total_volume}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </span>
            </div>

            <div className="flex justify-between">
              <span>Total Supply:</span>
              <span>
                <NumberFormat
                  value={data.total_supply}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </span>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span>Circulating Supply: </span>
              <span>
                <NumberFormat
                  value={data.circulating_supply}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </span>
            </div>

            <div className="flex justify-between">
              <span>Market Cap:</span>
              <NumberFormat
                value={data.market_cap}
                displayType={"text"}
                thousandSeparator={true}
                prefix={currency.symbol}
              />
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
