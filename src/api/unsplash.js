import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID Vr20ep10WnUJBKMMDTSJFvy7--qosD2lCcdOTiGw8zg",
  },
});
