import axios from "axios";
import { locationUrl } from "../constants";

const API_KEY = import.meta.env.VITE_API_KEY;

const getCoordinates = async (city: string) => {
  const promise = await axios(
    locationUrl + `&${city}&format=json&apiKey=` + API_KEY
  );
  console.log(promise.data);
  return promise.data;
};

export { getCoordinates };