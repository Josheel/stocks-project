import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchStockOverview, StockDetailsResponse, fetchTimeSeriesWeekly } from '../services/StockData';
import { ApexSeries } from '../types/TIME_SERIES';
import ApexChart from '../components/ApexChart';
import { ChartType } from '../types/ApexChart';

const StockDetails: React.FC = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const [ stockOverview, setStockOverview] = useState<StockDetailsResponse | null>(null);
  const [ timeSeriesWeekly, setTimeSeriesWeekly] = useState<ApexSeries | null>(null);
  const [ chartType, setChartType] = useState<ChartType>('line');
  const supportedChartOptions: (keyof ApexSeries)[] = [
    'line',
    'candlestick'
  ]

  useEffect(() => {
    if (symbol) {
      fetchStockOverview(symbol).then((data) => {
        setStockOverview(data);
                console.log(data);

      });
      fetchTimeSeriesWeekly(symbol).then((data) => {
        setTimeSeriesWeekly(data);
      })
     
    }
  }, [symbol]);

  return (
    <div>
      <h2>Stock Details</h2>
      {symbol && stockOverview && stockOverview.Details ? (
        <div className="bg-[#0f1115] text-gray-100 p-6 rounded-lg">
          <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
            {supportedChartOptions.map((type) => (
              <button
                key={type}
                onClick={() => setChartType(type)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  backgroundColor: chartType === type ? '#007bff' : '#1c1c1c',
                  color: chartType === type ? '#fff' : '#ccc',
                  cursor: 'pointer'
                }}
              >
                {type}
              </button>
            ))}
          </div>
          <span>{stockOverview.Details.Name} ( {stockOverview.Details.Symbol} )</span> 
          {timeSeriesWeekly ? (           
            <ApexChart ApexSeriesData={ timeSeriesWeekly } chartType={ chartType }/>
          ) : (
            <h1>No Data Available</h1>
          )}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
             <li className="flex justify-between border-b border-dashed border-gray-700 pb-1">
              <span className="text-gray-400 font-semibold">Exchange:</span>
              <span>
                {stockOverview.Details.Exchange}
              </span>
            </li>
            <li className="flex justify-between border-b border-dashed border-gray-700 pb-1">
              <span className="text-gray-400 font-semibold">Dividend Yield:</span>
              <span>{(parseFloat(stockOverview.Details.DividendYield) * 100).toFixed(2)}</span>
            </li>
            <li className="flex justify-between border-b border-dashed border-gray-700 pb-1">
              <span className="text-gray-400 font-semibold">Dividend Amount:</span>
              <span>
                ${stockOverview.Details.DividendPerShare}
              </span>
            </li>
            <li className="flex justify-between border-b border-dashed border-gray-700 pb-1">
              <span className="text-gray-400 font-semibold">Ex Dividend Date:</span>
              <span>{stockOverview.Details.ExDividendDate}</span>
            </li>
            <li className="flex justify-between border-b border-dashed border-gray-700 pb-1">
              <span className="text-gray-400 font-semibold">Dividend Date:</span>
              <span>{stockOverview.Details.DividendDate}</span>
            </li>
             <li className="flex justify-between border-b border-dashed border-gray-700 pb-1">
              <span className="text-gray-400 font-semibold">Price:</span>
              <span>
                ${stockOverview.Global_Quote.price}
              </span>
            </li>
             <li className="flex justify-between border-b border-dashed border-gray-700 pb-1">
              <span className="text-gray-400 font-semibold">Open:</span>
              <span>
                ${stockOverview.Global_Quote.open}
              </span>
            </li>
             <li className="flex justify-between border-b border-dashed border-gray-700 pb-1">
              <span className="text-gray-400 font-semibold">Low:</span>
              <span>
                ${stockOverview.Global_Quote.low}
              </span>
            </li>
             <li className="flex justify-between border-b border-dashed border-gray-700 pb-1">
              <span className="text-gray-400 font-semibold">High:</span>
              <span>
                ${stockOverview.Global_Quote.high}
              </span>
            </li>
          </ul>
        </div>
      ) : (
        <p>No stock symbol provided.</p>
      )}
    </div>
  );
};

export default StockDetails;