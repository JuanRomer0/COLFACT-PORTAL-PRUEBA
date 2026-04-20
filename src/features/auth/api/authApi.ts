import { api } from "@/api/client";
import type { LoginRequest, LoginResponse } from "@/types/auth";

export const loginRequest = async (
  data: LoginRequest
): Promise<LoginResponse> => {
  const response = await api.post("/auth/login", data);
  return response.data;
};