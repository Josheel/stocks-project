
type StockKeys = [
  '1. symbol',
  '2. name',
  '3. type',
  '4. region',
  '5. marketOpen',
  '6. marketClose',
  '7. timezone',
  '8. currency',
  '9. matchScore'
];

type Stock = {
  [K in StockKeys[number]]: string;
};

export type NormalizedStock = {
  symbol: string;
  name: string;
  type: string;
  region: string;
  marketOpen: string;
  marketClose: string;
  timezone: string;
  currency: string;
  matchScore: string;
};

export function normalizeStock(stock: Stock): NormalizedStock {
  return {
    symbol: stock["1. symbol"],
    name: stock["2. name"],
    type: stock["3. type"],
    region: stock["4. region"],
    marketOpen: stock["5. marketOpen"],
    marketClose: stock["6. marketClose"],
    timezone: stock["7. timezone"],
    currency: stock["8. currency"],
    matchScore: stock["9. matchScore"]
  };
}

export function normalizeStockList(stocks: Stock[]): NormalizedStock[] {
  return stocks.map(normalizeStock);
}

