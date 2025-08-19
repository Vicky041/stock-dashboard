import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import ThemeContext from "./context/ThemeContext";
import StockContext from "./context/StockContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("AAPL");
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        <Dashboard />
      </StockContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;


// import { useState, useEffect } from "react";

// export default function App() {
//   const [query, setQuery] = useState("AAPL");
//   const [result, setResult] = useState([]);
//   const [key, value] = Object.entries(result)[0] || [];
//   console.log(key, value);

//   useEffect(() => {
//     const abortController = new AbortController();
//     const debounceTimer = setTimeout(() => {
//       async function fetchSearchSymbols() {
//         try {
//           if (!query) {
//             setResult([]);
//             return;
//           }
//           const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${query}&outputsize=full&apikey=${import.meta.env.VITE_API_KEY}`;

//           const res = await fetch(url, { signal: abortController.signal });
//           if (!res.ok) throw new Error(`An error has occurred: ${res.status}`);

//           const data = await res.json();
//           const timeSeries = data["Time Series (Daily)"];
//           setResult(timeSeries || []);
//         } catch (err) {
//           if (err.name !== "AbortError") console.error("Error fetching search symbols:", err);
//         }
//       }
//       fetchSearchSymbols();
//     }, 500);

//     return () => {
//         abortController.abort();
//         clearTimeout(debounceTimer);
//     };
//   }, [query]);


//   return (
//     <div>
//       <h1>Search Results: {Object.entries(result).length}</h1>
//       <ul>
//         {
//           Object.entries(result).map(([date, data]) => (
//             <li key={date}>
//               <strong>{date}</strong>: Open: {data["1. open"]}, High: {data["2. high"]}, Low: {data["3. low"]}, Close: {data["4. close"]}, Volume: {data["5. volume"]}
//             </li>
//           )).slice(0,10)
//         }
//         {/* {result.map((item) => (
//           <li key={item.symbol}></li>
//         ))} */}
//       </ul>
//     </div>
//   );
// }