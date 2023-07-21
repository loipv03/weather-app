import instance from "./instance";

export const getWeather = () => {
  return instance.get("");
};
