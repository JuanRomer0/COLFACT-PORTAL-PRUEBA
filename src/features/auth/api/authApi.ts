import type { LoginRequest, LoginResponse } from "@/types/auth";
import { delay } from "@/utils/delay";

export const loginRequest = async (
  data: LoginRequest
): Promise<LoginResponse> => {
  await delay(800);

  // validación fake
  if (data.userName !== "admin" || data.password !== "1234") {
    throw new Error("Credenciales inválidas");
  }

  return {
    accessToken: "fake-access-token",
    refreshToken: "fake-refresh-token",
    role: "admin",
    fullName: "Admin User",
  };
};