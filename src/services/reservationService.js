import { apiCall, API_ENDPOINTS } from "./api.js";

export const reservationService = {
  // Create new reservation
  createReservation: async (reservationData) => {
    return await apiCall(API_ENDPOINTS.RESERVATIONS, {
      method: "POST",
      body: JSON.stringify({
        customer_name: reservationData.customer_name,
        customer_phone: reservationData.customer_phone,
        customer_email: reservationData.customer_email,
        date: reservationData.date,
        time: reservationData.time,
        party_size: reservationData.party_size,
        special_requests: reservationData.special_requests,
        restaurant_table_id: reservationData.restaurant_table_id,
        event_type_id: reservationData.event_type_id,
      }),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
  },

  // Get user reservations
  getUserReservations: async () => {
    return await apiCall(API_ENDPOINTS.RESERVATIONS, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
  },

  // Get reservation details
  getReservationDetails: async (reservationId) => {
    return await apiCall(API_ENDPOINTS.RESERVATION_DETAILS(reservationId), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
  },

  // Update reservation
  updateReservation: async (reservationId, reservationData) => {
    return await apiCall(API_ENDPOINTS.RESERVATION_DETAILS(reservationId), {
      method: "PUT",
      body: JSON.stringify(reservationData),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
  },

  // Cancel reservation
  cancelReservation: async (reservationId) => {
    return await apiCall(API_ENDPOINTS.RESERVATION_DETAILS(reservationId), {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
  },

  // Fetch reservations (alias for getUserReservations)
  fetchReservations: async () => {
    return await reservationService.getUserReservations();
  },
};
