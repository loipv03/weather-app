import { AiOutlineSearch } from "react-icons/ai";
import { useForm } from "react-hook-form";
import classNames from "classnames/bind";
import styles from "./input.module.scss";

const cx = classNames.bind(styles);

interface IProps {
  onSearch: (cityName: string) => void;
}

const Input = (props: IProps) => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data: any) => props.onSearch(data);

  return (
    <>
      <form className={cx("form_search")} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Ha Noi..." {...register("cityName")} />
        <button type="submit">
          <span className={cx("icon_search")}>
            <AiOutlineSearch />
          </span>
        </button>
      </form>
    </>
  );
};

export default Input;
