// Professional Data Management System for TermBi
// Based on Postman Collection API endpoints

import { api } from './api.js';

// Centralized API endpoints configuration
export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: '/auth/login',
    GOOGLE_LOGIN: '/auth/google/login',
    LOGOUT: '/auth/logout',
    PROFILE: '/auth/profile',
    REGISTER: '/auth/register',
    VERIFY_EMAIL: '/auth/customer/verify',
    RESEND_VERIFICATION: '/auth/verification-code/resend',
    UPDATE_PROFILE: '/customer-profile/update'
  },

  // Categories endpoints
  CATEGORIES: {
    INDEX: '/categories',
    SHOW: (id) => `/categories/${id}`
  },

  // Products endpoints
  PRODUCTS: {
    INDEX: '/products',
    SHOW: (id) => `/products/${id}`
  },

  // Restaurants endpoints
  RESTAURANTS: {
    SETTINGS: '/restaurants/settings',
    WORKING_HOURS: '/restaurant-working-hours',
    SLIDERS: '/sliders',
    TABLES: '/restaurant-tables'
  },

  // Reservations endpoints
  RESERVATIONS: {
    INDEX: '/reservations',
    STORE: '/reservations'
  },

  // Cart endpoints
  CART: {
    INDEX: '/carts',
    STORE: '/carts',
    UPDATE: (id) => `/carts/${id}`,
    DELETE: (id) => `/carts/${id}`
  },

  // Orders endpoints
  ORDERS: {
    INDEX: '/orders',
    SHOW: (id) => `/orders/${id}`,
    STORE: '/orders',
    CALCULATE_DELIVERY: '/calculate-delivery'
  },

  // Coupons endpoints
  COUPONS: {
    INDEX: '/coupons',
    CHECK: '/coupons/check'
  },

  // Event Types endpoints
  EVENT_TYPES: {
    INDEX: '/event-types'
  }
};

// Professional Data Service Class
export class DataService {
  constructor() {
    this.cache = new Map();
    this.cacheTimeout = 5 * 60 * 1000; // 5 minutes
  }

  // Generic API request handler with error handling
  async makeRequest(endpoint, options = {}) {
    try {
      const response = await api.request({
        url: endpoint,
        method: options.method || 'GET',
        data: options.data,
        params: options.params,
        headers: options.headers
      });

      return {
        success: true,
        data: response.data,
        message: response.data?.message || 'Success'
      };
    } catch (error) {
      console.error(`API Error [${endpoint}]:`, error);

      return {
        success: false,
        error: error.response?.data?.message || error.message || 'Unknown error',
        status: error.response?.status,
        data: null
      };
    }
  }

  // Cache management
  setCache(key, data) {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  getCache(key) {
    const cached = this.cache.get(key);
    if (cached && (Date.now() - cached.timestamp) < this.cacheTimeout) {
      return cached.data;
    }
    this.cache.delete(key);
    return null;
  }

  clearCache() {
    this.cache.clear();
  }
}

// Auth Service
export class AuthService extends DataService {
  async login(credentials) {
    const result = await this.makeRequest(API_ENDPOINTS.AUTH.LOGIN, {
      method: 'POST',
      data: credentials
    });

    if (result.success && result.data?.data?.token) {
      localStorage.setItem('auth_token', result.data.data.token);
    }

    return result;
  }

  async logout() {
    const result = await this.makeRequest(API_ENDPOINTS.AUTH.LOGOUT);
    if (result.success) {
      localStorage.removeItem('auth_token');
    }
    return result;
  }

  async getProfile() {
    return this.makeRequest(API_ENDPOINTS.AUTH.PROFILE);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  isAuthenticated() {
    return !!this.getToken();
  }
}

// Categories Service
export class CategoriesService extends DataService {
  async getCategories(params = {}) {
    const cacheKey = `categories_${JSON.stringify(params)}`;
    const cached = this.getCache(cacheKey);

    if (cached) {
      return { success: true, data: cached };
    }

    const result = await this.makeRequest(API_ENDPOINTS.CATEGORIES.INDEX, {
      params
    });

    if (result.success) {
      this.setCache(cacheKey, result.data);
    }

    return result;
  }
}

// Products Service
export class ProductsService extends DataService {
  async getProducts(params = {}) {
    const cacheKey = `products_${JSON.stringify(params)}`;
    const cached = this.getCache(cacheKey);

    if (cached) {
      return { success: true, data: cached };
    }

    const result = await this.makeRequest(API_ENDPOINTS.PRODUCTS.INDEX, {
      params
    });

    if (result.success) {
      this.setCache(cacheKey, result.data);
    }

    return result;
  }
}

// Restaurants Service
export class RestaurantsService extends DataService {
  async getSliders(params = {}) {
    const cacheKey = `sliders_${JSON.stringify(params)}`;
    const cached = this.getCache(cacheKey);

    if (cached) {
      return { success: true, data: cached };
    }

    const result = await this.makeRequest(API_ENDPOINTS.RESTAURANTS.SLIDERS, {
      params
    });

    if (result.success) {
      this.setCache(cacheKey, result.data);
    }

    return result;
  }
}

// Cart Service
export class CartService extends DataService {
  async getCart() {
    return this.makeRequest(API_ENDPOINTS.CART.INDEX);
  }

  async addToCart(cartData) {
    const result = await this.makeRequest(API_ENDPOINTS.CART.STORE, {
      method: 'POST',
      data: cartData
    });

    if (result.success) {
      this.clearCache();
    }

    return result;
  }
}

// Orders Service
export class OrdersService extends DataService {
  async getOrders() {
    return this.makeRequest(API_ENDPOINTS.ORDERS.INDEX);
  }

  async createOrder(orderData) {
    return this.makeRequest(API_ENDPOINTS.ORDERS.STORE, {
      method: 'POST',
      data: orderData
    });
  }
}

// Create service instances
export const authService = new AuthService();
export const categoriesService = new CategoriesService();
export const productsService = new ProductsService();
export const restaurantsService = new RestaurantsService();
export const cartService = new CartService();
export const ordersService = new OrdersService();

// Export default services object for easy importing
export default {
  auth: authService,
  categories: categoriesService,
  products: productsService,
  restaurants: restaurantsService,
  cart: cartService,
  orders: ordersService
};
