import axios from 'axios';
import { NormalizedStock } from '../types/Stock';
import { ApexCandleSeries, prepareCandleStickData, UnformattedCandleStickPoint } from '../types/TIME_SERIES'
import { GLOBAL_QUOTE } from '../types/GLOBAL_QUOTE';

type StockDetails = {
  Name: string;
  Symbol: string;
  DividendYield: string;
  DividendPerShare: string;
  ExDividendDate: string;
  DividendDate: string;
  Exchage: string;
};

export type StockDetailsResponse = {
    GlobalQuote: GLOBAL_QUOTE,
    Details: StockDetails; 
}

export async function fetchStockOverview(symbol: string): Promise<StockDetailsResponse | null> {
    try {
        const response = await axios.get<StockDetailsResponse>(`http://localhost:3000/api/stocks/details`, {
            params: {
                symbol 
            }
        });
        return response.data;
    } catch(error) {
        console.error('Error in fetchStockOverview', error);
        return null;
    }   
}

export async function fetchSearchResults(search: string): Promise<NormalizedStock[]> {
    try {
        const response = await axios.get<NormalizedStock[]>('http://localhost:3000/api/stocks/search', {
            params:{
                search
            }
        });
        return response.data;
    } catch(error) {
        console.error('Error in fetchSearchResults', error);
        return [];
    }
}

export async function fetchTimeSeriesWeekly(symbol: string): Promise<ApexCandleSeries> {
    try {
        const response = await axios.get<UnformattedCandleStickPoint[]>('http://localhost:3000/api/stocks/timeweekly', {
            params: {
                symbol
            }
        });

        return prepareCandleStickData(response.data);
    } catch(error) {
        console.error('Error in fetchTimeSeriesWeekly', error);
        return { data: [] };
    }
}
