import axios from "axios";

export default axios.create({
  baseURL: "https://high-end.onrender.com",

  headers: { "Content-Type": "application/json" },
});
