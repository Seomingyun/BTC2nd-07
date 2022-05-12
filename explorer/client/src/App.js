import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from './components/navigation';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route exact path = "/" element={<Home></Home>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
