export interface LoginRequest {
  userName: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  role: string;
  fullName: string;
}