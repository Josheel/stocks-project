import { Link } from 'react-router-dom';
import { NormalizedStock } from '../types/Stock';
import '../css/StockResults.css';
import './AddToWatchlistIcon';
import AddToWatchlist from './AddToWatchlistIcon';

type StockDataProps = {
  stockData: NormalizedStock[];
};


const StockSearchResults: React.FC<StockDataProps> = ({ stockData }) => {
      return (
        <div className="flex flex-col space-y-4 border border-gray-300 rounded-md p-4">
            {stockData.map((stock) => (
                <Link
                    key={stock.symbol}
                    to={`/${stock.symbol}`}
                    className="block rounded-md p-4 hover:bg-gray-50 transition"
                    >
                    <div className="flex items-start space-x-2">
                        <div className="flex-1 break-words text-left">
                            <h3 className="text-blue-600 font-medium hover:underline">
                                {stock.name} ({stock.symbol})
                            </h3>
                        </div>
                        <AddToWatchlist addStock={stock}/>
                    </div>
                </Link>
            ))}
         </div>
    );
}

export default StockSearchResults;