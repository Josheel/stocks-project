import { useState } from "react";
import { getStock } from '../services/alpha_vantage_api';
import { NormalizedStock } from '../types/Stock';

type SearchDataProps = {
    setStockData: React.Dispatch<React.SetStateAction<NormalizedStock[]>>;
};

const SearchBar: React.FC<SearchDataProps> = ({ setStockData }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const stockSearch = async (searchQuery : string) => {
        let result: NormalizedStock[] = [];
        setSearchQuery(searchQuery.trim());
        if(searchQuery){
            result = await getStock(searchQuery.trim());
        }
        setStockData(result);
    }

    return (
        <div className="stock-search">  
            <input
                type="text"
                placeholder="Search for stock..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => stockSearch(e.target.value)}
            />
        </div>
    )
}

export default SearchBar;