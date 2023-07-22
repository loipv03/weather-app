import instance from "./instance";

export const getWeather = (cityName: string) => {
  return instance.get(`${cityName}`);
};
