import classNames from "classnames/bind";
import styles from "./Forecast.module.scss";
import { ForecastDay } from "../../type/weather.type";
import { useSelector } from "react-redux";
import { WeatherStore } from "../../redux/store";

const cx = classNames.bind(styles);

interface IProps {
  daysOfWeek: string[];
}

const WeatherForecast = ({ daysOfWeek }: IProps) => {
  const weatherData = useSelector((state: WeatherStore) => state.weathers);
  return (
    <section className={cx("weather_forecast")}>
      <div className={cx("title")}>Forecast</div>
      <section className={cx("forecast_content")}>
        {weatherData.forecast.forecastday.map((forecastday: ForecastDay) => {
          const date = new Date(forecastday.date);
          const dayOfWeek = date.getDay();
          return (
            <article
              key={forecastday.date_epoch}
              className={cx("forecast_item")}
            >
              <div className={cx("day")}>{daysOfWeek[dayOfWeek]}</div>
              <div className={cx("icon")}>
                <img src={`https:${forecastday.day.condition.icon}`} alt="" />
              </div>
              <div className={cx("temperature")}>
                {forecastday.day.mintemp_c}°C - {forecastday.day.maxtemp_c}°C
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default WeatherForecast;
