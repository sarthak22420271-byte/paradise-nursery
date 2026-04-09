import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>

        {/* 🌿 Landing Page */}
        <Route
          path="/"
          element={
            <div className="landing-page">
              <div className="landing-content">
                <h1>Paradise Nursery 🌿</h1>
                <p>Your one-stop shop for beautiful houseplants</p>

                {/* Get Started Button */}
                <Link to="/plants">
                  <button>Get Started</button>
                </Link>
              </div>
            </div>
          }
        />

        {/* Other Pages */}
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />

      </Routes>
    </Router>
  );
};

export default App;
