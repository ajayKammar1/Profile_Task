import api from "./api";

export const getAllTestmonils = async () => {
  try {
    const response = await api.get("/testmonial");
    return response.data;
  } catch (err) {
    throw new Error("Failed to fetch testimonils");
  }
};
