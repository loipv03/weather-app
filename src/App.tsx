import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import "./index.scss";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
