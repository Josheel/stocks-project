import { useParams } from 'react-router-dom';

const StockDetails: React.FC = () => {
  const { symbol } = useParams<{ symbol: string }>();

  return (
    <div>
      <h2>Stock Details</h2>
      {symbol ? (
        <p>Showing details for <strong>{symbol}</strong></p>
      ) : (
        <p>No stock symbol provided.</p>
      )}
    </div>
  );
};

export default StockDetails;