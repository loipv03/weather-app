import classNames from "classnames/bind";
import styles from "./currentWeather.module.scss";
import { useSelector } from "react-redux";
import { WeatherStore } from "../../redux/store";

const cx = classNames.bind(styles);

interface IProps {
  daysOfWeek: string[];
}

const CurrentWeather = ({ daysOfWeek }: IProps) => {
  const weatherData = useSelector((state: WeatherStore) => state.weathers);
  const date = new Date(weatherData.location.localtime);
  const dayOfWeek = date.getDay();

  return (
    <section className={cx("cur_weather")}>
      <div className={cx("name_city")}>
        {weatherData.location.name}, {weatherData.location.country}
      </div>
      <div className={cx("day")}>
        {daysOfWeek[dayOfWeek]}
        <br />
        <span>{weatherData.location.localtime}</span>
      </div>
      <article className={cx("weather_content")}>
        <div className={cx("weather_content_item_left")}>
          <div className={cx("icon")}>
            <img src={`https:${weatherData.current.condition.icon}`} alt="" />
          </div>
          <div className={cx("condition")}>
            <div className={cx("temperature")}>
              {weatherData.current.temp_c}°C
            </div>
            <div className={cx("status")}>
              {weatherData.current.condition.text}
            </div>
          </div>
        </div>
        <div className={cx("weather_content_item_right")}>
          <div className={cx("uv")}>
            <div className={cx("desc")}>chỉ số tia cực tím</div>
            <div className={cx("value")}>{weatherData.current.uv}</div>
          </div>
          <div className={cx("vis_km")}>
            <div className={cx("desc")}>tầm nhìn xa</div>
            <div className={cx("value")}>{weatherData.current.vis_km}Km</div>
          </div>
          <div className={cx("cloud")}>
            <div className={cx("desc")}>độ che phủ mây</div>
            <div className={cx("value")}>{weatherData.current.cloud}</div>
          </div>
          <div className={cx("humidity")}>
            <div className={cx("desc")}>độ ẩm</div>
            <div className={cx("value")}>{weatherData.current.humidity}%</div>
          </div>
          <div className={cx("precip_mm")}>
            <div className={cx("desc")}>lượng mưa</div>
            <div className={cx("value")}>{weatherData.current.precip_mm}mm</div>
          </div>
          <div className={cx("wind_kph")}>
            <div className={cx("desc")}>tốc độ gió</div>
            <div className={cx("value")}>{weatherData.current.wind_kph}Km</div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CurrentWeather;
