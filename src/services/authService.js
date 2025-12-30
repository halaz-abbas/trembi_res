import { apiCall, API_ENDPOINTS } from "./api.js";

export const authService = {
  // Login user
  login: async (email, password) => {
    const response = await apiCall(API_ENDPOINTS.LOGIN, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.data?.token) {
      localStorage.setItem("auth_token", response.data.token);
      localStorage.setItem("user_data", JSON.stringify(response.data.user));
    }

    return response;
  },

  // Google login
  googleLogin: async (credentials, clientId) => {
    return await apiCall(API_ENDPOINTS.GOOGLE_LOGIN, {
      method: "POST",
      body: JSON.stringify({
        credentials,
        client_id: clientId,
      }),
    });
  },

  // Logout user
  logout: async () => {
    try {
      await apiCall(API_ENDPOINTS.LOGOUT, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      });
    } finally {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user_data");
    }
  },

  // Get user profile
  getProfile: async () => {
    return await apiCall(API_ENDPOINTS.PROFILE, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
  },

  // Register user
  register: async (userData) => {
    const formData = new FormData();
    formData.append("first_name", userData.first_name);
    formData.append("last_name", userData.last_name);
    formData.append("email", userData.email);
    formData.append("phone", userData.phone);
    formData.append("password", userData.password);
    formData.append("password_confirmation", userData.password_confirmation);
    if (userData.profile) {
      formData.append("profile", userData.profile);
    }

    return await apiCall(API_ENDPOINTS.REGISTER, {
      method: "POST",
      body: formData,
      headers: {
        // Don't set Content-Type for FormData, let browser set it
      },
    });
  },

  // Resend verification code
  resendVerificationCode: async (email) => {
    return await apiCall(API_ENDPOINTS.RESEND_VERIFICATION(email), {
      method: "GET",
    });
  },

  // Verify email
  verifyEmail: async (email, code) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("code", code);

    return await apiCall(API_ENDPOINTS.VERIFY_EMAIL, {
      method: "POST",
      body: formData,
    });
  },

  // Update customer profile
  updateProfile: async (userData) => {
    const formData = new FormData();
    formData.append("first_name", userData.first_name);
    formData.append("last_name", userData.last_name);
    if (userData.password) {
      formData.append("password", userData.password);
      formData.append("password_confirmation", userData.password_confirmation);
    }
    if (userData.profile) {
      formData.append("profile", userData.profile);
    }

    return await apiCall(API_ENDPOINTS.UPDATE_PROFILE, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
  },

  // Get current user
  getCurrentUser: () => {
    const userData = localStorage.getItem("user_data");
    return userData ? JSON.parse(userData) : null;
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem("auth_token");
  },

  // Get auth token
  getToken: () => {
    return localStorage.getItem("auth_token");
  },
};
