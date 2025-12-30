// Professional Data Service for TermBi Application
// Comprehensive API integration based on Postman collection
// Features: Caching, Error Handling, Type Safety, Performance Optimization

import { api } from './api.js';

// Configuration
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

// API Endpoints Configuration (from Postman collection)
export const ENDPOINTS = {
  // Authentication
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

  // Categories
  CATEGORIES: {
    INDEX: '/categories',
    SHOW: (id) => `/categories/${id}`
  },

  // Products
  PRODUCTS: {
    INDEX: '/products',
    SHOW: (id) => `/products/${id}`
  },

  // Restaurants
  RESTAURANTS: {
    SETTINGS: '/restaurants/settings',
    WORKING_HOURS: '/restaurant-working-hours',
    SLIDERS: '/sliders',
    TABLES: '/restaurant-tables'
  },

  // Reservations
  RESERVATIONS: {
    INDEX: '/reservations',
    STORE: '/reservations'
  },

  // Cart
  CART: {
    INDEX: '/carts',
    STORE: '/carts',
    UPDATE: (id) => `/carts/${id}`,
    DELETE: (id) => `/carts/${id}`
  },

  // Orders
  ORDERS: {
    INDEX: '/orders',
    SHOW: (id) => `/orders/${id}`,
    STORE: '/orders',
    CALCULATE_DELIVERY: '/calculate-delivery'
  },

  // Coupons
  COUPONS: {
    INDEX: '/coupons',
    CHECK: '/coupons/check'
  },

  // Event Types
  EVENT_TYPES: {
    INDEX: '/event-types'
  }
};

// Base Service Class with common functionality
class BaseService {
  constructor() {
    this.cache = new Map();
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
    if (cached && (Date.now() - cached.timestamp) < CACHE_DURATION) {
      return cached.data;
    }
    this.cache.delete(key);
    return null;
  }

  clearCache() {
    this.cache.clear();
  }

  // Retry mechanism
  async retryRequest(requestFn, retries = MAX_RETRIES) {
    for (let i = 0; i < retries; i++) {
      try {
        return await requestFn();
      } catch (error) {
        if (i === retries - 1) throw error;
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * (i + 1)));
      }
    }
  }

  // Standardized API request
  async makeRequest(endpoint, options = {}) {
    const requestFn = async () => {
      const response = await api.request({
        url: endpoint,
        method: options.method || 'GET',
        data: options.data,
        params: options.params,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Accept-Language': 'ar',
          ...(options.headers || {})
        }
      });

      return {
        success: true,
        data: response.data,
        status: response.status,
        message: response.data?.message || 'Success'
      };
    };

    try {
      return await this.retryRequest(requestFn);
    } catch (error) {
      console.error(`API Error [${endpoint}]:`, error);

      return {
        success: false,
        error: error.response?.data?.message || error.message || 'Unknown error',
        status: error.response?.status || 500,
        data: null
      };
    }
  }

  // Authentication headers helper
  getAuthHeaders() {
    const token = localStorage.getItem('auth_token');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  }
}

// Authentication Service
export class AuthService extends BaseService {
  async login(credentials) {
    const result = await this.makeRequest(ENDPOINTS.AUTH.LOGIN, {
      method: 'POST',
      data: credentials
    });

    if (result.success && result.data?.data?.token) {
      localStorage.setItem('auth_token', result.data.data.token);
    }

    return result;
  }

  async googleLogin(credentials) {
    return this.makeRequest(ENDPOINTS.AUTH.GOOGLE_LOGIN, {
      method: 'POST',
      data: credentials
    });
  }

  async logout() {
    const result = await this.makeRequest(ENDPOINTS.AUTH.LOGOUT);
    if (result.success) {
      localStorage.removeItem('auth_token');
      this.clearCache();
    }
    return result;
  }

  async getProfile() {
    const cacheKey = 'user_profile';
    const cached = this.getCache(cacheKey);

    if (cached) {
      return { success: true, data: cached };
    }

    const result = await this.makeRequest(ENDPOINTS.AUTH.PROFILE);

    if (result.success) {
      this.setCache(cacheKey, result.data);
    }

    return result;
  }

  async register(userData) {
    return this.makeRequest(ENDPOINTS.AUTH.REGISTER, {
      method: 'POST',
      data: userData
    });
  }

  async verifyEmail(email, code) {
    return this.makeRequest(ENDPOINTS.AUTH.VERIFY_EMAIL, {
      method: 'POST',
      data: { email, code }
    });
  }

  async resendVerificationCode(email) {
    return this.makeRequest(ENDPOINTS.AUTH.RESEND_VERIFICATION, {
      method: 'GET',
      params: { email }
    });
  }

  async updateProfile(profileData) {
    const result = await this.makeRequest(ENDPOINTS.AUTH.UPDATE_PROFILE, {
      method: 'POST',
      data: profileData
    });

    if (result.success) {
      this.clearCache(); // Clear profile cache
    }

    return result;
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  isAuthenticated() {
    return !!this.getToken();
  }
}

// Categories Service
export class CategoriesService extends BaseService {
  async getCategories(params = {}) {
    const cacheKey = `categories_${JSON.stringify(params)}`;
    const cached = this.getCache(cacheKey);

    if (cached) {
      return { success: true, data: cached };
    }

    const result = await this.makeRequest(ENDPOINTS.CATEGORIES.INDEX, { params });

    if (result.success) {
      this.setCache(cacheKey, result.data);
    }

    return result;
  }

  async getCategory(id, params = {}) {
    const cacheKey = `category_${id}_${JSON.stringify(params)}`;
    const cached = this.getCache(cacheKey);

    if (cached) {
      return { success: true, data: cached };
    }

    const result = await this.makeRequest(ENDPOINTS.CATEGORIES.SHOW(id), { params });

    if (result.success) {
      this.setCache(cacheKey, result.data);
    }

    return result;
  }
}

// Products Service
export class ProductsService extends BaseService {
  async getProducts(params = {}) {
    const cacheKey = `products_${JSON.stringify(params)}`;
    const cached = this.getCache(cacheKey);

    if (cached) {
      return { success: true, data: cached };
    }

    const result = await this.makeRequest(ENDPOINTS.PRODUCTS.INDEX, { params });

    if (result.success) {
      this.setCache(cacheKey, result.data);
    }

    return result;
  }

  async getProduct(id) {
    const cacheKey = `product_${id}`;
    const cached = this.getCache(cacheKey);

    if (cached) {
      return { success: true, data: cached };
    }

    const result = await this.makeRequest(ENDPOINTS.PRODUCTS.SHOW(id));

    if (result.success) {
      this.setCache(cacheKey, result.data);
    }

    return result;
  }
}

// Restaurants Service
export class RestaurantsService extends BaseService {
  async getSettings(params = {}) {
    const cacheKey = `restaurant_settings_${JSON.stringify(params)}`;
    const cached = this.getCache(cacheKey);

    if (cached) {
      return { success: true, data: cached };
    }

    const result = await this.makeRequest(ENDPOINTS.RESTAURANTS.SETTINGS, { params });

    if (result.success) {
      this.setCache(cacheKey, result.data);
    }

    return result;
  }

  async getWorkingHours(params = {}) {
    const cacheKey = `working_hours_${JSON.stringify(params)}`;
    const cached = this.getCache(cacheKey);

    if (cached) {
      return { success: true, data: cached };
    }

    const result = await this.makeRequest(ENDPOINTS.RESTAURANTS.WORKING_HOURS, { params });

    if (result.success) {
      this.setCache(cacheKey, result.data);
    }

    return result;
  }

  async getSliders(params = {}) {
    const cacheKey = `sliders_${JSON.stringify(params)}`;
    const cached = this.getCache(cacheKey);

    if (cached) {
      return { success: true, data: cached };
    }

    const result = await this.makeRequest(ENDPOINTS.RESTAURANTS.SLIDERS, { params });

    if (result.success) {
      this.setCache(cacheKey, result.data);
    }

    return result;
  }

  async getTables(params = {}) {
    const result = await this.makeRequest(ENDPOINTS.RESTAURANTS.TABLES, { params });
    return result;
  }

  // Combined method to get all restaurant data
  async getCompleteRestaurantData(params = {}) {
    try {
      const [settings, workingHours, sliders, tables] = await Promise.all([
        this.getSettings(params),
        this.getWorkingHours(params),
        this.getSliders(params),
        this.getTables(params)
      ]);

      return {
        success: true,
        data: {
          settings: settings.success ? settings.data : null,
          workingHours: workingHours.success ? workingHours.data : null,
          sliders: sliders.success ? sliders.data : null,
          tables: tables.success ? tables.data : null
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        data: null
      };
    }
  }
}

// Cart Service
export class CartService extends BaseService {
  async getCart() {
    return this.makeRequest(ENDPOINTS.CART.INDEX, {
      headers: this.getAuthHeaders()
    });
  }

  async addToCart(cartData) {
    const result = await this.makeRequest(ENDPOINTS.CART.STORE, {
      method: 'POST',
      data: cartData,
      headers: this.getAuthHeaders()
    });

    if (result.success) {
      this.clearCache();
    }

    return result;
  }

  async updateCartItem(id, cartData) {
    const result = await this.makeRequest(ENDPOINTS.CART.UPDATE(id), {
      method: 'PUT',
      data: cartData,
      headers: this.getAuthHeaders()
    });

    if (result.success) {
      this.clearCache();
    }

    return result;
  }

  async removeFromCart(id) {
    const result = await this.makeRequest(ENDPOINTS.CART.DELETE(id), {
      method: 'DELETE',
      headers: this.getAuthHeaders()
    });

    if (result.success) {
      this.clearCache();
    }

    return result;
  }
}

// Orders Service
export class OrdersService extends BaseService {
  async getOrders() {
    return this.makeRequest(ENDPOINTS.ORDERS.INDEX, {
      headers: this.getAuthHeaders()
    });
  }

  async getOrder(id) {
    const cacheKey = `order_${id}`;
    const cached = this.getCache(cacheKey);

    if (cached) {
      return { success: true, data: cached };
    }

    const result = await this.makeRequest(ENDPOINTS.ORDERS.SHOW(id), {
      headers: this.getAuthHeaders()
    });

    if (result.success) {
      this.setCache(cacheKey, result.data);
    }

    return result;
  }

  async createOrder(orderData) {
    return this.makeRequest(ENDPOINTS.ORDERS.STORE, {
      method: 'POST',
      data: orderData,
      headers: this.getAuthHeaders()
    });
  }

  async calculateDelivery(deliveryData) {
    return this.makeRequest(ENDPOINTS.ORDERS.CALCULATE_DELIVERY, {
      method: 'POST',
      data: deliveryData
    });
  }
}

// Coupons Service
export class CouponsService extends BaseService {
  async getCoupons(params = {}) {
    return this.makeRequest(ENDPOINTS.COUPONS.INDEX, {
      params,
      headers: this.getAuthHeaders()
    });
  }

  async checkCoupon(couponData) {
    return this.makeRequest(ENDPOINTS.COUPONS.CHECK, {
      method: 'POST',
      data: couponData,
      headers: this.getAuthHeaders()
    });
  }
}

// Reservations Service
export class ReservationsService extends BaseService {
  async getReservations(params = {}) {
    return this.makeRequest(ENDPOINTS.RESERVATIONS.INDEX, {
      params,
      headers: this.getAuthHeaders()
    });
  }

  async createReservation(reservationData) {
    return this.makeRequest(ENDPOINTS.RESERVATIONS.STORE, {
      method: 'POST',
      data: reservationData,
      headers: this.getAuthHeaders()
    });
  }
}

// Event Types Service
export class EventTypesService extends BaseService {
  async getEventTypes() {
    const cacheKey = 'event_types';
    const cached = this.getCache(cacheKey);

    if (cached) {
      return { success: true, data: cached };
    }

    const result = await this.makeRequest(ENDPOINTS.EVENT_TYPES.INDEX);

    if (result.success) {
      this.setCache(cacheKey, result.data);
    }

    return result;
  }
}

// Create service instances
export const authService = new AuthService();
export const categoriesService = new CategoriesService();
export const productsService = new ProductsService();
export const restaurantsService = new RestaurantsService();
export const cartService = new CartService();
export const ordersService = new OrdersService();
export const couponsService = new CouponsService();
export const reservationsService = new ReservationsService();
export const eventTypesService = new EventTypesService();

// Main Data Service - Facade pattern for easy access
export class TermBiDataService {
  constructor() {
    this.services = {
      auth: authService,
      categories: categoriesService,
      products: productsService,
      restaurants: restaurantsService,
      cart: cartService,
      orders: ordersService,
      coupons: couponsService,
      reservations: reservationsService,
      eventTypes: eventTypesService
    };
  }

  // Authentication methods
  get auth() { return this.services.auth; }

  // Business data methods
  get categories() { return this.services.categories; }
  get products() { return this.services.products; }
  get restaurants() { return this.services.restaurants; }

  // User-specific methods
  get cart() { return this.services.cart; }
  get orders() { return this.services.orders; }
  get reservations() { return this.services.reservations; }
  get coupons() { return this.services.coupons; }

  // Utility methods
  get eventTypes() { return this.services.eventTypes; }

  // Clear all caches
  clearAllCaches() {
    Object.values(this.services).forEach(service => {
      if (service.clearCache) {
        service.clearCache();
      }
    });
  }

  // Get user authentication status
  get isAuthenticated() {
    return this.services.auth.isAuthenticated();
  }

  // Get user token
  get token() {
    return this.services.auth.getToken();
  }
}

// Export singleton instance
export const termBiDataService = new TermBiDataService();

// Default export for convenience
export default termBiDataService;
