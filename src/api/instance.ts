import axios from "axios";

const instance = axios.create({
  baseURL:
    "http://api.weatherapi.com/v1/forecast.json?key=053bf66f97cd456c910120633232007&q=Ha Noi&days=7",
});

export default instance;
