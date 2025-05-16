import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Seed from './pages/seed';
import Solana from './pages/solana';
import Dashboard from './pages/dashboard';
import HomePage from './pages/home';
import Ethereum from './pages/ethereum';

function App() {
  return (
    <div className='bg-gray-900 min-h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/home' element={<HomePage/>}/>
     <Route path="/seed" element={< Seed/>} />
     <Route path="/solana" element={<Solana />} />
     <Route path="/ethereum" element={<Ethereum />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
