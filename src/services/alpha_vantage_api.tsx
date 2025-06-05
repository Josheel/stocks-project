import { NormalizedStock, normalizeStockList } from '../types/Stock';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://www.alphavantage.co/';

export async function getStock(symbol: string): Promise<NormalizedStock[]> {
    let url: string = `${BASE_URL}/query?function=SYMBOL_SEARCH&keywords=${encodeURIComponent(symbol)}&apikey=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('API error: ${response.status');
    }
    const data = await response.json();
    return normalizeStockList(data['bestMatches']);
}

export async function fetchStockOverview(symbol: string) {
  const API_KEY = "your_api_key_here";
  const res = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`);
  const data = await res.json();
  return data;
}

let cnq = [
    {
        "1. symbol": "CNQ",
        "2. name": "Canadian Natural Resources Ltd",
        "3. type": "Equity",
        "4. region": "United States",
        "5. marketOpen": "09:30",
        "6. marketClose": "16:00",
        "7. timezone": "UTC-04",
        "8. currency": "USD",
        "9. matchScore": "1.0000"
    },
    {
        "1. symbol": "CNQT",
        "2. name": "Continental Capital Equities Inc",
        "3. type": "Equity",
        "4. region": "United States",
        "5. marketOpen": "09:30",
        "6. marketClose": "16:00",
        "7. timezone": "UTC-04",
        "8. currency": "USD",
        "9. matchScore": "0.8571"
    },
    {
        "1. symbol": "CNQQF",
        "2. name": "Clean TeQ Water Ltd",
        "3. type": "Equity",
        "4. region": "United States",
        "5. marketOpen": "09:30",
        "6. marketClose": "16:00",
        "7. timezone": "UTC-04",
        "8. currency": "USD",
        "9. matchScore": "0.7500"
    },
    {
        "1. symbol": "CNQ.TRT",
        "2. name": "Canadian Natural Resources Ltd",
        "3. type": "Equity",
        "4. region": "Toronto",
        "5. marketOpen": "09:30",
        "6. marketClose": "16:00",
        "7. timezone": "UTC-05",
        "8. currency": "CAD",
        "9. matchScore": "0.6667"
    }
];

let cnqOverview = {
    "Symbol": "CNQ",
    "AssetType": "Common Stock",
    "Name": "Canadian Natural Resources Ltd",
    "Description": "Canadian Natural Resources Limited acquires, explores, develops, produces, markets and sells crude oil, natural gas and natural gas liquids (NGL). The company is headquartered in Calgary, Canada.",
    "CIK": "1017413",
    "Exchange": "NYSE",
    "Currency": "USD",
    "Country": "USA",
    "Sector": "ENERGY & TRANSPORTATION",
    "Industry": "CRUDE PETROLEUM & NATURAL GAS",
    "Address": "2100, 855-2 STREET SW, CALGARY ALBERTA CANADA, AB, CA",
    "OfficialSite": "https://www.cnrl.com",
    "FiscalYearEnd": "December",
    "LatestQuarter": "2025-03-31",
    "MarketCapitalization": "64326492000",
    "EBITDA": "18141999000",
    "PERatio": "12.05",
    "PEGRatio": "12.75",
    "BookValue": "19.28",
    "DividendPerShare": "2.2",
    "DividendYield": "0.0556",
    "EPS": "2.55",
    "RevenuePerShareTTM": "18.13",
    "ProfitMargin": "0.198",
    "OperatingMarginTTM": "0.302",
    "ReturnOnAssetsTTM": "0.0876",
    "ReturnOnEquityTTM": "0.19",
    "RevenueTTM": "38351000000",
    "GrossProfitTTM": "19203000000",
    "DilutedEPSTTM": "2.55",
    "QuarterlyEarningsGrowthYOY": "1.543",
    "QuarterlyRevenueGrowthYOY": "0.327",
    "AnalystTargetPrice": "35.19",
    "AnalystRatingStrongBuy": "6",
    "AnalystRatingBuy": "8",
    "AnalystRatingHold": "7",
    "AnalystRatingSell": "0",
    "AnalystRatingStrongSell": "0",
    "TrailingPE": "12.05",
    "ForwardPE": "12.74",
    "PriceToSalesRatioTTM": "1.677",
    "PriceToBookRatio": "2.216",
    "EVToRevenue": "2.384",
    "EVToEBITDA": "6.08",
    "Beta": "1.519",
    "52WeekHigh": "37.0",
    "52WeekLow": "24.65",
    "50DayMovingAverage": "29.5",
    "200DayMovingAverage": "32.02",
    "SharesOutstanding": "2093280000",
    "DividendDate": "2025-07-03",
    "ExDividendDate": "2025-06-13"
};