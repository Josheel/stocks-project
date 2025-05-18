import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Stock } from '../types/Stock';
import "../css/StockResults.css";

type StockDataProps = {
  stockData: Stock[];
};

const StockData: React.FC<StockDataProps> = ({ stockData }) => {
    return (
        <div className="stock-results">
            {stockData.map((stock) => (
            <div className="stock-result" key={stock['1. symbol']} onClick={(e) => alert(`You clicked on ${stock['1. symbol']}`)} >
                <h3>
                {stock['2. name']} ({stock['1. symbol']})
                </h3>
            </div>
            ))}
         </div>
    );
}

export default StockData;