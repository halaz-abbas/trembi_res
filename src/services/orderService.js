import { apiCall, API_ENDPOINTS } from "./api.js";

export const orderService = {
  // Create new order
  createOrder: async (orderData) => {
    return await apiCall(API_ENDPOINTS.CREATE_ORDER, {
      method: "POST",
      body: JSON.stringify({
        customer_info: orderData.customerInfo,
        delivery_address: orderData.deliveryAddress,
        payment_method: orderData.paymentMethod,
        items: orderData.items,
        notes: orderData.notes,
      }),
    });
  },

  // Get order details
  getOrderDetails: async (orderId) => {
    return await apiCall(API_ENDPOINTS.ORDER_DETAILS(orderId));
  },

  // Get user orders
  getUserOrders: async () => {
    return await apiCall(API_ENDPOINTS.ORDERS);
  },

  // Update order status (for admin)
  updateOrderStatus: async (orderId, status) => {
    return await apiCall(API_ENDPOINTS.ORDER_DETAILS(orderId), {
      method: "PUT",
      body: JSON.stringify({
        status,
      }),
    });
  },

  // Calculate delivery charges
  calculateDeliveryCharges: async (data) => {
    return await apiCall(API_ENDPOINTS.CALCULATE_DELIVERY, {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};
