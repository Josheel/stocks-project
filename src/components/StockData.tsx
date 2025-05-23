import { Link } from 'react-router-dom';
import { NormalizedStock } from '../types/Stock';
import "../css/StockResults.css";

type StockDataProps = {
  stockData: NormalizedStock[];
};


const StockData: React.FC<StockDataProps> = ({ stockData }) => {
      return (
        <div className="stock-results">
            {stockData.map((stock) => (
                <Link
                    to={`/${stock.symbol}`}
                    className="stock-result"
                    key={stock.symbol}
                >
                    <h3>
                        {stock.name} ({stock.symbol})
                    </h3>
                </Link>
            ))}
         </div>
    );
}

export default StockData;