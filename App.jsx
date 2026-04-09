import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  return (
    <BrowserRouter>
      <div className="landing">
        <div>
          <h1>Paradise Nursery</h1>
          <Link to="/plants">
            <button>Get Started</button>
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;