import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import "./index.scss";
import { useEffect, useState } from "react";
import { getWeather } from "./api/weather";
import store from "./redux/store";

function App() {
  const [weather, setWeather] = useState();
  useEffect(() => {
    getWeather().then(({ data }) => setWeather(data));
  }, []);
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
