import { AiOutlineSearch } from "react-icons/ai";
import classNames from "classnames/bind";
import styles from "./input.module.scss";

const cx = classNames.bind(styles);

const Input = () => {
  return (
    <>
      <form className={cx("form_search")}>
        <input type="text" placeholder="Ha Noi..." />
        <span className={cx("icon_search")}>
          <AiOutlineSearch />
        </span>
      </form>
    </>
  );
};

export default Input;
