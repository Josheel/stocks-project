import { useWatchlist } from '../contexts/WatchlistContext';
import StarIcon from '../assets/star-icon.svg?react';
import FilledStarIcon from '../assets/star-filled-icon.svg?react';
import { NormalizedStock } from '../types/Stock';

type StockDataProps = {
  addStock: NormalizedStock;
};

const AddToWatchlist: React.FC<StockDataProps> = ({ addStock }) => {
    const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
    const isFavorite = watchlist.has(addStock.symbol);

    const toggle = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        isFavorite ? removeFromWatchlist(addStock) : addToWatchlist(addStock);
    };

    return (
        <button 
            onClick={toggle}
            aria-label="Add to watchlist"
            className="p-0 bg-transparent border-none focus:outline-none">

           {isFavorite ? (
                <FilledStarIcon className="w-5 h-5" fill="gold" />
                ) : (
                <StarIcon className="w-5 h-5" fill="gold" />
            )}
        </button>
    )
}

export default AddToWatchlist;
