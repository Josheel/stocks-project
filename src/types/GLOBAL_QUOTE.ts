type GLOBAL_QUOTE_DATA = {
    "01. symbol": string;
    "02. open": string;
    "03. high": string;
    "04. low": string;
    "05. price": string;
    "06. volume": string;
    "07. latest trading day": string;
    "08. previous close": string;
    "09. change": string;
    "10. change percent": string;
}

export type GLOBAL_QUOTE = {
    symbol: string;
    open: number;
    high: number;
    low: number;
    price: number;
    volume: number;
    latestTradingDay: string; // ISO date string
    previousClose: number;
    change: number;
    changePercent: string; // ex %2.35
}

function GlobalQuote(quote: GLOBAL_QUOTE_DATA): GLOBAL_QUOTE {
  return {
    symbol: quote["01. symbol"],
    open: parseFloat(quote["02. open"]),
    high: parseFloat(quote["03. high"]),
    low: parseFloat(quote["04. low"]),
    price: parseFloat(quote["05. price"]),
    volume: parseInt(quote["06. volume"], 10),
    latestTradingDay: quote["07. latest trading day"],
    previousClose: parseFloat(quote["08. previous close"]),
    change: parseFloat(quote["09. change"]),
    changePercent: quote["10. change percent"]
  };
}

export function getGlobalQuote(quote: GLOBAL_QUOTE_DATA){
    return GlobalQuote(quote);
}