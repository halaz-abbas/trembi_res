import { apiCall, API_ENDPOINTS } from "./api.js";

export const cartService = {
  // Get cart items
  getCart: async () => {
    return await apiCall(API_ENDPOINTS.CART);
  },

  // Add item to cart
  addToCart: async (itemId, quantity = 1, options = {}) => {
    return await apiCall(API_ENDPOINTS.ADD_TO_CART, {
      method: "POST",
      body: JSON.stringify({
        menu_item_id: itemId,
        quantity,
        options,
      }),
    });
  },

  // Update cart item
  updateCartItem: async (cartItemId, quantity) => {
    return await apiCall(API_ENDPOINTS.UPDATE_CART, {
      method: "PUT",
      body: JSON.stringify({
        cart_item_id: cartItemId,
        quantity,
      }),
    });
  },

  // Remove item from cart
  removeFromCart: async (cartItemId) => {
    return await apiCall(API_ENDPOINTS.REMOVE_FROM_CART, {
      method: "DELETE",
      body: JSON.stringify({
        cart_item_id: cartItemId,
      }),
    });
  },

  // Fetch cart items
  fetchCart: async () => {
    return await apiCall(`${API_ENDPOINTS.CART}`);
  },

  // Clear cart
  clearCart: async () => {
    return await apiCall(`${API_ENDPOINTS.CART}/clear`, {
      method: "DELETE",
    });
  },
};
