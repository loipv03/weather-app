import Input from "../../components/Input/Input";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import WeatherForecast from "../../components/WeatherForecast/WeatherForecast";
import classNames from "classnames/bind";
import styles from "./home.module.scss";
import { AppDispatch, WeatherStore } from "../../redux/store";
import { useEffect } from "react";
import { getWeathers } from "../../redux/weather/weather.slice";
import { useDispatch, useSelector } from "react-redux";

const cx = classNames.bind(styles);

const Home = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: WeatherStore) => state.weathers);

  const daysOfWeek: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    void (dispatch as AppDispatch)(getWeathers());
  }, []);
  return (
    <>
      <div className={cx("container")}>
        <div className={cx("title")}>WEATHER APP</div>
        <main className={cx("main_content")}>
          <section className={cx("content")}>
            <article className={cx("content_item")}>
              <Input />
            </article>
            <article className={cx("content_item")}>
              <CurrentWeather weathers={weatherData} daysOfWeek={daysOfWeek} />
            </article>
            <article className={cx("content_item")}>
              <WeatherForecast weathers={weatherData} daysOfWeek={daysOfWeek} />
            </article>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
