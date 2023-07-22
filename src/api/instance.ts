import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://api.weatherapi.com/v1/forecast.json?key=053bf66f97cd456c910120633232007&days=7&q=",
});

export default instance;
