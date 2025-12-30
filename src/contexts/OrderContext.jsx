import React, { createContext, useReducer, useContext } from "react";
import { orderService } from "../services/orderService";

const OrderContext = createContext();

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ORDERS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_ORDERS_SUCCESS":
      return { ...state, loading: false, orders: action.payload };
    case "FETCH_ORDERS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  const fetchOrders = async () => {
    dispatch({ type: "FETCH_ORDERS_REQUEST" });
    try {
      const data = await orderService.getUserOrders();
      dispatch({ type: "FETCH_ORDERS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ORDERS_FAILURE", payload: error.message });
    }
  };

  return (
    <OrderContext.Provider value={{ ...state, fetchOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  return useContext(OrderContext);
};
