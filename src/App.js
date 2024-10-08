import { useState } from "react";
import Dashboard from "./Components/Dashboard";
import ThemeContext from "./Context/ThemeContext";
import StockContext from "./Context/StockContext";

function App() {
  const [darkMode , setDarkMode] = useState(false);
  const[stockSymbol , setStockSymbol] = useState("FB")
  return (
  <ThemeContext.Provider value={{darkMode, setDarkMode}}>
    <StockContext.Provider value={{stockSymbol , setStockSymbol}}>
    <Dashboard/>
    </StockContext.Provider>
  </ThemeContext.Provider>
    
  );
}

export default App;
