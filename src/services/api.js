const API_BASE_URL = ""; // Use Vite proxy for API calls

export const ACTIVE_RESTAURANT = {
  restaurant_admin_id: 8,
  slug: "vitae",
};

export const API_ENDPOINTS = {
  // Auth
  LOGIN: "/api/auth/login",
  GOOGLE_LOGIN: "/api/auth/google/login",
  LOGOUT: "/api/auth/logout",
  PROFILE: "/api/auth/profile",
  REGISTER: "/api/auth/register",
  RESEND_VERIFICATION: (email) =>
    `/api/auth/verification-code/resend?email=${email}`,
  VERIFY_EMAIL: "/api/auth/customer/verify",
  UPDATE_PROFILE: "/api/customer-profile/update",

  // Categories
  CATEGORIES: "/api/categories",
  CATEGORY_DETAILS: (id) => `/api/categories/${id}`,

  // Products
  PRODUCTS: "/api/products",
  PRODUCT_DETAILS: (id) => `/api/products/${id}`,

  // Restaurants
  RESTAURANT_SETTINGS: (restaurant_admin_id) =>
    `/api/restaurants/settings?restaurant_admin_id=${restaurant_admin_id}`,
  WORKING_HOURS: (slug) =>
    `/api/restaurant-working-hours?restaurant_slug=${slug}`,
  SLIDERS: (slug) => `/api/sliders?slug=${slug}`,

  // Restaurant Tables
  RESTAURANT_TABLES: "/api/restaurant-tables",

  // Event Types
  EVENT_TYPES: "/api/event-types",

  // Reservations
  RESERVATIONS: "/api/reservations",
  RESERVATION_DETAILS: (id) => `/api/reservations/${id}`,

  // Cart
  CART: "/api/carts",
  CART_ITEM: (id) => `/api/carts/${id}`,

  // Orders
  ORDERS: "/api/orders",
  ORDER_DETAILS: (id) => `/api/orders/${id}`,

  // Coupons
  COUPONS: "/api/coupons",
  CHECK_COUPON: "/api/coupons/check",

  // Delivery
  CALCULATE_DELIVERY: "/api/calculate-delivery",
};

export const apiClient = {
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Language": "ar",
  },
};

export const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    method: "GET",
    ...options,
    headers: {
      ...apiClient.headers,
      ...options.headers,
    },
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();

  if (result.status === true && result.data !== undefined) {
    return result.data;
  }

  if (result.meta?.data) {
    return result.meta.data;
  }

  return result;
};
