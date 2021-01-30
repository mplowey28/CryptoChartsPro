import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { WatchListContextProvider } from "./context/watchListContext";
import CoinDetailPage from "./components/CoinDetailPage.jsx";

const App = () => {
  return (
    <div className="bg-gray-700 flex flex-col h-screen">
      <WatchListContextProvider>
        <Router>
          <Sidebar />
          <Route path="/:id" component={CoinDetailPage}></Route>
        </Router>
      </WatchListContextProvider>
    </div>
  );
};

export default App;
