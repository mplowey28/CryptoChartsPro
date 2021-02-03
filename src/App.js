import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { WatchListContextProvider } from "./context/watchListContext";
import CoinDetailPageContainer from "./components/CoinDetailPageContainer";

const App = () => {
  return (
    <div className="bg-gray-900 flex flex-col h-screen">
      <WatchListContextProvider>
        <Router>
          <Sidebar />
          <Route component={CoinDetailPageContainer}></Route>
        </Router>
      </WatchListContextProvider>
    </div>
  );
};

export default App;
