import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plantsData = {
  "Succulents": [
    { id: 1, name: "Aloe Vera", price: 10, img: "https://via.placeholder.com/100" },
    { id: 2, name: "Jade Plant", price: 12, img: "https://via.placeholder.com/100" },
    { id: 3, name: "Echeveria", price: 14, img: "https://via.placeholder.com/100" },
    { id: 4, name: "Haworthia", price: 11, img: "https://via.placeholder.com/100" },
    { id: 5, name: "Sedum", price: 9, img: "https://via.placeholder.com/100" },
    { id: 6, name: "Agave", price: 15, img: "https://via.placeholder.com/100" }
  ],

  "Air Purifying": [
    { id: 7, name: "Snake Plant", price: 15, img: "https://via.placeholder.com/100" },
    { id: 8, name: "Spider Plant", price: 12, img: "https://via.placeholder.com/100" },
    { id: 9, name: "Peace Lily", price: 20, img: "https://via.placeholder.com/100" },
    { id: 10, name: "Areca Palm", price: 18, img: "https://via.placeholder.com/100" },
    { id: 11, name: "Rubber Plant", price: 22, img: "https://via.placeholder.com/100" },
    { id: 12, name: "Bamboo Palm", price: 19, img: "https://via.placeholder.com/100" }
  ],

  "Flowering": [
    { id: 13, name: "Rose", price: 25, img: "https://via.placeholder.com/100" },
    { id: 14, name: "Orchid", price: 30, img: "https://via.placeholder.com/100" },
    { id: 15, name: "Tulip", price: 20, img: "https://via.placeholder.com/100" },
    { id: 16, name: "Daisy", price: 15, img: "https://via.placeholder.com/100" },
    { id: 17, name: "Lily", price: 28, img: "https://via.placeholder.com/100" },
    { id: 18, name: "Marigold", price: 10, img: "https://via.placeholder.com/100" }
  ]
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // Calculate total quantity for cart icon
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>

      {/* ✅ Navbar */}
      <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#eee" }}>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart 🛒 ({totalItems})</Link>
      </nav>

      <h1>Our Plants 🌿</h1>

      {/* ✅ Categories */}
      {Object.entries(plantsData).map(([category, plants]) => (
        <div key={category}>
          <h2>{category}</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {plants.map((plant) => {
              const isInCart = cartItems.find(item => item.id === plant.id);

              return (
                <div
                  key={plant.id}
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    width: "150px",
                    textAlign: "center"
                  }}
                >
                  {/* ✅ Thumbnail */}
                  <img src={plant.img} alt={plant.name} />

                  {/* ✅ Name */}
                  <h4>{plant.name}</h4>

                  {/* ✅ Price */}
                  <p>${plant.price}</p>

                  {/* ✅ Add to Cart Button */}
                  <button
                    onClick={() => dispatch(addToCart(plant))}
                    disabled={isInCart}
                  >
                    {isInCart ? "Added" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
