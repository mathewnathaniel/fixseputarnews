import axios from "axios";

const API_KEY = "pub_7a61bb5d41f8450c9bb965751b9a8e56"; 
const BASE_URL = "https://newsdata.io/api/1";

// axios instance
const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
    country: "id",
    language: "id",
  },
});

// service function
export const getNews = async (category = "top") => {
  try {
    const response = await apiClient.get("/news", {
      params: { category },
    });

    return response.data; // ⬅ return data bersih
  } catch (error) {
    console.error("Error getNews:", error);
    return { results: [] };
  }
};
