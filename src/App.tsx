import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import StockDetails from './pages/StockDetails';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/:symbol" element={<StockDetails />} />
    </Routes>
  )
}

export default App
