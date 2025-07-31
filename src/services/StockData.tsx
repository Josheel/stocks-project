import axios from 'axios';
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
    console.log(symbol);
    try{
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
