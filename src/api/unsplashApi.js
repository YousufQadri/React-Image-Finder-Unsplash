import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 37df54ff582bca42c91d85f16011399d5a9214cb45868818989b33513741ff9a"
  }
});
