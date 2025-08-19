import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import StockDetails from './pages/StockDetails';
import { WatchlistProvider } from './contexts/WatchlistContext';

function App() {

  return (
    <WatchlistProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:symbol" element={<StockDetails />} />
      </Routes>
    </WatchlistProvider>  
  )
}

export default App
