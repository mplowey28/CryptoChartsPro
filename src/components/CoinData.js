const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="flex flex-col m-2">
          <div>
            <div className="flex justify-between">
              <span>Market Cap:</span>
              <span>{data.market_cap}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Supply:</span>
              <span>{data.total_supply}</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span>Volume (24h):</span>
              <span>{data.total_volume}</span>
            </div>

            <div className="flex justify-between">
              <span>High (24h): </span>
              <span>{data.high_24h}</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <span>Circulating Supply: </span>
              <span>{data.circulating_supply}</span>
            </div>

            <div className="flex justify-between">
              <span>Low (24h): </span>
              <span>{data.low_24h}</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
