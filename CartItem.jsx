import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // ✅ Total cart amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ✅ Total cart count for navbar
  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div>

      {/* ✅ Navbar */}
      <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#eee" }}>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart 🛒 ({totalItems})</Link>
      </nav>

      <h1>Shopping Cart 🛍️</h1>

      {/* ✅ Empty Cart Case */}
      {cartItems.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <div>
          {cartItems.map(item => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px 0",
                display: "flex",
                alignItems: "center",
                gap: "20px"
              }}
            >
              {/* ✅ Thumbnail */}
              <img src={item.img} alt={item.name} width="80" />

              <div>
                {/* ✅ Name */}
                <h3>{item.name}</h3>

                {/* ✅ Unit Price */}
                <p>Price: ${item.price}</p>

                {/* ✅ Total Price per item */}
                <p>Total: ${item.price * item.quantity}</p>

                {/* ✅ Quantity Controls */}
                <div>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>
                    +
                  </button>

                  <span style={{ margin: "0 10px" }}>
                    {item.quantity}
                  </span>

                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                    -
                  </button>
                </div>

                {/* ✅ Delete Button */}
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  style={{ marginTop: "10px", background: "red", color: "white" }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {/* ✅ Total Cart Amount */}
          <h2>Total Amount: ${totalAmount}</h2>

          {/* ✅ Checkout Button */}
          <button onClick={() => alert("Coming Soon!")}>
            Checkout
          </button>

          {/* ✅ Continue Shopping */}
          <Link to="/plants">
            <button style={{ marginLeft: "10px" }}>
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartItem;
