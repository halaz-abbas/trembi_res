import React, { createContext, useReducer, useContext } from "react";
import { reservationService } from "../services/reservationService";

const ReservationContext = createContext();

const initialState = {
  reservations: [],
  loading: false,
  error: null,
};

const reservationReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_RESERVATIONS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_RESERVATIONS_SUCCESS":
      return { ...state, loading: false, reservations: action.payload };
    case "FETCH_RESERVATIONS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ReservationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reservationReducer, initialState);

  const fetchReservations = async (restaurantAdminId) => {
    dispatch({ type: "FETCH_RESERVATIONS_REQUEST" });
    try {
      const data = await reservationService.fetchReservations(
        restaurantAdminId
      );
      dispatch({ type: "FETCH_RESERVATIONS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_RESERVATIONS_FAILURE", payload: error.message });
    }
  };

  return (
    <ReservationContext.Provider value={{ ...state, fetchReservations }}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = () => {
  return useContext(ReservationContext);
};
