import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchStockOverview } from '../services/alpha_vantage_api';

const StockDetails: React.FC = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const [ stockOverview, setStockOverview] = useState<Record<string, string>>({});
    useEffect(() => {
    if (symbol) {
      fetchStockOverview(symbol).then((data) => {
        setStockOverview(data);
        console.log(data);
      });
    }
  }, [symbol]);
  return (
    <div>
      <h2>Stock Details</h2>
      {symbol ? (
          <div>
            <h2>{stockOverview.Name} ({stockOverview.Symbol})</h2>
            <p><em>{stockOverview.Exchange} • {stockOverview.Sector} • {stockOverview.Industry}</em></p>
            <p>{stockOverview.Description}</p>

            <h3>Stock Performance</h3>
            <ul>
              <li><strong>Market Cap:</strong> ${Number(stockOverview.MarketCapitalization).toLocaleString()}</li>
              <li><strong>P/E Ratio:</strong> {stockOverview.PERatio}</li>
              <li><strong>EPS:</strong> {stockOverview.EPS}</li>
              <li><strong>Dividend:</strong> ${stockOverview.DividendPerShare} ({(parseFloat(stockOverview.DividendYield) * 100).toFixed(2)}%)</li>
              <li><strong>Beta:</strong> {stockOverview.Beta}</li>
              <li><strong>52-Week Range:</strong> ${stockOverview['52WeekLow']} - ${stockOverview['52WeekHigh']}</li>
            </ul>

            <h3>Financial Metrics</h3>
            <ul>
              <li><strong>Quarterly Earnings Growth:</strong> {parseFloat(stockOverview.QuarterlyEarningsGrowthYOY).toFixed(2)}%</li>
              <li><strong>Quarterly Revenue Growth:</strong> {parseFloat(stockOverview.QuarterlyRevenueGrowthYOY).toFixed(2)}%</li>
              <li><strong>Operating Margin:</strong> {parseFloat(stockOverview.OperatingMarginTTM).toFixed(2)}%</li>
              <li><strong>Return on Equity:</strong> {parseFloat(stockOverview.ReturnOnEquityTTM).toFixed(2)}%</li>
              <li><strong>Analyst Target Price:</strong> ${stockOverview.AnalystTargetPrice}</li>
            </ul>
          </div>
      ) : (
        <p>No stock symbol provided.</p>
      )}
    </div>
  );
};

export default StockDetails;