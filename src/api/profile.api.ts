import api from "./axios";

/* Get main portfolio profile */
export const getProfile = async () => {
  const response = await api.get("/profiles/me");

  return response.data;
};

/* Get all profiles */
export const getProfiles = async () => {
  const response = await api.get("/profiles");

  return response.data;
};

/* Get profile by ID */
export const getProfileById = async (id: number) => {
  const response = await api.get(`/profiles/${id}`);

  return response.data;
};
