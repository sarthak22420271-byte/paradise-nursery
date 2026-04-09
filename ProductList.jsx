import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents" },
  { id: 2, name: "Snake Plant", price: 15, category: "Succulents" },
  { id: 3, name: "Peace Lily", price: 20, category: "Flowering" },
  { id: 4, name: "Spider Plant", price: 12, category: "Air Purifying" },
  { id: 5, name: "Fern", price: 18, category: "Air Purifying" },
  { id: 6, name: "Orchid", price: 25, category: "Flowering" }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>

      {plants.map(p => {
        const inCart = cart.find(i => i.id === p.id);

        return (
          <div key={p.id}>
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button
              disabled={inCart}
              onClick={() => dispatch(addToCart(p))}
            >
              {inCart ? "Added" : "Add to Cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;