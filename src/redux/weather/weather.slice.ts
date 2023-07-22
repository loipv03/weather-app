import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getWeather } from "../../api/weather";
import { Current, Forecast, Location } from "../../type/weather.type";

interface WeatherData {
  location: Location;
  current: Current;
  forecast: Forecast;
  search?: string;
}

const initialState: WeatherData = {
  location: {
    name: "",
    region: "",
    country: "",
    lat: 0,
    lon: 0,
    tz_id: "",
    localtime_epoch: 0,
    localtime: "",
  },
  current: {
    last_updated_epoch: 0,
    last_updated: "",
    temp_c: 0,
    temp_f: 0,
    is_day: 0,
    condition: {
      text: "",
      icon: "",
      code: 0,
    },
    wind_mph: 0,
    wind_kph: 0,
    wind_degree: 0,
    wind_dir: "",
    pressure_mb: 0,
    pressure_in: 0,
    precip_mm: 0,
    precip_in: 0,
    humidity: 0,
    cloud: 0,
    feelslike_c: 0,
    feelslike_f: 0,
    vis_km: 0,
    vis_miles: 0,
    uv: 0,
    gust_mph: 0,
    gust_kph: 0,
  },
  forecast: {
    forecastday: [],
  },
  search: "",
};

export const getWeathers = createAsyncThunk(
  "weather/getData",
  async (action: PayloadAction<string>["payload"]) => {
    try {
      const { data } = await getWeather(action);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getWeathers.fulfilled, (state, action) => {
      state.location = action.payload.location;
      state.current = action.payload.current;
      state.forecast = action.payload.forecast;
    });
  },
});

export default weatherSlice.reducer;
