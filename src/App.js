import Sidebar from "./components/Sidebar";
import { WatchListContextProvider } from "./context/watchListContext";
import CoinDetailPageContainer from "./components/CoinDetailPageContainer";

const App = () => {
  return (
    <div className="bg-gray-900 flex flex-col h-screen">
      <WatchListContextProvider>
        <Sidebar />
        <CoinDetailPageContainer />
      </WatchListContextProvider>
    </div>
  );
};

export default App;
