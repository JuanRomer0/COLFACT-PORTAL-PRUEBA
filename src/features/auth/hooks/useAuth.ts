import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "../api/authApi";
import type { LoginRequest } from "@/types/auth";

export const useAuth = () => {
  const mutation = useMutation({
    mutationFn: (data: LoginRequest) => loginRequest(data),
  });

  const login = (data: LoginRequest, options?: any) => {
    mutation.mutate(data, {
      onSuccess: (res) => {
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);

        options?.onSuccess?.(res);
      },
    });
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return {
    login,
    logout,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};