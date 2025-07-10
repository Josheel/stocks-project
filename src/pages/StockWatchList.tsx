import { useWatchlist } from '../contexts/WatchlistContext';

function StockWatchList() {
  const { watchlist, removeFromWatchlist } = useWatchlist();

  const stocks = Array.from(watchlist.values());

  return (
    <div id="stock-watch-list">
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
  );
}

export default StockWatchList;