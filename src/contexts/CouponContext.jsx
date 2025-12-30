import React, { createContext, useReducer, useContext } from "react";
import { couponService } from "../services/couponService";

const CouponContext = createContext();

const initialState = {
  coupons: [],
  loading: false,
  error: null,
};

const couponReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_COUPONS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_COUPONS_SUCCESS":
      return { ...state, loading: false, coupons: action.payload };
    case "FETCH_COUPONS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const CouponProvider = ({ children }) => {
  const [state, dispatch] = useReducer(couponReducer, initialState);

  const fetchCoupons = async () => {
    dispatch({ type: "FETCH_COUPONS_REQUEST" });
    try {
      const data = await couponService.getCoupons();
      dispatch({ type: "FETCH_COUPONS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_COUPONS_FAILURE", payload: error.message });
    }
  };

  return (
    <CouponContext.Provider value={{ ...state, fetchCoupons }}>
      {children}
    </CouponContext.Provider>
  );
};

export const useCoupon = () => {
  return useContext(CouponContext);
};
