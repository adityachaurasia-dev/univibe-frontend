import axios from "axios";

let instance = axios.create({
  baseURL: "https://univibe-backend-a27m.onrender.com",
});

export default instance;
