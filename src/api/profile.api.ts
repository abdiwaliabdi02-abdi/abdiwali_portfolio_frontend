import api from "./axios";

export const getProfile = async (id: number) => {
  const response = await api.get(`/profiles/${id}`);
  return response.data;
};
