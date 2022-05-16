import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from './components/navigation';
import Home from './pages/home';
import Block from './pages/block';
import Transaction from './pages/transaction';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route exact path = "/" element={<Home></Home>} />
        <Route exact path = "/block" element={<Block></Block>} />
        <Route exact path = "/transaction" element={<Transaction></Transaction>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
