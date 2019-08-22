import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID YOUR_UNSPLASH_API_KEY_HERE"
  }
});
