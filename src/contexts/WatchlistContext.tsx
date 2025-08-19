import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { NormalizedStock } from '../types/Stock';

type WatchlistContextType = {
  watchlist: Map<string, NormalizedStock>;
  addToWatchlist: (addStock: NormalizedStock) => void;
  removeFromWatchlist: (addStock: NormalizedStock) => void;
};

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export const WatchlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [watchlist, setWatchlist] = useState<Map<string, NormalizedStock>>(() => {
    try {
      const cookie = Cookies.get('watchlist');
      const parsed = cookie ? JSON.parse(cookie) : [];
      return new Map<string, NormalizedStock>(parsed);
    } catch {
      return new Map<string, NormalizedStock>();
    }
  });

  useEffect(() => {
    const serialized = JSON.stringify(Array.from(watchlist.entries()));
    Cookies.set('watchlist', serialized, { expires: 365 });
  }, [watchlist]);

  const addToWatchlist = (stock: NormalizedStock) => {
    setWatchlist((prev) => {
      if (prev.has(stock.symbol) || prev.size >= 10) {
        return prev; // No change needed
      }

      const newWatchlist = new Map<string, NormalizedStock>(prev); // clone the map
      newWatchlist.set(stock.symbol, stock); // safe to mutate the clone
      return newWatchlist; // React sees a new reference
    });
  };

  const removeFromWatchlist = (stock: NormalizedStock) => {
    setWatchlist((prev) => {
    if (!prev.has(stock.symbol)) {
      return prev; // No change needed
    }

    const newWatchlist = new Map<string, NormalizedStock>(prev); // Clone
    newWatchlist.delete(stock.symbol);  // Unset the value
    return newWatchlist;
  });
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = (): WatchlistContextType => {
  const context = useContext(WatchlistContext);
  if (!context) throw new Error('useWatchlist must be used inside WatchlistProvider');
  return context;
};