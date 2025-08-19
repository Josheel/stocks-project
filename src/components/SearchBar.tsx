import { useState, useEffect } from "react";
import { fetchSearchResults } from "../services/StockData";
import { NormalizedStock } from '../types/Stock';

type SearchDataProps = {
  setStockData: React.Dispatch<React.SetStateAction<NormalizedStock[]>>;
};

const SearchBar: React.FC<SearchDataProps> = ({ setStockData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  /*
    The purpose of debouncing the serach query is we are not calling the API on every keystroke.
    By adding a short delay the user can enter a few characters before the call is made and
    the search results are displayed for the user. The onChange function in the input will
    call setSearchQuery(), triggering this effect. After the short delay we call setDebouncedQuery
    and pass it the searchQuery, this will trigger the second effect which will fetch the data.

    Something worth noting is that, searchQuery represents the value in the input, so if we 
    trim the input before setting it, ultimately it is capable of removing spaces between
    words. For example, if someone was typing Canadian Natural Resources, and the first
    effect where to fire while they typed space after Canadian, it would remove the space.
    Better to trim on validation rather than on assignment.
  */
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery); 
    }, 500); 

    return () => {
      clearTimeout(handler); 
    };
  }, [searchQuery]); 

  /*
    useEffect cannot be used as a top level async function, so we need to first define another 
    async function inside of it which will retrieve our data and run setStockData, which is
    actually a state used in the parent which will ultimately use the data.
  */
  useEffect(() => {
    const fetchData = async () => {
      if (!debouncedQuery.trim()) {
        setStockData([]);
        return;
      }

      const result = await fetchSearchResults(debouncedQuery.trim());
      setStockData(result);
    };

    fetchData();
  }, [debouncedQuery, setStockData]);

  return (
    <div className="stock-search">
      <input
        type="text"
        placeholder="Search for stock..."
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;