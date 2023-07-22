import Input from "../../components/Input/Input";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import WeatherForecast from "../../components/WeatherForecast/WeatherForecast";
import classNames from "classnames/bind";
import styles from "./home.module.scss";
import { AppDispatch } from "../../redux/store";
import { useEffect, useState } from "react";
import { getWeathers } from "../../redux/weather/weather.slice";
import { useDispatch } from "react-redux";

const cx = classNames.bind(styles);

const Home = () => {
  const dispatch = useDispatch();
  const daysOfWeek: string[] = [
    "Chủ nhật",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    (dispatch as AppDispatch)(getWeathers(`ha noi`));
  }, [dispatch]);

  const handleSearch = ({ cityName }: any) => {
    (dispatch as AppDispatch)(getWeathers(`${cityName}`));
  };
  return (
    <div className={cx("container")}>
      <div className={cx("title")}>WEATHER APP</div>
      <main className={cx("main_content")}>
        <section className={cx("content")}>
          <article className={cx("content_item")}>
            <Input onSearch={handleSearch} />
          </article>
          <article className={cx("content_item")}>
            <CurrentWeather daysOfWeek={daysOfWeek} />
          </article>
          <article className={cx("content_item")}>
            <WeatherForecast daysOfWeek={daysOfWeek} />
          </article>
        </section>
      </main>
    </div>
  );
};

export default Home;
