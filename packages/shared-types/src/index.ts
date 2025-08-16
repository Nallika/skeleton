export interface User {
  id: string;
  email: string;
}
export type AuthData = {
  email: string;
  password: string;
};

// API types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
}

// Auth response types
export interface LoginResponse {
  email: string;
}

export interface RegisterResponse {
  email: string;
}
