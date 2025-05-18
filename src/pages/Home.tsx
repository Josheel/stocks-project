import { useState } from "react";
import { Stock } from '../types/Stock';
import StockData from '../components/StockData';
import SearchBar from "../components/SearchBar";

function Home() {
    const [stockData, setStockData] = useState<Stock[]>([]);
    
    return (
        <div className="home">
            <SearchBar setStockData={ setStockData }/>
            { Object.keys(stockData).length !== 0 && <StockData stockData={stockData} /> }
        </div>
    )
}

export default Home;