import axios from "./axios.js";

export const getDestinos = async () => {
  try {
    const response = await axios.get("/destino/getdestinos");
    return response.data;
  } catch (error) {
    console.log("No se pudo acceder a los destinos", error);
    throw error;
  }
};