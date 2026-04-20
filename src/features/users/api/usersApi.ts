import { api } from "@/api/client";

export const getUsers = async () => {
  const response = await api.get("/api/users");
  return response.data;
};