import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.coinranking.com/v2",
  headers: {
    "x-rapidapi-key": process.env.API_KEY,
  },
});

export default instance;
