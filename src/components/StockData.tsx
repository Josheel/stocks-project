import { Link } from 'react-router-dom';
import { Stock } from '../types/Stock';
import "../css/StockResults.css";

type StockDataProps = {
  stockData: Stock[];
};


const StockData: React.FC<StockDataProps> = ({ stockData }) => {
      return (
        <div className="stock-results">
            {stockData.map((stock) => (
                <Link
                    to={`/${stock['1. symbol']}`}
                    className="stock-result"
                    key={stock['1. symbol']}
                >
                    <h3>
                        {stock['2. name']} ({stock['1. symbol']})
                    </h3>
                </Link>
            ))}
         </div>
    );
}

export default StockData;