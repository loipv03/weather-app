import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weather/weather.slice";
const store = configureStore({
  reducer: {
    weathers: weatherSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type WeatherStore = ReturnType<typeof store.getState>;

export default store;
