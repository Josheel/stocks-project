import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchStockOverview, StockDetailsResponse } from '../services/StockData';

const StockDetails: React.FC = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const [ stockOverview, setStockOverview] = useState<StockDetailsResponse | null>(null);

  useEffect(() => {
    if (symbol) {
      fetchStockOverview(symbol).then((data) => {
        console.log(data);
        setStockOverview(data);
      });
    }
  }, [symbol]);

  return (
    <div>
      <h2>Stock Details</h2>
      {symbol && stockOverview && stockOverview.Details ? (
        <div className="bg-[#0f1115] text-gray-100 p-6 rounded-lg">
          <span>{stockOverview.Details.Name} (stockOverview.Symbol)</span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
            <li className="flex justify-between border-b border-dashed border-gray-700 pb-1">
              <span className="text-gray-400 font-semibold">Dividend Yield:</span>
              <span>{stockOverview.Details.DividendYield}</span>
            </li>
            <li className="flex justify-between border-b border-dashed border-gray-700 pb-1">
              <span className="text-gray-400 font-semibold">Dividend:</span>
              <span>
                ${stockOverview.Details.DividendPerShare} (
                {(parseFloat(stockOverview.Details.DividendYield) * 100).toFixed(2)}%)
              </span>
            </li>
            <li className="flex justify-between border-b border-dashed border-gray-700 pb-1">
              <span className="text-gray-400 font-semibold">Ex Dividend Date:</span>
              <span>{stockOverview.Details.ExDividendDate}</span>
            </li>
            <li className="flex justify-between border-b border-dashed border-gray-700 pb-1">
              <span className="text-gray-400 font-semibold">Dividend Date:</span>
              <span>{stockOverview.Details.DividendDate}</span>
            </li>
          </ul>
        </div>
      ) : (
        <p>No stock symbol provided.</p>
      )}
    </div>
  );
};

export default StockDetails;