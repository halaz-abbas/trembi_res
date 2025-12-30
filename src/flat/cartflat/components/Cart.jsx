import React, { useEffect } from "react";
import { useCart } from "../../../contexts/CartContext";

const Cart = () => {
  const { cartItems, loading, error, fetchCart } = useCart();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="cartPage">
      {cartItems.length === 0 ? (
        <div className="emptyCart">Your cart is empty</div>
      ) : (
        <div className="cartContent">
          {cartItems.map((item) => (
            <div key={item.id} className="cartItem">
              <h3>{item.product.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
