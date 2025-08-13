import { useState } from "react";
import { NormalizedStock } from '../types/Stock';
import StockSearchResult from '../components/StockSearchResult';
import SearchBar from "../components/SearchBar";
import { useWatchlist } from '../contexts/WatchlistContext';


function Home() {
    const [stockData, setStockData] = useState<NormalizedStock[]>([]);
    const { watchlist, removeFromWatchlist } = useWatchlist();

    const stocks = Array.from(watchlist.values());

    return (
        <div className="home">
            <SearchBar setStockData={ setStockData }/>
            { Object.keys(stockData).length !== 0 && <StockSearchResult stockData={stockData} /> }

             <div id="stock-watch-list" className="pt-20">
                <h2 className="text-lg font-semibold mb-2">Your Watchlist</h2>

                {stocks.length === 0 ? (
                    <p className="text-gray-500">No stocks in your watchlist.</p>
                ) : (
                    <ul className="space-y-2">
                    {stocks.map((stock) => (
                        <li key={stock.symbol} className="flex items-center justify-between">
                        <span>{stock.symbol} — {stock.name}</span>
                        <button
                            className="text-red-500 hover:underline"
                            onClick={() => removeFromWatchlist(stock)}
                        >
                            Remove
                        </button>
                        </li>
                    ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Home;