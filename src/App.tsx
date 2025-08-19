import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import StockDetails from './pages/StockDetails';
import Test from './pages/Test';
import { WatchlistProvider } from './contexts/WatchlistContext';

function App() {

  return (
    <WatchlistProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:symbol" element={<StockDetails />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </WatchlistProvider>  
  )
}

export default App
