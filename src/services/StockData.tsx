import axios from 'axios';
import { NormalizedStock } from '../types/Stock';
import { ApexSeries, prepareApexSeriesData, UnformattedSeriesData } from '../types/TIME_SERIES'
import { GLOBAL_QUOTE } from '../types/GLOBAL_QUOTE';

const API_BASE = import.meta.env.VITE_API_BASE;

type StockDetails = {
  Name: string;
  Symbol: string;
  DividendYield: string;
  DividendPerShare: string;
  ExDividendDate: string;
  DividendDate: string;
  Exchange: string;
};

export type StockDetailsResponse = {
    Global_Quote: GLOBAL_QUOTE,
    Details: StockDetails; 
}

export async function fetchStockOverview(symbol: string): Promise<StockDetailsResponse | null> {
    try {
        const response = await axios.get<StockDetailsResponse>(`${API_BASE}/stocks/details`, {
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
        const response = await axios.get<NormalizedStock[]>(`${API_BASE}/stocks/search`, {
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

export async function fetchTimeSeriesWeekly(symbol: string): Promise<ApexSeries> {
    try {
        const response = await axios.get<UnformattedSeriesData>(`${API_BASE}/stocks/timeweekly`, {
            params: {
                symbol
            }
        });

        return prepareApexSeriesData(response.data);
    } catch(error) {
        console.error('Error in fetchTimeSeriesWeekly', error);
        return {   
            candlestick: {
              data: []
           },
           line: {
              data: []
           }};
    }
}
