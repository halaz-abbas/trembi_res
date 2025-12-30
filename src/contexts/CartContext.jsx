import React, { createContext, useReducer, useContext } from "react";
import { cartService } from "../services/cartService";

const CartContext = createContext();

const initialState = {
  cartItems: [],
  loading: false,
  error: null,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_CART_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_CART_SUCCESS":
      return { ...state, loading: false, cartItems: action.payload };
    case "FETCH_CART_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const fetchCart = async () => {
    dispatch({ type: "FETCH_CART_REQUEST" });
    try {
      const data = await cartService.getCart();
      dispatch({ type: "FETCH_CART_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_CART_FAILURE", payload: error.message });
    }
  };

  return (
    <CartContext.Provider value={{ ...state, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
