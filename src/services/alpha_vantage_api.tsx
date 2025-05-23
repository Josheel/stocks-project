import { NormalizedStock, normalizeStockList } from '../types/Stock';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://www.alphavantage.co/';


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

export async function getStock(symbol: string): Promise<NormalizedStock[]> {
    let url: string = `${BASE_URL}/query?function=SYMBOL_SEARCH&keywords=${encodeURIComponent(symbol)}&apikey=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('API error: ${response.status');
    }
    const data = await response.json();
    return normalizeStockList(data['bestMatches']);
} 
