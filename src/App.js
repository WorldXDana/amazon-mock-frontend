import './App.css';
import NavBar from './Componets/NavBar/Navigation';
import MainPage from './Componets/HomePage/MainPage';
import DisplayContent from './Componets/DisplayContent/DisplayContent';
import PlaceOrder from './Componets/PlaceOrder/PlaceOrder';
import Checkout from './Componets/CheckOut/CheckOut';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
             <NavBar />
                <Routes>            
                  <Route path="" element={<MainPage/>} />
                  <Route path="/display" element={<DisplayContent/>} />
                  <Route path="/checkout" element={<Checkout/>} />
                  <Route path="/order/:id" element={<PlaceOrder/>} />
                </Routes>
      </div>
    </Router>
  );
}

export default App;
