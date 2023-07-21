import classNames from "classnames/bind";
import styles from "./Forecast.module.scss";
import { ForecastDay, WeatherData } from "../../type/weather.type";

const cx = classNames.bind(styles);

interface IProps {
  daysOfWeek: string[];
  weathers: WeatherData;
}

const WeatherForecast = ({ weathers, daysOfWeek }: IProps) => {
  return (
    <section className={cx("weather_forecast")}>
      <div className={cx("title")}>Forecast</div>
      <section className={cx("forecast_content")}>
        {weathers.forecast.forecastday.map((forecastday: ForecastDay) => {
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
