/* eslint-disable @typescript-eslint/no-explicit-any */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://apitest.softvencefsd.xyz/api';

export interface RegisterData {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    terms: boolean;
}

export interface LoginData {
    email: string;
    password: string;
    remember_me?: boolean;
}

export interface ApiResponse {
    success?: boolean;
    status?: number | boolean;
    message: string;
    token_type?: string;
    token?: string;
    data?: {
        otp?: string;
        email?: string;
    };
    errors?: Record<string, string[]>;
}

export const authApi = {
    async register(data: RegisterData): Promise<ApiResponse> {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value.toString());
        });

        try {
            const response = await fetch(`${API_BASE_URL}/register`, {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            return {
                success: result.status >= 200 && result.status < 300,
                status: result.status,
                message: result.message,
                data: result.data
            };
        } catch (error) {
            return {
                success: false,
                message: 'Network error occurred',
            };
        }
    },

    async login(data: LoginData): Promise<ApiResponse> {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (value !== undefined) {
                formData.append(key, value.toString());
            }
        });

        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            // Ensure consistent response format
            return {
                status: result.status,
                success: result.status, // Map status to success for consistency
                message: result.message,
                token_type: result.token_type,
                token: result.token,
                data: result.data
            };
        } catch (error) {
            return {
                status: false,
                success: false,
                message: 'Network error occurred',
            };
        }
    },

    async verifyEmail(data: { email: string; otp: string }): Promise<ApiResponse> {
        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('otp', data.otp);

        try {
            const response = await fetch(`${API_BASE_URL}/verify_otp`, {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            // Map the API response to our expected format
            return {
                status: result.status, // This is the main success indicator
                success: result.status, // Also map to success for consistency
                message: result.message,
                token_type: result.token_type,
                token: result.token,
                data: result.data
            };
        } catch (error) {
            return {
                status: false,
                success: false,
                message: 'Network error occurred',
            };
        }
    },

    async resendOtp(email: string): Promise<ApiResponse> {
        const formData = new FormData();
        formData.append('email', email);

        try {
            const response = await fetch(`${API_BASE_URL}/resend_otp`, {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            return {
                success: result.status >= 200 && result.status < 300,
                status: result.status,
                message: result.message,
                data: result.data
            };
        } catch (error) {
            return {
                success: false,
                message: 'Network error occurred',
            };
        }
    },

    async forgotPassword(email: string): Promise<ApiResponse> {
        const formData = new FormData();
        formData.append('email', email);

        try {
            const response = await fetch(`${API_BASE_URL}/forgot-password`, {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            return {
                status: result.status,
                success: result.status,
                message: result.message,
                data: result.data // This should contain the OTP
            };
        } catch (error) {
            return {
                status: false,
                success: false,
                message: 'Network error occurred',
            };
        }
    },

    async verifyPasswordResetOtp(data: { email: string; otp: string }): Promise<ApiResponse> {
  const formData = new FormData();
  formData.append('email', data.email);
  formData.append('otp', data.otp);

  try {
    const response = await fetch(`${API_BASE_URL}/forgot-verify-otp`, {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    console.log("API raw response:", result); // Debug log
    
    return {
      status: result.status,
      success: result.status,
      message: result.message,
      token: result.data?.token || result.token, // Safe access
      data: result.data
    };
  } catch (error) {
    return {
      status: false,
      success: false,
      message: 'Network error occurred',
    };
  }
},

    async resetPassword(data: {
        email: string;
        token: string;
        password: string;
        password_confirmation: string;
    }): Promise<ApiResponse> {
        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('token', data.token);
        formData.append('password', data.password);
        formData.append('password_confirmation', data.password_confirmation);

        try {
            const response = await fetch(`${API_BASE_URL}/reset-password`, {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            return {
                status: result.status,
                success: result.status,
                message: result.message,
                data: result.data
            };
        } catch (error) {
            return {
                status: false,
                success: false,
                message: 'Network error occurred',
            };
        }
    },
};