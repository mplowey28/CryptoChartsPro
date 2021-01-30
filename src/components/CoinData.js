const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="h-2/4 my-20">
          <div>
            <div>
              <span>Market Cap</span>
              <span>{data.market_cap}</span>
            </div>
            <hr />
            <div>
              <span>Total Supply</span>
              <span>{data.total_supply}</span>
            </div>
          </div>
          <div>
            <div>
              <span>Volume (24h)</span>
              <span>{data.total_volume}</span>
            </div>
            <hr />
            <div>
              <span>High (24h)</span>
              <span>{data.high_24h}</span>
            </div>
          </div>
          <div>
            <div>
              <span>Circulating Supply</span>
              <span>{data.circulating_supply}</span>
            </div>
            <hr />
            <div>
              <span>low (24h)</span>
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
