import { apiCall, API_ENDPOINTS, ACTIVE_RESTAURANT } from "./api.js";

export const restaurantService = {
  getRestaurantDetails: async () => {
    return await apiCall(
      API_ENDPOINTS.RESTAURANT_SETTINGS(ACTIVE_RESTAURANT.restaurant_admin_id)
    );
  },

  getMenu: async () => {
    return await apiCall(API_ENDPOINTS.PRODUCTS);
  },

  getCategories: async () => {
    return await apiCall(API_ENDPOINTS.CATEGORIES);
  },

  getSliders: async () => {
    return await apiCall(API_ENDPOINTS.SLIDERS(ACTIVE_RESTAURANT.slug));
  },

  getMenuItemDetails: async (itemId) => {
    return await apiCall(API_ENDPOINTS.PRODUCT_DETAILS(itemId));
  },

  getWorkingHours: async () => {
    return await apiCall(API_ENDPOINTS.WORKING_HOURS(ACTIVE_RESTAURANT.slug));
  },

  getRestaurantTables: async () => {
    return await apiCall(API_ENDPOINTS.RESTAURANT_TABLES);
  },

  getEventTypes: async () => {
    return await apiCall(API_ENDPOINTS.EVENT_TYPES);
  },

  // Cart operations
  getCart: async () => {
    return await apiCall(API_ENDPOINTS.CART, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
  },

  addToCart: async (productId, quantity, options = {}) => {
    return await apiCall(API_ENDPOINTS.CART, {
      method: "POST",
      body: JSON.stringify({
        product_id: productId,
        quantity,
        options,
      }),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
  },

  removeFromCart: async (cartId) => {
    return await apiCall(API_ENDPOINTS.CART, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
      body: JSON.stringify({
        cart_id: cartId,
      }),
    });
  },

  updateCart: async (cartId, quantity) => {
    return await apiCall(API_ENDPOINTS.CART, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
      body: JSON.stringify({
        cart_id: cartId,
        quantity,
      }),
    });
  },

  // Order operations
  createOrder: async (orderData) => {
    return await apiCall(API_ENDPOINTS.ORDERS, {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
  },

  getFlatRestaurantDetails: async () => {
    return await apiCall(
      API_ENDPOINTS.RESTAURANT_SETTINGS(ACTIVE_RESTAURANT.restaurant_admin_id)
    );
  },
};
